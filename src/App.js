import React from "react";
import './styles/App.css';

import Player from './comps/Player'
import Clock from './comps/Clock'

function App() {
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
  const appClass = "App " + ToD

  return (
    <div className={appClass}>
      <div className='MainMedia'>
        <Clock period={ToD}/>
        <Player />
      </div>
    </div>
  );
}

export default App;
