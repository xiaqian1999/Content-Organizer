import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, require: true},
    todoData: {type: Object, default:{}},
    joblistData: {type: Object, default:{}}
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
