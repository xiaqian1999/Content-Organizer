import { addEventItem, listEvents, removeEventItem } from "../controllers/eventController.js";
import express from "express"

const eventRouter = express.Router();

eventRouter.post("/add", addEventItem);
eventRouter.get("/list", listEvents);
eventRouter.post("/remove", removeEventItem);

export default eventRouter
