import React from "react";
import "../css/Checkout.css";
import Subtotal from "../components/Subtotal"
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {

  const [{basket},dispatch]=useStateValue();
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
            {basket.map(item=>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

        </div>
      </div>

      <div className="checkoutRight">
            <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
