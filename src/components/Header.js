import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import{Link} from "react-router-dom"
import { useStateValue } from "../StateProvider";


function Header() {
      const[{basket},dispatch]=useStateValue();

  return (
    <div className="header">
      {/* Logo */}
      <Link to="/">
      <img
        className="headerLogo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      

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
        <Link to="/checkout">
        <div className="headerOptionBasket">
          <ShoppingCartIcon />
          <span className="headerOptionLineTwo HeaderBasketCount">{basket?.length}</span>
        </div>
        </Link>
      
      </div>
    </div>
  );
}

export default Header;
