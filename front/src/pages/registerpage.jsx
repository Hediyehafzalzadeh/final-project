import React from "react";
import RegisterForm from "../components/registerForm";

const RegisterPage = ({onRegister}) => {
  return <RegisterForm onRegister={onRegister}/>;
};

export default RegisterPage;
