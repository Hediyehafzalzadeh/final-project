import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";
import _ from "lodash";

const Favorites = () => {
  const token = JSON.parse(localStorage.getItem("auth_user"));
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/favorites", {
        headers: {
          Authorization: `Bearer ${token?.access_token}`,
        },
      })
      .then((response) => {
        if (likes.length === 0 && response.data.length > 0) {
          setLikes(response.data);
          console.log(response.data , 88)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const items = () => {
    let pro = [];
    if (likes && !_.isEmpty(likes)) {
      likes.map((i) => {
        pro.push(i.product);
      });
    }
    console.log(pro);
    return pro;
  };

  return (
    <div>
      <div className="flex w-full min-h-full">
        <div className="flex flex-wrap my-10 gap-4 text-center basis-4/5 justify-center">
          {likes.map((i)=><ProductCard key={i.id} item={i.product} />)}
          
        </div>
      </div>
    </div>
  );
};

export default Favorites;
