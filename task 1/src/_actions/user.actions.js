import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
};

function login(email, password, from) {
    return dispatch => {
        dispatch(request({ email }));
        dispatch(request({ email }));
        var userEmail = localStorage.getItem('email');
        var userPassword = localStorage.getItem('password');

        if(email == userEmail && password == userPassword){
            window.location.href = "/";
            dispatch(alertActions.success('Login successful'));
        }else{
            dispatch(alertActions.error('Login failed'));
        }

       
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('phone', user.phone);
        localStorage.setItem('country', user.country);
        localStorage.setItem('password', user.password);
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));

    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}