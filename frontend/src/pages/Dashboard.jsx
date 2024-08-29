import React from 'react'
import ToDoList from '../components/ToDoList'
import Navbar from '../components/Navbar'

const Dashboard = ({url}) => {
  return (
    <div className='sidebar_css'>
      <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
        <div className='col-span-2'>Part 1</div>
        <ToDoList port_url={url} />
      </div>
    </div>
  )
}

export default Dashboard