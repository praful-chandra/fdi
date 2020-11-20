import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LoadingToRedirect from "./LoadingToRedirect.route";

function UserPrivateRoute({ children, ...rest }) {
  const { user } = useSelector((state) => state);

  return user && user.token ? (
    <Route {...rest} />
  ) : (
    <LoadingToRedirect />
  );
}

export default UserPrivateRoute;
