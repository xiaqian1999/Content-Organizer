import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CalenderDays = ({currentDay, changeCurrentDay, url}) => {
    let firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];
    const [dailyScores, setDailyScores] = useState({});

    const fetchScores = async () => {
        try {
            const response = await axios.get(`${url}/api/calendar/getScores`);
            const scores = response.data.data.reduce((acc, item) => {
                //reduce convert an array of calendar data into an object where each date is a key, and its associated score is the value
                //acc[Date] = score => ex: Sun Sep 01 2024 = score 0
                acc[new Date(item.date).toDateString()] = item.daily_total_score;
                return acc;
            }, {});
            setDailyScores(scores);
        } catch (error) {
            console.error('Error fetching scores:', error);
        }
    }

    useEffect(() => {
        fetchScores();
    })

    //adjust firstDayOfMonth to the start of the calendar grid if the first day of the month doesn't start on Sunday
    if (weekdayOfFirstDay !== 0){
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - weekdayOfFirstDay);
    }

    for (let day=0; day < 42; day++) {
        let calendarDay = {
            currentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth(),
            date: new Date(firstDayOfMonth),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: firstDayOfMonth.toDateString() === currentDay.toDateString(),
            year: firstDayOfMonth.getFullYear(),
            score: dailyScores[firstDayOfMonth.toDateString()] || 0
        }
        currentDays.push(calendarDay);
        firstDayOfMonth.setDate(firstDayOfMonth.getDate()+1);
    }
    
    return (
        <div className='w-full grid grid-cols-7 justify-center box-border border-r border-t bg-white shadow-inner'>
            {currentDays.map((day, index) => {
                return (
                    <div key={index} 
                        className={"relative flex flex-col border-l border-b w-auto" + (day.currentMonth ? " calender-current" : "") + (day.selected ? " calender-selected" : "")} onClick={()=>changeCurrentDay(day)} 
                        style={{height:"85px"}}
                        >
                        <p className='calendar-day text-right mr-2 text-gray-400'>{day.number}</p>
                        <div className='flex flex-nowrap text-sm mx-2'>
                            <span className='h-2 w-2 rounded-full bg-green-600 self-center mr-1'></span>
                            <p className=''>point: </p>
                            <p className='font-bold '>{day.score}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CalenderDays