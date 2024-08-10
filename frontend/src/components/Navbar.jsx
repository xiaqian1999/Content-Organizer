import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 h-[120px]'>
        <img src={assets.logo} alt="logo" className='w-[220px]' />
        <img src={assets.profile_image} alt="profile image" className='w-[50px]' />
    </div>
  )
}

export default Navbar