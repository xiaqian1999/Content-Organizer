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
                const borderColor = snapshot.isDragging ? 'border-l-4 border-red-700' : 'border-l-4 border-lime-700';
                return (
                    <div {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref = {provided.innerRef}
                    // isDragging={snapshot.isDragging}
                    // We dont use the above line due to that tailwind css doesn't support dynamic css properties
                    // Need to handle dynamic class names within the component logic
                    className={`bg-white rounded-md p-2 mb-2 ${borderColor}`}>
                        <h1 className='font-bold text-lg'>{job.company_name}</h1>
                        <p>{job.title}</p>
                    </div>
                )
            }}
        </Draggable>
    )
}

export default TrackerItems