import React, { useReducer } from "react";
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
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <div className="font-['f1'] bg-[#faf0e6] h-auto ">
      <Navbar update={forceUpdate}/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/cart" element={<Shoppingcart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products/:category?" element={<ShowProducts />} />
          <Route path="/products/search/:search?" element={<ShowProducts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/product-detail/:id" element={<ProductDetails />}/>
          <Route path="/profile/:option?" element={<Userpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

