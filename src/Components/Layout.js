import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import LinkContainer from "./LinkContainer";
import NavIcon from "./NavIcon";
// import { FaCartPlus } from "react-icons/fa";
import Logo from "../assets/cart.svg";

const Layout = ({ children, title }) => {
  return (
    <div className="layout">
      <Navbar style={{ backgroundColor: "#ccc" }} expand="lg" className="p-2">
        <div
          style={{
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
          <div className="ml-auto frcc">
            <NavIcon tip="My Cart">
              <Nav.Link>{/* <FaCartPlus size={22} /> */}</Nav.Link>
            </NavIcon>
          </div>
        </div>
      </Navbar>

      <div className="app-container">{children}</div>
    </div>
  );
};

export default Layout;
