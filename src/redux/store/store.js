import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "../reducers/counterReducers";

const reducer = {
  counter: counterReducers
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
