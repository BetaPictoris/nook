export default function Player(props) {
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
                <source id="oggSource" src={props.url} type="audio/ogg"></source>
            </audio>

            <button className="mediaControl" onClick={playAudio}>
                Play
            </button>
        </div>
    );
}