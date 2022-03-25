import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Store.css";
const Store = () => {
  const [cards, setCards] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  
  const cartList = [];
  const handleCartList = (id) => {
    const exist = cartList.find((cart) => cart === id);
    if (!exist) {
      cartList.push(id);
    }
  };

  return (
    <div>
      <Header></Header>
      <main>
        <div className="card-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleCartList={handleCartList}
            ></Card>
          ))}
        </div>
        <div className="cart">asdf</div>
      </main>
    </div>
  );
};

export default Store;
