import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner'
import useAuth from '../useAuth/useAuth';



const PrivateRoute = ({children}) => {
    const {loading, user} = useAuth()
    const location = useLocation();  
    if(loading) {return <Spinner animation="border" />}
    return user.email || sessionStorage.getItem('token') ? children :  <Navigate  to="/login"  state={{ from: location.pathname }}/>
};

export default PrivateRoute;