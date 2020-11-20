import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

import LoadingToRedirect from "./LoadingToRedirect.route";
import { currentAdmin } from "../../functions/auth.function";

function AdminPrivateRoute({ children, ...rest }) {
  const { user } = useSelector((state) => state);
  const [ok, setOk] = useState(false);

  const { addToast } = useToasts();

  useEffect(() => {
    if (user && user.token) {
      currentAdmin(user.token)
        .then((res) => {
          setOk(true);
        })
        .catch((err) => {
          addToast(err.response.data.error || err.message, {
            appearance: "warning",
            autoDismiss: true,
          });
        });
    } else {
      setOk(false);
    }
  }, [user]);

  return ok ? <Route {...rest} /> : <LoadingToRedirect />;
}

export default AdminPrivateRoute;
