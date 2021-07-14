import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import ProductCard from "../Components/ProductCard";
import { addCartItem } from "../Store/Actions/cartActions";

const ProductsScreen = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

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
              <ProductCard
                product={p}
                addToCart={() => dispatch(addCartItem(p.id))}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsScreen;
