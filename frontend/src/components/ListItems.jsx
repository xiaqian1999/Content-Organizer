import React from 'react'
import RemoveItemBtn from './removeItemBtn';

const ListItems = ({id, company_name, title, application_url, required_skill, optional_skill, salary_range, year_of_experience, locations, rate_interest, additional_note, jobpost_url, fetchList}) => {
  return (
    <div id={id} className='w-full h-[250px] m-auto shadow-md overflow-y-scroll hover:shadow-xl bg-white p-2' style={{ transition: '0.3s', animation: 'fadeIn 1s'}}>
        <a href={application_url} target="_blank">
            <div className='px-2 rounded-t cursor-pointer'>
                <p className='text-lg font-semibold'>{company_name}</p>
                <p className=''>{title}</p>
            </div>

            <div className='px-1 break-words'>
                {required_skill && required_skill.length > 0 ?
                (
                    required_skill.map((skill, skillIndex) => (
                        <span key={skillIndex} className='mx-1 px-3 py-1 text-center bg-gray-700 rounded-md text-white text-xs whitespace-nowrap leading-8'>{skill}</span>
                    ))
                ) : (
                    <span>No Required Skills</span>
                )}
            </div>

            {salary_range ? 
                <div className='px-2'>Salary Range: <span className='text-red-500 text-sm'> {salary_range} </span> </div> : ""
            }

            {year_of_experience ? 
                <div className='px-2'>Required Year of Experience: <span className='text-red-500 text-sm'> {year_of_experience} </span> </div> : ""
            }

            {locations ? 
                <div className='px-2'>Locations: <span className='text-red-500 text-sm'> {locations} </span> </div> : ""
            }

            {rate_interest ? 
                <div className='px-2'>Rate of Interest: <span className='text-red-500 text-sm'> {rate_interest} </span> </div> : ""
            }

            {additional_note ? 
                <div className='px-2'>Addition Notes: <span className='text-red-500 text-sm'> {additional_note} </span> </div> : ""
            }

            <div className='px-1 break-words'>
                {optional_skill && optional_skill.length > 0 ?
                (
                    optional_skill.map((skill, skillIndex) => (
                        <span key={skillIndex} className='mx-1 px-3 py-1 bg-gray-300 rounded-md text-white text-xs whitespace-nowrap leading-8'>{skill}</span>
                    ))
                ):(
                    ""
                )
            }
            </div>
        </a>

        <div className='flex justify-end'>
            <button className='py-1 px-2 bg-gray-400 hover:bg-gray-500 text-white text-center cursor-pointer w-fit place-self-end mr-2 mb-2 rounded text-sm'>Edit</button>
            <RemoveItemBtn url={jobpost_url} item_id={id} fetchList={fetchList} jobpost_list={title} />
        </div>
    </div>
  )
}

export default ListItems