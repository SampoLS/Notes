// react components
import React from "react";
import ReactDOM from "react-dom";

// third party components
import { BrowserRouter } from "react-router-dom";

// local components
import App from "./App";

// css
import "./assets/css/public.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
