import { taskConstants } from '../_constants/task.constants';
import { taskService } from '../_services/task.service';
import { alertActions } from '.';
import { history } from '../_helpers';

export const taskActions = {
    create,
    update,
    getAll,
    getById,
    delete: _delete
};

function getAll() {
    return dispatch => {
        dispatch(request());

        taskService.getAll()
            .then(
                
                tasks => dispatch(success(tasks)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: taskConstants.GETALL_REQUEST } }
    function success(tasks) { return { type: taskConstants.GETALL_SUCCESS, tasks } }
    function failure(error) { return { type: taskConstants.GETALL_FAILURE, error } }
}

function create(task) {
    return dispatch => {
        dispatch(request(task));
        taskService.create(task)
            .then(
                task => { 
                    dispatch(success());
                    dispatch(alertActions.success('Task has been created successfully..'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(task) { return { type: taskConstants.CREATE_REQUEST, task } }
    function success(task) { return { type: taskConstants.CREATE_SUCCESS, task } }
    function failure(error) { return { type: taskConstants.CREATE_FAILURE, error } }
}


function update(currentTask) {
    return dispatch => {
        dispatch(request(currentTask));
        taskService.update(currentTask)
            .then(
                task => { 
                    dispatch(success());
                    dispatch(alertActions.success('Task has been updated successfully..'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(currentTask) { return { type: taskConstants.UPDATE_REQUEST, currentTask } }
    function success(currentTask) { return { type: taskConstants.UPDATE_SUCCESS, currentTask } }
    function failure(error) { return { type: taskConstants.UPDATE_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request(id));
        taskService.getById(id)
            .then(
                task => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: taskConstants.GETBYID_REQUEST, id } }
    function success(id) { return { type: taskConstants.GETBYID_SUCCESS, id } }
    function failure(id, error) { return { type: taskConstants.GETBYID_FAILURE, id, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        taskService.delete(id)
            .then(
                task => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
            return success(id)
    };

    function request(id) { return { type: taskConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: taskConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: taskConstants.DELETE_FAILURE, id, error } }
}