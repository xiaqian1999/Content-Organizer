import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const EventDashboard = ({url, setShowAddEvent}) => {
    const [listEvents, setListEvents] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/events/list`);
            setListEvents(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const filteredList = listEvents.filter(item => {
        const term = searchKeyword.toLowerCase();
        const programTypeMatch = item.program_type.toLowerCase().includes(term);
        return ( programTypeMatch )
    })

    useEffect(() => {
        fetchList();
    })
    return (
        <div className='sidebar_css bg-gray-100'>
            <div className='flex flex-wrap justify-between'>
                <p className='text-[30px] font-bold'>Events</p>
                <button onClick={() => setShowAddEvent(true)} className='bg-gray-500 text-white px-3 rounded hover:bg-gray-600'> + Add Event</button>
            </div>
            <hr className='my-5'/>
            <div className='bg-white p-2 rounded-md'>
            <div className='flex justify-end mb-3'>
                <span className='self-center mr-1'>Search:</span>
                <input type="text" 
                    value={searchKeyword} 
                    onChange={(e) => setSearchKeyword(e.target.value)} 
                    className='bg-gray-200 border rounded py-1 px-2 focus:bg-white'/>
            </div>

                <table className='w-full'>
                    <thead className='border-b border-gray-500 font-bold'>
                        <tr>
                            <td className='py-2'>Program Name</td>
                            <td className='py-2'>Program Type</td>
                            <td className='py-2'>Application Deadline</td>
                            <td className='py-2'>Application Link</td>
                            <td className='py-2'>Application Status</td>
                            <td className='py-2'>Major Field</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {filteredList.length === 0 && <tr className='w-full'><td className='text-red-400'>No results found</td></tr>}
                        {filteredList.map((item, index) => {
                            return(
                                <tr className='border-b' key={index}>
                                    <td className='py-4'>{item.program_name}</td>
                                    <td className='py-4'>{item.program_type}</td>
                                    <td className='py-4'>{item.application_deadline}</td>
                                    <td className='py-4'><a href={item.program_link} className='rounded-md bg-green-800 text-white py-1 px-2 text-sm cursor-pointer hover:bg-green-900' target="_blank">Click to Apply</a></td>
                                    <td className='py-4'><span className='rounded-md border-l-2 border-red-400 bg-gray-100 py-1 px-2 text-sm'>{item.application_status}</span></td>
                                    <td className='py-4'>{item.major_related}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EventDashboard