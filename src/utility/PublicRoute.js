import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      render={(routeProps) =>
        !sessionStorage.getItem("token") ? (
          <div>
            <Component {...routeProps} />
          </div>
        ) : (
          <Navigate to={"/"} />
        )
      }
    />
  </Routes>
);

export default PublicRoute;
