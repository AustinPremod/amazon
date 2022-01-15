import React from "react";
import "../css/Product.css";
function Product({title,image,price,rating}) {
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
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
