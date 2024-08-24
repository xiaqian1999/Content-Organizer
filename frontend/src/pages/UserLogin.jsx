import React, { useState } from 'react'

const UserLogin = (url, setIsAuthenticated) => {
  
  const [currState, setCurrState] = useState("Sign In")
  return (
    <div className='w-full h-screen flex flex-row z-1 text-white py-10 justify-center'>
      <div className='bg-green-800 py-5 px-10 rounded self-center text-center'>
        <form className='grid grid-flow-row gap-4'>
          <div className='grid grid-flow-row gap-4'>
            <h1 className='text-[40px]'>{currState}</h1>
            <p>Free access to our dashboard.</p>
            <button className='border border-white px-3 py-2 rounded cursor-pointer'>Sign in with Google</button>
          </div>

          <hr className='my-5'/>
          {currState==="Sign Up" ? 
            <div className='grid'>
              <p className='text-left'>Full Name</p>
              <input type="text" className='border border-gray-500 px-3 py-2 rounded' />
            </div>
          : <></>
          }

          <div className='grid'>
            <p className='text-left'>Email Address</p>
            <input type="text" className='border border-gray-500 px-3 py-2 rounded' placeholder='name@example.com' />
          </div>

          <div className='grid'>
          <p className='text-left'> Password </p>
            <input type="text" className='border border-gray-500 px-3 py-2 rounded' />
          </div>

          {currState==="Sign Up"
            ? <div className='text-left'><input type="checkbox" /> By Continuing, I agree to the terms of use & privacy policy.</div>
            : <div className='text-left'><input type="checkbox" /> Remember me</div>
          }

          <button className='border border-white px-3 py-2 rounded cursor-pointer'>{currState==="Sign Up" ? "Sign Up" : "Sign In"}</button>

          {currState==="Sign Up"
            ? <p>Already have an account? <a href="">Sign In here</a></p>
            : <p>Don't have an account yet? <a href="">Sign up here</a></p>
          }
        </form>
      </div>
    </div>
  )
}

export default UserLogin