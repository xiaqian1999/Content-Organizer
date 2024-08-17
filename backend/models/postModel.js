import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type: String, required:true},
    application_url: {type: String, required:true},
    required_skill: {type: [String], required:true},
    optional_skill: {type: [String], required:false},
    salary_range: {type: Number, required:false},
    year_of_experience: {type: String, required:false},
    locations: {type:String, required: false},
    additional_note: {type:String, required: false},
    rate_interest: {type:Number, required: false}
})

const postModel = mongoose.models.post || mongoose.model("post", postSchema)

export default postModel