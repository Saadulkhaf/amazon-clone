import React from "react";
import "./Product.css";

const Product = ({ title, price, rating, image, id }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__proce">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
