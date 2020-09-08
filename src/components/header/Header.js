import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        className="header__logo"
      />
      <div className="header__search">
        <input type="search" className="header__search__inner" />
        {/* logo */}
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineon">Hello Guest</span>
          <span className="header__optionlinetwo">Sign In</span>
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
      <div className="header__basketOption">
        <ShoppingBasketIcon />
        <span className="header__optionlinetwo header__basketcount">0</span>
      </div>
    </div>
  );
}

export default Header;
