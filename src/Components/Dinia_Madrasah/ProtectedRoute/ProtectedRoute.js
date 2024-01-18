import React from 'react';
import useDmProvider from '../../DmProvider/useProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';
import Loader from '../../utils/Loader';

const ProtectedRoute = ({children}) => {
   
    const { loading, user } = useAuth();
    const location = useLocation();
    if(loading) return <Loader/>

    return user.email || sessionStorage.getItem("token") ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: location.pathname }} />
    );
};

export default ProtectedRoute;