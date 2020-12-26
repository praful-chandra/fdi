import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

import LoadingToRedirect from "./LoadingToRedirect.route";
import { currentManager } from "../../functions/auth.function";

function ManagerPrivateRoute({ children, ...rest }) {
  const {
    user: { token },
  } = useSelector((state) => state);
  const [ok, setOk] = useState(false);

  const { addToast } = useToasts();

  useEffect(() => {
    if (token) {
        currentManager(token)
        .then((res) => {
          setOk(true);
        })
        .catch((err) => {
          addToast(err.response.data.error || err.message, {
            appearance: "warning",
            autoDismiss: true,
          });
        });
      setOk(false);
    } else {
      setOk(false);
    }
  }, [token]);

  return ok && token ? <Route {...rest} /> : <LoadingToRedirect />;
}

export default ManagerPrivateRoute;
