import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from 'src/_actions';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const registrationStatus = useSelector(state => state.users.addOrUpdateStatus);
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => { 
      if(registrationStatus){
      toast.success(registrationStatus);
      }
      localStorage.clear()
      dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/#/login" } };
            dispatch(userActions.login(email, password, from));
        }
    }

    return (

        <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
        <ToastContainer />
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <form name="form" onSubmit={handleSubmit}>
                      <h1>Task 2 Login</h1>
                      <p className="text-muted">Sign In to get acess.</p>
                      <CInputGroup className="mb-3 form-group">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-envelope-closed" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                            {submitted && !email &&
                                <div className="invalid-feedback">Email is required</div>
                            }
                      </CInputGroup>
                      <CInputGroup className="mb-4 form-group">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                        <div className="form-group">
                            <button className="btn btn-primary">
                                {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Login
                            </button>
                        </div>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <Link  to="/register" color="link" className="btn btn-info">Register</Link>
                        </CCol>
                      </CRow>
                    </form>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Task 2</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>

        );
}

export { LoginPage };