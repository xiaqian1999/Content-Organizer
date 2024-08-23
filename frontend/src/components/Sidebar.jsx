import React from 'react'
import { NavLink } from "react-router-dom"
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[300px] font-semibold text-white bg-green-700 m-5 rounded-lg' style={{height: '100vh'}}>
        <div>
            <img src={assets.logo_white} alt="" />
        </div>
        <div className='pt-5 pl-[20%] flex flex-col'>
            <NavLink to={"/listjob"} className="flex items-center gap-4 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>List Job</p>
            </NavLink>

            <NavLink to={"/viewcalendar"} className="flex items-center gap-4 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>View Calendar</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar