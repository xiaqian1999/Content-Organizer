import express from "express"
import { addTodoItem, listAllItem } from "../controllers/todolistController.js"

const todolistRouter = express.Router();

todolistRouter.post("/add", addTodoItem)
todolistRouter.get("/list", listAllItem);

export default todolistRouter