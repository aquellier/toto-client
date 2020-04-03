import React from "react";
import Routes from "../router/Index";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Navbar";

export default function App() {
  return (
  <div>
    <Router>
      <NavBar/>
      <Routes />
    </Router>
  </div>
  );
}
