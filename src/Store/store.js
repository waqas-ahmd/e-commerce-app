import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducers from "./Reducers/productReducers";

const rootReducer = combineReducers({
  products: productReducers,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
