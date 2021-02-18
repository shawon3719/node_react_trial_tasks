// import config from 'config';
import { authHeader } from '../_helpers';
import { apiUrl } from "../reusable/apiHost"
import { toast } from 'react-toastify';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(email, password) {
    var raw = JSON.stringify({"email":email,"password":password});
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: raw
    };

    return fetch(`${apiUrl}users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data));
            localStorage.setItem('token', JSON.stringify(user.token));
            localStorage.setItem('x-auth-token', JSON.stringify(user.token));
            localStorage.setItem('login-message', true);
            toast.error(user.message);
            return user.data;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${apiUrl}users/all`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}users/user/${id}`, requestOptions).then(handleResponse);
}

function register(fullname, email, country, phone, password) {

    alert(fullname);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },


        // body: JSON.stringify()
    };

    return fetch(`${apiUrl}users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}users/delete/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}