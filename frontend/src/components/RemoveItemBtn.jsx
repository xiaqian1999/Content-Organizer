import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const RemoveItemBtn = ({url, item_id, fetchList}) => {
  const removeItem = async(item_id) => {
      const response = await axios.post(`${url}/api/trackerlist/remove`, {id:item_id});
      await fetchList();
      if(response.data.success){
        toast.success(response.data.message)
      }else{
        toast.success(response.data.message)
      }
    }

  return (
      <span onClick={() => removeItem(item_id)} className='text-center text-white rounded-full h-6 w-6 bg-red-400 hover:bg-red-500 cursor-pointer'>X</span>
  )
}

export default RemoveItemBtn