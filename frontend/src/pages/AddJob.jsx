import React, { useEffect, useState } from 'react'
// import MultiSelectWithCreate from '../components/MultiSelect'
import Select from 'react-select';
import axios from "axios";
import { toast } from 'react-toastify';

const AddJob = () => {
  const url = "http://localhost:4001";

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

  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  // console.log( selectedSkills.map(skill => skill.value));

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    //In this case we don't use FormData, where the data is send as "multipart/form-data", it's different from JSON
    //Therefore only need to change here for the postData, no backend change needed

    const postData = {
      title: data.title,
      application_url: data.application_url,
      required_skill: selectedSkills.map(skill => skill.value),
      optional_skill: data.optional_skill,
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
            optional_skill: "",
            salary_range: 0,
            year_of_experience: "",
            locations: "",
            additional_note: "",
            rate_interest: 0
          })
    
          toast.success(response.data.message);
        }else{
          console.log("ERROR: ", response.data.message);
        }

    } catch (error) {
      console.log("Error submitting form: ", error);
    }
  }

  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${url}/api/skill/skills`);
      // console.log(response.data);

      const skillData = response.data.data.map(skill => ({
        value: skill.value,
        label: skill.label,
      }))
      setSkills(skillData);
    } catch (error) {
      // toast.error("Error")
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSkills();
    console.log(data)
  }, [])

  return (
    <div className='w-[70%] ml-5 mt-5 text-gray-600'>
      <form className='flex flex-col w-full' onSubmit={onSubmitHandler}>
        <div className='flex flex-col mb-4'>
          <p>Title*</p>
          <input onChange={onChangeHandler} value={data.title} type="text" name="title" className='p-3 border border-gray-400 rounded-md' required/>
        </div>

        <div className='flex flex-col mb-4'>
          <p>Application Link*</p>
          <input onChange={onChangeHandler} value={data.application_url} type="url" name="application_url" className='p-3 border border-gray-400 rounded-md' required />
        </div>

        <div className='flex flex-col mb-4'>
          <p>Required Skill*</p>
          <Select 
            isMulti 
            options={skills} 
            value={selectedSkills} 
            onChange={setSelectedSkills} 
            placeholder="Select or add skill" />
        </div>

        <div className='flex flex-col mb-4'>
          <p>Optional Skill</p>
          <input onChange={onChangeHandler} value={data.optional_skill} type="text" name="optional_skill" className='p-3 border border-gray-400 rounded-md' />
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Salary Range</p>
            <input onChange={onChangeHandler} value={data.salary_range} type="number" name="salary_range" className='p-3 border border-gray-400 rounded-md' />
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Year of Experience</p>
            <input onChange={onChangeHandler} value={data.year_of_experience} type="text" name="year_of_experience" className='p-3 border border-gray-400 rounded-md' />
          </div>
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Locations</p>
            <input onChange={onChangeHandler} value={data.locations} type="text" name="locations" className='p-3 border border-gray-400 rounded-md' />
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Rate of Interest</p>
            <input onChange={onChangeHandler} value={data.rate_interest} type="text" name="rate_interest" className='p-3 border border-gray-400 rounded-md' />
          </div>
        </div>

        <div className='flex flex-col mb-4'>
          <p>Additional Note</p>
          <textarea onChange={onChangeHandler} value={data.additional_note} type="text" name="additional_note" className='p-3 border border-gray-400 rounded-md'>
          </textarea>
        </div>

        <button type="submit" className='text-white bg-green-500 hover:bg-green-600 cursor-pointer p-3 rounded-md mb-2'>Add</button>

      </form>
    </div>
  )
}

export default AddJob