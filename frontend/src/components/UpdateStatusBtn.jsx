import React from 'react'

const UpdateStatusBtn = ({listItem_id, url}) => {
    const updateStatusHandler = () => {
        const updateStatus = async (event) => {
            try {
                const response = await fetch(`${url}/api/todolist/update/${listItem_id}`, {method: 'PUT'});
                const result = await response.json();
                console.log('Updated Document: ', response);
            } catch (error) {
                console.log("Error submitting form: ", error);
            }
        };
        updateStatus();
    }

    return (
        <span onClick={updateStatusHandler} className='rounded-full min-w-5 min-h-5 max-w-5 max-h-5 border border-gray-400 px-2 mr-1 hover:bg-green-500 cursor-pointer'></span> 
    )
}

export default UpdateStatusBtn