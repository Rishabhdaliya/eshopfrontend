import thunkMiddleware from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./RootReducer";

const persistConfig = {
  key: "counter",
  storage,
};

// const reducers = combineReducers({ counter: counterSlice });
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(Store);

export default Store;

export { persistor };
