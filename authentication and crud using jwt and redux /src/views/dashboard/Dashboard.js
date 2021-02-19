import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { taskActions } from 'src/_actions';
import { authentication } from 'src/_reducers/authentication.reducer';
import Moment from 'moment';
import TasksList from '../task/task'
function HomePage() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.authentication.loggedIn);

    useEffect(() => {
      const loginStatus = localStorage.getItem('login-message')
      if(loginStatus){
      toast.success("Login successfull!");
      localStorage.removeItem('login-message')
      }
      if(!isLoggedIn){
        window.location.href = '/#/login'
      }else{
        dispatch(taskActions.getAll());
      }
    }, []);
    return (
                  
  <div className="container-fluid">
  <ToastContainer/>
  <TasksList/>
  </div>
);
}

export { HomePage };
