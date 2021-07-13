import React from "react";
import { Button } from "react-bootstrap";
import { BsHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import LinkContainer from "./LinkContainer";

const ProductCard = ({ product }) => {
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
          src={product.image}
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
          <LinkContainer to={`/product/${product.id}`}>
            <div className="primaryColor t500">{product.title}</div>
          </LinkContainer>

          <div>Rs.{product.price}</div>
        </div>
        <div>InStock</div>
        <div style={{ display: "flex", width: "100%" }}>
          <Button style={{ flex: 1 }}>
            <FaCartPlus />
          </Button>
          <Button style={{ flex: 1, marginLeft: 5 }}>
            <BsHeartFill />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
