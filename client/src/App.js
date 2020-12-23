/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch ,BrowserRouter as Router } from "react-router-dom";

import Header from "./components/nav/Header.component";
import "./sass/index.scss";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/user/Dashboard";
import AdminDash from "./pages/admin/Dashboard";
import CreateProduct from "./pages/admin/CreateProduct/index";
import EditProduct from "./pages/admin/editProduct/index";
import DealPage from "./pages/deal.page";
import BestPage from "./pages/bestSeller.page";
import WishListPage from "./pages/wishList.page";
import SingleProductPage from "./pages/singleProduct.page";
import ShopPage from "./pages/shop.page";
import CartPage from "./pages/cart.page";
import CheckoutPage from "./pages/checkout.page";
  
import { auth } from "./firebase";

import { currentUser } from "./functions/auth.function";
import { signInUser } from "./redux/actions/userActions";
import { listAllCategories } from "./redux/actions/categoryActions";
import { listAllSubCategories } from "./redux/actions/subCategoryActions";
import { listAllTags} from "./redux/actions/tagActions";
import { listBrands} from "./redux/actions/BrandActions";

//PrivateRoutes
import UserPrivateRoute from "./components/routes/UserPrivate.route";
import AdminPrivateRoute from "./components/routes/AdminPrivate.route";

function App({
  signInUser,
  categories,
  subCategories,
  tags,
  brands,
  listAllCategories,
  listAllSubCategories,
  listAllTags,
  listBrands
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
    if (tags.length === 0) listAllTags();
    if(brands.length === 0) listBrands();

    
    //cleanup
    return () => unsubscribe();
  }, []);

  return (   
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:slug" component={SingleProductPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/deal" component={DealPage} />
        <Route exact path="/best" component={BestPage} />
        <Route exact path="/cart" component={CartPage} />



        <UserPrivateRoute exact path="/user/dashboard" component={Dashboard} />
        <UserPrivateRoute exact path="/wishlist" component={WishListPage} />
        <UserPrivateRoute exact path="/checkout" component={CheckoutPage} />


        
        <AdminPrivateRoute
          exact
          path="/admin/dashboard"
          component={AdminDash}
        />
        <AdminPrivateRoute
          exact
          path="/admin/newproduct"
          component={CreateProduct}
        />
         <AdminPrivateRoute
          exact
          path="/admin/editProduct/:slug"
          component={EditProduct}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  categories: state.category.categories,
  subCategories: state.subCategory.subCategories,
  tags : state.tag.tags,
  brands : state.brand.brands
});

export default connect(mapStateToProps, {
  signInUser,
  listAllCategories,
  listAllSubCategories,
  listAllTags,
  listBrands
})(App);
