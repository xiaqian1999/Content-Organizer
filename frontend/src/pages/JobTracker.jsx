import React, { useState } from 'react'
import Column from '../components/Column';
import {DragDropContext, Draggable} from '@hello-pangea/dnd';

const JobTracker = () => {
    const initialData = {
        tasks: {
            'task-1': {id: 'task-1', content: 'Take out the garbage'},
            'task-2': {id: 'task-2', content: 'Exercise'},
            'task-3': {id: 'task-3', content: 'Cook a dinner'},
            'task-4': {id: 'task-4', content: 'Charge my phone'},
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To do',
                taskIds: ['task-1','task-2','task-3','task-4'],
            },
            'column-2': {
                id: 'column-2',
                title: 'In Progress',
                taskIds: [],
            },
            'column-3': {
                id: 'column-3',
                title: 'Done',
                taskIds: [],
            }
        },
        columnOrder: ['column-1', 'column-2', 'column-3']
    }

    const start = {
        draggableId: 'task-1',
        type: 'TYPE',
        source: {
            droppableId: 'column-1',
            index: 0,
        },
    };
    
    const update = {
        ...start,
        destination: {
            droppableId: 'column-1',
            index: 1,
        },
    };

    const result = {
        ...update,
        reason: 'DROP',
    };

    const [state, setState] = useState(initialData);

    const onDragStart = (start) => {
        document.body.style.color = 'orange';
        document.body.style.transition = 'background-color 0.2s ease'
    }

    const onDragUpdate = (update) => {
        const {destination} = update;
        const opacity = destination ? destination.index / Object.keys(state.tasks).length : 0;
        document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    }

    const onDragEnd = (result) => {
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';
        const {destination, source, draggableId} = result;
        if(!destination){
            return;
        }

        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){
            return;
        }

        const column = state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        // from this index, we want to remove 1 item
        newTaskIds.splice(source.index, 1);
        // move nothing but insert draggableId
        newTaskIds.splice(destination.index,0,draggableId)

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn,
            }
        }

        setState(newState);
    }
    return (
        <DragDropContext 
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            <div className='flex'>
                {state.columnOrder.map(columnId => {
                    const column = state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
                    // console.log(tasks);

                    return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </div>
        </DragDropContext>
    )
}

export default JobTracker