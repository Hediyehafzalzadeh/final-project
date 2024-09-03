import React from "react";
import { Link } from "react-router-dom";
const searchbox = ({ searchinput, handleChange }) => {
  localStorage.setItem("search", searchinput);
  return (
    <div className=" relative my-auto">
      <input
        value={searchinput}
        onChange={handleChange}
        className="w-[32rem] md:h-12 border-2 mr-10   rounded-md border-zinc-400 "
        v-model="value1"
        placeholder="Search"
      ></input>
      <Link
        to={`/products?q=${searchinput}`}
        className=" absolute top-0 mr-12 right-0 cursor-pointer  pi pi-search md:text-3xl text-zinc-500"
      >
        {" "}
      </Link>
    </div>
  );
};

export default searchbox;
