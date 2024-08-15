import skillModel from "../models/skillModel.js";

//Get all the skill options
const listSkill = async (req, res) => {
    try {
        const skills = await skillModel.find();
        res.json({success:true, data: skills})
    }catch(error){
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}

//Add new skill option
const addSkill = async (req, res) => {
    try {
        const { value, label} = req.body;
        const skill = new skillModel({ value, label });
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}

export {listSkill, addSkill}