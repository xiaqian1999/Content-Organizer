import React from 'react'
import ToDoList from '../components/ToDoList'

const Dashboard = ({url}) => {
  return (
    <div className='sidebar_css grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
      <div className='col-span-2'>Part 1</div>
      <ToDoList port_url={url} />
    </div>
  )
}

export default Dashboard