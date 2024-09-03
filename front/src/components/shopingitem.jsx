import React, { useState } from "react";

const ShopingItem = ({ item, onDelete, onInc, onDec }) => {
  const [Item, setItem] = useState(item);

  return (
    <div>
      <div className=" md:m-10 m-3 ">
        <div className="flex  md:text-2xl w-1/2 text-xl md:h-24 h-16 justify-start">
          <img src={item.img} alt="" />
          <span className="md:m-5">{Item.name}</span>
          <span className="md:m-5">${Item.price}</span>
          <span className="md:m-5 "> {Item.quantity}</span>
          <button
            onClick={() => onInc(item.id)}
            className="text-[#d1b6a6] rounded-md p-4 md:m-5 m-2 bg-[#65574f] "
          >
            +
          </button>
          <button
            onClick={() => onDec(item.id)}
            disabled={!item.quantity}
            className={
              " rounded-md m-2 text-[#d1b6a6]  p-4 md:m-5" +
              (item.quantity ? " bg-[#65574f]  " : " bg-gray-200")
            }
          >
            -
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className=" rounded-md p-4 md:m-5 bg-[#faf0e6] border-2 border-[#65574f] m-2 "
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShopingItem;
