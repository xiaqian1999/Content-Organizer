import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateStatusBtn from './UpdateStatusBtn';
import IncrementCountBtn from './IncrementCountBtn';
import RemoveItemBtn from './removeItemBtn';

const TrackerList = ({ title, port_url }) => {
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    task: "",
    tracker_type: "",
    score: 1,
    status:1
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}));
  }

  const onSubmitHanlder = async (event) => {
    event.preventDefault();
    const trackerListData = {
      task: data.task,
      tracker_type: title === "Daily" ? "daily" : "annual",
      score: data.score,
      status: 1
    }

    try {
      const response = await axios.post(`${port_url}/api/trackerlist/add`, trackerListData, {
        headers: {'Content-Type': 'application/json'}
      });

      if(response.data.success){
        setData({
          task: "",
          tracker_type: "",
          score: 1,
          status:1
        })
      }else{
        console.log("ERROR: ", response.data.message);
      }
    } catch (error) {
      console.log("Error submitting form: ", error);
    }
  }

  const fetchList = async () => {
    try {
      const response = await axios.get(`${port_url}/api/trackerlist/list`);
      setList(response.data.data);
    } catch (error) {
      toast.error("Error");
      console.log(error)
    }
  }

  const activeTrackerItem = list.filter(item => item.status==1);
  const dailyTracker = activeTrackerItem.filter(item => item.tracker_type == "daily");
  const annualTracker = activeTrackerItem.filter(item => item.tracker_type == "annual");
  const MINUTE_MS = 10000;

  useEffect(() => {
    fetchList();
  })

  useEffect(() => {
    const interval = setInterval(()=>{
      // setData({
      //   task: "",
      //   tracker_type: "",
      //   status:1
      // })
    }, MINUTE_MS);
    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks
    return () => clearInterval(interval);
  }, [])

  return (
    <div className='border border-gray-200 flex flex-auto flex-col rounded p-4 bg-white'>
        <p className='font-bold text-[20px] self-center ml-2'>{title} Tracker</p>
        <form className='flex flex-nowrap justify-between my-2 w-full' onSubmit={onSubmitHanlder}>
          <input onChange={onChangeHandler} name="task" value={data.task} type="text" className='flex-1 w-4/6 border border-gray-400 p-2 rounded mx-1' />
          <input type="number" onChange={onChangeHandler} name="score" value={data.score} className='w-1/6 border border-gray-400 p-2 rounded' />
          <button type="submit" className='w-1/6 text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded mx-1'>Add</button>
        </form>

        {title === "Daily" 
          ? <div>
            <div>
              {dailyTracker.map((item, index)=> {
              return(
                <div className='my-2 flex flex-nowrap justify-between' key={index}>
                  <div className='flex flex-row'>
                    {/* <UpdateStatusBtn listItem_id={item._id} url={port_url} tracker_type={title} /> */}
                    <IncrementCountBtn />
                    <p>{item.task}</p>
                  </div>
                  <RemoveItemBtn url={port_url} item_id={item._id} fetchList={fetchList} tracker_list={title} />
                </div>
                )
              })}
            </div>
            <hr />
            <div className='flex flex-nowrap justify-between'>
              <p>Total Count for Today:</p>
              <span></span>
            </div>
            
          </div>
          : <div>{annualTracker.map((item, index) => {
            return (
              <div className='my-2 flex flex-nowrap justify-between' key={index}>
                <div className='flex flex-row'>
                  <UpdateStatusBtn listItem_id={item._id} url={port_url} tracker_type={title} />
                  <p>{item.task}</p>
                </div>
                <RemoveItemBtn url={port_url} item_id={item._id} fetchList={fetchList} tracker_list={title} />
              </div>
            )
          })}</div>
        }


    </div>
  )
}

export default TrackerList