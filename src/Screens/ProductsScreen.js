import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Components/Layout";
import ProductCard from "../Components/ProductCard";

const ProductsScreen = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <Layout title="PRODUCTS">
      <div className="productList">
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {products.map((p, i) => (
            <div className="p-1 productCard" key={i}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsScreen;
