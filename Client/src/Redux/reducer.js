import { ADD_TASK, CHECKED_TASK, DELETE_TASK, GET_TASKS } from "../Redux/types";

const initialTasks = {
    tasks: []
};

const tasksReducers = (state = initialTasks, action) => {
    switch (action.type) {
        case ADD_TASK:
            
            return {
                ...state,
                tasks: [{taskName: action.payload, isChecked: false}, ...state.tasks],
            };
        
        case GET_TASKS:
            return {
                tasks: action.payload,
            };

        case DELETE_TASK:
            const updatedList = state.tasks.filter(task => task._id !== action.payload);
            return {
                ...state,
                tasks: updatedList,
            };

        case CHECKED_TASK:
            const checkedTasks = state.tasks.map((task) => {
                if (task._id === action.payload.taskId) {
                    return { ...task, isChecked: action.payload.isChecked};
                }
                return task;
            });
            return {
                ...state,
                tasks: checkedTasks,
            };

        default:
            return state;
    }
};

export default tasksReducers;
