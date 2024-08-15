import express from 'express';
import { addSkill, listSkill } from '../controllers/skillController.js';

const skillRouter = express.Router();

skillRouter.get("/skills", listSkill);
skillRouter.post("/skills", addSkill);

export default skillRouter;