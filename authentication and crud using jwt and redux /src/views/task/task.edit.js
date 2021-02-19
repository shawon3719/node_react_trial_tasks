
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CInputCheckbox,
  CSwitch,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import TaskDataService from "src/_services/combined.service";
import { taskActions } from "src/_actions";
import ReactQuill from 'react-quill';
import toolbarOptions  from "src/reusable/toolbarOptions"

const EditTask = props => {
  const user = useSelector(state => state.authentication.user);
  const initialTaskState = {
    id                : props,
    title     : '',
    description     : ''
  };
  const [currentTask, setCurrentTask] = useState(initialTaskState);
  const [taskImage, setTaskImage] = useState("");
  const [imgData, setImgData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getTaskByID(props.id)
  }, [props.id]);

  const getTaskByID = id => {
    TaskDataService.getTask(id)
      .then(response => {
        setCurrentTask(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });  
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value, updated_by  : user.firstName+' '+user.lastName });
  };

  function handleEditCheckChange(e){
    const { checked } = e.target;
    setCurrentTask(currentTask => ({ ...currentTask, active_status: checked, updated_by  : user.firstName+' '+user.lastName }));
  }

  function handleDescChange (value){
    setCurrentTask(currentTask => ({ ...currentTask, description: value}));
  }
  const updateTask = () => {
    setSubmitted(true);
    if (currentTask.title && currentTask.description) {
        dispatch(taskActions.update(currentTask));
        $('#editModal').modal('toggle');
        $('.modal-backdrop').remove();   
    }
  };
  return (
    <div>
      {currentTask ? (
        <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header bg-warning text-white">
                <h5 className="modal-title" id="editModal">Update This Task</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <CForm >
                <CFormGroup row>
                    <CCol md="12">
                      <CFormGroup>
                          <CLabel htmlFor="title">Title <span className="requiredText">*</span></CLabel>
                          <CInput type="text" className={'form-control' + (submitted && !currentTask.title ? ' is-invalid' : '')} value={currentTask.title} id="title" name='title' onChange={handleChange} placeholder="Enter Title." />
                          {submitted && !currentTask.title &&
                                <div className="invalid-feedback">Employee Category Name is required</div>
                            }
                      </CFormGroup>
                    </CCol>
                    <CCol md="12">
                      <CFormGroup>
                          <CLabel htmlFor="title">Description <span className="requiredText">*</span></CLabel>
                         <ReactQuill name="description" value={currentTask.description} onChange={handleDescChange} className="ql-custom" modules={{ toolbar: toolbarOptions }}/>
                          {submitted && !currentTask.desccription &&
                                <div className="invalid-feedback">Description is required</div>
                            }
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>
                  <div style={{textAlign: 'center'}}>
                    <CButton onClick={updateTask} size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
                    {" "}
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                  </div>
                  </CForm>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
              </div>
            </div>
          </div>
        </div>
      ) : 
      (
        <div>
          <br />
        </div>
      )}
    </div>
  );
};

export default EditTask;