import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import Layout from "../Components/Layout";

const ProductDetailsScreen = () => {
  const productId = useLocation().pathname.split("/")[2];
  const product = useSelector((state) => state.products.products).find(
    (p) => p.id === productId
  );
  return (
    <Layout title="Product Overview">
      <Container>
        <div
          className="mt-2 product-detail-container"
          style={{
            display: "flex",
            flexDirection: "row",
            border: "2px solid #059669",
            borderRadius: 5,
            padding: 10,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: 10,
            }}
          >
            <img style={{ width: "100%" }} src={product.image} alt="product" />
          </div>

          <div style={{ flex: 1, padding: 10 }}>
            <div className="primaryColor t500" style={{ fontSize: "larger" }}>
              {product.title}
            </div>
            <div>Rs.{product.price}</div>
            <div className="primaryColor t500">Description</div>
            <div>
              natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt.
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ProductDetailsScreen;
