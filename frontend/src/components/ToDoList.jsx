import React from 'react'

const ToDoList = () => {
  return (
    <div className='border border-gray-400 rounded p-2'>
        <div className='flex flex-wrap justify-between'>
          <p className='font-bold text-[20px] my-2'>To Do List</p>
          <span className='rounded-full w-8 h-8 border border-gray-400 px-2.5 text-[19px] cursor-pointer'>+</span>
        </div>
        <hr />
        <div>
          <div className='my-2'><span className='rounded-full w-10 h-10 border border-gray-400 px-2.5 mr-1 hover:bg-green-500 cursor-pointer'></span> Clean the data</div>
          <div className='my-2'><span className='rounded-full w-10 h-10 border border-gray-400 px-2.5 mr-1 hover:bg-green-500 cursor-pointer'></span> application status tracker for the job application</div>
          <div className='my-2'><span className='rounded-full w-10 h-10 border border-gray-400 px-2.5 mr-1 hover:bg-green-500 cursor-pointer'></span> Clean the data</div>
          <div className='my-2'><span className='rounded-full w-10 h-10 border border-gray-400 px-2.5 mr-1 hover:bg-green-500 cursor-pointer'></span> application status tracker for the job application</div>
          <div className='my-2'><span className='rounded-full w-10 h-10 border border-gray-400 px-2.5 mr-1 hover:bg-green-500 cursor-pointer'></span> Clean the data</div>
          <div className='my-2'><span className='rounded-full w-10 h-10 border border-gray-400 px-2.5 mr-1 hover:bg-green-500 cursor-pointer'></span> application status tracker for the job application</div>
        </div>
        <hr />
        <button className='text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded mx-1 mt-2'>Clear All</button>
    </div>
  )
}

export default ToDoList