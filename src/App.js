import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Index from "./pages/index";
import ProductPage from "./pages/products";
import SingleProductPage from "./pages/singlePriduct";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
function App() {
  return ( 
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:title" strict component={SingleProductPage} />
        <Route path="/products" strict component={ProductPage} />
        <Route path="/" strict component={Index} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
