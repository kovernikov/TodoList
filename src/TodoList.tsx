import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from './App';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';

type PropsTodoListType = {
    filter: FilterValueType
    todoListID: string
    title: string
    tasks: Array<TaskType>
    addTask: (title: string, todoListID: string) => void
    removeTask: (taskID: string, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTodoListFilter: (filterValue: FilterValueType, todoListID: string) => void
    changeTodoListTitle: (title: string, todoListID: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
}

function TodoList(props: PropsTodoListType) {

    const tasksJSXElement = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id, props.todoListID)
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListID)
        const changeTaskTitle = (title: string) => props.changeTaskTitle(t.id, title, props.todoListID)
        return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                <input
                    type="checkbox"
                    onChange={onChangeHandler}
                    checked={t.isDone}/>
                <EditableSpan title={t.title} changeTitle={changeTaskTitle}/>
                {/*<span>{t.title}</span>*/}
                <button onClick={removeTask}>X</button>
            </li>

        )
    })
    const addTask = (title: string) => props.addTask(title, props.todoListID)
    const changeTodoListTitle = (title: string) => props.changeTodoListTitle(title, props.todoListID)

    const onClickSetAllFilter = () => props.changeTodoListFilter('all', props.todoListID)
    const onClickSetActiveFilter = () => props.changeTodoListFilter('active', props.todoListID)
    const onClickSetCompletedFilter = () => props.changeTodoListFilter('completed', props.todoListID)


    return (
        <div className="components">
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
                <button onClick={() => props.removeTodoList(props.todoListID)}>X</button>
            </h3>
            <AddItemForm addItem={addTask} />

            <ul>
                {tasksJSXElement}
            </ul>

            <div>
                <button className={props.filter === 'all' ? 'active-filtr' : ''} onClick={onClickSetAllFilter}>All
                </button>
                <button className={props.filter === 'active' ? 'active-filtr' : ''}
                        onClick={onClickSetActiveFilter}>Active
                </button>
                <button className={props.filter === 'completed' ? 'active-filtr' : ''}
                        onClick={onClickSetCompletedFilter}>Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList;
