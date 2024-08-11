import postModel from "../models/postModel.js";

// Add post item function
const addPost = async (req, res) => {
    try {
        const { title, application_url, required_skill, optional_skill, salary_range, year_of_experience,locations, additional_note, rate_interest } = req.body;

        if (!required_skill || !Array.isArray(required_skill)){
            return res.status(400).send({error: "Skills must be an array of strings"})
        }

        const post = new postModel({
            title, application_url, required_skill, optional_skill, salary_range, year_of_experience,locations, additional_note, rate_interest
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

export {addPost, listPost}