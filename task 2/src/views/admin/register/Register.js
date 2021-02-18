import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from 'src/_actions';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
   const [inputs, setInputs] = useState({
        email: '',
        fullname : '',
        phone : '',
        country: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { fullname, phone, country, email, password } = inputs;
    const Registering = useSelector(state => state.authentication.Registering);
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => { 
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
        if (email && password && phone && country && fullname) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/#/admin" } };
            dispatch(userActions.register(email, fullname, phone, country, password, from));
        }
    }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
              <form name="form" onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                
                 
                      <CInputGroup className="mb-3 form-group">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name="fullname" placeholder="Enter name"  value={fullname} onChange={handleChange} className={'form-control' + (submitted && !fullname ? ' is-invalid' : '')} />
                            {submitted && !fullname &&
                                <div className="invalid-feedback">Name is required</div>
                            }
                      </CInputGroup>
                  
                      <CInputGroup className="mb-3 form-group">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-envelope-closed" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name="email" placeholder="Enter email"  value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                            {submitted && !email &&
                                <div className="invalid-feedback">Email is required</div>
                            }
                      </CInputGroup>

                      <CInputGroup className="mb-3 form-group">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cis-contact-phone" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name="phone" placeholder="Enter phone"  value={phone} onChange={handleChange} className={'form-control' + (submitted && !phone ? ' is-invalid' : '')} />
                            {submitted && !phone &&
                                <div className="invalid-feedback">Phone is required</div>
                            }
                      </CInputGroup>
                  
                      <CInputGroup className="mb-3 form-group">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-flag-alt" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name="country" placeholder="Enter country"  value={country} onChange={handleChange} className={'form-control' + (submitted && !country ? ' is-invalid' : '')} />
                            {submitted && !country &&
                                <div className="invalid-feedback">Country is required</div>
                            }
                      </CInputGroup>
                  
                  
                  <CInputGroup className="mb-4 form-group">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                      </CInputGroup> 

               <div className="form-group">
               <CButton onClick={handleSubmit} color="success" block> 
                                {Registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Create Account
                </CButton>
                </div>
                  <Link className="pt-4 mt-5" to="/login" block>Already have an account? Back to Login Page.</Link>
                </form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
