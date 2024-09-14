import React, { useState } from 'react'
import TrackerItems from './TrackerItems';
import {DragDropContext, Droppable} from '@hello-pangea/dnd';

const TrackerColumn = ({data, setData}) => {
    const onDragEnd = (result) => {
        // Handle drag end event
        const { source, destination, draggableId } = result;
        if (!destination) return;

        if(destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }

        const column = data.columns[source.droppableId];
        const newJobIds = Array.from(column.jobIds);
        //from this index, we want to remove 1 item
        newJobIds.splice(source.index, 1);
        newJobIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            jobIds: newJobIds,
        }

        const newData = {
            ...data,
            columns: {
                ...data.columns,
                [newColumn.id]: newColumn,
            },
        };

        setData(newData);

        // Logic to handle moving tasks between columns
        // const startColumn = data.columns[source.droppableId];
        // const finishColumn = data.columns[destination.droppableId];
        
        // if (startColumn === finishColumn) {
        //     // Task is in the same column
        //     const newjobIds = Array.from(startColumn.jobIds);
        //     newjobIds.splice(source.index, 1);
        //     newjobIds.splice(destination.index, 0, draggableId);

        //     const newColumn = {
        //         ...startColumn,
        //         jobIds: newjobIds
        //     };

        //     const newData = {
        //         ...data,
        //         columns: {
        //             ...data.columns,
        //             [newColumn.id]: newColumn
        //         }
        //     };

        //     // Update the state or backend with newData
        // } else {
        //     // Task is moved to a different column
        //     const startjobIds = Array.from(startColumn.jobIds);
        //     startjobIds.splice(source.index, 1);
        //     const newStartColumn = {
        //         ...startColumn,
        //         jobIds: startjobIds
        //     };

        //     const finishjobIds = Array.from(finishColumn.jobIds);
        //     finishjobIds.splice(destination.index, 0, draggableId);
        //     const newFinishColumn = {
        //         ...finishColumn,
        //         jobIds: finishjobIds
        //     };

        //     const newData = {
        //         ...data,
        //         columns: {
        //             ...data.columns,
        //             [newStartColumn.id]: newStartColumn,
        //             [newFinishColumn.id]: newFinishColumn
        //         }
        //     };

        //     // Update the state or backend with newData
        // }
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
                            {(provided, snapshot) =>{
                                const backgroundColor = snapshot.isDraggingOver ? 'bg-gray-400' : 'bg-gray-200';
                                return(
                                    <div ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`${backgroundColor} p-2 flex-grow`}
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