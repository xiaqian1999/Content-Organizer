import React, { useState } from 'react'
import CalenderDays from '../components/CalenderDays';

const ViewCalendar = ({port_url}) => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
  const [currentDay, setCurrentDay] = useState(new Date());

  const changeCurrentDay = (day) => {
    const newDate = new Date(day.year, day.month, day.number);
    setCurrentDay(newDate);
  }

  return (
    <div className='pt-2'>
      <div className="flex items-center">
        <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
      </div>
      <div className='w-full flex-grow flex flex-col'>
        <div className='w-full grid grid-cols-7 justify-center box-border border-t border-l bg-white'>
          {weekdays.map((weekday, index) => {
            return <div key={index} className="w-auto text-center border-r"><p>{weekday}</p></div>
          })}
        </div>
        <CalenderDays currentDay={currentDay} changeCurrentDay={changeCurrentDay} url={port_url} />
      </div>
    </div>
  )
}

export default ViewCalendar