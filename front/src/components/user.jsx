import React, { useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShoppingCart from "../pages/shopingcart";

const Userpage = () => {
  const { option } = useParams();


  const token = JSON.parse(localStorage.getItem("auth_user"));

  const menu = [
    "shoppingcart",
    "PreviousOrders",
    "ChangePassword",
    "Information",
    "logOut",
  ];

  let history = useNavigate();

  if (!token) {
    return history("/");
  }

  function dashboard() {
    switch (option) {
      case "shoppingcart":
        return <ShoppingCart />;
      case "Previous Orders":
        return <div>there is no orders </div>;
      case "Change Password":
        return;
      case "Information":
        return;
      case "logOut":
        localStorage.removeItem("auth_user");

        return history("/");
    }
  }
  return (
    <div className=" mt-12  bg-[#e3d5ca]  mx-auto  w-5/6 ">
      <div className=" md:text-4xl text-lg flex w-5/6 ">
        <ul className=" w-1/4 text-[#faf0e6]  ">
          {menu.map((m) => (
            <Link to={`/profile/${m}`}>
              <li
                className={
                  "border-2  hover:-translate-y-1  hover:scale-110 transition ease-in-out bg-[#d1b6a6] delay-150 duration-300 cursor-pointer p-4 border-gray-100 " +
                  (option !== m ? " " : " text-[#65574f] ")
                }
              >
                {m}
              </li>
            </Link>
          ))}
        </ul>

        <div className="text-[#65574f] ml-20">{dashboard()}</div>
      </div>
    </div>
  );
};

export default Userpage;
