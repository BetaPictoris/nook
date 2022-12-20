import React from "react";
import { getURL, getWeatherURL, getMetadata } from "./data";

import PlayIco from "@mui/icons-material/PlayArrow";
import PauseIco from "@mui/icons-material/Pause";

import "./styles/Player.css";

export default function AudioController(props) {
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    if (playing) {
      play();
    }
  }, [playing, props.game, props.weather, props.hour]);

  // Play the audio players
  function play() {
    const players = [
      document.getElementById("gameMusicPlayer"),
      document.getElementById("weatherPlayer"),
    ];

    for (let i in players) {
      players[i].load();
      players[i].play();
    }

    setPlaying(true);
  }

  // Pause the audio players
  function pause() {
    const players = [
      document.getElementById("gameMusicPlayer"),
      document.getElementById("weatherPlayer"),
    ];

    for (let i in players) {
      players[i].pause();
    }

    setPlaying(false);
  }

  navigator.mediaSession.metadata = getMetadata(props.game);

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

      {!props.hidden && (
        <button className="mediaControl" onClick={playing ? pause : play}>
          {playing ? <PauseIco /> : <PlayIco />}
        </button>
      )}
    </>
  );
}
