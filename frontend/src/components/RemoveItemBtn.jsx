import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const RemoveItemBtn = ({url, item_id, fetchList, tracker_list, jobpost_list}) => {
  const removeItem = async(item_id) => {
    let response;
    if(tracker_list){
      response = await axios.post(`${url}/api/trackerlist/remove`, {id:item_id});
    }else if(jobpost_list){
      response = await axios.post(`${url}/api/post/remove`, {id:item_id});
    }
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.success(response.data.message)
    }
    }

  return (
      <>
        { (tracker_list) ?
        <span onClick={() => removeItem(item_id)} className='text-center text-white rounded-full h-6 w-6 bg-red-400 hover:bg-red-500 cursor-pointer'>X</span>
        :
        <button onClick={() => removeItem(item_id)} className='py-1 px-2 bg-red-400 hover:bg-red-500 text-white text-center cursor-pointer w-fit place-self-end mr-2 mb-2 rounded text-sm'>Remove</button>
        }
      </>
  )
}

export default RemoveItemBtn