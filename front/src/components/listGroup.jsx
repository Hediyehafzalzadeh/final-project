import React from "react";
import { Link } from "react-router-dom";

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
  return (
    <ul
      className="md:text-4xl text-lg text-[#faf0e6]
   text-center"
    >
      {items.map((item) => (
        <Link to={`/products/${item.name}`}>
          <li
            onClick={() => onItemSelect(item)}
            key={[item.id]}
            className={
              "border-2 bg-[#d1b6a6] hover:-translate-y-1  hover:scale-110 transition ease-in-out delay-150 duration-300 cursor-pointer p-4 border-[] " +
              (item.name !== selectedItem.name ? " " : " text-[#65574f] ")
            }
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ListGroup;
