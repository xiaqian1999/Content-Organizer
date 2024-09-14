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
                const bgColor = snapshot.isDragging ? 'bg-orange-400' : 'bg-gray-400';
                return (
                    <div {...provided.draggableProps}
                    ref = {provided.innerRef}
                    // isDragging={snapshot.isDragging}
                    // We dont use the above line due to that tailwind css doesn't support dynamic css properties
                    // Need to handle dynamic class names within the component logic
                    className={`bg-white rounded-md p-2 mb-2 flex flex-nowrap`}>
                        <div {...provided.dragHandleProps} 
                            className={`w-10 h-10 mr-1 rounded-sm p-3 text-xl my-auto ${bgColor}`}></div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold'>{job.title}</h1>
                            <p>{job.company_name}</p>
                            <p>{job.salary_range}</p>
                        </div>
                    </div>
                )
            }}
        </Draggable>
    )
}

export default TrackerItems