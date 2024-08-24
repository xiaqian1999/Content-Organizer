import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateStatusBtn from './UpdateStatusBtn';

const ToDoList = ({port_url}) => {

    const [list, setList] = useState([]);
    const [data, setData] = useState({
        task: "",
        status: 1,
        data: new Date().getTime()
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const todolistData = {
            task: data.task,
            status: 1,
            data: new Date().getTime()
        }

        try {
            const response = await axios.post(`${port_url}/api/todolist/add`, todolistData, {
                headers: {'Content-Type': 'application/json'}
            })

            if(response.data.success){
                setData({
                    task: "",
                    status: 1,
                    data: new Date().getTime()
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
            const response = await axios.get(`${port_url}/api/todolist/list`);
            setList(response.data.data);
        } catch (error) {
            toast.error("Error");
            console.log(error);
        }
    }

    const activeList = list.filter(item => item.status==1);

    useEffect(() => {
        fetchList();
    })

    return (
        <div className='border border-gray-400 flex flex-auto flex-col rounded p-2'>
            <div className='flex flex-wrap justify-between my-2 '>
                <p className='font-bold text-[20px] self-center ml-2'>To Do List</p>
                <button className='text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded mx-1'>View History</button>
            </div>
            <hr />
            <div className='overflow-y-scroll'>
                {activeList.map((item, index) => {
                    return (
                        <div className='my-2 flex flex-nowrap' key={index}>
                            <UpdateStatusBtn listItem_id={item._id} url={port_url} />
                            <p>{item.task}</p>
                        </div>
                    )
                })}
            
            </div>
            <hr />
            <form className='flex flex-wrap justify-between my-2' onSubmit={onSubmitHandler}>
                <input onChange={onChangeHandler} value={data.task} name="task" type="text" className='flex-1 border border-gray-400 p-2 rounded' />
                <button type="submit" className='text-white bg-gray-600 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded mx-1'>Add</button>
            </form>
        </div>
    )
}

export default ToDoList