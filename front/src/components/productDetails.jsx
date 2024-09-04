import React, { useEffect, useState, useRef, useReducer } from "react";
import { useParams } from "react-router-dom";
import Like from "./like";
import axios from "axios";
import { Toast } from "primereact/toast";

const ProductDetails = () => {
  const { id } = useParams();
  const [prod, setProd] = useState("");
  const token = JSON.parse(localStorage.getItem("auth_user"));
  const toast = useRef(null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const show = (sev, sum, mess) => {
    toast.current.show({ severity: sev, summary: sum, detail: mess });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token?.access_token}`,
        },
      })
      .then((response) => {
        setProd(response.data);
        console.log(response.data);
      })
      .catch((error) => {});
  }, []);

  function handleLike() {
    axios
      .post(
        `http://localhost:8000/api/products/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        }
      )
      .then(function (response) {
        const product = prod;
        product.liked = !product.liked;
        setProd(product);
        forceUpdate();
      })
      .catch((error) => {});
      
  }

  function Addtocart() {
    // const userToken = JSON.parse(localStorage.getItem("auth_user"));

    axios
      .post(
        "http://localhost:8000/api/products/add-to-cart",
        { id },
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        show("success", "Success", "added To Cart");
      })
      .catch((error) => {
        show("error", "Error", error.message);
      });
  }


  return (
    <div className="mt-10 flex md:text-4xl justify-center text-lg mx-auto bg-[#e3d5ca]  w-4/5 h-auto">
      <img className="w-80 m-20 rounded-lg h-96" src={prod.img} alt="" />
      <div className="p-6 m-20">
        <h1 className="m-10">{prod.name}</h1>
        <h2 className="m-10">${prod.price}</h2>
        <Toast ref={toast} />

        <button
          onClick={Addtocart}
          className="m-10 w-28 transition ease-in-out delay-150 duration-300 rounded-lg hover:-translate-y-1  hover:scale-110  text-[#65574f] bg-[#d1b6a6] h-20 text-xl"
        >
          Add to Cart
        </button>
        <Like liked={prod.liked} onClick={handleLike} />
      </div>
    </div>
  );
};

export default ProductDetails;
