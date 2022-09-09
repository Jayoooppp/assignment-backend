import userModel from "../Model/auth.js";
import bcrypt from "bcrypt"

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email })
        if (user) {
            const isCorrect = await bcrypt.compare(password, user.password);
            if (isCorrect) {
                return res.status(203).json(user)
            } else {
                return res.status(403).json({ message: "Wrong password" })
            }

        } else {
            return res.status(402).json({ message: "Account with this email does not exist" })

        }

    } catch (error) {
        return res.status(403).json(error)

    }


}

export const signupController = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await userModel.findOne({ email: email })
        if (user) {
            return res.status(403).json({ message: "Email is already registered" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userObject = await userModel({ firstName, lastName, email, password: hashedPassword });
        await userObject.save((error) => {
            if (!error) {
                return res.status(203).json(userObject)

            }
        });




    } catch (error) {

        return res.status(403).json(error)
    }

}