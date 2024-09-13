import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const TrackerTransformData = ({ data }) => {
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
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='flex '>
                {Object.entries(data.columns).map(([columnId, column]) => (
                    <Droppable key={columnId} droppableId={columnId}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className='bg-gray-300 mx-2 w-[300px]'
                            >
                                <h2 className='p-2'>{column.title}</h2>
                                {column.jobIds.map((jobId, index) => {
                                    const job = data.jobs[jobId];
                                    return (
                                        <Draggable
                                            key={job._id}
                                            draggableId={job.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className='bg-orange-200 p-2 border m-2'
                                                >
                                                    {job.title}: {job.id}
                                                </div>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default TrackerTransformData
