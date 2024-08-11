import express from "express"
import { addPost, listPost } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.post("/add", addPost);
postRouter.get("/list", listPost);

export default postRouter;