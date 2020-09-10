import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              SubTotal (0 items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        displayType={"text"}
        value={0}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default SubTotal;
