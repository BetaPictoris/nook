import React from 'react';
import '../styles/Player.css';

export default function Player() {
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        
        return function cleanup() {
        clearInterval(timerID);
        };
        
        });
        
        function tick() {
        setDate(new Date());
    }

    var base = 'https://cdn.ozx.me/ac'
    var game = 'new-horizons'
    var weather = 'clear'

    function playAudio() {
        var audioPlayer = document.getElementById('audio');
        
        if (audioPlayer.paused) {
            audioPlayer.play()
        } else {
            audioPlayer.pause()
        }
    }

    return (
        <div className="Player">
            <audio id="audio" controls="" loop> 
                <source id="oggSource" src={`${base}/${game}/${weather}/${date.getHours()}.ogg`} type="audio/ogg"></source>
            </audio>

            <button className="mediaControl" onClick={playAudio}>
                A
            </button>
        </div>
    );
}