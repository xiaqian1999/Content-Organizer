import React from 'react'
import { Droppable } from '@hello-pangea/dnd';
import Task from './Task';

const Column = ({column, tasks}) => {
  return (
    <div className='border border-gray-400 rounded-md p-2'>
        <h2 className='font-bold'>{column.title}</h2>
        <Droppable droppableId={column.id}>
            {(provided) =>(
                <div ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {tasks.map((task, index) => { 
                        return (<Task key={task.id} task={task} index={index} />)
                    })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
  )
}

export default Column