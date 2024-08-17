import React, { useEffect, useState } from 'react'
import ListItems from '../components/ListItems';
import { toast } from 'react-toastify';
import axios from 'axios';

const ListJob = ({url}) => {

  const [list, setList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchList = async () => {
    try {
      const response  = await axios.get(`${url}/api/post/list`);
      // console.log(response.data);

      setList(response.data.data);
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }
  }

  const filteredList = list.filter(item => {
    const term = searchKeyword.toLowerCase();
    const titleMatch = item.title.toLowerCase().includes(term);
    const requiredSkillMatch = item.required_skill.some(skill => skill.toLowerCase().includes(term));
    const optionalSkillMatch = item.optional_skill.some(skill => skill.toLowerCase().includes(term));
    return(
      titleMatch || requiredSkillMatch || optionalSkillMatch
    )
  })

  useEffect(() => {
    fetchList();
  })

  return (
    <div className='my-5 mx-10 w-full'>
      <div className='flex flex-nowrap w-full justify-between mb-3'>
        <input type="text"
                placeholder="Search by type in anything" 
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className=' border-gray-300 border rounded-md p-2 w-10/12'
        />
        <button className='bg-gray-500 text-white px-2 rounded-md w-1/12 cursor-pointer hover:bg-green-700'>Filter</button>
      </div>
      <div className='mb-3 grid ss:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
        {filteredList.length === 0 && <p className='text-gray-600'>No results found</p>}
        {filteredList.map((item, index) => {
          return <ListItems 
            key={index} 
            id={item._id} 
            title={item.title} 
            application_link={item.application_link} 
            required_skill={item.required_skill} 
            optional_skill={item.optional_skill} 
            salary_range={item.salary_range}
            year_of_experience={item.year_of_experience}
            locations={item.locations}
            rate_interest={item.rate_interest}
            additional_note={item.additional_note} />
        })}
      </div>
    </div>
  )
}

export default ListJob