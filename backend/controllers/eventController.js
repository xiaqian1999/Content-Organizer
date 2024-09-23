import eventModel from "../models/eventModel.js";

const addEventItem = async (req, res) => {
    try {
        const { program_name, program_link, program_type, application_deadline, major_related, application_status} = req.body;
        // if(!major_related || !Array.isArray(major_related)){
        //     return res.status(400).send({error: "Major Array must be an array of items"})
        // }

        // const uniqueMajors = [...new Set(major_related)];
        const event = new eventModel({
            program_name, program_link, program_type, application_deadline, major_related, application_status
        })

        await event.save();
        res.json({success:true, message: "Event Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Fail to add Event from backend"})
    }
}

const listEvents = async(req, res) => {
    try {
        const events = await eventModel.find({});
        res.json({success:true, data:events})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

const removeEventItem = async(req, res) => {
    try {
        await eventModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Event Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addEventItem, listEvents, removeEventItem}