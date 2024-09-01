import React, { useState } from 'react'
import CalenderDays from '../components/calenderDays';

const ViewCalendar = () => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
  const [currentDay, setCurrentDay] = useState(new Date());

  const changeCurrentDay = (day) => {
    const newDate = new Date(day.year, day.month, day.number);
    setCurrentDay(newDate);
  }

  return (
    <div className='sidebar_css'>
      <div className="flex items-center">
        <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
      </div>
      <div className='w-full flex-grow flex flex-col'>
        <div className='w-full flex items-center justify-around'>
          {weekdays.map((weekday, index) => {
            return <div key={index} className="w-[100px] text-center"><p>{weekday}</p></div>
          })}
        </div>
        <CalenderDays currentDay={currentDay} changeCurrentDay={changeCurrentDay} />
      </div>
    </div>
  )
}

export default ViewCalendar