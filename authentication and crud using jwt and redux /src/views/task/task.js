

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $, { isEmptyObject } from 'jquery'
// Scripts
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CButton,
} from '@coreui/react'

import { useDispatch, useSelector } from 'react-redux';
import { taskActions, userActions } from "src/_actions";

import ShowMoreText from 'react-show-more-text';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import CreateTask from "./task.create";
import EditTask from "./task.edit";


const TasksList = props => {
  const tasks = useSelector(state => state.tasks);
  const task = useSelector(state => state.tasks.task);
  const addOrUpdateStatus = useSelector(state => state.tasks.addOrUpdateStatus);
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);

  useEffect((task) => {
   if(isLoggedIn != true){
     dispatch(userActions.logout());
     window.location.href = "/#/admin"
   }else{
    if(addOrUpdateStatus){
      toast.success("✓ "+addOrUpdateStatus+"!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    }
    dispatch(taskActions.getAll());
    $('#myTable').DataTable();
   }
    
}, [task]);

  function handleDeleteTask(id) {
    const deleteStatus = dispatch(taskActions.delete(id));
    if(deleteStatus.type === "EMPLOYEE_CATEGORYS_DELETE_SUCCESS"){
      toast.success("✓ Task has been deleted successfully!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    }
  }

  const setActiveTask = (task, index) => {
    setCurrentTask(task);
    setCurrentIndex(index);
  };

  const deleteTask = (id) => {

    confirmAlert({
      title: 'Delete This Task!',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: ' Yes, Delete it!',
          onClick: () => {
           handleDeleteTask(id)
          }
        },
        {
          label: 'Cancel'
        }
      ]
    });
  };

  return (
    <div>
        <ToastContainer />
        <div className="db-breadcrumb">
          <h4 className="breadcrumb-title">Tasks</h4>
          <ul className="db-breadcrumb-list">
            <li><Link to="/admin-index"><i className="fa fa-home" />Home</Link></li>
            <li>Tasks</li>
          </ul>
        </div>
        <CCard>                 
          <CCardHeader className="bg-info">
            All Tasks List
            <CButton
            className="btn btn-sm btn-success"
            style={{float:"right", border:'.001em solid #22963c'}}
            data-toggle="modal"
            data-target="#createTasks"
            >
              <i style={{fontSize: '5px!important'}} className="fa fa-plus"></i><span> Add</span>
            </CButton>
          </CCardHeader>
          {
            tasks.items ?
            <CCardBody>   
              
                <div className="row">
                  {
                      tasks.items &&
                      tasks.items.map((task, index) => (
                  <div className="col-md-6 col-lg-3 col-xl-3 col-sm-6 col-12">
                    <div className="widget-card " style={{background:"gray"}}>					 
                      <div className="wc-item">
                        <h4 className="wc-title">
                          {task.title}
                        </h4>
                        <span className="wc-des">
                        <ShowMoreText
                              lines={1}
                              more='Read more'
                              less='Show less'
                              anchorClass=''
                              expanded={false} 
                            >
                          <ReactQuill value={task.description} theme="bubble" readOnly />
                        </ShowMoreText> 
                        </span>
                        <span className="wc-stats">
                    
                        </span>		
                      
                        <span className="wc-progress-bx">
                          <button className='btn btn-warning btn-xs'
                              onClick={() => setActiveTask(task, task.id)}
                              data-toggle="modal" data-target="#editModal">Edit</button>
                          <button className='btn btn-danger btn-xs ml-1'
                                onClick={() => deleteTask(task.id)}>delete</button>
                        </span>
                      </div>				      
                    </div>
                  </div> 
                  ))
                    }
                </div>


             </CCardBody>   
            :
            <div className="text-center" style={{textAlign: "center", marginTop: "98px", height: "500px"}} >
              <span className="spinner-border spinner-border-lg"></span>
            </div>
          }
          </CCard>
          <CreateTask/>
          {currentTask ? (
            <EditTask
            id                = {currentTask.id}
            category_name     = {currentTask.titlee}
            active_status     = {currentTask.description}
          />
        ) : 
        (
          <div></div>
        )}
       
    </div>

  );
};

export default TasksList;
