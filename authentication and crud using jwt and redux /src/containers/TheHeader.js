import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


import { TheHeaderDropdown }  from './index'
import { userActions } from "src/_actions";

const TheHeader = () => {


  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  useEffect(() => {
    if(isLoggedIn != true){
      dispatch(userActions.logout());
      window.location.href = "/#/admin"
    }
 }, []);

  return (
    <CHeader withSubheader>
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/admin-index">Task 2 for IdeaScale</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
      <CHeaderNav className="px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>
      </CHeader>
  )
}
export default TheHeader
