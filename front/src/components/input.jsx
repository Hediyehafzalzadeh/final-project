import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className=" mb-10 ">
      <label className=" mb-4 text-2xl" htmlFor={name}>
        {label}
      </label>{" "}
      <br />
      <input className="w-80 h-14 rounded-md" {...rest} name={name} id={name} />
      {error && <div className=" text-xl text-red-800">{error}</div>}
    </div>
  );
};

export default Input;
