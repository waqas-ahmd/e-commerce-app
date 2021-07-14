import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import LinkContainer from "./LinkContainer";
// import NavIcon from "./NavIcon";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../assets/cart.svg";
import AppMenu from "../Screens/AppMenu";

const Layout = ({ children, title }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="layout">
      <AppMenu show={menu} close={() => setMenu(false)} />
      <Navbar style={{ backgroundColor: "#ccc" }} expand="lg" className="p-2">
        <div
          style={{
            width: "99%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              fontSize: "large",
            }}
            className="primaryColor t500"
          >
            {title}
          </div>
          <LinkContainer to="/products">
            <Navbar.Brand>
              <img
                style={{ height: 40, marginLeft: 5 }}
                src={Logo}
                alt="logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <div
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setMenu(true)}
          >
            <IoMenuOutline size={30} color="#059669" />
          </div>
        </div>
      </Navbar>

      <div className="app-container">{children}</div>
    </div>
  );
};

export default Layout;
