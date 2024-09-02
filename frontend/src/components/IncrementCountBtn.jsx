import React, { useState } from 'react'

const IncrementCountBtn = ({scorePerItem, incrementTotalScore, onClick}) => {

    const [score, setScore] = useState(0);
    const updateStatusHandler = () => {
        setScore(prevScore => {
            const newScore = prevScore+1;
            //This called here is to ensure that the total count is updated every time the local score increase
            //This way the total count in the Tracker reflects the combined effect of all increments;
            incrementTotalScore(scorePerItem);
            onClick();
            return newScore;
        })
    }

    //if only want to update the totalScore, only need below
    // const updateStatusHandler = () => { incrementTotalScore(scorePerItem); }
    return (
        <span onClick={updateStatusHandler} className='rounded-full min-w-5 min-h-5 max-w-5 max-h-5 border border-gray-400 mr-1 cursor-pointer text-center text-sm hover:bg-green-600'>{score}</span>
    )
}

export default IncrementCountBtn