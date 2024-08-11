import express from "express"
import { addPost } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.post("/add", addPost);

export default postRouter;