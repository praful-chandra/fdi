import React, { useState,useEffect } from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

import {auth} from "../../firebase";
import { useToasts } from 'react-toast-notifications';

import styles from "../../sass/modules/auth/register.module.scss"; 


function Register({history}) {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();

  const user = useSelector(state=>state).user;

  useEffect(()=>{
    if(user.token){
        history.push("/")
    }
  },[user])

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
          <button className={styles.formButton} type="submit">Sign up</button>
          <p>
            Already have an account? <Link to="/login"><span>Login</span></Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
