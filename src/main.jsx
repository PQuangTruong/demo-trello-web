import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme";
//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </>
);
