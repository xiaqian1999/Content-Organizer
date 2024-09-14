import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { assets } from '../assets/assets'

const Sidebar = () => {
    const [active, setActive] = useState("dashboard")
    return (
        <div className='font-semibold text-white bg-green-700 m-5 rounded-lg md:block xs:hidden' style={{height: '100vh'}}>
            <div>
                <img src={assets.logo_white} alt="" />
            </div>
            <div className='flex flex-col'>
                <NavLink to={"/"} 
                    onClick={() => {setActive("dashboard")}} 
                    className={`flex items-center gap-4 mb-2 px-3 rounded-l-md cursor-pointer}`}>
                    <p className={`hidden sm:block p-2 rounded-md w-full ${active==="dashboard" ? "bg-green-800" : ""}`}>Dashboard</p>
                </NavLink>
                <NavLink to={"/listjob"} 
                    onClick={() => {setActive("listjob")}} 
                    className={`flex items-center gap-4 mb-2 px-3 rounded-l-md cursor-pointer}`}>
                    <p className={`hidden sm:block p-2 rounded-md w-full ${active==="listjob" ? "bg-green-800" : ""}`}>List Job</p>
                </NavLink>
                <NavLink to={"/jobtracker"} 
                    onClick={() => {setActive("jobtracker")}} 
                    className={`flex items-center gap-4 mb-2 px-3 rounded-l-md cursor-pointer}`}>
                    <p className={`hidden sm:block p-2 rounded-md w-full ${active==="jobtracker" ? "bg-green-800" : ""}`}>Job Tracker</p>
                </NavLink>
                <NavLink to={"/test"} 
                    onClick={() => {setActive("test")}} 
                    className={`flex items-center gap-4 mb-2 px-3 rounded-l-md cursor-pointer}`}>
                    <p className={`hidden sm:block p-2 rounded-md w-full ${active==="test" ? "bg-green-800" : ""}`}>Test Page</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar