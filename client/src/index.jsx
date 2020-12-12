import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
