import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from './App';

type PropsTodoListType = {
    todoListID: string
    tasks: Array<TaskType>
    title: string
    removeTask: (taskID: string, todoListID: string) => void
    changeTodoListFilter: (filterValue: FilterValueType, todoListID: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    filter: FilterValueType
}

function TodoList(props: PropsTodoListType) {

    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        let changeAddTask = (title.trim() !== '') ? props.addTask(title.trim(),props.todoListID) : setError('Title is required');
        setTitle('')
    }

    const tasksJSXElement = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id, props.todoListID)
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListID)
        return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                <input
                    type="checkbox"
                    onChange={onChangeHandler}
                    checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={removeTask}>X</button>
            </li>

        )
    })
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyPressAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTask()
        }
    }
    const onClickSetAllFilter = () => props.changeTodoListFilter('all', props.todoListID)
    const onClickSetActiveFilter = () => props.changeTodoListFilter('active', props.todoListID)
    const onClickSetCompletedFilter = () => props.changeTodoListFilter('completed', props.todoListID)


    return (
        <div>
            <h3>{props.title}<button onClick={()=> props.removeTodoList(props.todoListID)}>X</button></h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeTitle}
                    onKeyPress={onKeyPressAddTask}
                    className={error ? 'error' : ''}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
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
