import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../redux/tasksSlice";

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length === 0) {
            alert('Enter task before adding')
            setText('')
            return;
        }
        dispatch(
            addTask({
                task: text
            })
        )
        setText('')
    }

    const onKeyPress = (event) => {
        if(event.key === 'Enter') {
            onSubmit(event)
        }
    }

    return (
        <div className="add-todo">
            <input
                type="text"
                className="task-input"
                placeholder="Add task"
                value={text}
                onChange={(event) => setText(event.target.value)}
                onKeyPress={onKeyPress}
            ></input>

            <button className="task-button" onClick={onSubmit}>
                Save
            </button>
        </div>
    );
};

export default AddTodo;