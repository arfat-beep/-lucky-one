import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  const { img, name } = cart;
  return (
    <div className="cart">
      <img src={img} width="75" height="75" alt="" />
      <div className="cart-info">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Cart;
