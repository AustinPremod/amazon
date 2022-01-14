import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <img
        className="headerLogo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      {/* Search */}
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      {/* icons */}
      <div className="headerNav">
        <div className="headerOption">
          <span className="headerOptionLineOne">Hello Guest</span>
          <span className="headerOptionLineTwo">signIn</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& Order</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <div className="headerOptionBasket">
          <ShoppingCartIcon />
          <span className="headerOptionLineTwo HeaderBasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
