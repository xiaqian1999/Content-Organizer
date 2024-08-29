import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setAuthenticated, token, setToken}) => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setAuthenticated(false);
    navigate("/user");
  }
  return (
    <div className='flex place-content-end items-center p-5'>
      <div className='profile_icon relative'>
        <img src={assets.profile_image} alt="profile image" className='w-[50px]' />
        <ul className='profile_icon_hidden absolute hidden right-0 z-1'>
          <li className='px-4 py-2 cursor-pointer hover:bg-gray-200'>Edit</li>
          <li onClick={logout} className='px-4 py-2 cursor-pointer hover:bg-gray-200'>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar