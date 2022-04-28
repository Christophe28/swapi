import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import "./styles/index.scss";

ReactDOM.render(
    <Router basename={process.env.BASENAME}>
      <App />
    </Router>,
  document.getElementById("root")
);
