import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InputContainer from "../Components/InputContainer";
import Image from "../assets/cart.svg";
import Layout from "../Components/Layout";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  return (
    <Layout title="SIGN IN">
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
          Welcome Back !
        </div>
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
          <div className="t500 primaryColor">Forgot your password?</div>
        </div>
        <Button
          className="mt-1"
          style={{ width: 410 }}
          onClick={() => navigate("/products")}
        >
          Sign In
        </Button>

        <div className="mt-2">NEW HERE?</div>

        <div className="my-1 t500 primaryColor">Create your Account</div>
      </div>
    </Layout>
  );
};

export default LoginScreen;
