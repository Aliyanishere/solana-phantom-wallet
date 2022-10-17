import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WalletConnection from "./config/wallet-connection";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WalletConnection>
    <App />
    </WalletConnection>
  </React.StrictMode>
);
