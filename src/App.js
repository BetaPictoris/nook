import './styles/App.css';

import Player from './comps/Player'
import Clock from './comps/Clock'

function App() {
  return (
    <div className="App noon">
      <div className='MainMedia'>
        <Clock />
        <Player />
      </div>
    </div>
  );
}

export default App;
