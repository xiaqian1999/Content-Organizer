import express from "express"
import { addPost, listPost, removePost, updateApplicationStatus } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.post("/add", addPost);
postRouter.get("/list", listPost);
postRouter.post("/remove", removePost);
postRouter.post("/updateJobApplicationStatus", updateApplicationStatus);

export default postRouter;