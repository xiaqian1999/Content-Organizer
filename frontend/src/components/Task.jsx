import React from 'react'
import { Draggable } from '@hello-pangea/dnd';

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref = {provided.innerRef}
                    className='border border-black rounded-md p-2 mb-2'>
                    {task.content}
                </div>
            )}
        </Draggable>
    )
}

export default Task