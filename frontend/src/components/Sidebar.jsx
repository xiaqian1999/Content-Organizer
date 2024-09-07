import React from 'react'
import { NavLink } from "react-router-dom"
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='font-semibold text-white bg-green-700 m-5 rounded-lg md:block xs:hidden' style={{height: '100vh', minWidth: '200px', maxWidth: '200px'}}>
        <div>
            <img src={assets.logo_white} alt="" />
        </div>
        <div className='pt-5 pl-[20%] flex flex-col'>
            <NavLink to={"/"} className="flex items-center gap-4 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>Dashboard</p>
            </NavLink>
            <NavLink to={"/listjob"} className="flex items-center gap-4 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>List Job</p>
            </NavLink>
            <NavLink to={"/jobtracker"} className="flex items-center gap-4 py-5 px-3 rounded-l-md cursor-pointer">
                <p className='hidden sm:block'>Job Tracker</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar