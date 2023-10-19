import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.js";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/Theme/ui/ThemeProvider.js";
import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
