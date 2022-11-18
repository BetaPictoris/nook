import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import "./styles/index.css";

import App from "./App";

sessionStorage.clear();
// Set local storage, if it hasn't been set.
if (!sessionStorage.getItem("game")) {
  sessionStorage.setItem("game", "new-horizons");
  sessionStorage.setItem("weather", "clear");
  sessionStorage.setItem("darkMode", "off");
  sessionStorage.setItem("lang", window.navigator.language.split("-")[0]);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
