import trackerlistModel from "../models/trackerModel.js";

// add, list all and update the status of item
const addTrackerItem = async (req, res) => {
    try {
        const {task, tracker_type, status} = req.body;
        const trackerItems = new trackerlistModel({task, tracker_type, status})
        await trackerItems.save();
        res.json({success: true, message:"One tracker item been added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to add new item into the tracker"})
    }
}

const listAllTrackers = async (req, res) => {
    try {
        const trackerList = await trackerlistModel.find({});
        res.json({success:true, data:trackerList})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to list everything inside tracker"})
    }
}

const updateTrackerItemStatus = async(req, res) => {
    try {
        const updatedItem = await trackerlistModel.findByIdAndUpdate(req.params.id, {status: 0}, {new:true});
        res.json(updatedItem);
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to update the status of the tracker item"})
    }
}

export {addTrackerItem, listAllTrackers, updateTrackerItemStatus};