import React from "react";

import './styles/App.css';
import "./styles/Player.css";

import Clock from './comps/Clock'
import SettingsPage from './comps/Settings'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import PlayCircleSharp from '@mui/icons-material/PlayCircleSharp';
import Settings from '@mui/icons-material/Settings';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';

function App() {
  const [date, setDate] = React.useState(new Date());
  const [playing, setPlaying] = React.useState(false);
  const [page, setPage] = React.useState(0);

  var audioPlayer = document.getElementById("audio");
  var audioPlayerRain = document.getElementById("audioRain");
   
  var base = "https://cdn.ozx.me";
  var game = sessionStorage.getItem("game");
  var weather = sessionStorage.getItem("weather");

  // This is the weather that is used in the URL
  // because some games don't have per-weather music, but, we can still use
  // rain/snow sounds.
  var urlWeather = weather
  const noWeatherSupport = ["population-growing", "new-horizons"]

  if (noWeatherSupport.indexOf(game) !== -1){
    urlWeather = "clear"
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());

    if (date.getMinutes() === 0 && date.getSeconds() === 1) {
      audioPlayer.src = `${base}/ac/${game}/music/${urlWeather}/${date.getHours()}.ogg`
      audioPlayer.load()
      audioPlayer.play()
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
    setPlaying(true)
    if (weather === "rainy") {
      audioPlayerRain.volume = 0.7
      audioPlayerRain.play()
    }
  }

  function pause() {
    setPlaying(false)
    audioPlayerRain.pause()
  }

  function getToD() {
    var hour = date.getHours();

    if (hour >= 5 && hour <= 9) {
      return "morning"
    } else if (hour >= 10 && hour <= 13) {
      return "noon"
    } else if (hour >= 14 && hour <= 17) {
      return "afternoon"
    } else {
      return "night"
    }
  }

  const ToD = getToD()
  
  return (
    <div className={"App " + ToD + " page-" + page}>
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


      <div className='Main'>
        {page === 0 &&
          <div className="listenPage">
            <Clock period={ToD}/>
            <button className="mediaControl" onClick={playAudio}>
              {playing ? <Pause /> : <PlayArrow />}
            </button>
          </div>
        }
        {page === 1 &&
          <div className="settingsPage">
            <SettingsPage />
        </div>
        }
      </div>
      <Box className="bottomNavBox">
        <BottomNavigation
          showLabels
          value={page}
          onChange={(event, newValue) => {
            setPage(newValue);
          }}
        >
          <BottomNavigationAction label="Listen" icon={<PlayCircleSharp />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default App;
