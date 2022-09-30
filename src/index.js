import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Set local storage, if it hasn't been set.
if (!sessionStorage.getItem("game")) {
  sessionStorage.setItem("game", "new-horizons")
  sessionStorage.setItem("weather", "clear")
  sessionStorage.setItem("darkMode", "off")
}

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      paper: '#000000',
      default: '#000000',
    },
    primary: {
      main: '#fda658',
    },
    secondary: {
      main: '#eee',
    },
  },
});

const lightTheme = createTheme({})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
