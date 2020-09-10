import React from "react";
import "./checkout.css";
import SubTotal from "../../components/subtotal/SubTotal";

function CheckOut() {
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
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
