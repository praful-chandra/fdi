import React from "react";

import {Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import "./sass/index.scss";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from './pages/auth/Register';
import RegisterComplete from "./pages/auth/RegisterComplete";


function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/register/complete" component={RegisterComplete}/>

    </Switch>
    </>
  );
}

export default App;
