import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)
  if(loading){
    return <progress className="progress w-full"></progress>
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{from:location}} replace={true}/>;
};

export default PrivateRoutes;
