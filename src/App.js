import './styles/App.css';

import Player from './comps/Player'
import Clock from './comps/Clock'

var base = 'https://cdn.ozx.me/ac'
var game = 'new-horizons'
var weather = 'clear'
var hour = new Date().getHours()
var url = `${base}/${game}/${weather}/${hour}.ogg`


function App() {
  return (
    <div className="App">
      <Clock />
      <Player url={url}></Player>
    </div>
  );
}

export default App;
