import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    value: {type: String, required: true},
    label: {type: String, required: true},
})

const skillModel = mongoose.model("skill", skillSchema)

export default skillModel