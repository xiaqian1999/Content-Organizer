import React, { useState } from 'react'
import TrackerItems from './TrackerItems';
import { Droppable } from '@hello-pangea/dnd';
import {DragDropContext, Draggable} from '@hello-pangea/dnd';

const TrackerColumn = ({data}) => {
    const onDragEnd = (result) => {
        // Handle drag end event
        const { source, destination, draggableId } = result;
        if (!destination) return;

        // Logic to handle moving tasks between columns
        const startColumn = data.columns[source.droppableId];
        const finishColumn = data.columns[destination.droppableId];

        if (startColumn === finishColumn) {
            // Task is in the same column
            const newTaskIds = Array.from(startColumn.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds
            };

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn
                }
            };

            // Update the state or backend with newData
        } else {
            // Task is moved to a different column
            const startTaskIds = Array.from(startColumn.taskIds);
            startTaskIds.splice(source.index, 1);
            const newStartColumn = {
                ...startColumn,
                taskIds: startTaskIds
            };

            const finishTaskIds = Array.from(finishColumn.taskIds);
            finishTaskIds.splice(destination.index, 0, draggableId);
            const newFinishColumn = {
                ...finishColumn,
                taskIds: finishTaskIds
            };

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newFinishColumn.id]: newFinishColumn
                }
            };

            // Update the state or backend with newData
        }
    };

    return (
        <DragDropContext 
            onDragEnd={onDragEnd}
        >
            <div className='flex sidebar_css'>
                {Object.entries(data.columns).map(([columnId, column]) => (
                    <div className='bg-gray-200 rounded-md w-[250px] mx-2 flex flex-col'>
                        <h2 className='text-center mt-2 text-gray-600 font-semibold'>{column.title}</h2>
                        <Droppable key={columnId} droppableId={columnId} >
                            {(provided) =>{
                            // {(provided, snapshot) =>{
                                // const backgroundColor = snapshot.isDraggingOver ? 'bg-gray-400' : 'bg-gray-200';
                                return(
                                    <div ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        // className={`${backgroundColor} p-2 flex-grow`}
                                        className={` p-2 flex-grow`}
                                        style={{transition: 'background-color 0.2s ease', minHeight: '100px'}}
                                    >
                                        {column.jobIds.map((jobId, index) => {
                                            const job = data.jobs[jobId];
                                            return (
                                                <TrackerItems job={job} index={index} />
                                            )
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )
                            }}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    )
}

export default TrackerColumn