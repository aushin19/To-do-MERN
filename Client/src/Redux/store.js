import {createStore, applyMiddleware} from "redux"
import tasksReducers from "./reducer"
import {thunk} from 'redux-thunk';

const middleWare = [thunk];

const store = createStore(tasksReducers, applyMiddleware(...middleWare));

export default store;