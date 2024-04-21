import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
