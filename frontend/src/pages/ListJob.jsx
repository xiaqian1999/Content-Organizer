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
    <div className='job-display-list mt-5 grid gap-[30px]'>
      {list.map((item, index) => {
        return <ListItems 
          key={index} 
          id={item._id} 
          title={item.title} 
          application_link={item.application_link} 
          required_skill={item.required_skill} 
          optional_skill={item.optional_skill} 
          salary_range={item.salary_range} />
      })}
    </div>
  )
}

export default ListJob