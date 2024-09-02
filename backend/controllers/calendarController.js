import calendarModel from "../models/calendarModel.js";

const getDailyScores = async (req, res) => {
    try {
        const scores = await calendarModel.find({});
        res.json({success:true, data:scores})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to fetch the scores"});
    }
}

const updateDailyScore = async (req, res) => {
    const {date, score} = req.body; //Expecting date and score in the request body
    console.log("Request body:", req.body); //use this line to log the request body
    try {
        const updatedScore = await calendarModel.findOneAndUpdate(
            {date: new Date(date)},
            {daily_total_score: score},
            {new:true, upsert:true} //Create if it doesn't exist
        );
        res.json(updatedScore)
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to update the scores"});
    }
}

export {getDailyScores, updateDailyScore}