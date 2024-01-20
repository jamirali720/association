import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import Loader from "../../utils/Loader";
import useDmProvider from "../../DmProvider/useProvider";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { isCashier } = useDmProvider();
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) return <Loader />;
  if (isCashier === false ) {
    toast.warning("You are not allowed person to access this resource. You must be Authorized", {position: toast.POSITION.TOP_RIGHT, toastId: 1})
  }

  return user.email && isCashier ? (
    children 
  ) : (
    <Navigate to="/madrasah" state={{ from: location.pathname }} replace />
  );
};

export default ProtectedRoute;
