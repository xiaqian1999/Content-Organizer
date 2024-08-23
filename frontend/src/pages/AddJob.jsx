import React, { useEffect, useState } from 'react'
import MultiSelectWithCreate from '../components/MultiSelect'
import axios from "axios";
import { toast } from 'react-toastify';

const AddJob = ({url, setShowAddJob}) => {

  //used for selectize
  const port_url = url;
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [optionalSkills, setOptionalSkills] = useState([]);

  const [data, setData] = useState({
    title: "",
    application_url: "",
    required_skill: "",
    optional_skill: "",
    salary_range: 0,
    year_of_experience: "",
    locations: "",
    additional_note: "",
    rate_interest: 0
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Ensure unique skills by converting to Set and back to Array
    // Use Javascript Set
    const uniqueRequiredSkills = [... new Set(requiredSkills.map(skill => skill.value))];
    const uniqueOptionalSkills = [... new Set(optionalSkills.map(skill => skill.value))];

    //In this case we don't use FormData, where the data is send as "multipart/form-data", it's different from JSON
    //Therefore only need to change here for the postData, no backend change needed
    const postData = {
      title: data.title,
      application_url: data.application_url,
      required_skill: uniqueRequiredSkills,
      optional_skill: uniqueOptionalSkills,
      salary_range: data.salary_range,
      year_of_experience: data.year_of_experience,
      locations: data.locations,
      additional_note: data.additional_note,
      rate_interest: data.rate_interest
    }

    try {
      const response = await axios.post(`${url}/api/post/add`, postData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success){
          // if success, reset the form
          setData({
            title: "",
            application_url: "",
            required_skill: [],
            optional_skill: [],
            salary_range: 0,
            year_of_experience: "",
            locations: "",
            additional_note: "",
            rate_interest: 0
          })
          toast.success(response.data.message);
          setShowAddJob(false)
        }else{
          console.log("ERROR: ", response.data.message);
        }

    } catch (error) {
      console.log("Error submitting form: ", error);
    }
  }

  return (
    <div className='text-gray-600 absolute z-1 w-full h-full grid' style={{backgroundColor: '#00000090'}}>
      <form className='flex flex-col place-self-center bg-white p-5 rounded-md' onSubmit={onSubmitHandler}>
        <div className='text-[25px] font-bold'>Add Job</div>
        <hr className='w-full my-2'/>

        <div className='flex flex-col mb-4'>
          <p className=''>Title*</p>
          <input onChange={onChangeHandler} value={data.title} type="text" name="title" className='p-2 border border-gray-400 rounded-sm' required/>
        </div>

        <div className='flex flex-col mb-4'>
          <p className=''>Application Link*</p>
          <input onChange={onChangeHandler} value={data.application_url} type="url" name="application_url" className='p-2 border border-gray-400 rounded-sm' required />
        </div>

        <div className='flex flex-col mb-4'>
          <p className=''>Required Skill*</p>
          <MultiSelectWithCreate selectedSkills={requiredSkills} setSelectedSkills={setRequiredSkills} url={port_url} />
        </div>

        <div className='flex flex-col mb-4'>
          <p className=''>Optional Skill</p>
          <MultiSelectWithCreate selectedSkills={optionalSkills} setSelectedSkills={setOptionalSkills} url={port_url} />
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Salary Range</p>
            <input onChange={onChangeHandler} value={data.salary_range} type="number" name="salary_range" className='p-2 border border-gray-400 rounded-sm' />
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Year of Experience</p>
            <input onChange={onChangeHandler} value={data.year_of_experience} type="text" name="year_of_experience" className='p-2 border border-gray-400 rounded-sm' />
          </div>
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Locations</p>
            <input onChange={onChangeHandler} value={data.locations} type="text" name="locations" className='p-2 border border-gray-400 rounded-sm' />
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p className=''>Rate of Interest</p>
            <input onChange={onChangeHandler} value={data.rate_interest} type="text" name="rate_interest" className='p-2 border border-gray-400 rounded-sm' />
          </div>
        </div>

        <div className='flex flex-col mb-4'>
          <p className=''>Additional Note</p>
          <textarea onChange={onChangeHandler} value={data.additional_note} type="text" name="additional_note" className='p-2 border border-gray-400 rounded-sm'>
          </textarea>
        </div>

        <div className='flex flex-wrap mb-2 place-content-end'>
          <button onClick={() => setShowAddJob(false)} className='text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded-sm mx-1'>Close</button>
          <button type="submit" className='text-white bg-green-600 hover:bg-green-700 cursor-pointer px-3 py-2 rounded-sm mx-1'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default AddJob