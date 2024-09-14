import React from 'react'
import { Draggable } from '@hello-pangea/dnd';

const TrackerItems = ({job, index}) => {
    return (
        <Draggable 
            key={job.id}
            draggableId={job.id} 
            index={index}
            >
            {/*snapshot - contains # of property to style draggable components during drag */}
            {(provided, snapshot) => {
                //Another approach to do the same thing by determine the bg color based on dragging state
                const borderColor = snapshot.isDragging ? 'border-red-700' : 'border-lime-700';
                return (
                    <div {...provided.draggableProps}
                    ref = {provided.innerRef}
                    // isDragging={snapshot.isDragging}
                    // We dont use the above line due to that tailwind css doesn't support dynamic css properties
                    // Need to handle dynamic class names within the component logic
                    className={`bg-white rounded-md p-2 mb-2 border-l-4 ${borderColor}`}>
                        <div {...provided.dragHandleProps} className='flex flex-col'>
                            <h1 className='font-bold'>{job.company_name}</h1>
                            <p className='bg-green-800 text-white px-2 rounded-sm text-sm w-fit my-1'>{job.title}</p>
                            <p className='text-sm'>${job.salary}</p>
                        </div>
                        <div className='flex justify-end'><button className='bg-gray-600 text-white px-2 rounded-sm text-sm w-fit cursor-pointer hover:bg-gray-900'>View</button></div>
                    </div>
                )
            }}
        </Draggable>
    )
}

export default TrackerItems