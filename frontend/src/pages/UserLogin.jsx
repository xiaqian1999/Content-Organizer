import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserLogin = ({url, setIsAuthenticated, token, setToken}) => {
  
  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({
    name:"",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    if (currState === "Login"){
      url += "/api/user/login"
    }else{
      url += "/api/user/register"
    }

    const response = await axios.post(url, data);

    if (response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setIsAuthenticated(true)
    }else{
      alert(response.data.message);
    }
  }

  return (
    <div className='w-full h-screen flex flex-row z-1 text-white py-10 justify-center'>
      <div className='bg-green-800 py-5 px-10 rounded self-center text-center'>
        <form onSubmit={onLogin} className='grid grid-flow-row gap-4 '>
          <div className='grid grid-flow-row gap-4'>
            <h1 className='text-[40px]'>{currState}</h1>
            <p>Free access to our dashboard.</p>
            <button className='border border-white px-3 py-2 rounded cursor-pointer'>Login with Google</button>
          </div>

          <hr className='my-5'/>
          {currState==="Sign Up" ? 
            <div className='grid'>
              <p className='text-left'>Full Name</p>
              <input name="name" onChange={onChangeHandler} value={data.name} type="text" className='border border-gray-500 px-3 py-2 rounded text-black' required />
            </div>
          : <></>
          }

          <div className='grid'>
            <p className='text-left'>Email Address</p>
            <input name="email" onChange={onChangeHandler} value={data.email} type="text" className='border border-gray-500 px-3 py-2 rounded text-black' placeholder='name@example.com' required />
          </div>

          <div className='grid'>
          <p className='text-left'> Password </p>
            <input name="password" onChange={onChangeHandler} value={data.password} type="password" className='border border-gray-500 px-3 py-2 rounded text-black' required />
          </div>

          {currState==="Sign Up"
            ? <div className='text-left'><input type="checkbox" required /> By Continuing, I agree to the terms of use & privacy policy.</div>
            : <div className='text-left'><input type="checkbox" /> Remember me</div>
          }

          <button type='submit' className='border border-white px-3 py-2 rounded cursor-pointer'>{currState==="Sign Up" ? "Sign Up" : "Login"}</button>

          {currState==="Sign Up"
            ? <p>Already have an account? <span className='cursor-pointer text-black hover:text-orange-600' onClick={()=> setCurrState("Login")}>Login here</span></p>
            : <p>Don't have an account yet? <span className='cursor-pointer text-black hover:text-orange-600' onClick={()=> setCurrState("Sign Up")}>Sign up here</span></p>
          }
        </form>
      </div>
    </div>
  )
}

export default UserLogin