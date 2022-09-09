import express from "express"
import { loginController, signupController } from "../Controller/auth.js"
import { updateController } from "../Controller/user.js"
const routes = express.Router();

routes.post("/login", loginController);
routes.post("/signup", signupController);
routes.post("/update/:id", updateController)

export default routes;