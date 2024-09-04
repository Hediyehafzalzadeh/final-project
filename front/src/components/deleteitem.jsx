import React, { useState , useEffect} from "react";

const DeleteItem = ({ item, onDelete }) => {
  const [Item, setItem] = useState(item);


  return (
    <div>
      <div className=" md:m-10 m-3 ">
        <div className="flex  md:text-2xl text-xl md:h-24 h-16 justify-start">
          <img src={item.img} alt="" />
          <span className="md:m-5 w-52 ">{Item.name}</span>
          <span className="md:m-5 ">${Item.price}</span>
          <button
            onClick={() => onDelete(item.id)}
            className=" rounded-md p-4 md:m-5 bg-[#faf0e6] border-2 border-[#65574f] m-2 "
          >delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteItem;
