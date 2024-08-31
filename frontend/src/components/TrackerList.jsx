import React from 'react'

const TrackerList = ({ title }) => {
  return (
    <div className='border border-gray-200 flex flex-auto flex-col rounded p-4 bg-white'>
        <p className='font-bold text-[20px] self-center ml-2'>{title} Tracker</p>
        <form className='flex flex-wrap justify-between my-2'>
              <input name="" type="text" className='flex-1 border border-gray-400 p-2 rounded' />
              <button type="submit" className='text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded mx-1'>Add</button>
          </form>
    </div>
  )
}

export default TrackerList