import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="cart">
      <img src={cart.img} width="75" height="75" alt="" />
      <div className="cart-info">
        <p>{cart.name}</p>
      </div>
    </div>
  );
};

export default Cart;
