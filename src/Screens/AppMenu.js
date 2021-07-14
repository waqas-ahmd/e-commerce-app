import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import MenuItem from "../Components/MenuItem";

const AppMenu = ({ show, close }) => {
  const navigate = useNavigate();
  const navigateTo = (route) => {
    close();
    setTimeout(() => {
      navigate(route);
    }, 270);
  };
  return (
    <div className={show ? "appMenu visible" : "appMenu"}>
      <div
        onClick={close}
        style={{
          cursor: "pointer",
          position: "absolute",
          right: 13,
          top: 13,
        }}
      >
        <IoCloseOutline size={30} color="#fff" />
      </div>
      <MenuItem onClick={() => navigateTo("/products")}>Home</MenuItem>
      <MenuItem onClick={() => navigateTo("/cart")}>Cart</MenuItem>
      <MenuItem onClick={() => navigateTo("/wish-list")}>Wish List</MenuItem>
      <MenuItem onClick={() => navigateTo("/orders")}>My Orders</MenuItem>
      <MenuItem onClick={() => navigateTo("/sign-in")}>Sign In</MenuItem>
    </div>
  );
};

export default AppMenu;
