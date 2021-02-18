import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HomePage() {
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
      }
    }, []);
    return (
                  
  <div className="container-fluid">
  <ToastContainer/>
  <div className="db-breadcrumb">
    <h4 className="breadcrumb-title">Dashboard</h4>
    <ul className="db-breadcrumb-list">
      <li><Link to="/admin-index"><i className="fa fa-home" />Home</Link></li>
      <li>Dashboard</li>
    </ul>
  </div>	
  </div>
);
}

export { HomePage };



