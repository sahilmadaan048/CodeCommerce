import React from "react";
import { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
// import { useLogoutMutation } from "../../redux/api/usersApiSlice.js";
// import { logout } from "../../redux/features/auth/authSlice.js";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const [logoutApiCall] = useLogoutMutation();

  // const logoutHandler = async () => {
  //   try {
  //     await logoutApiCall().unwrap();
  //     dispatch(logout());
  //     navigate("/login");
  //   } catch (err) {
  //     console.error(error);
  //   }
  // };

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${showSidebar ? "hidden" : "flex"} xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-black w-[4%] hover:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineHome className="mr-2 mt-[4px]" size={26} />
          <span className="nav-item-name">HOME</span>{" "}
        </Link>
        <Link
          to="/shop"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineShopping className="mr-2 mt-[4px]" size={26} />
          <span className="nav-item-name">SHOP</span>{" "}
        </Link>

        <Link to="/cart" className="flex">
          <div className="flex justify-center items-center transition-transform transform hover:translate-x-2 ">
            <AiOutlineShoppingCart className="mt-[4px] mr-[1rem]" size={26} />
            <span className="nav-item-name">Cart</span>{" "}
          </div>
        </Link>

        <Link to="/favorite" className="flex relative">
          <div className="flex justify-center items-center transition-transform transform hover:translate-x-2">
            <FaHeart className=" mr-2" size={20} />
            <span className="hidden nav-item-name ">Favorites</span>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
