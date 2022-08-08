import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Chatra from "@chatra/chatra";

let config = {
  setup: {
    buttonSize: 75,
    colors: {
      buttonText: "#fff",
      buttonBg: "#203546",
    },
  },
  ID: "rrNdQEsnqBf3wTrLD",
};

Chatra("init", config);
Chatra("pageView");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
