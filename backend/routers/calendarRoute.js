import express from 'express';
import { getDailyScores, updateDailyScore } from '../controllers/calendarController.js';

const calendarRouter = express.Router();

calendarRouter.get('/getScores', getDailyScores);
calendarRouter.post('/updateScore', updateDailyScore);

export default calendarRouter