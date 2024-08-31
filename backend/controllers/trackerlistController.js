import trackerlistModel from "../models/trackerModel.js";

// add, list all and update the status of item
const addTrackerItem = async (req, res) => {
    try {
        const {task, tracker_type, score, status} = req.body;
        const trackerItems = new trackerlistModel({task, tracker_type, score, status})
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

const refreshDailyTrackerStatus = async(req, res) => {
    try {
        const updatedItem = await trackerlistModel.findByIdAndUpdate(req.params.id, {status: 1}, {new:true});
        res.json(updatedItem);
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to update the status of the tracker item"})
    }
}

const removeTrackerItem = async(req, res) => {
    try {
        await trackerlistModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Item Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to delete the item"})
    }
}

export {addTrackerItem, listAllTrackers, updateTrackerItemStatus, refreshDailyTrackerStatus, removeTrackerItem};