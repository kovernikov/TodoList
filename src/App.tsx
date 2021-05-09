import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export  type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    const [filter, setFilter] = useState<FilterValueType>('all')
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ])

    // const tasks = array[0]
    // const setTasks = array[1]

    function changeTodoListFilter(filterValue: FilterValueType) {
        setFilter(filterValue)
    }

    function removeTask(taskID: number) {
        const filteredTask = tasks.filter(t => t.id !== taskID)
        console.log(filteredTask)
        setTasks(filteredTask)
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
            />
        </div>
    )
}

export default App;
