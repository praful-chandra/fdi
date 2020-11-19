import React, { useState,useEffect } from "react";
import {auth} from "../../firebase";
import { useToasts } from 'react-toast-notifications';

import styles from "../../sass/modules/auth/register.module.scss";
/* eslint-disable react/prop-types */
function RegisterComplete({history}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { addToast } = useToasts();

    useEffect(()=>{
        setEmail(window.localStorage.getItem('emailForRegistration'))
    },[]);
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try{

        const result = await auth.signInWithEmailLink(email,window.location.href);
        if(result.user.emailVerified){
            window.localStorage.removeItem('emailForRegistration');
            let user = auth.currentUser;
            await user.updatePassword(password);
            await user.updateProfile({displayName : name})
            const idTokenResult = await user.getIdTokenResult();

            //TODO update REDUX store

          
            history.push('/');
        }
      }
      catch (err){
    addToast( err.message, { appearance: 'error', autoDismiss:true });

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
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type="password"
              className="form-control"
              autoFocus
              placeholder="Password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">Complete registration</button>
            
          </div>
        </form>
      </div>
    )
}

export default RegisterComplete
