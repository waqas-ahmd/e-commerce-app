import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import Layout from "../Components/Layout";
import { addCartItem, removeCartItem } from "../Store/Actions/cartActions";

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <Layout title="My Cart">
      <div className="cartScreen">
        <div className="cartSummary"></div>

        <div className="cartList">
          {Object.keys(cartItems).map((key) => (
            <div key={key} className="cartItemCard">
              <CartItem
                item={cartItems[key]}
                add={() => dispatch(addCartItem(cartItems[key].id))}
                remove={() => dispatch(removeCartItem(cartItems[key].id))}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CartScreen;
