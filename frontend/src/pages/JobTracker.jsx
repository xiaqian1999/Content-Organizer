import React, { useState } from 'react'
import Column from '../components/Column';
import {DragDropContext} from '@hello-pangea/dnd';

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
            }
        },
        columnOrder: ['column-1']
    }

    const [state, setState] = useState(initialData);

    const onDragEnd = result => {

    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map(columnId => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
                // console.log(tasks);

                return <Column key={column.id} column={column} tasks={tasks} />;
            })}
        </DragDropContext>
    )
}

export default JobTracker