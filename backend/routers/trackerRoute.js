import express from "express";
import { addTrackerItem, listAllTrackers, refreshDailyTrackerStatus, removeTrackerItem, updateTrackerItemStatus } from "../controllers/trackerlistController.js";

const trackerlistRouter = express.Router();

trackerlistRouter.post("/add", addTrackerItem);
trackerlistRouter.get("/list", listAllTrackers);
trackerlistRouter.put("/updateStatus/:id", updateTrackerItemStatus);
trackerlistRouter.put("/refresh/:id", refreshDailyTrackerStatus);
trackerlistRouter.post("/remove", removeTrackerItem);

export default trackerlistRouter

