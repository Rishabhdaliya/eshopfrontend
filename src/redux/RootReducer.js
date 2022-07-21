import { combineReducers } from "redux";
import ProductReducer from "./Product/ProductReducer";
import AuthReducer from "./Auth/AuthReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  user: AuthReducer,
});

export default rootReducer;
