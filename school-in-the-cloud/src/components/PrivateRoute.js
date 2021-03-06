import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...initialProps }) => {
  return (
    <Route
      {...initialProps}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
