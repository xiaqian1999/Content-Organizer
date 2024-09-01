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
            const scores = response.data.reduce((acc, item) => {
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
                        className={"relative border-l border-b w-auto" + (day.currentMonth ? " calender-current" : "") + (day.selected ? " calender-selected" : "")} onClick={()=>changeCurrentDay(day)} 
                        style={{height:"85px"}}
                        >
                        <p className='absolute' style={{right:"10px", color:"#a6a6a6"}}>{day.number}</p>
                        <p className='absolute' style={{right:"10px", top:"20px", color:"#a6a6a6"}}>{day.score}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CalenderDays