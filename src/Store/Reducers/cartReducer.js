import { UPDATE_CART_ITEMS } from "../Actions/cartActions";

const initialState = {
  cartItems: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_ITEMS:
      return { ...state, cartItems: action.data };
    default:
      return state;
  }
};
