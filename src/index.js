// react components
import React from "react";
import ReactDOM from "react-dom";

// local components
import ContentsProvider from "./context/ContentsProvider";
import App from "./App";

// css
import "./assets/css/public.css";

ReactDOM.render(
  <React.StrictMode>
    <ContentsProvider>
      <App />
    </ContentsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
