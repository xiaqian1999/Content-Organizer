import React from 'react'
import { NavLink } from "react-router-dom"
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] border border-gray-400 border-t-0 font-semibold' style={{minHeight: '100vh'}}>
        <div className='pt-5 pl-[20%] flex flex-col gap-4'>
            <NavLink to={"/addjob"} className="flex items-center gap-4 border border-gray-400 border-r-0 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>Add Job</p>
                <img src={assets.add_icon} alt="add icon" className='w-8' />
            </NavLink>

            <NavLink to={"/listjob"} className="flex items-center gap-4 border border-gray-400 border-r-0 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>List Job</p>
                <img src={assets.list_icon} alt="list icon" className='w-8' />
            </NavLink>

            <NavLink to={"/viewcalendar"} className="flex items-center gap-4 border border-gray-400 border-r-0 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>View Calendar</p>
                <img src={assets.calendar_icon} alt="calendar icon" className='w-8' />
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar