import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import parser from "body-parser"
import authRoutes from "./Routes/auth.js"
import cors from "cors"
import path from "path"
dotenv.config();
const app = express();
const __dirname = path.resolve();

app.use(express.json({ limit: '50mb' }));
app.use(parser.json({ limit: "30mb", extended: true }))
app.use(parser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use("/", authRoutes);
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});





const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO + "/loginsignupDB")
    .then(() => {
        app.listen(PORT, function () {
            console.log("Server started at ", PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })
