import { userConstants } from '../_constants/user.constants';
import { userService } from '../_services/user.service';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    register
};

function login(email, password, from) {
    return dispatch => {
        dispatch(request({ email, password }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                   if(user != undefined || user != null){
                    window.location.href= '/#/admin-index';
                    dispatch(alertActions.success('Login successful'));
                   }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}




function register(email, fullname, phone, country, password, from) {
    return dispatch => {
        dispatch(request({ email, fullname, phone, country, password }))
        userService.register(email, fullname, phone, country, password)
            .then(
                user => { 
                    dispatch(success(user));
                   if(user != undefined || user != null){
                    window.location.href= '/#/login';
                    dispatch(alertActions.success('Registration successful'));
                   }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}