import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    program_name: {type: String, required:true},
    program_link: {type: String, required:true},
    program_type: {type: String, required:true},
    application_deadline: {type: Date, required:false},
    major_related: {type: String, required:false},
    application_status: {type:String, required:true}
})

const eventModel = mongoose.models.event || mongoose.model("event", eventSchema)

export default eventModel