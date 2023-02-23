// react components
import React from "react";
import { createRoot } from "react-dom/client";

// local components
import ContentsProvider from "./context/ContentsProvider";
import App from "./App";

// css
import "./assets/css/public.css";

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
  <React.StrictMode>
    <ContentsProvider>
      <App />
    </ContentsProvider>
  </React.StrictMode>,
 )
