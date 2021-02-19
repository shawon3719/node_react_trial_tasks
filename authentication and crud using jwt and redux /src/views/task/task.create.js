import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CInputCheckbox,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import { taskActions } from 'src/_actions';
import ReactQuill from 'react-quill';
import toolbarOptions  from "src/reusable/toolbarOptions"
function CreateTask() {
    const user = useSelector(state => state.authentication.user);
    const initialTaskState = {
      title        : '',
      description  : '',
    };
    const [task, setTask] = useState(initialTaskState);
    const [submitted, setSubmitted] = useState(false);
    const [state, setinitialState] = useState(false);
    const submitting = useSelector(state => state.tasks.loading);
    const dispatch = useDispatch();

    useEffect(() => {
      setSubmitted(false);
    }, [state]);


    function resetForm(e) {
      e.preventDefault();
      setTask(initialTaskState);
      $('#createForm input[type=file]').val('')
    }
    function handleDescChange(value) {
      setTask(task => ({ ...task, description: value }));
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setTask(task => ({ ...task, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        setinitialState(true);
        if (task.title && task.description) {
            dispatch(taskActions.create(task));   
            $('#createTasks').modal('toggle');
            $('.modal-backdrop').remove(); 
            setTask(initialTaskState)
        }else{
          alert("Fillout all details")
        }
    }

    return (

      <div className="modal fade" id="createTasks" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title" id="createTasks">Create New Task</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <CForm id="createForm" onSubmit={handleSubmit}>
                  <CFormGroup row>
                    <CCol md="12">
                      <CFormGroup>
                          <CLabel htmlFor="title">Title<span className="requiredText">*</span></CLabel>
                          <CInput type="text" className={'form-control' + (submitted && !task.title ? ' is-invalid' : '')} value={task.title} id="title" name='title' onChange={handleChange} placeholder="Enter Title." />
                          {submitted && !task.title &&
                                <div className="invalid-feedback">Title is required</div>
                            }
                      </CFormGroup>
                    </CCol>

                     <CCol md="12">
                      <CFormGroup>
                          <CLabel htmlFor="description">Description <span className="requiredText">*</span></CLabel>
                          <ReactQuill name="description" value={task.description} onChange={handleDescChange} className={'ql-custom' + (submitted && !task.description ? ' is-invalid' : '')} modules={{ toolbar: toolbarOptions }}/>
                            {submitted && !task.description &&
                                <div className="invalid-feedback">Description is required</div>
                            }
                          </CFormGroup>
                    </CCol>

                  </CFormGroup>
                  <div style={{textAlign: 'center'}}>
                    <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" />
                    {submitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Submit
                    </CButton>
                    {" "}
                    <CButton type="reset" onClick={resetForm} size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                  </div>
                </CForm>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default CreateTask ;
