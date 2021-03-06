import { apiUrl } from "../reusable/apiHost"
import { authHeader } from '../_helpers';
import http from "../http-common";

export const taskService = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${apiUrl}tasks/all`, requestOptions).then(handleResponse);
}
function create(task) {
    let token = JSON.parse(localStorage.getItem('token'));
    var raw = JSON.stringify({"title":task.title,"description":task.description});
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' +token },
        body: raw
    };    
    return fetch(`${apiUrl}tasks/create`, requestOptions).then(handleResponse);
}

function update(currentTask) {
    let token = JSON.parse(localStorage.getItem('token'));
    var raw = JSON.stringify({"id":currentTask.id,"title":currentTask.title,"description":currentTask.description});
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' +token },
      body: raw,
      redirect: 'follow'
    };  
return fetch(`${apiUrl}tasks/update`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${apiUrl}tasks/task/${id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}tasks/delete/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}