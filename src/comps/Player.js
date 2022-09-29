import React from "react";
import "../styles/Player.css";

import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';

export default function Player() {
  const [date, setDate] = React.useState(new Date());
  const [playing, setPlaying] = React.useState(false);

  var audioPlayer = document.getElementById("audio");
  var audioPlayerRain = document.getElementById("audioRain");

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

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

  return (
    <div className="Player">
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

      <button className="mediaControl" onClick={playAudio}>
        {playing ? <Pause /> : <PlayArrow />}
      </button>
    </div>
  );
}
