import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./pages/checkout/CheckOut";
import LogIn from "./pages/log-in/LogIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact>
            <LogIn />
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <CheckOut />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
