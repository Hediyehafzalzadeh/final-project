import React, { useState, useEffect } from "react";
import ProductCard from "./bestSellerCard";
import { Carousel } from "primereact/carousel";
import axios from "axios";

const BestSellers = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/bestsellers")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const card = (items) => <ProductCard value={items} />;
  return (
    <div className="flex container text-[#483c3b] mx-auto p-4 text-center items-center ">
      <div className="basis-1/4">
        <h1 className=" pb-3 md:text-4xl text-2xl ">Best Sellers</h1>
        <p className=" pb-3 md:text-xl text-sm font-mono">
          Meet our customer favorites
        </p>
      </div>
      <div className="basis-3/4 w-12 ">
        <Carousel
          value={items}
          numVisible={3}
          numScroll={3}
          className="w-full md:w-auto"
          circular
          autoplayInterval={29000}
          itemTemplate={card}
        />
        <div />
      </div>
    </div>
  );
};

export default BestSellers;
