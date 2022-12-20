import React from "react";
import { getURL, getWeatherURL, getMetadata } from "./data"

import PlayIco from "@mui/icons-material/PlayArrow";
import PauseIco from "@mui/icons-material/Pause";

export default function AudioController(props) {
  const [playing, setPlaying] = React.useState(false);

  // Play the audio players
  function play() {
    const gameMusicPlayer = document.getElementById("gameMusicPlayer");
    const weatherPlayer = document.getElementById("weatherPlayer");
    
    gameMusicPlayer.play()
    weatherPlayer.play()

    setPlaying(true)
  }

  // Pause the audio players
  function pause() {
    const gameMusicPlayer = document.getElementById("gameMusicPlayer");
    const weatherPlayer = document.getElementById("weatherPlayer");
    
    gameMusicPlayer.pause()
    weatherPlayer.pause()

    setPlaying(false)
  }

  navigator.mediaSession.metadata = getMetadata(props.game)

  return (
    <>
      <audio id="gameMusicPlayer" loop>
        <source
          src={getURL(props.game, props.weather, props.hour)}
          type="audio/ogg"
        />
      </audio>

      <audio id="weatherPlayer" loop>
        <source 
          src={getWeatherURL(props.game, props.weather)}
          type="audio/ogg"
        />
      </audio>

      { !props.hidden&&
        <button className="mediaControl" onClick={playing ? pause : play}>
          {playing ? <PauseIco /> : <PlayIco />}
        </button>
      }
    </>
  )
}