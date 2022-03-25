import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
const Card = ({ card, handleCartList }) => {
  const { img, name, price, id } = card;
  return (
    <div className="card">
      <img src={img} height="300" width="200" alt="" />
      <div className="card-info">
        <p>Name : {name} </p>
        <p>Price : {price} </p>
        <button onClick={() => handleCartList(id)}>
          Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Card;
