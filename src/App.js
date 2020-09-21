import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./pages/checkout/CheckOut";
import LogIn from "./pages/log-in/LogIn";
import { auth } from "firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./pages/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HSPqPA0gavyD0xrGa0rJCaTxG0Ux4IYM0Bx0Fr9sck1nchmRmKqmV357PRb4tSH8VOKfva0Vn7FjgYxkPpJ3b1n00pmJ8W7LD"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth().onAuthStateChanged((authUser) => {
      console.log("the user is >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/payment" exact>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
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
