import React from "react";

import "./styles/App.css";
import "./styles/Player.css";

import Clock from "./comps/Clock";

import SettingsPage from "./pages/Settings";

import BottomNav from "./comps/BottomNav";
import AudioController from "./comps/AudioController/AudioController";

import { ThemeProvider } from "@mui/material/styles";
import { getTheme, getToD } from "./theme";

/*
 * App
 * Main app content and logic
 */
function App() {
  const [date, setDate] = React.useState(new Date());
  const [page, setPage] = React.useState(0);

  const [darkMode, setDarkMode] = React.useState(
    sessionStorage.getItem("darkMode")
  );
  const [game, setGame] = React.useState(sessionStorage.getItem("game"));
  const [weather, setWeather] = React.useState(
    sessionStorage.getItem("weather")
  );
  const [lang, setLang] = React.useState(sessionStorage.getItem("lang"));

  // Listen to updates to user settings
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      setGame(sessionStorage.getItem("game"));
      setWeather(sessionStorage.getItem("weather"));
      setDarkMode(sessionStorage.getItem("darkMode"));
      setLang(sessionStorage.getItem("lang"));
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  let themeType = "light";
  if (darkMode === "on") {
    themeType = "dark";
  }
  const ToD = getToD(date.getHours());
  const theme = getTheme(themeType, date.getHours());

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${ToD} page-${page} darkMode${darkMode}`}>
        <div className="Main">
          <div className="page">
            {page === 0 && <Clock ToD={ToD} />}
            {page === 1 && <SettingsPage />}
            <AudioController
              game={game}
              weather={weather}
              hour={date.getHours()}
              hidden={page !== 0}
            />
          </div>
        </div>

        <BottomNav
          lang={lang}
          page={page}
          onUpdate={(_, newValue) => {
            setPage(newValue);
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
