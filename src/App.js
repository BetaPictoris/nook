import React from "react";

import "./styles/App.css";
import "./styles/Player.css";

import Clock from "./comps/Clock";

import SettingsPage from "./pages/Settings";

import BottomNav from "./comps/BottomNav";
import AudioController from "./comps/AudioController/AudioController";

import { createTheme, ThemeProvider } from "@mui/material/styles";


/* 
 * App
 * Main app content and logic
 */
function App() {
  const [date, setDate] = React.useState(new Date());
  const [page, setPage] = React.useState(0);

  const [game, setGame] = React.useState(sessionStorage.getItem("game"))
  const [weather, setWeather] = React.useState(sessionStorage.getItem("weather"))

  // Listen to updates to user settings
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      setGame(sessionStorage.getItem("game"));
      setWeather(sessionStorage.getItem("weather"));
    }, 1000)
    
    return function cleanup() {
      clearInterval(timer);
    };
  })  

  let ToD = null
  let themePrimary = null;

  if (date.getHours() >= 5 && date.getHours() <= 9) {
    ToD = "morning";
  } else if (date.getHours() >= 10 && date.getHours() <= 13) {
    ToD = "noon";
  } else if (date.getHours() >= 14 && date.getHours() <= 17) {
    ToD = "afternoon";
  } else {
    ToD = "night";
  }

  if (ToD === "morning") {
    themePrimary = "#20a9e0";
  } else if (ToD === "noon") {
    themePrimary = "#ecbf3c";
  } else if (ToD === "afternoon") {
    themePrimary = "#ecbf3c";
  } else if (ToD === "night") {
    themePrimary = "#517bcc";
  }

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: themePrimary,
      },
      secondary: {
        main: "#555",
      },
      background: {
        paper: "#000000",
        default: "#000000",
      },
      text: {
        primary: "#c5c5c5",
        secondary: "#c5c5c5",
        hint: "#c5c5c5",
        disabled: "#c5c5c5",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: themePrimary,
      },
    },
  });

  return (
    <ThemeProvider
      theme={
        sessionStorage.getItem("darkMode") === "on" ? darkTheme : lightTheme
      }
    >
      <div
        className={`App ${ToD} page-${page} darkMode${sessionStorage.getItem("darkMode")}`}>
        <div className="Main">
          {page === 0 && (
            <div className="listenPage">
              <Clock ToD={ToD} />
              <AudioController
                game={game}
                weather={weather}
                hour={date.getHours()}
              />
            </div>
          )}
          {page === 1 && (
            <div className="settingsPage">
              <SettingsPage />
            </div>
          )}
        </div>

        <BottomNav page={page} onUpdate={(event, newValue) => { setPage(newValue); }} />
      </div>
    </ThemeProvider>
  );
}

export default App;
