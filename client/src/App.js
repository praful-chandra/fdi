/* eslint-disable react/prop-types */
import React, { useEffect,Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./sass/index.scss";
const Header = React.lazy(()=> import("./components/nav/Header.component")); ;
const Footer = React.lazy(()=> import("./components/footer.component")); ;

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const RegisterComplete = React.lazy(() => import("./pages/auth/RegisterComplete"));
const ResetPassword = React.lazy(() => import("./pages/auth/ResetPassword"));
const Dashboard = React.lazy(() => import("./pages/user/Dashboard"));
const AdminDash = React.lazy(() => import("./pages/admin/Dashboard"));
const CreateProduct = React.lazy(() => import("./pages/admin/CreateProduct/index"));
const EditProduct = React.lazy(() => import("./pages/admin/editProduct/index"));
const DealPage = React.lazy(() => import("./pages/deal.page"));
const BestPage = React.lazy(() => import("./pages/bestSeller.page"));
const WishListPage = React.lazy(() => import("./pages/wishList.page"));
const SingleProductPage = React.lazy(() => import("./pages/singleProduct.page"));
const ShopPage = React.lazy(() => import("./pages/shop.page"));
const CartPage = React.lazy(() => import("./pages/cart.page"));
const CheckoutPage = React.lazy(() => import("./pages/checkout.page"));
const ShopCategoryPage = React.lazy(() => import("./pages/shopCategory"));
const ShopSubPage = React.lazy(() => import("./pages/shopSub"));
const ManagerIndex = React.lazy(() => import("./pages/manager"));
const PaymentStatusPage = React.lazy(() => import("./pages/paymentStatus.page"));

import { auth } from "./firebase";

import { currentUser } from "./functions/auth.function";
import { signInUser } from "./redux/actions/userActions";
import { listAllCategories } from "./redux/actions/categoryActions";
import { listAllSubCategories } from "./redux/actions/subCategoryActions";
import { listAllTags } from "./redux/actions/tagActions";
import { listBrands } from "./redux/actions/BrandActions";

//PrivateRoutes
import UserPrivateRoute from "./components/routes/UserPrivate.route";
import AdminPrivateRoute from "./components/routes/AdminPrivate.route";
import ManagerPrivateRoute from "./components/routes/ManagerPrivate.route";

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
    if (brands.length === 0) listBrands();


    //cleanup
    return () => unsubscribe();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:slug" component={SingleProductPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/category/:slug" component={ShopCategoryPage} />
        <Route exact path="/subcategory/:slug" component={ShopSubPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/deal" component={DealPage} />
        <Route exact path="/best" component={BestPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/paymentstatus" component={PaymentStatusPage} />

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

        <ManagerPrivateRoute
          exact
          path="/manager/dashboard"
          component={ManagerIndex}
        />
      </Switch>
      <Footer />
    </Router>
   </Suspense>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  categories: state.category.categories,
  subCategories: state.subCategory.subCategories,
  tags: state.tag.tags,
  brands: state.brand.brands
});

export default connect(mapStateToProps, {
  signInUser,
  listAllCategories,
  listAllSubCategories,
  listAllTags,
  listBrands
})(App);
