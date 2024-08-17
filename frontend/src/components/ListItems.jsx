import React from 'react'

const ListItems = ({id, title, application_link, required_skill, optional_skill, salary_range}) => {
  return (
    <div id={id} className='w-full m-auto rounded-xl shadow-lg' style={{ transition: '0.3s', animation: 'fadeIn 1s'}}>
        <a href={application_link}>
            <div>{title}</div>
            <div>
                {required_skill && required_skill.length > 0 ?
                (
                    required_skill.map((skill, skillIndex) => (
                        <span key={skillIndex} className='p-2 bg-black rounded-full text-white text-sm'>{skill}</span>
                    ))
                ) : (
                    <span>No required skills</span>
                )}
            </div>
            <div>{optional_skill}</div>
            <div>{salary_range}</div>
        </a>
    </div>
  )
}

export default ListItems