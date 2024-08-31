import React from 'react'
import ToDoList from '../components/ToDoList'
import Navbar from '../components/Navbar'
import TrackerList from '../components/TrackerList'

const Dashboard = ({url}) => {
  return (
    <div className='sidebar_css'>
      <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
        <div className='col-span-2 flex flex-col'>
          <div className='grid grid-cols-2 gap-4'>
            <TrackerList title="Daily" />
            <TrackerList title="Annual" />
          </div>
          <div>Mini calendar tracker</div>
        </div>
        <ToDoList port_url={url} />
      </div>
    </div>
  )
}

export default Dashboard