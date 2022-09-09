import userModel from "../Model/auth.js";
import mongoose from "mongoose"
export const updateController = async (req, res) => {
    try {
        const id = req.params.id;
        var dob = new Date(req.body.dob);
        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);

        //extract year from date      
        var year = age_dt.getUTCFullYear();

        //now calculate the age of the user  
        var age = Math.abs(year - 1970);

        const user = { ...req.body, age };

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        const updatedUser = await userModel.findByIdAndUpdate(id, user, { new: true });
        return res.status(208).json(updatedUser)
    } catch (error) {
        return res.status(403).json(error)
    }

}
