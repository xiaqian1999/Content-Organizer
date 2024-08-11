import React from 'react'

const AddJob = () => {
  
  return (
    <div className='w-[70%] ml-5 mt-5 text-gray-600'>
      <form action="" className='flex flex-col w-full'>

        <div className='flex flex-col mb-4'>
          <p>Title*</p>
          <input type="text" name="title" className='p-3 border border-gray-400 rounded-md' required/>
        </div>

        <div className='flex flex-col mb-4'>
          <p>Application Link*</p>
          <input type="url" name="application_url" className='p-3 border border-gray-400 rounded-md' required />
        </div>

        <div className='flex flex-col mb-4'>
          <p>Required Skill*</p>
          <select name="required_skill" className='p-3 border border-gray-400 rounded-md' required>
            <option value=""></option>
          </select>
        </div>

        <div className='flex flex-col mb-4'>
          <p>Optional Skill</p>
          <input type="text" name="optional_skill" className='p-3 border border-gray-400 rounded-md' />
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Salary Range</p>
            <input type="number" name="salary_range" className='p-3 border border-gray-400 rounded-md' />
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Year of Experience</p>
            <input type="text" name="year_of_experience" className='p-3 border border-gray-400 rounded-md' />
          </div>
        </div>

        <div className='flex flex-wrap justify-between my-2'>
          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Locations</p>
            <input type="text" name="locations" className='p-3 border border-gray-400 rounded-md' />
          </div>

          <div className='flex flex-col mb-4' style={{width: "48%"}}>
            <p>Rate of Interest</p>
            <input type="text" name="rate_interest" className='p-3 border border-gray-400 rounded-md' />
          </div>
        </div>

        <div className='flex flex-col mb-4'>
          <p>Additional Note</p>
          <textarea type="text" name="additional_note" className='p-3 border border-gray-400 rounded-md'>
          </textarea>
        </div>

        <button type="submit" className='text-white bg-green-500 hover:bg-green-600 cursor-pointer p-3 rounded-md mb-2'>Add</button>

      </form>
    </div>
  )
}

export default AddJob