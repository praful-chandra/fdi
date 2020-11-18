/* eslint-disable react/prop-types */
import React,{useEffect} from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import "./sass/index.scss";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from './pages/auth/Register';
import RegisterComplete from "./pages/auth/RegisterComplete";
import ResetPassword from "./pages/auth/ResetPassword";

import {auth} from "./firebase";

import {signInUser} from "./redux/actions/userActions";


function App({signInUser}) {

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async user =>{

      if(user){
        const userobj = {
          user : {
            email : user.email,
            name : user.displayName
          },
          token : await (await user.getIdTokenResult()).token
        }
  
        signInUser(userobj);
      }

    })
    
    return ()=> unsubscribe();
  },[])

  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/register/complete" component={RegisterComplete}/>
      <Route exact path="/resetpassword" component={ResetPassword}/>

    </Switch>
    </>
  );
}

const mapStateToProps = state =>({
  user : state.user
})

export default connect(mapStateToProps,{signInUser})(App);
