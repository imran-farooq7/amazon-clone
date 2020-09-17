import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../Reducer";
import { useHistory } from "react-router-dom";

function SubTotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
      /> */}
      <button
        className="subtotal__btnout"
        onClick={(e) => history.push("/payment")}
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default SubTotal;
