import mongoose from "mongoose";

const trackerlistSchema = new mongoose.Schema({
    task: {type:String, required:true},
    tracker_type: {type:String, required:true},
    score: {type:Number, default: 1},
    status: {type: Number, default: 1}
})

const trackerlistModel = mongoose.models.trackerlist || mongoose.model("trackerlist", trackerlistSchema)

export default trackerlistModel