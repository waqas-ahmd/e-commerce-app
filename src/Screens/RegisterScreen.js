import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InputContainer from "../Components/InputContainer";
import Image from "../assets/cart.svg";
import Layout from "../Components/Layout";

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
        <InputContainer>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            style={{ width: 400 }}
            type="text"
            placeholder="First Name"
          />
        </InputContainer>
        <InputContainer>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            style={{ width: 400 }}
            type="text"
            placeholder="Last Name"
          />
        </InputContainer>
        <InputContainer>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: 400 }}
            type="text"
            placeholder="Email Address"
          />
        </InputContainer>

        <InputContainer>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: 400 }}
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
          }}
        >
          <div>
            <input type="checkbox" /> <label>Remember me</label>
          </div>
        </div>
        <Button className="mt-1" style={{ width: 410 }}>
          Sign In
        </Button>

        <div className="mt-2">ALREADY HAVE ONE?</div>

        <div className="my-1 t500 primaryColor">Login</div>
      </div>
    </Layout>
  );
};

export default RegisterScreen;
