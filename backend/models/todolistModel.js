import mongoose from "mongoose";

const todolistSchema = new mongoose.Schema({
    task: {type: String, required: true},
    // 1 is active, 0 is inactive, in frontend only display active one
    status: {type: Number, default: 1},
    date: {type: Date, default: Date.now}
})

const todolistModel = mongoose.models.todolist || mongoose.model("todolist", todolistSchema)

export default todolistModel