import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// routes config
import routes from '../routes'
import './TheHeader.css'
import { Link } from 'react-router-dom'
import { systemActions, noticeActions } from '../_actions';

const pageNo = window.location.toString()
const TheHeader = () => {
const dispatch = useDispatch();
    const TheHeaderVar = () => {
      return (
    <div></div>
      )
    }
      return(
        <TheHeaderVar/>
      );
    }
export default TheHeader

