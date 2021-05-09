import React from 'react';
import {FilterValueType, TaskType} from './App';

type PropsTodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeTodoListFilter: (filterValue: FilterValueType) => void
}

function TodoList(props: PropsTodoListType) {
    const tasksJSXElement = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id)
        return (
            <li><input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={removeTask}>X</button>
            </li>

        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksJSXElement}
            </ul>

            <div>
                <button onClick={() => props.changeTodoListFilter('all')}>All</button>
                <button onClick={() => props.changeTodoListFilter('active')}>Active</button>
                <button onClick={() => props.changeTodoListFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;