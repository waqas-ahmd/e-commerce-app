import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InputContainer from "../Components/InputContainer";
import Image from "../assets/cart.svg";
import Layout from "../Components/Layout";
import LinkContainer from "../Components/LinkContainer";

const RegisterScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  return (
    <Layout title="SIGN UP">
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: 100, width: 100, marginBottom: 10 }}
          src={Image}
          alt="cartImage"
        />
        <div style={{ fontSize: "xx-large", fontWeight: "900", margin: 10 }}>
          Account Registration
        </div>
        <InputContainer style={{ width: 400, maxWidth: "95%" }}>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            placeholder="First Name"
          />
        </InputContainer>
        <InputContainer style={{ width: 400, maxWidth: "95%" }}>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
        </InputContainer>
        <InputContainer style={{ width: 400, maxWidth: "95%" }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email Address"
          />
        </InputContainer>

        <InputContainer style={{ width: 400, maxWidth: "95%" }}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </InputContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: 410,
            marginBottom: 10,
            marginTop: 10,
            maxWidth: "95%",
          }}
        >
          <div>
            <input type="checkbox" /> <label>Remember me</label>
          </div>
        </div>
        <Button className="mt-1" style={{ width: 410, maxWidth: "95%" }}>
          Sign Up
        </Button>

        <div className="mt-2">ALREADY HAVE ONE?</div>

        <LinkContainer to="/sign-in">
          <div className="my-1 t500 primaryColor">Login</div>
        </LinkContainer>
      </div>
    </Layout>
  );
};

export default RegisterScreen;
