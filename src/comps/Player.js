import React from "react";
import "../styles/Player.css";

import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { BsPauseFill } from "@react-icons/all-files/bs/BsPauseFill";

export default function Player() {
  const [date, setDate] = React.useState(new Date());
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  var base = "https://cdn.ozx.me/ac";
  var game = "new-horizons";
  var weather = "clear";
  
  var audioPlayer = document.getElementById("audio");

  function playAudio() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  function play() {
    setPlaying(true)
  }

  function pause() {
    setPlaying(false)
  }

  return (
    <div className="Player">
      <audio id="audio" controls="" loop onPause={pause} onPlay={play}>
        <source
          id="oggSource"
          src={`${base}/${game}/music/${weather}/${date.getHours()}.ogg`}
          type="audio/ogg"
        ></source>
      </audio>

      <button className="mediaControl" onClick={playAudio}>
        {playing ? <BsPauseFill /> : <BsFillPlayFill />}
      </button>
    </div>
  );
}
