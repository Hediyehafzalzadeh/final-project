import React, { Component } from "react";
import axios from "axios";
import logo from "../images/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Searchbox from "./searchBox";

class navbar extends Component {
  state = {
    searchbar: false,
    searchinput: "",
    token: JSON.parse(localStorage.getItem("auth_user")),
    islogin : this.props.islogin,
    counter: 0,
    role :localStorage.getItem('role')
  };


  componentDidMount() {

    if (this.state.token) {
      axios
        .get("http://localhost:8000/api/cart", {
          headers: {
            Authorization: `Bearer ${this.state.token.access_token}`,
          },
        })
        .then((response) => {
          this.setState({ counter: response.data.length });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  showSearchBar = () => {
    this.setState({ searchbar: !this.state.searchbar });
  };
  handleChange = ({ currentTarget: input }) => {
    const searchinput = input.value;
    this.setState({ searchinput });
  };
  handlesearch = () => {};

  getProfileLink = () => {
    if (this.state.islogin) {
      if(this.state.role === 'admin'){
        return "/admin";
      }else{
        return "/profile";
      }
    }
    return "/login";
  };  

  handleCart = () => {
    if (this.state.islogin) {
      return "/profile/shoppingcart";
    }
    return "/login";
  };

  render() {
    return (
      <header className="header sticky">
        <nav className="flex text-[#faf0e6] nav md:h-20 h-12 bg-[#d1b6a6] max-w-full">
          <Link to="/" className="ml-5 mt-4 sm:w-1/6 w-24">
            <img src={logo} alt="" />
          </Link>
          <ul className="text-center items-center gap-2 flex md:text-3xl text-sm  container ms-1 justify-start justify-items-center w-4/6">
            <NavLink
              to="/products"
              className="hover:text-[#65574f] hover:rounded-md py-4 basis-1/4 ml-3"
            >
              All Products
            </NavLink>
            <NavLink
              to="/products/women"
              className="hover:text-[#65574f]  hover:rounded-md  py-4 basis-1/4 "
            >
              Womwn
            </NavLink>
            <NavLink
              to="/products/men"
              className="hover:text-[#65574f] hover:rounded-md  py-4 basis-1/4 "
            >
              Men
            </NavLink>
            <NavLink
              to=""
              className="hover:text-[#65574f] py-4  hover:rounded-md  basis-1/4 "
            >
              Contact
            </NavLink>
          </ul>
          <div className="flex items-center justify-end w-2/6 rounded-lg text-[#65574f] bg-[#e3d5ca] ">
            <div className=" sm:pr-10 pr-5 ">
              <NavLink
                to={this.getProfileLink()}
                className="hover:text-[#65574f] hover:-translate-y-1  hover:scale-110 transition ease-in-out delay-150 duration-300 sm:text-2xl text-sm pi pi-user pr-4 "
              ></NavLink>

              <NavLink
                to={this.handleCart()}
                className="hover:text-[#65574f] hover:-translate-y-1  hover:scale-110 transition ease-in-out delay-150 duration-300 sm:text-2xl text-sm pi pi-shopping-cart pr-4"
              >
                <span
                  class={
                    "inline-flex items-center rounded-2xl bg-red-100 px-2 py-1 text-sm font-extrabold text-red-800 ring-1 ring-inset ring-red-600/10" +
                    (this.state.counter ? "" : " hidden")
                  }
                >
                  {this.state.counter}
                </span>
              </NavLink>
              <button
                onClick={() => this.showSearchBar()}
                className="hover:text-[#65574f]  text-zinc-500 sm:text-2xl text-sm pi pi-search hover:-translate-y-1  hover:scale-110 transition ease-in-out delay-150 duration-300"
              ></button>
            </div>
          </div>
        </nav>
        <div
          className={
            "nav md:h-20 h-12 bg-[#d1b6a6]  flex justify-end max-w-full" +
            (!this.state.searchbar ? " hidden " : "  ")
          }
        >
          <Searchbox
            searchinput={this.state.searchinput}
            handleChange={this.handleChange}
          />
        </div>
      </header>
    );
  }
}
export default navbar;
