import React from 'react'

const AddEvent = ({setShowAddEvent}) => {
  return (
    <div className='absolute w-full h-screen grid'>
      <div onClick={() => setShowAddEvent(false)} className='fixed w-full h-screen' style={{backgroundColor: '#00000090', zIndex: '999'}}>

      </div>
      <form className='flex flex-col place-self-center bg-white p-5 rounded w-[550px]' style={{zIndex: '1000'}}>
        <div className='text-[25px] font-bold'>Add Event</div>
        <hr className='w-full my-2'/>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Program Name*</p>
            <input type="text" name="" className='p-2 border border-gray-400 rounded' required/>
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Program Link*</p>
            <input  type="url" name="" className='p-2 border border-gray-400 rounded' required/>
          </div>
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Program Type*</p>
            <input type="text" name="" className='p-2 border border-gray-400 rounded' required/>
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Application Deadline</p>
            <input type="date" name="" className='p-2 border border-gray-400 rounded' />
          </div>
        </div>

        <div className='flex flex-col mb-4'>
          <p className=''>Major Field</p>
          <input type="text" name="" className='p-2 border border-gray-400 rounded' />
        </div>

        <div className='flex flex-wrap mb-2 place-content-end'>
          <button onClick={() => setShowAddEvent(false)} className='text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded mx-1'>Close</button>
          <button type="submit" className='text-white bg-green-600 hover:bg-green-700 cursor-pointer px-3 py-2 rounded mx-1'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default AddEvent