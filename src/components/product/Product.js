import React from "react";
import "./product.css";

function Product({ title, price, rating, image, id }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="emoji">
                {" "}
                ⭐
              </span>
            ))}
        </p>
      </div>
      <img src={image} alt="product" />
      <button className="product__addtocart">Add to basket</button>
    </div>
  );
}

export default Product;
