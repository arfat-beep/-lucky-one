import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import "./Store.css";
const Store = () => {
  const [cards, setCards] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleCartList = (id) => {
    const exist = cartList.find((cart) => cart === id);
    if (!exist) {
      setCartList([...cartList, id]);
    }
  };
  const chooseOne = () => {
    if (carts.length > 1) {
      let rand = parseInt(Math.round(Math.random() * carts.length));
      if (rand < 0) {
        rand = 0;
      }
      setCarts([carts[rand]]);
      setCartList([carts[rand].id]);
    }
  };
  const chooseAgain = () => {
    setCartList([]);
  };
  useEffect(() => {
    let tempCarts = [];
    for (const id of cartList) {
      const everyCart = cards.find((card) => card.id === id);
      tempCarts = [...tempCarts, everyCart];
    }
    setCarts(tempCarts);
  }, [cartList]);
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
        <div className="cart-container">
          <div className="cart-sticky">
            <h1>Selected Clothes</h1>
            {carts.map((cart) => (
              <Cart key={cart.id} cart={cart}></Cart>
            ))}
            <div>
              <button onClick={chooseOne}>Choose 1 for me</button>
            </div>
            <div>
              <button onClick={chooseAgain}>Choose Again</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;
