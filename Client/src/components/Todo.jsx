import TodoList from "../components/TodoList"
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {addTask, getTasks} from "../Redux/actions"


const Todo = ()=>{
    const selectTasks = useSelector(state => state.tasks)
    const dispatch = useDispatch();
    const [currText, setText] = useState("");

    useEffect(()=>{
        dispatch(getTasks());
    }, []);
    
    const addTodo = (e)=>{
        e.preventDefault();
        const trimmedText = currText.trim();
        if (trimmedText.length !== 0) {
            dispatch(addTask(trimmedText))
            setText("");
        }
    }

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>TODO APP</h1>
            <div className="wrapper">
                <form>
                    <input id="todo-input" autoComplete="off" value={currText} onChange={handleChange} type="text" placeholder="Write your task here..."></input>
                    <button id="add-button" onClick={addTodo} >ADD  <i className="fa fa-plus"></i></button>
                </form>
                <ul id="todo-list">
                    {
                        selectTasks.map((taskName, index) => (
                        <TodoList key={index} taskId={taskName._id} tasksName={taskName.taskName} isChecked={taskName.isChecked} index={index}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo;
