import React from "react";
import './styles/App.css';

import Player from './comps/Player'
import Clock from './comps/Clock'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import PlayCircleSharp from '@mui/icons-material/PlayCircleSharp';
import PlaylistPlay from '@mui/icons-material/PlaylistPlay';
import Settings from '@mui/icons-material/Settings';

function App() {
  const [date, setDate] = React.useState(new Date());
  const [page, setPage] = React.useState(0);

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
        {page == 0 &&
          <div className="listenPage">
            <Clock period={ToD}/>
            <Player />
          </div>
        }
      </div>
      <Box className="bottomNavBox">
        <BottomNavigation
          showLabels
          value={page}
          onChange={(event, newValue) => {
            setPage(newValue);
          }}
        >
          <BottomNavigationAction label="Listen" icon={<PlayCircleSharp />} />
          <BottomNavigationAction label="Game" icon={<PlaylistPlay />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default App;
