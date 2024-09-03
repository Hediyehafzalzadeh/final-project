import React from "react";
import menImg from "../images/photoService/men.jpg";
import { Link } from "react-router-dom";
import womenImg from "../images/photoService/women.jpg";
const firstBanner = () => {
  return (
    <div className=" container mx-auto p-4 text-center items-center flex sm:gap-10 gap-6">
      <div className="basis-1/2">
        <img className="" src={menImg} alt="" />
        <p className="my-5 rounded-md sm:text-4xl text-lg ">Men's Watches</p>
        <Link to={"/products/men"}>
          <button className=" hover:bg-black hover:text-white w-36 h-14 border-2 font-medium font-sans border-slate-950">
            Shop Now
          </button>
        </Link>
      </div>
      <div className=" basis-1/2">
        <img className="" src={womenImg} alt="" />
        <p className="m-5 rounded-md sm:text-4xl text-lg ">Women's Watches</p>
        <Link to={"/products/women"}>
          <button className=" hover:bg-black hover:text-white w-36 h-14 border-2 font-medium font-sans  border-slate-950">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default firstBanner;
