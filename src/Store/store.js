import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./Reducers/productReducer";
import cartReducer from "./Reducers/cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
