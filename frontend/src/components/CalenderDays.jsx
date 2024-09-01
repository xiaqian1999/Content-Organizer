import React, { useEffect } from 'react'

const CalenderDays = ({currentDay, changeCurrentDay}) => {
    let firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    //adjust firstDayOfMonth to the start of the calendar grid if the first day of the month doesn't start on Sunday
    if (weekdayOfFirstDay !== 0){
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - weekdayOfFirstDay);
    }

    for (let day=0; day < 42; day++) {
        // if (day === 0 && weekdayOfFirstDay === 0){
        //     firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        // }else if(day === 0){
        //     firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        // }else{
        //     firstDayOfMonth.setDate(firstDayOfMonth.getDate()+1);
        // }
        
        let calendarDay = {
            currentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth(),
            date: new Date(firstDayOfMonth),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: firstDayOfMonth.toDateString() === currentDay.toDateString(),
            year: firstDayOfMonth.getFullYear()
        }
        currentDays.push(calendarDay);
        firstDayOfMonth.setDate(firstDayOfMonth.getDate()+1);
    }
    // useEffect(() =>{
    //     console.log(currentDays);
    // }, [])
    
    return (
        <div className='w-full flex flex-wrap justify-center box-border'>
            {currentDays.map((day, index) => {
                return (
                    <div key={index} 
                        className={"relative border border-gray-500" + (day.currentMonth ? " calender-current" : "") + (day.selected ? " calender-selected" : "")} onClick={()=>changeCurrentDay(day)} 
                        style={{width:"125px", height:"75px"}}
                        >
                        <p className='absolute' style={{right:"10px", color:"#a6a6a6"}}>{day.number}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CalenderDays