import React from "react";
import Input from "./input";
import Joi from "joi-browser";

import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { Toast } from "primereact/toast";
const ChangePassword = () => {
  const [data, setData] = useState({ current: "", new: "" });
  const [errors, setErrors] = useState({});
  const token = JSON.parse(localStorage.getItem("auth_user"));
  const toast = useRef(null);

  const show = (sev, sum, mess) => {
    toast.current.show({ severity: sev, summary: sum, detail: mess });
  };

  const Schema = {
    current: Joi.string().required().min(8),
    new: Joi.string().required().min(8),
  };

  function validateProperty({ name, value }) {
    const obj = { name: value };
    const schema = { name: Schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }

  function validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, Schema, options);
    if (!error) return null;

    const errors = {};
    console.log(2, error);
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(3, errors);
    return errors;
  }
  const handleChange = ({ currentTarget: input }) => {
    const ndata = { ...data };
    ndata[input.name] = input.value;
    setData(ndata);

    const nerrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) nerrors[input.name] = errorMessage;
    else delete nerrors[input.name];

    setErrors(nerrors);
  };

  function changePassword(e) {
    e.preventDefault();
    const nerrors = validate();
    setErrors(nerrors || {});
    if (!_.isEmpty(nerrors)) {
      return;
    }
    axios
      .post(
        "http://localhost:8000/api/auth/change-password",
        {
          current: data.current,
          new: data.new,
        },
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        }
      )
      .then(function (response) {
        show("success", "Success", "Password changed!");
      })
      .catch(function (error) {
        show("error", "Error", error.response.data.message);
      });
  }
  return (
    <div>
      <form onSubmit={changePassword}>
        <Toast ref={toast} />

        <Input
          type={"password"}
          name={"current"}
          label={"Current Password"}
          value={data.current}
          onChange={handleChange}
          error={errors.current}
        />
        <Input
          type={"password"}
          name={"new"}
          label={"New Password"}
          value={data.new}
          onChange={handleChange}
          error={errors.new}
        />
        <button
          className="w-24 mb-8 mx-auto text-2xl content-center rounded-md h-10 border-2 mt-10 border-gray-500"
          onClick={changePassword}
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
