import React from 'react'
import { Droppable } from '@hello-pangea/dnd';
import Task from './Task';

const Column = ({column, tasks}) => {
  return (
    <div className='border border-gray-400 rounded-md bg-white'>
        <h2 className='font-bold text-center'>{column.title}</h2>
        <Droppable droppableId={column.id}>
            {(provided, snapshot) =>{
                const backgroundColor = snapshot.isDraggingOver ? 'bg-gray-200' : 'bg-white';
                return(
                    <div ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`${backgroundColor} p-4`}
                        style={{transition: 'background-color 0.2s ease'}}
                    >
                        {tasks.map((task, index) => { 
                            return (<Task key={task.id} task={task} index={index} />)
                        })}
                        {provided.placeholder}
                    </div>
                )
            }}
        </Droppable>
    </div>
  )
}

export default Column