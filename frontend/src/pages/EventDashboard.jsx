import React from 'react'

const EventDashboard = ({url, setShowAddJob}) => {
  return (
    <div className='sidebar_css bg-gray-100'>
        <div className='flex flex-wrap justify-between'>
            <p className='text-[30px] font-bold'>Events</p>
            <button onClick={() => setShowAddJob(true)} className='bg-gray-500 text-white px-3 rounded hover:bg-gray-600'> + Add Event</button>
        </div>
        <hr className='my-5'/>
        <div className='bg-white p-2 rounded-md'>
        <div className='flex justify-end mb-3'>
            <span className='self-center mr-1'>Search:</span>
            <input type="text" className=' bg-gray-200 border rounded py-1 px-2 focus:bg-white'/>
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
                    <tr className='border-b'>
                        <td className='py-4'>Test Google</td>
                        <td className='py-4'>Test Microsoft</td>
                        <td className='py-4'>03/23/2025</td>
                        <td className='py-4'><a href="" className='rounded-md bg-green-800 text-white py-1 px-2 text-sm cursor-pointer hover:bg-green-900'>Click to Apply</a></td>
                        <td className='py-4'><span className='rounded-md border-l-2 border-red-400 bg-gray-100 py-1 px-2 text-sm'>Applied</span></td>
                        <td className='py-4'>Major Field</td>
                    </tr>
                    <tr className='border-b'>
                        <td className='py-4'>Test Google</td>
                        <td className='py-4'>Test Microsoft</td>
                        <td className='py-4'>02/23/2025</td>
                        <td className='py-4'><a href="" className='rounded-md bg-green-800 text-white py-1 px-2 text-sm cursor-pointer hover:bg-green-900'>Click to Apply</a></td>
                        <td className='py-4'><span className='rounded-md border-l-2 border-red-400 bg-gray-100 py-1 px-2 text-sm'>Applied</span></td>
                        <td className='py-4'>Major Field</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EventDashboard


// program name
// program link
// program type
// major field
// application ddl - anything over the deadline will need to auto change the status
// application status

