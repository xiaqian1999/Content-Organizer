import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex place-content-end items-center h-fit mb-2'>
        <img src={assets.profile_image} alt="profile image" className='w-[50px]' />
    </div>
  )
}

export default Navbar