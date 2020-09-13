import React from "react";
import "./checkout.css";
import SubTotal from "../../components/subtotal/SubTotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../../components/checkout-product/CheckoutProduct";

function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/048ae144-8f4b-4b08-8db0-491634d7d350.jpg._CB485931153__SR970,300_.jpg"
          alt="amazon"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
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
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
