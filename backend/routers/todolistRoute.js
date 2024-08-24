import express from "express"
import { addTodoItem, listAllItem, updateListItem } from "../controllers/todolistController.js"

const todolistRouter = express.Router();

todolistRouter.post("/add", addTodoItem)
todolistRouter.get("/list", listAllItem);
todolistRouter.put("/update/:id", updateListItem);

export default todolistRouter