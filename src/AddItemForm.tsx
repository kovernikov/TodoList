import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from './App';

export type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<string | null>(null)

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyPressAddItemForm = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTask()
        }
    }
    const addTask = () => {
        let changeAddTask = (title.trim() !== '') ? props.addItem(title.trim()) : setError('Title is required');
        setTitle('')
    }

    return (
        <div className="inputpoot">
            <h3> Add new TodoList</h3>
            <input
                value={title}
                onChange={onChangeTitle}
                onKeyPress={onKeyPressAddItemForm}
                className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}

export default AddItemForm;
