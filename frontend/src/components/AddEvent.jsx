import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const options = [
  { value: 'fellowship', label: 'Fellowship' },
  { value: 'internship', label: 'Internship' },
  { value: 'certificate', label: 'Certificate' },
  { value: 'tutorial', label: 'Tutorial' },
  { value: 'useful_resource', label: 'Useful Resource' },
];

const AddEvent = ({url, setShowAddEvent}) => {
  const [eventItem, setEventItem] = useState({
    program_name: "",
    program_link: "",
    program_type: options[0].value,
    application_deadline: "",
    major_related: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEventItem(eventItem => ({...eventItem, [name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const eventItemData = {
      program_name: eventItem.program_name,
      program_link: eventItem.program_link,
      program_type: eventItem.program_type,
      application_deadline: eventItem.application_deadline,
      major_related: eventItem.major_related,
      application_status: "new"
    }

    try {
      const response = await axios.post(`${url}/api/events/add`, eventItemData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(response.data.success){
        setEventItem({
          program_name: "",
          program_link: "",
          program_type: options[0].value,
          application_deadline: "",
          major_related: "",
          application_status: "new"
        })
        setShowAddEvent(false);
        toast.success(response.data.message);
      }else{
        console.log("ERROR: ", response.data.message);
      }
    } catch (error) {
      console.lof("Error submitting form: ", error);
    }
  }

  return (
    <div className='absolute w-full h-screen grid'>
      <div onClick={() => setShowAddEvent(false)} className='fixed w-full h-screen' style={{backgroundColor: '#00000090', zIndex: '999'}}>

      </div>
      <form onSubmit={onSubmitHandler} className='flex flex-col place-self-center bg-white p-5 rounded w-[550px]' style={{zIndex: '1000'}}>
        <div className='text-[25px] font-bold'>Add Event</div>
        <hr className='w-full my-2'/>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Program Name*</p>
            <input onChange={onChangeHandler} type="text" value={eventItem.program_name} name="program_name" className='p-2 border border-gray-400 rounded' required/>
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Program Link*</p>
            <input onChange={onChangeHandler}  type="url" value={eventItem.program_link} name="program_link" className='p-2 border border-gray-400 rounded' required/>
          </div>
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Program Type*</p>
            <select onChange={onChangeHandler} value={eventItem.program_type} name="program_type" id="program_type" className='p-2 border border-gray-400 rounded' required>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Application Deadline</p>
            <input onChange={onChangeHandler} type="date" value={eventItem.application_deadline} name="application_deadline" className='p-2 border border-gray-400 rounded' />
          </div>
        </div>

        <div className='flex flex-col mb-4'>
          <p className=''>Major Field</p>
          {/* <input onChange={onChangeHandler} type="text" value={eventItem.major_related} name="major_related" className='p-2 border border-gray-400 rounded' /> */}

          <select onChange={onChangeHandler} value={eventItem.major_related} name="major_related" className='p-2 border border-gray-400 rounded'>
              <option value=""></option>
              <option value="fellowship">Fellowship</option>
              <option value="internship">Internship</option>
              <option value="certificate">Certificate</option>
              <option value="tutorial">Tutorial</option>
              <option value="useful_resource">Useful Resource</option>
            </select>
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