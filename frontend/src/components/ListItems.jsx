import React from 'react'

const ListItems = ({id, title, application_link, required_skill, optional_skill, salary_range, year_of_experience, locations, rate_interest, additional_note, removeList}) => {
  return (
    <div id={id} className='w-full h-96 m-auto rounded-xl shadow-lg' style={{ transition: '0.3s', animation: 'fadeIn 1s'}}>
        <div>
            <div className='py-3 bg-green-800 text-white text-center rounded-t-xl text-lg cursor-pointer'>
                <a href={application_link} target="_blank">{title}</a>
            </div>
            <div className='p-2'>
                {required_skill && required_skill.length > 0 ?
                (
                    required_skill.map((skill, skillIndex) => (
                        <span key={skillIndex} className='mx-1 px-3 py-1 bg-gray-700 rounded-full text-white text-sm'>{skill}</span>
                    ))
                ) : (
                    <span>No Required Skills</span>
                )}
            </div>
            <div className='p-2'>Salary Range: {salary_range ? salary_range : "N/A"}</div>
            <div className='p-2'>Year of Experience: {year_of_experience ? salary_range : "N/A"}</div>
            <div className='p-2'>Locations: {locations ? salary_range : "N/A"}</div>
            <div className='p-2'>Rate of Interest: {rate_interest ? salary_range : "N/A"}</div>
            <div className='p-2'>Addition Notes: {additional_note ? salary_range : "N/A"}</div>
            <div className='p-2'>
                {optional_skill && optional_skill.length > 0 ?
                (
                    optional_skill.map((skill, skillIndex) => (
                        <span key={skillIndex} className='mx-1 px-3 py-1 bg-gray-300 rounded-full text-white text-sm'>{skill}</span>
                    ))
                ):(
                    <span>No Required Skills</span>
                )
            }
            </div>
        </div>
        
        <button onClick={()=>removeList(id)} className='py-3 bg-red-400 hover:bg-red-500 text-white text-center rounded-b-xl text-lg cursor-pointer w-full'>Remove</button>
    </div>
  )
}

export default ListItems