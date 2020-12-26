import React, { useState, useEffect } from "react";
import { useSelector,connect } from "react-redux";

import { auth } from "../../firebase";
import { useToasts } from "react-toast-notifications";

import styles from "../../sass/modules/auth/register.module.scss";

import { createOrUpdateUser,roleBasedRedirect } from "../../functions/auth.function";
import {signInUser} from "../../redux/actions/userActions";

/* eslint-disable react/prop-types */
function RegisterComplete({ history,signInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);
  const user = useSelector((state) => state).user;
  useEffect(() => {
    if (user.token) {
      history.push("/");
    }
    console.log(auth.currentUser);
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);
        await user.updateProfile({ displayName: name });
        
        const token = await user.getIdTokenResult();
      
        const mongoResult = await createOrUpdateUser(token.token);
        const userObj = {
          token: token.token,
          user: mongoResult.data,
        };
  
        signInUser(userObj);
        roleBasedRedirect(mongoResult.data,history);


      }
    } catch (err) {
      addToast(err.message, { appearance: "error", autoDismiss: true });
    }
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h1>Register</h1>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            required
            value={email}
            disabled
          />
          <input
            type="text"
            className="form-control"
            placeholder="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            autoFocus
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.formButton} type="submit">Complete registration</button>
        </div>
      </form>
    </div>
  );
}

export default connect(null,{signInUser})(RegisterComplete);
