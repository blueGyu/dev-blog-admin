import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./routers";
import GlobalStyle from "./styles/GlobalStyle";
import ResetStyle from "./styles/ResetStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
