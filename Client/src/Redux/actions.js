import { ADD_TASK, CHECKED_TASK, DELETE_TASK, GET_TASKS } from "./types"
import axios from "axios";
import store from "./store";

const API_URL = 'http://localhost:5000'; 

export const addTask = (data)=> async(dispatch) =>{
    try{
        const res = await axios.post(`${API_URL}/api/add`, {data});
        dispatch({ type: ADD_TASK, payload: res.data.taskName })
    }catch(error){

    }
}

export const getTasks = () => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/api/get`);
        dispatch({ type: GET_TASKS, payload: res.data })
        console.log(store.getState());
    }catch(error){

    }
} 

export const deleteTask = (taskId) => async (dispatch)=>{
    try{
        const deleteTask = await axios.delete(`${API_URL}/api/delete/${taskId}`);
        dispatch({type: DELETE_TASK, payload: taskId})
        console.log(store.getState());
    }catch(error){

    }
} 

export const checkedTask = (taskId, isChecked) => async(dispatch) => {
    try{
        const res = await axios.patch(`${API_URL}/api/patch`, {taskId, isChecked});
        dispatch({ type: CHECKED_TASK, payload: { taskId, isChecked } });
    }catch(error){

    }
}