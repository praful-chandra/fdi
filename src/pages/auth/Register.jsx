import React, { useState } from "react";
import {auth} from "../../firebase";
import { useToasts } from 'react-toast-notifications';

import styles from "../../sass/modules/auth/register.module.scss";

function Register() {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //callback config
    const config ={
      url : process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp : true
    }
    // ask firebase to send email with registeration link
    await auth.sendSignInLinkToEmail(email, config);
    addToast( `Email is sent to ${email}. click link to complete registration`, { appearance: 'success', autoDismiss:true });

    //saving email to local storage
    window.localStorage.setItem('emailForRegistration',email);

    //clear state
    setEmail('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h1>Register</h1>
          <input
            type="email"
            className="form-control"
            autoFocus
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button type="submit">Sign up</button>
          <p>
            Already have an account? <span>signup</span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
