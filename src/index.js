import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import App from "./App";

// Images to preload
const images = ["//cdn.ozx.me//ac/pattern_fallback.png"];
for (const i in images) {
  var image = new Image();
  image.src = images[i];
}

// Set local storage, if it hasn't been set.
if (!sessionStorage.getItem("game")) {
  sessionStorage.setItem("game", "new-horizons");
  sessionStorage.setItem("weather", "clear");
  sessionStorage.setItem("darkMode", "off");
  sessionStorage.setItem("lang", "en");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
