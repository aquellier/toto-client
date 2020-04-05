import React from "react";
import Routes from "../router/Index";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
  <div>
    <Router>
      <Routes />
    </Router>
  </div>
  );
}
