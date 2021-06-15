import React from "react";
import { useStateValue } from "../Stateprovider";
import "./Cart.css";

const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = (id) =>{
    //remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id:id
    })
}

  return (
    <div className="cart">
      <h4 onClick={() => console.log(basket)}>Cart Items</h4>
      {basket.map((b, i) => (
        <div className="list-items">
        <img src = {b?.image} alt = "" />
        <div className = "details">
          <h3>{b?.name}</h3>
          <h5>{b?.brand}</h5>
          <h3>₹{b?.price}</h3>
          <button onClick ={() => removeFromBasket(b.id)}>Remove from Basket</button>
        </div></div>
      ))}
    </div>
  );
};

export default Cart;
