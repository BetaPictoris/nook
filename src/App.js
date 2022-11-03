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

function App() {
  const [date, setDate] = React.useState(new Date());
  const [playing, setPlaying] = React.useState(false);
  const [page, setPage] = React.useState(0);

  var audioPlayer = document.getElementById("audio");
  var audioPlayerRain = document.getElementById("audioRain");

  var base = "https://cdn.ozx.me";
  var game = sessionStorage.getItem("game");
  var weather = sessionStorage.getItem("weather");
  var lang = sessionStorage.getItem("lang");

  // This is the weather that is used in the URL
  // because some games don't have per-weather music, but, we can still use
  // rain/snow sounds.
  var urlWeather = weather;
  const noWeatherSupport = ["population-growing", "new-horizons"];

  if (noWeatherSupport.indexOf(game) !== -1) {
    urlWeather = "clear";
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());

    game = sessionStorage.getItem("game");
    weather = sessionStorage.getItem("weather");

    urlWeather = weather;

    if (noWeatherSupport.indexOf(game) !== -1) {
      urlWeather = "clear";
    }

    if (playing) {
      if (
        audioPlayer.src !==
        `${base}/ac/${game}/music/${urlWeather}/${date.getHours()}.ogg`
      ) {
        audioPlayer.src = `${base}/ac/${game}/music/${urlWeather}/${date.getHours()}.ogg`;
        audioPlayer.load();
        audioPlayer.play();
      }

      if (weather === "rainy") {
        audioPlayerRain.volume = 0.7;
        audioPlayerRain.play();
      } else {
        audioPlayerRain.pause();
      }
    }
  }

  function playAudio() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  function play() {
    setPlaying(true);
    if (weather === "rainy") {
      audioPlayerRain.volume = 0.7;
      audioPlayerRain.play();
    } else {
      audioPlayerRain.pause();
    }
  }

  function pause() {
    setPlaying(false);
    audioPlayerRain.pause();
  }

  function getToD() {
    var hour = date.getHours();

    if (hour >= 5 && hour <= 9) {
      return "morning";
    } else if (hour >= 10 && hour <= 13) {
      return "noon";
    } else if (hour >= 14 && hour <= 17) {
      return "afternoon";
    } else {
      return "night";
    }
  }

  const ToD = getToD();

  var themePrimary = "#555";

  if (ToD === "morning") {
    themePrimary = "#fda658";
  } else if (ToD === "noon") {
    themePrimary = "#58a2fd";
  } else if (ToD === "afternoon") {
    themePrimary = "#6358fd";
  } else if (ToD === "night") {
    themePrimary = "#3d5c9b";
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
        className={
          "App " +
          ToD +
          " page-" +
          page +
          " darkMode" +
          sessionStorage.getItem("darkMode")
        }
      >
        <audio id="audio" controls="" loop onPause={pause} onPlay={play}>
          <source
            id="oggSource"
            src={`${base}/ac/${game}/music/${urlWeather}/${date.getHours()}.ogg`}
            type="audio/ogg"
          ></source>
        </audio>

        <audio id="audioRain" controls="" loop>
          <source
            id="oggRainSource"
            src={`${base}/sounds/rain.ogg`}
            type="audio/ogg"
          ></source>
        </audio>

        <div className="Main">
          {page === 0 && (
            <div className="listenPage">
              <Clock />
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
