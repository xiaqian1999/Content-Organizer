import React from 'react'
import ToDoList from '../components/ToDoList'

const Dashboard = () => {
  return (
    <div className='sidebar_css grid grid-cols-3 gap-4'>
      <div className='col-span-2'>Part 1</div>
      <ToDoList />
    </div>
  )
}

export default Dashboard