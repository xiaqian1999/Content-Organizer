import postModel from "../models/postModel.js";

// Add post item function
const addPost = async (req, res) => {
    try {
        const { company_name, title, application_url, required_skill, optional_skill, salary_range, year_of_experience,locations, additional_note, rate_interest, application_status } = req.body;

        if (!required_skill || !Array.isArray(required_skill)){
            return res.status(400).send({error: "Skills must be an array of strings"})
        }

        // Ensure unique skills in the backend
        const uniqueRequiredSkills = [...new Set(required_skill)];
        const uniqueOptionalSkills = [...new Set(optional_skill)];

        const post = new postModel({
            company_name, title, application_url, required_skill:uniqueRequiredSkills, optional_skill:uniqueOptionalSkills, salary_range, year_of_experience,locations, additional_note, rate_interest, application_status
        })

        await post.save();
        res.json({success:true, message: "Post Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

const listPost = async (req, res) => {
    try {
        //using this model to fetch all the post item
        const posts = await postModel.find({});
        res.json({success:true, data:posts})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

const removePost = async (req, res) => {
    try {
        await postModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Post Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

const updateApplicationStatus = async(req, res) => {
    const { jobId, newStatus } = req.body;
    console.log("Jobid, newStatus", req.body);
    try {
        const updatedStatus = await postModel.findByIdAndUpdate(jobId, {application_status: newStatus});
        res.json(updatedStatus);
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to update the job application status."});
    }
}

//Future will need to have a function call when user drag the job box from one column to next, need to update the application_status in the table.

export {addPost, listPost, removePost, updateApplicationStatus}