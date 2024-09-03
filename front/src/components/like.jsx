import React from "react";

const Like = ({ liked, onClick }) => {
  return (
    <button
      className={
        "pi mt-7 text-red-700 text-3xl" +
        (!liked ? " pi-heart " : " pi-heart-fill ")
      }
      onClick={onClick}
    ></button>
  );
};

export default Like;
