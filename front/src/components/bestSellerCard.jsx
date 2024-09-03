import React from "react";
import { Link } from "react-router-dom";
const productCard = ({ value }) => {
  return (
    <div className=" mx-4 h-auto rounded-lg text-[#483c3b] hover:bg-[#e3d5ca] bg-[#efd9ca] items-center   ">
      <div className="mb-3 items-center">
        <img
          src={value.img}
          alt={value.name}
          className="object-scale-down max-h-72   sm:max-h-80 "
        />
      </div>
      <div className="items-center text-center ">
        <Link to={`/products/product-detail/${value.id}`}>
          <h4 className="mb-1 text-sm md:text-2xl  font-semibold">
            {value.name}
          </h4>
        </Link>

        <h6 className="mt-0 text-xs md:text-xl mb-3">${value.price}</h6>
        <div className="mt-5 gap-2 justify-content-center"></div>
      </div>
    </div>
  );
};

export default productCard;
