import React from 'react'
import ToDoList from '../components/ToDoList'
import TrackerList from '../components/TrackerList'
import ViewCalendar from './ViewCalendar'

const Dashboard = ({url}) => {
  return (
    <div className='sidebar_css'>
      <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
        <div className='col-span-2 flex flex-col'>
          <div className='grid sm:grid-cols-2 gap-4 xs:grid-cols-1'>
            <TrackerList title="Daily" port_url={url} />
            <TrackerList title="Annual" port_url={url} />
          </div>
          <ViewCalendar port_url={url} />
        </div>
        <ToDoList port_url={url} />
      </div>
    </div>
  )
}

export default Dashboard