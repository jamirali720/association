import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import Loader from "../../utils/Loader";
import useDmProvider from "../../DmProvider/useProvider";

const ProtectedRoute = ({ children }) => {
  const { isCashier } = useDmProvider();
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) return <Loader />;

  return user.email && isCashier ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export default ProtectedRoute;
