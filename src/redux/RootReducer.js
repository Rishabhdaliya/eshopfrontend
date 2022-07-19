import { combineReducers } from "redux";
import Reducer from "./reducer";

const rootReducer = combineReducers({
  Data: Reducer,
});

export default rootReducer;
