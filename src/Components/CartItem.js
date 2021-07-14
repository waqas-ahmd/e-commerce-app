import React from "react";
import { Button } from "react-bootstrap";
import LinkContainer from "./LinkContainer";
import { IoAdd, IoRemove } from "react-icons/io5";

const CartItem = ({ item, add, remove }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#ddd",
        padding: 5,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 100,
          width: 100,
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            backgroundColor: "#ddd",
          }}
          src={item.image}
          alt="productImage"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: 4,
          paddingLeft: 8,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <LinkContainer to={`/product/${item.id}`}>
            <div className="primaryColor t500">{item.title}</div>
          </LinkContainer>

          <div>Rs.{item.price}</div>
        </div>
        <div>Qty: {item.qty}</div>
        <div style={{ display: "flex", width: "100%" }}>
          <Button onClick={remove} style={{ flex: 1 }}>
            <IoRemove size={24} color="#fff" />
          </Button>
          <Button onClick={add} style={{ flex: 1, marginLeft: 5 }}>
            <IoAdd size={24} color="#fff" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
