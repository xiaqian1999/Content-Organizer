import React from 'react'

const ListItems = ({id, title, application_url, required_skill, optional_skill, salary_range, year_of_experience, locations, rate_interest, additional_note, removeList}) => {
  return (
    <div id={id} className='w-full h-auto m-auto rounded-xl shadow-lg' style={{ transition: '0.3s', animation: 'fadeIn 1s'}}>
        <div>
            <div className='py-3 bg-green-800 text-white text-center rounded-t-xl text-lg cursor-pointer'>
                <a href={application_url} target="_blank">{title}</a>
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

            {salary_range ? 
                <div className='p-2'>Salary Range: <span className='text-red-500'> {salary_range} </span> </div> : ""
            }

            {year_of_experience ? 
                <div className='p-2'>Required Year of Experience: <span className='text-red-500'> {year_of_experience} </span> </div> : ""
            }

            {locations ? 
                <div className='p-2'>Locations: <span className='text-red-500'> {locations} </span> </div> : ""
            }

            {rate_interest ? 
                <div className='p-2'>Rate of Interest: <span className='text-red-500'> {rate_interest} </span> </div> : ""
            }

            {additional_note ? 
                <div className='p-2'>Addition Notes: <span className='text-red-500'> {additional_note} </span> </div> : ""
            }

            <div className='p-2'>
                {optional_skill && optional_skill.length > 0 ?
                (
                    optional_skill.map((skill, skillIndex) => (
                        <span key={skillIndex} className='mx-1 px-3 py-1 bg-gray-300 rounded-full text-white text-sm'>{skill}</span>
                    ))
                ):(
                    ""
                )
            }
            </div>
        </div>
        
        <button onClick={()=>removeList(id)} className='py-3 bg-red-400 hover:bg-red-500 text-white text-center rounded-b-xl text-lg cursor-pointer w-full'>Remove</button>
    </div>
  )
}

export default ListItems