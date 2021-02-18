import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {localStorage.getItem('name')}!</h1>
            <p>You're logged in !!</p>
            <p>Your informations</p>

            <p>Email : {localStorage.getItem('email')}</p>
            <p>Phone : {localStorage.getItem('phone')}</p>
            <p>Country : {localStorage.getItem('country')}</p>

            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { HomePage };