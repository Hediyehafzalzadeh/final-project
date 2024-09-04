import React, { Component, useReducer, useState } from "react";
import ShopingItem from "./shopingitem";
import axios from "axios";

const ShopingItems = ({ items, onDelete }) => {
  const [totalprice, setTotalprice] = useState(0);
  const [Items, setItems] = useState(items);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const token = JSON.parse(localStorage.getItem("auth_user"));

  let tprice = 0;

  items.map((i) => {
    tprice += i.price * i.quantity;
  });

  const handleprice = () => {
    if (tprice === totalprice) {
      return;
    }
    setTotalprice(tprice);
  };

  handleprice();

  function handleIncrease(id) {
    const items = [...Items];
    const item = items.find((item) => item.id === id);
    item.quantity += 1;
    axios
      .post(
        `http://localhost:8000/api/products/add-to-cart`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        }
      )
      .then((response) => {
        setItems(items);
        console.log(response);
      })
      .catch((error) => {});

    setItems(items);
  }

  function handleDecrease(id) {
    const items = [...Items];
    let item = items.find((item) => item.id === id);
    if (item.quantity > 0) {
      item.quantity -= 1;
      axios
        .post(
          `http://localhost:8000/api/products/decrease`,
          { id },
          {
            headers: {
              Authorization: `Bearer ${token?.access_token}`,
            },
          }
        )
        .then((response) => {
          setItems(items);
          console.log(response);
        })
        .catch((error) => {});
    }
  }

  return (
    <div className="flex flex-col items-end w-4/6">
      <p className="pt-5">Totale Price : $ {totalprice}</p>

      {items.map((shopingitem) => (
        <ShopingItem
          key={shopingitem.id}
          onDelete={onDelete}
          item={shopingitem}
          onInc={handleIncrease}
          onDec={handleDecrease}
        />
      ))}
    </div>
  );
};

export default ShopingItems;
