import todolistModel from "../models/todolistModel.js";

//Add the new to do item to the list
const addTodoItem = async (req, res) => {
    try {
        const {task, status, date} = req.body;
        const toDoItem = new todolistModel({task, status, date})
        await toDoItem.save();
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
const updateListItem = async (req, res) => {
    try {
        // without using {new:true}, the method retusn the documents as it was before the update
        // use req.params.id instead of req.body.id is that req.params used to access route parameters in the URL, these parameters are specified in the URL path and are typically used for identifying specific resources, such as an "id"
        // /update-status/:id, ":id" becomes route parameter that you can access via req.params.id
        //While req.body is used to access the data send in the body of request, often used for data that is sent as part of the request payload, such as form data or JSON data.
        const updatedItem = await todolistModel.findByIdAndUpdate(req.params.id, {status: 0}, {new:true});
        res.json(updatedItem)
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
}

//Remove all to do items from the list by change all the current active to inactive


export { addTodoItem, listAllItem, updateListItem }