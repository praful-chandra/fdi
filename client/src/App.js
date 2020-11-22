/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Header from "./components/nav/Header.component";
import "./sass/index.scss";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/user/Dashboard";
import AdminDash from "./pages/admin/Dashboard";

import { auth } from "./firebase";

import { currentUser } from "./functions/auth.function";
import { signInUser } from "./redux/actions/userActions";
import { listAllCategories } from "./redux/actions/categoryActions";
import { listAllSubCategories } from "./redux/actions/subCategoryActions";

//PrivateRoutes
import UserPrivateRoute from "./components/routes/UserPrivate.route";
import AdminPrivateRoute from "./components/routes/AdminPrivate.route";

function App({
  signInUser,
  categories,
  subCategories,
  listAllCategories,
  listAllSubCategories,
}) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        const mongoResult = await currentUser(token.token);
        const userObj = {
          token: token.token,
          user: mongoResult.data,
        };

        signInUser(userObj);
      }
    });


    //Fetch init data
    if (categories.length === 0) listAllCategories();
    if (subCategories.length === 0) listAllSubCategories();

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <UserPrivateRoute exact path="/user/dashboard" component={Dashboard} />
        <AdminPrivateRoute
          exact
          path="/admin/dashboard"
          component={AdminDash}
        />
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  categories: state.category.categories,
  subCategories: state.subCategory.subCategories,
});

export default connect(mapStateToProps, {
  signInUser,
  listAllCategories,
  listAllSubCategories,
})(App);