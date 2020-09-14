import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG26.png"
          alt="logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signinbtn" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button type="submit" onClick={register} className="login__signupbtn">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default LogIn;
