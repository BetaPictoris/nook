import React from "react";

import "./styles/App.css";
import "./styles/Player.css";

import Clock from "./comps/Clock";
import SettingsPage from "./comps/Settings";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import PlayCircleSharp from "@mui/icons-material/PlayCircleSharp";
import Settings from "@mui/icons-material/Settings";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";

import getTranslation from "./lang";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const cdnBaseURL = "https://cdn.ozx.me";

/* 
 * App
 * Main app content and logic
 */
function App() {
  const [date, setDate] = React.useState(new Date());
  const [playing, setPlaying] = React.useState(false);
  const [page, setPage] = React.useState(0);
  
  const [game, setGame] = React.useState(sessionStorage.getItem("game"))
  const [weather, setWeather] = React.useState(sessionStorage.getItem("weather"))

  const audioPlayer = document.getElementById("audio");
  const audioPlayerRain = document.getElementById("audioRain");

  const gameNames = {"new-horizons": "New Horizons", "new-leaf": "New Leaf", "population-growing": "Population Growing", "wild-world": "Wild World"}

  const lang = sessionStorage.getItem("lang");
  let ToD = null
  let themePrimary = null;

  // This is the weather that is used in the URL
  // because some games don't have per-weather music, but, we can still use
  // rain/snow sounds.
  let urlWeather = weather;
  const noWeatherSupport = ["population-growing", "new-horizons"];

  if (noWeatherSupport.indexOf(game) !== -1) {
    urlWeather = "clear";
  }

  React.useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());

      setGame(sessionStorage.getItem("game"));
      setWeather(sessionStorage.getItem("weather"));
  
      let inUrlWeather = weather;
  
      if (noWeatherSupport.indexOf(game) !== -1) {
        inUrlWeather = "clear";
      }
  
      if (playing) {
        if (
          audioPlayer.src !==
          `${cdnBaseURL}/ac/${game}/music/${inUrlWeather}/${date.getHours()}.ogg`
        ) {
          if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: `Animal Crossing: ${gameNames[sessionStorage.getItem("game")]}`,
            });
          }
          
          audioPlayer.src = `${cdnBaseURL}/ac/${game}/music/${inUrlWeather}/${date.getHours()}.ogg`;
          audioPlayer.load();
          audioPlayer.play();
        } else if (audioPlayer.pause) {
          audioPlayer.play();
        }
  
        if (weather === "rainy") {
          audioPlayerRain.volume = 0.7;
          audioPlayerRain.play();
        } else {
          audioPlayerRain.pause();
        }
      } else {
        audioPlayer.pause()
        audioPlayerRain.pause()
      }  
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  /*
   * playAudio()
   * Toggle playing state
   */
  function playAudio() {
    if (audioPlayer.paused) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }

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
        <audio id="audio" loop>
          <source
            id="oggSource"
            src={`${cdnBaseURL}/ac/${game}/music/${urlWeather}/${date.getHours()}.ogg`}
            type="audio/ogg"
          ></source>
        </audio>

        <audio id="audioRain" loop>
          <source
            id="oggRainSource"
            src={`${cdnBaseURL}/sounds/rain.ogg`}
            type="audio/ogg"
          ></source>
        </audio>

        <div className="Main">
          {page === 0 && (
            <div className="listenPage">
              <Clock ToD={ToD} />
              <button className="mediaControl" onClick={playAudio}>
                {playing ? <Pause /> : <PlayArrow />}
              </button>
            </div>
          )}
          {page === 1 && (
            <div className="settingsPage">
              <SettingsPage />
            </div>
          )}
        </div>
        <Box className="bottomNavBox">
          <BottomNavigation
            showLabels
            className="bottomNav"
            value={page}
            onChange={(event, newValue) => {
              setPage(newValue);
            }}
          >
            <BottomNavigationAction
              label={getTranslation("listenTabTitle", lang)}
              icon={<PlayCircleSharp />}
            />
            <BottomNavigationAction
              label={getTranslation("settingsTabTitle", lang)}
              icon={<Settings />}
            />
          </BottomNavigation>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
