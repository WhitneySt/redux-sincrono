import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./containers/App";
import Products from "./containers/Products";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Products />
    </Provider>
  </React.StrictMode>
);
