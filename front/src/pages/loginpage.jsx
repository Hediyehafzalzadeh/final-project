import React from "react";
import LoginForm from "../components/loginForm";

const loginPage = ({onLogin}) => {
  return (
    <div>
      <LoginForm onLogin={onLogin}/>
    </div>
  );
};

export default loginPage;
