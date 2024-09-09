import React from 'react'
import { Draggable } from '@hello-pangea/dnd';

const Task = ({task, index}) => {
    const draggableSnapShot = {
        isDragging: true,
        draggingOver: 'column-1',
    }

    const isDragDisabled = task.id === 'task-1';

    return (
        <Draggable 
            draggableId={task.id} 
            index={index}
            isDragDisabled={isDragDisabled}
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
                    className={`border border-black rounded-md p-2 mb-2 ${isDragDisabled ? 'bg-gray-400' : ''} ${snapshot.isDragging ? 'bg-green-200' : 'bg-white'}`}>
                    {task.content}
                </div>
                )
            }}
        </Draggable>
    )
}

export default Task