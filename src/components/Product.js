import React from "react";
import "../css/Product.css";
import {useStateValue} from "../StateProvider"

function Product({id,title,image,price,rating}) {
  const[state,dispatch]=useStateValue();
  const addToBasket=()=>{
      dispatch({
        type:'ADD_TO_BASKET',
        item:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating,
        },
      });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
          .fill()
          .map((_, i)=>(
            <p>⭐</p>
          ))}
          
         
        </div>
      </div>
      <img
        src={image}
        alt="Product img"
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
