import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
const Card = ({ card, handleCartList }) => {
  return (
    <div className="card">
      <img src={card.img} height="300" width="200" alt="" />
      <div className="card-info">
        <p>Name : {card.name} </p>
        <p>Price : {card.price} </p>
        <button onClick={() => handleCartList(card.id)}>
          Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Card;
