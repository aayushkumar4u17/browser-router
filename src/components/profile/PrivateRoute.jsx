import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let TOKEN = sessionStorage.getItem("TOKEN");

  return (
    <Fragment>
      {TOKEN ? <Fragment>{children}</Fragment> : <Navigate to={"/login"} />}
    </Fragment>
  );
};

export default PrivateRoute;
