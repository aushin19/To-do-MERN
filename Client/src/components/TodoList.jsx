import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from 'react-redux';
import { deleteTask, checkedTask } from '../Redux/actions';
import { useState } from 'react';

const TodoList = ({isChecked, taskId, tasksName})=>{
    const [checked, setChecked] = useState(isChecked)
    const dispatch = useDispatch();

    const deleteTodo = ()=>{
        dispatch(deleteTask(taskId)) 
    }

    const toggleCheck = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);
        dispatch(checkedTask(taskId, newCheckedState));
    }

    return (
        <li key={taskId} className='todo'>
            <input checked={checked} onChange={toggleCheck} className='checkbox' type="checkbox" id={taskId}/>
            <label className="custom-checkbox" htmlFor={taskId}><i className="fa fa-check"></i></label>
            <label htmlFor={taskId} className="todo-text">{tasksName}</label>
            <button onClick={deleteTodo} className="delete-button"><i className="fa fa-trash"></i></button> 
        </li>
    )
}

export default TodoList;