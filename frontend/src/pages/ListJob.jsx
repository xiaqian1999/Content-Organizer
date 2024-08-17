import React, { useEffect, useState } from 'react'
import ListItems from '../components/ListItems';
import { toast } from 'react-toastify';
import axios from 'axios';

const ListJob = ({url}) => {

  const [list, setList] = useState([]);
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

  useEffect(() => {
    fetchList();
  })

  return (
    <div className='mt-5 mx-10 grid ss:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full'>
      {list.map((item, index) => {
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
  )
}

export default ListJob