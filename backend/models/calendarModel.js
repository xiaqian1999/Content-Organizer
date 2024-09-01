import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
    daily_total_score: {type:Number, default: 0},
    date: {type:Date, default: Date.now, unique:true}
})

const calendarModel = mongoose.models.calendar || mongoose.model("calendar", calendarSchema);

export default calendarModel