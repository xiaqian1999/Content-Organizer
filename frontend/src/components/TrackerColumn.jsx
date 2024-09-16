import React, { useEffect, useState } from 'react'
import TrackerItems from './TrackerItems';
import {DragDropContext, Droppable} from '@hello-pangea/dnd';
import axios from 'axios';

const TrackerColumn = ({data, setData, url, fetchList}) => {

    const onDragStart = () => {
        //mostly for the frontend design when drag start
    }

    const onDragEnd = (result) => {
        // Handle drag end event
        const { source, destination, draggableId } = result;
        if (!destination) return;

        if(destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }
        // Logic to handle moving tasks between columns
        const startColumn = data.columns[source.droppableId];
        const finishColumn = data.columns[destination.droppableId];

        console.log("startColumn: " + startColumn.applicationStatus + " finishColumn: " + finishColumn.applicationStatus);
        console.log("draggableId: " + draggableId);
        
        if (startColumn === finishColumn) {
            // Task is in the same column
            const newJobIds = Array.from(startColumn.jobIds);
            //from this index, we want to remove 1 item
            newJobIds.splice(source.index, 1);
            newJobIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                jobIds: newJobIds,
            }

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setData(prevData => newData);
            localStorage.setItem('drag-and-drop-state', JSON.stringify(newData));
            return;
        } else {
            // Task is moved to a different column
            const startJobIds = Array.from(startColumn.jobIds);
            startJobIds.splice(source.index, 1);
            const newStartColumn = {
                ...startColumn,
                jobIds: startJobIds
            };

            const finishJobIds = Array.from(finishColumn.jobIds);
            finishJobIds.splice(destination.index, 0, draggableId);
            const newFinishColumn = {
                ...finishColumn,
                jobIds: finishJobIds
            };

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newFinishColumn.id]: newFinishColumn
                }
            };
            setData(prevData => newData);
            //Update with data or backend with newData
            if (updateApplicationStatus){
                updateApplicationStatus(draggableId, finishColumn.applicationStatus, newData);
            }
            return;
        }
    };

    const updateApplicationStatus = async ( jobId, newStatus, newData ) => {
        try {
            await axios.post(`${url}/api/post/updateJobApplicationStatus`, {
                jobId: jobId,
                newStatus: newStatus
            });
            // localStorage.setItem('drag-and-drop-state', JSON.stringify(newData));
            fetchList();
            // console.log(JSON.stringify(newData));
        } catch (error) {
            console.log("Failed to update the application status: ", error);
        }
    }

    useEffect(()=>{
        if(data){
            localStorage.setItem('drag-and-drop-state', JSON.stringify(data));
        }
        console.log(data);
    }, [data]);
    
    return (
        <DragDropContext 
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <div className='flex'>
                {Object.entries(data.columns).map(([columnId, column]) => (
                    <div className='bg-gray-200 rounded-md w-[300px] mx-2 flex flex-col'>
                        <h2 className='text-center mt-2 text-gray-600 font-semibold'>{column.colTitle}</h2>
                        <Droppable key={columnId} droppableId={columnId} >
                            {(provided, snapshot) =>{
                                const backgroundColor = snapshot.isDraggingOver ? 'bg-gray-400' : 'bg-gray-200';
                                return(
                                    <div ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`${backgroundColor} p-2 flex-grow overflow-y-auto`}
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