import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    age: Number,
    gender: String,
    dob: Date,
    phone: Number,
    imageURL: {
        type: String,
        default: "https://bootdey.com/img/Content/avatar/avatar7.png"
    }
})


const userModel = new mongoose.model("user", userSchema);


export default userModel