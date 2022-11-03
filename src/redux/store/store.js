import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "../reducers/counterReducers";
import { productReducer } from "../reducers/productReducer";

const reducer = {
  counter: counterReducers,
  products: productReducer
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
