import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import {Provider} from "react-redux"

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
