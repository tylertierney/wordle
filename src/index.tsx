import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GameProvider from "./context/gameContext";
import ToastContextProvider from "./context/toastContext";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
