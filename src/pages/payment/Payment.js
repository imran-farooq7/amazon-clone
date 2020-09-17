import React from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../../components/checkout-product/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__delivery">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Lahore</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery address</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery address</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
