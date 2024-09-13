import React from 'react'
import { Draggable } from '@hello-pangea/dnd';

const TrackerItems = ({job, index}) => {
    return (
        <Draggable 
            key={job._id}
            draggableId={job.id} 
            index={index}
            >
            {/*snapshot - contains # of property to style draggable components during drag */}
            {(provided, snapshot) => {
                //Another approach to do the same thing by determine the bg color based on dragging state
                // const backgroundColor = snapshot.isDragging ? 'bg-green-200' : 'bg-white';
                return (
                    <div {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref = {provided.innerRef}
                    // isDragging={snapshot.isDragging}
                    // We dont use the above line due to that tailwind css doesn't support dynamic css properties
                    // Need to handle dynamic class names within the component logic
                    className={`bg-white rounded-md p-2 mb-2 ${snapshot.isDragging ? 'bg-green-200' : 'bg-white'}`}>
                    {job.title}
                </div>
                )
            }}
        </Draggable>
    )
}

export default TrackerItems