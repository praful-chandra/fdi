import React from "react";
import Navbar from "./components/navbar";
import Index from "./pages/index";
import ProductPage from "./pages/products";
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
        <Route path="/products" strict component={ProductPage} />
        <Route path="/" strict component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
