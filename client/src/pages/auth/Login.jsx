/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { auth, googleAuthProvider ,firebaseObj} from "../../firebase";
import { Link } from "react-router-dom";
import styles from "../../sass/modules/auth/register.module.scss";
import { useToasts } from "react-toast-notifications";
import { Button ,Modal} from "antd";
import { GoogleCircleFilled ,PhoneFilled} from "@ant-design/icons";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber,setPhoneNumber] = useState(undefined);
  const [popup,setPopup] = useState(false);

  const { addToast } = useToasts();

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebaseObj.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          // handlePhoneSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  useEffect(()=>{
  setUpRecaptcha();
    setUpRecaptcha();
  },[])
  
  const handlePhoneSubmit = async()=>{
    userLoading();
    
    let appVerifier = window.recaptchaVerifier;
    let num = "+91" + phoneNumber;
    console.log(num);
    auth.signInWithPhoneNumber(num,appVerifier).then(e=>{
      let code = prompt("Enter OTP");
      if( code === null ) return;
      e.confirm(code).then(result=>{
        userLoadingDone();
        handleSubmit(null,result);

      }).catch(err =>{
        addToast(err.message,{appearance : "error" , autoDismiss : true})
        userLoadingDone();

      })
    }).catch(err =>{
      addToast(err.message,{appearance : "error" , autoDismiss : true})

      userLoadingDone();

    });

  }

  

  const loginWithPhone = () =>{
    return <form onSubmit={handlePhoneSubmit}>
      <input
        type="tel"
        name="phoneNumber"
        className="form-control"
        autoFocus
        placeholder="Enter Phone Number"
        required
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{fontSize : "3rem"}}
      />

      <br />




  </form>
  }

  const handleSubmit = async (e,user) => {
    if(e){
      e.preventDefault();
    }

    try {
      userLoading();
      let result ;  
      if(!user){
        result = await auth.signInWithEmailAndPassword(email, password);
      }else{
        result = user;
      }
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
        <div id="recaptcha-container"></div>

      <Modal
        title="Phone Authentication"
        visible={popup}
        confirmLoading={user.userLoading}
        onCancel={()=>{setPopup(false)}}
        // onOk=loading={user.userLoading}
        onOk={()=>{handlePhoneSubmit() ; setPopup(false)}}
        okText="Get OTP"
      >
        {
          loginWithPhone()
        }
      </Modal>


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
          <br/>
          <Button
            
            type="primary"
            icon={<PhoneFilled />}
            shape="round"
            onClick={()=>setPopup(true)}
          >
            Login with phoneNumber
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
