import React, { useEffect, useState } from 'react'
import ListItems from '../components/ListItems';
import { toast } from 'react-toastify';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ListJob = ({url, setShowAddJob}) => {

  const [list, setList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');


  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/post/list`);
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

  const removeList = async (postId) => {
    try {
      const response = await axios.post(`${url}/api/post/remove`, {id:postId});
      await fetchList();
      toast.success(response.data.message)
    } catch (error) {
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchList();
  })

  return (
    <div className='my-5 mx-10 w-full overflow-y-scroll' style={{height:"100vh"}}>
      <Navbar />
      <div className='flex flex-wrap justify-between'>
        <p className='text-[30px] font-bold'>Open Job Positions</p>
        <button onClick={() => setShowAddJob(true)} className='bg-gray-500 text-white px-3 rounded-md hover:bg-gray-600'> + Add Job</button>
      </div>
      <hr className='my-5'/>
      <div>
        <div className='flex flex-nowrap w-full justify-between mb-3'>
          <input type="text"
                  placeholder="Search by type in anything" 
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className=' border-gray-300 border rounded-md p-2 w-10/12'
          />
          <button className='bg-gray-500 text-white px-2 rounded-md w-1/12 cursor-pointer hover:bg-gray-600'>Filter</button>
        </div>
        <div className='mb-3 grid ss:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
          {filteredList.length === 0 && <p className='text-gray-600'>No results found</p>}
          {filteredList.map((item, index) => {
            return <ListItems 
              key={index} 
              id={item._id} 
              title={item.title} 
              application_url={item.application_url} 
              required_skill={item.required_skill} 
              optional_skill={item.optional_skill} 
              salary_range={item.salary_range}
              year_of_experience={item.year_of_experience}
              locations={item.locations}
              rate_interest={item.rate_interest}
              additional_note={item.additional_note}
              removeList={removeList} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ListJob