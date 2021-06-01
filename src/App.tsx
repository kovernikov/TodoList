import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';
import AddItemForm from './AddItemForm';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    id: string
    title: string
    filter: FilterValueType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

export  type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    // BLL
    const todolistsID_1 = v1()
    const todolistsID_2 = v1()
    const [todolists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todolistsID_1, title: 'What to learn', filter: 'all'},
        {id: todolistsID_2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todolistsID_1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'React', isDone: false},
        ],
        [todolistsID_2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: false},
            {id: v1(), title: 'Meat', isDone: false},
        ],
    })


    function changeTodoListFilter(filter: FilterValueType, todoListID: string) {
        setTodoLists(todolists.map(tl => tl.id === todoListID ? {...tl, filter: filter} : tl))
    }

    function changeTodoListTitle(title: string, todoListID: string) {
        setTodoLists(todolists.map(tl => tl.id === todoListID ? {...tl, title: title} : tl))
    }

    function removeTask(taskID: string, todoListID: string) {
        tasks[todoListID] = tasks[todoListID].filter(t => t.id !== taskID)
        setTasks({...tasks})
    }

    function addTask(title: string, todoListID: string) {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false,
        }
        const copyTasks = {...tasks}
        copyTasks[todoListID] = [newTask, ...tasks[todoListID]]
        setTasks(copyTasks)

        // const newTasks = [newTask, ...tasks]
        // setTasks(newTasks)
        // setTasks([{id: v1(), title, isDone: false},...tasks])
    }

    function changeStatus(taskID: string, newValue: boolean, todoListID: string) {

        // let task = tasks.find(t => t.id === taskId)
        // if (task) {
        //     task.isDone = isDone;
        // }
        // setTasks([...tasks])

        const copyTasks = {...tasks}
        copyTasks[todoListID] = tasks[todoListID].map(t => t.id === taskID ? {...t, isDone: newValue} : t)
        setTasks(copyTasks)

        // const updatedTasks = tasks.map(t => t.id === taskId ? {...t, isDone: newValue} : t)
        // setTasks(updatedTasks)
    }

    function changeTaskTitle(taskID: string, title: string, todoListID: string) {
        const copyTasks = {...tasks}
        copyTasks[todoListID] = tasks[todoListID].map(t => t.id === taskID ? {...t, title} : t)
        setTasks(copyTasks)
    }

    function removeTodoList(todoListID: string) {
        setTodoLists(todolists.filter(tl => tl.id !== todoListID))
        const copyTasks = {...tasks}
        delete copyTasks[todoListID]
        setTasks(copyTasks)
    }

    function addTodoList(title: string) {
        const newTodoListID = v1()
        const newTodoList: TodoListType = {
            id: newTodoListID,
            title,
            filter: 'all'
        }
        setTodoLists([...todolists, newTodoList])
        setTasks({...tasks, [newTodoListID]: []})
    }

// UI
    function getFilterTasks(tl: TodoListType) {
        switch (tl.filter) {
            case 'active':
                return tasks[tl.id].filter(t => !t.isDone)
            case 'completed':
                return tasks[tl.id].filter(t => t.isDone)
            default:
                return tasks[tl.id]
        }
    }

    const todoListComponents = todolists.map(tl => {
        const tasksForTodoList = getFilterTasks(tl)
        return (
            <div className="App">
                <TodoList
                    key={tl.id}
                    filter={tl.filter}
                    todoListID={tl.id}
                    title={tl.title}
                    tasks={tasksForTodoList}
                    addTask={addTask}
                    removeTask={removeTask}
                    removeTodoList={removeTodoList}
                    changeTodoListFilter={changeTodoListFilter}
                    changeTaskStatus={changeStatus}
                    changeTodoListTitle={changeTodoListTitle}
                    changeTaskTitle={changeTaskTitle}
                />
            </div>
        )
    })
    return (
        <div className="App">
            <AddItemForm addItem={addTodoList}/>
            {todoListComponents}
        </div>
    );

}

export default App;
