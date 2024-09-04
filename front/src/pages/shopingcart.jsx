import React, { useState, useEffect, useReducer } from "react";
import ShopingItems from "../components/shopingitems";
import axios from "axios";
import _ from "lodash";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const token = JSON.parse(localStorage.getItem("auth_user"));

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cart", {
        headers: {
          Authorization: `Bearer ${token?.access_token}`,
        },
      })
      .then((response) => {
        if (cart.length === 0 && response.data.length > 0) {
          setCart(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cart]);

  const items = () => {
    let pro = [];
    if (cart && !_.isEmpty(cart)) {
      cart.map((i) => {
        pro.push({ ...i.product, quantity: i.quantity });
      });
    }
    return pro;
  };

  if (cart.length === 0) {
    return <p>ShoppingCart is empty</p>;
  }

  function handleDelete(id) {
    axios
      .post(
        `http://localhost:8000/api/products/delete`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        }
      )
      .then((response) => {
        const newitems = cart.filter((item) => item.product_id !== id);
        console.log(newitems);
        setCart( newitems );
      })
      .catch((error) => {});
  }
  return (
    <div className="flex flex-col items-center text-3xl text-[#65574f]">
      <ShopingItems items={items()} onDelete={handleDelete} />
      <button className=" mx-auto bg-[#d1b6a6] mb-10 rounded-lg h-16 p-3">
        Go To Check Out
      </button>
    </div>
  );
};

export default ShoppingCart;
