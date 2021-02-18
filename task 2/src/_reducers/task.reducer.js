import { taskConstants } from '../_constants/task.constants';

export function tasks(state = {}, action) {
    switch (action.type) {
        case taskConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case taskConstants.GETALL_SUCCESS:
            return {
                items: action.tasks.data.sort((a,b) => a.priority - b.priority)
            };
        case taskConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case taskConstants.CREATE_REQUEST:
            return { 
                ...state,
                task: action.error ?
                    null :
                    (state.tasks || []).concat([action.task]),
                    addOrUpdateStatus: "Task has been created successfully",
                submitting: true,
            };
        case taskConstants.CREATE_SUCCESS:
            return {
                    ...state,
            };
        case taskConstants.CREATE_FAILURE:
            return {};

        case taskConstants.GETBYID_REQUEST:
        return {
            ...state,
            currentTask: state.items.map(task =>
                task.id === action.id
                    ? { ...task }
                    : task
            )
        };
        case taskConstants.GETBYID_SUCCESS:
            return {
                ...state,
                currentTask: state.items.filter(task => task.id === action.id)
            };
        case taskConstants.GETBYID_FAILURE:
            return {};
        
        case taskConstants.UPDATE_REQUEST:
        return { submitting: true,
            ...state,
            task: action.error ?
                null :
                (state.tasks || []).concat([action.task]),
            addOrUpdateStatus: "task has been updated successfully"
        };
        case taskConstants.UPDATE_SUCCESS:
            return {
                    ...state,
            };
        case taskConstants.UPDATE_FAILURE:
            return {};
        case taskConstants.DELETE_REQUEST:
            // add 'deleting:true' property to task being deleted
            return {
                ...state,
                deleting: true,
                items: state.items.map(task =>
                    task.id === action.id
                        ? { ...task, deleting: true }
                        : task
                )
            };
        case taskConstants.DELETE_SUCCESS:
            // remove deleted task from state
            return {
                items: state.items.filter(task => task.id !== action.id),
                deleteStatus: "task has been deleted successfully"
            };
        case taskConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to task 
            return {
                ...state,
                items: state.items.map(task => {
                    if (task.id === action.id) {
                        // make copy of task without 'deleting:true' property
                        const { deleting, ...taskCopy } = task;
                        // return copy of task with 'deleteError:[error]' property
                        return { ...taskCopy, deleteError: action.error };
                    }

                    return task;
                })
            };
        default:
            return state
    }
}