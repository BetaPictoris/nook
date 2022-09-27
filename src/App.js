import './styles/App.css';

import Player from './comps/Player'
import Clock from './comps/Clock'

function App() {
  return (
    <div className="App">
      <Clock />
      <Player></Player>
    </div>
  );
}

export default App;
