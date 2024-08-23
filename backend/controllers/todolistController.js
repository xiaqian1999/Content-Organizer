import todolistModel from "../models/todolistModel";

//Add the new to do item to the list
const addTodoItem = async (req, res) => {
    try {
        const {task, status, date} = req.body;
        const toDoItem = new todolistModel({task, status, date})
        await post.save();
        res.json({success:true, message:"One to do list added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to add new to do list"})
    }
}

//Display all current active to do list
const listAllItem = async (req, res) => {
    try {
        const lists = await todolistModel.find({});
        res.json({success:true, data: lists})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
}

//Mark one of the active item to inactive, remove from the view

//Remove all to do items from the list by change all the current active to inactive


export { addTodoItem, listAllItem }