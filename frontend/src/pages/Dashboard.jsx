import React from 'react'
import ToDoList from '../components/ToDoList'

const Dashboard = ({url}) => {
  return (
    <div className='sidebar_css grid grid-cols-3 gap-4'>
      <div className='col-span-2'>Part 1</div>
      <ToDoList port_url={url} />
    </div>
  )
}

export default Dashboard