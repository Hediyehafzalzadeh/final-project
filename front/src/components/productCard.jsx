import React from "react";
import { Link } from "react-router-dom";
const productCard = ({ item }) => {
  return (
    <div className=" bg-[#e3d5ca] text-[#65574f] rounded-md p-5 transition ease-in-out delay-150 flex justify-center hover:bg-[#efd9ca] w-1/4 items-center hover:-translate-y-1 hover:scale-110  duration-300 text-center">
      <img className="w-1/2 " src={item.img} alt="" />
      <div>
        <Link to={`/products/product-detail/${item.id}`}>
          {" "}
          <h1 className="text-sm md:text-xl">{item.name}</h1>
        </Link>

        <h3 className=" text-sm md:text-2xl">${item.price}</h3>
      </div>
    </div>
  );
};

export default productCard;
