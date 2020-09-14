import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="search" className="header__search__inner" />
        {/* logo */}
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineon">Hello Guest</span>
          <Link to="/login">
            <span className="header__optionlinetwo">Sign In</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionlineon">Returns</span>
          <span className="header__optionlinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineon">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__basketOption">
          <ShoppingBasketIcon />
          <span className="header__optionlinetwo header__basketcount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
