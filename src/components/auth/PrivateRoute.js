// https://reacttraining.com/react-router/web/api/Redirect

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
  const user = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;