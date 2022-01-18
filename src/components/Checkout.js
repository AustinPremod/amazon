import React from "react";
import "../css/Checkout.css";
import Subtotal from "../components/Subtotal"
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Amazon ad"
        />
        <div className="checkoutTitle">
          <h2>Your shopping Basket</h2>
        </div>
      </div>

      <div className="checkoutRight">
            <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
