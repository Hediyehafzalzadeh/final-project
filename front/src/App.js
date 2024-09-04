import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./pages/mainpage";
import Shoppingcart from "./pages/shopingcart";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import ShowProducts from "./pages/showproducts";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notfound";
import Userpage from "./components/user";
import Adminpage from "./components/admin";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  const [islogin, setIslogin] = useState(
    !!localStorage.getItem("auth_user") ?? false
  );
  const [, forceUpdate] = useReducer((x) => x + 3, 0);

  const handleLogin = () => {
    setIslogin(true);
   
  };

  const handleLogout = () => {
    setIslogin(false);
    console.log(islogin, "out");
    window.location.reload();
    console.log(islogin, "out");
  };

  return (
    <div className="font-['f1'] bg-[#faf0e6] h-screen ">
      <Navbar islogin={islogin} />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/cart" element={<Shoppingcart />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<RegisterPage onRegister={handleLogin} />}
          />
          <Route path="/products/:category?" element={<ShowProducts />} />
          <Route path="/products/search/:search?" element={<ShowProducts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/:option?" element={<Adminpage />} />
          <Route
            path="/products/product-detail/:id"
            element={<ProductDetails />}
          />
          <Route
            path="/profile/:option?"
            element={<Userpage onLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
