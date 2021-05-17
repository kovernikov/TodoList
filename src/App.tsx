import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export  type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    let [filter, setFilter] = useState<FilterValueType>('all')
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
    ])

    // const tasks = array[0]
    // const setTasks = array[1]

    function changeTodoListFilter(filterValue: FilterValueType) {
        setFilter(filterValue)
    }

    function removeTask(taskID: string) {
        const filteredTask = tasks.filter(t => t.id !== taskID)
        console.log(filteredTask)
        setTasks(filteredTask)
    }

    function addTask(title: string) {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false,
        }
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
        // setTasks([{id: v1(), title, isDone: false},...tasks])
    }

    function changeStatus(taskId: string, newValue: boolean) {

        // let task = tasks.find(t => t.id === taskId)
        // if (task) {
        //     task.isDone = isDone;
        // }
        // setTasks([...tasks])

        const updatedTasks = tasks.map(t => t.id === taskId ? {...t, isDone: newValue } : t)
        setTasks(updatedTasks)
    }

    function getFilterTasks() {
        switch (filter) {
            case 'active':
                return tasks.filter(t => !t.isDone)
            case 'completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }


    return (
        <div className="App">
            <TodoList
                tasks={getFilterTasks()}
                title={'What to learn'}
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}
                changeTaskStatus={changeStatus}
                addTask={addTask}
                filter={filter}
            />
        </div>
    )
}

export default App;
