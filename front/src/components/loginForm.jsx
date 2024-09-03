import React, { useReducer } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Input from "./input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import _ from "lodash";

function LoginForm() {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [problem, setProblem] = useState();
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const Schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(8).label("Password"),
  };

  let history = useNavigate();

  function validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, Schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  function validateProperty({ name, value }) {
    const obj = { name: value };
    const schema = { name: Schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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

  function login(e) {
    e.preventDefault();
    const nerrors = validate();
    setErrors(nerrors || {});
    if (!_.isEmpty(nerrors)) {
      console.log(errors);
      return;
    }

    axios
      .post("http://main-backend.test/api/auth/login", {
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        let username = data.username;

        localStorage.setItem(
          "auth_user",
          JSON.stringify({
            username: username,
            access_token: response.data.access_token,
          })

        );
        return history("/profile");
      })
      .catch(function (error) {
        console.log(error.response.data);
        setProblem(error.response.data.message);
      });
  }

  return (
    <div className="  bg-[#e3d5ca] rounded-lg text-[#65574f] mt-6 w-4/5 mx-auto">
      <h1 className="  p-24 md:text-5xl text-3xl">Login</h1>
      <div className="flex flex-col items-center ">
        <form onSubmit={login}>
          <p
            className={"text-red-700 text-2xl mb-8" + (problem ? "" : "hidden")}
          >
            {problem}
          </p>
          <Input
            type={"text"}
            name={"username"}
            value={data.username}
            label={"Username"}
            onChange={handleChange}
            error={errors["username"]}
          />
          <Input
            type={"password"}
            name={"password"}
            value={data.password}
            label={"Password"}
            onChange={handleChange}
            error={errors["password"]}
          />

          <button
            className="w-24 mb-8 mx-auto text-2xl content-center rounded-md h-10 border-2 mt-10 border-gray-500"
            onClick={login}
          >
            Login
          </button>
          <p className="my-8 text-xl">
            Don't Have Account ?{" "}
            <Link className=" text-2xl text-red-600" to="/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
