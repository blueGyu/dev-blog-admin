import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./routers";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
