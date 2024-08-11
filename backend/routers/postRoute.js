import express from "express"
import { addPost, listPost, removePost } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.post("/add", addPost);
postRouter.get("/list", listPost);
postRouter.post("/remove", removePost)

export default postRouter;