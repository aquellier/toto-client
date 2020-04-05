import React from "react";
import Routes from "../router/Index";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

export default function App() {
  return (
  <div>
    <ThemeProvider>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </div>
  );
}
