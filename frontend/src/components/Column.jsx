import React from 'react'
import { Droppable } from '@hello-pangea/dnd';
import Task from './Task';

const Column = ({column, tasks, isDropDisabled}) => {
  return (
    <div className='bg-gray-200 rounded-md w-[250px] mx-2 flex flex-col h-screen'>
        <h2 className='text-center mt-2 text-gray-600 font-semibold'>{column.title}</h2>
        <Droppable droppableId={column.id} 
            isDropDisabled={isDropDisabled}
            >
            {(provided, snapshot) =>{
                const backgroundColor = snapshot.isDraggingOver ? 'bg-gray-400' : 'bg-gray-200';
                return(
                    <div ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`${backgroundColor} p-2 flex-grow`}
                        style={{transition: 'background-color 0.2s ease', minHeight: '100px'}}
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