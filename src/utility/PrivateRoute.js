import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      render={(routeProps) =>
        sessionStorage.getItem("token") ? (
          <div>
            <Component {...routeProps} />
          </div>
        ) : (
          <Navigate to={"/login"} />
        )
      }
    />
  </Routes>
);

export default PrivateRoute;
