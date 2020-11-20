/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { auth, googleAuthProvider } from "../../firebase";
import { Link } from "react-router-dom";
import styles from "../../sass/modules/auth/register.module.scss";
import { useToasts } from "react-toast-notifications";
import { Button } from "antd";
import { GoogleCircleFilled } from "@ant-design/icons";

import {createOrUpdateUser,roleBasedRedirect} from "../../functions/auth.function";

import {
  signInUser,
  userLoading,
  userLoadingDone,
} from "../../redux/actions/userActions";

const Login = function ({
  signInUser,
  userLoading,
  userLoadingDone,
  history,
  user,
}) {
  useEffect(() => {
    if (user.user) {
      history.push("/");
    }
  }, [user]);

  const [email, setEmail] = useState("chandra.s.praful@gmail.com");
  const [password, setPassword] = useState("password");
  const { addToast } = useToasts();

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      userLoading();
      const result = await auth.signInWithEmailAndPassword(email, password);
      const token = await result.user.getIdTokenResult();
      const mongoResult = await createOrUpdateUser(token.token);
      const userObj = {
        token: token.token,
        user: mongoResult.data,
      };

      signInUser(userObj);

      roleBasedRedirect(mongoResult.data,history);

    } catch (err) {
      addToast(err.message, { appearance: "error", autoDismiss: true });
      userLoadingDone();
    }
  };

  const handleGoogleLogin = () => {
    userLoading();
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const token = await result.user.getIdTokenResult();
        const mongoResult = await createOrUpdateUser(token.token);
        const userObj = {
          token: token.token,
          user: mongoResult.data,
        };
        signInUser(userObj);
        roleBasedRedirect(mongoResult.data,history);

      })
      .catch((err) => {
        addToast(err.message, { appearance: "error", autoDismiss: true });
        userLoadingDone();
      });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h1>Welcome back </h1>
          <input
            type="email"
            name="email"
            className="form-control"
            autoFocus
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link to="/resetpassword">forgot password?</Link>

          <Button
            className={styles.formButton}
            loading={user.userLoading}
            onClick={handleSubmit}
            disabled={!email || !password}
          >
            Login
          </Button>
          <br />

          <Button
            danger
            type="primary"
            icon={<GoogleCircleFilled />}
            shape="round"
            onClick={handleGoogleLogin}
          >
            Login with google
          </Button>
          <br />
          <p>
            New here?{" "}
            <Link to="/register">
              <span>Signup</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  signInUser,
  userLoading,
  userLoadingDone,
})(Login);
