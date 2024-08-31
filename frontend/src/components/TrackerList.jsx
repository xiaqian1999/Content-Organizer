import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const TrackerList = ({ title, port_url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${port_url}/api/trackerlist/list`);
      setList(response.data.data);
    } catch (error) {
      toast.error("Error");
      console.log(error)
    }
  }

  const dailyTracker = list.filter(item => item.tracker_type == "daily");
  const annualTracker = list.filter(item => item.tracker_type == "annual");

  useEffect(() => {
    fetchList();
  })

  return (
    <div className='border border-gray-200 flex flex-auto flex-col rounded p-4 bg-white'>
        <p className='font-bold text-[20px] self-center ml-2'>{title} Tracker</p>
        <form className='flex flex-wrap justify-between my-2'>
          <input name="" type="text" className='flex-1 border border-gray-400 p-2 rounded' />
          {title === "Daily" 
            ? <input type="text" hidden />
            : <input type="text" hidden />
          }
          <button type="submit" className='text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded mx-1'>Add</button>
        </form>

        {title === "Daily" 
          ? <div>{dailyTracker.map((item, index)=> {
            return(
              <div key={index}>{item.task}</div>
            )
          })}</div>
          : <div>{annualTracker.map((item, index) => {
            return (
              <div key={index}>{item.task}</div>
            )
          })}</div>
        }


    </div>
  )
}

export default TrackerList