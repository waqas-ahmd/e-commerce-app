export const UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS";

export const addCartItem = (itemId) => async (dispatch, getState) => {
  const product = getState().products.products.find((p) => p.id === itemId);
  const updatedCartItems = { ...getState().cart.cartItems };

  if (updatedCartItems[itemId]) {
    updatedCartItems[itemId].qty += 1;
  } else {
    updatedCartItems[itemId] = { ...product, qty: 1 };
  }

  dispatch({ type: UPDATE_CART_ITEMS, data: updatedCartItems });
};

export const removeCartItem = (itemId) => async (dispatch, getState) => {
  const updatedCartItems = { ...getState().cart.cartItems };

  if (updatedCartItems[itemId].qty > 1) {
    updatedCartItems[itemId].qty -= 1;
  } else {
    delete updatedCartItems[itemId];
  }

  dispatch({ type: UPDATE_CART_ITEMS, data: updatedCartItems });
};
