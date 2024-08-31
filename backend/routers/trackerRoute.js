import express from "express";
import { addTrackerItem, listAllTrackers, updateTrackerItemStatus } from "../controllers/trackerlistController.js";

const trackerlistRouter = express.Router();

trackerlistRouter.post("/add", addTrackerItem);
trackerlistRouter.get("/list", listAllTrackers);
trackerlistRouter.put("/updateStatus/:id", updateTrackerItemStatus);

export default trackerlistRouter

