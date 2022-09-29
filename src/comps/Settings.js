import * as React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';

export default function Settings() {
  const gameChange = (event) => {
    sessionStorage.setItem("game", event.target.value)
  }

  const weatherChange = (event) => {
    sessionStorage.setItem("weather", event.target.value)
  }

  const darkModeChange = (event) => {
    if (sessionStorage.getItem("darkMode") === "on") {
      sessionStorage.setItem("darkMode", "off")
    } else {
      sessionStorage.setItem("darkMode", "on")
    }
  }

  return (
    <div className='settingsComp'>
    <FormControl>
      <FormLabel id="gameFormLabel">Game</FormLabel>
      <RadioGroup
        aria-labelledby="gameFormLabel"
        defaultValue={sessionStorage.getItem("game")}
        name="gameForm"
        onChange={gameChange}
      >
        <FormControlLabel value="new-horizons" control={<Radio />} label="New Horizons" />
        <FormControlLabel value="new-leaf" control={<Radio />} label="New Leaf" />
        <FormControlLabel value="population-growing" control={<Radio />} label="Population Growing" />
        <FormControlLabel value="wild-world" control={<Radio />} label="Wild World" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="weatherFormLabel">Weather</FormLabel>
      <RadioGroup
        aria-labelledby="weatherFormLabel"
        defaultValue={sessionStorage.getItem("weather")}
        name="weatherForm"
        onChange={weatherChange}
      >
        <FormControlLabel value="clear" control={<Radio />} label="Clear" />
        <FormControlLabel value="rainy" control={<Radio />} label="Rain" />
        <FormControlLabel value="snowy" control={<Radio />} label="Snow" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormControlLabel control={sessionStorage.getItem("darkMode")==="on" ? <Switch defaultChecked/> : <Switch />} onChange={darkModeChange} label="Dark mode" />
      <FormControlLabel control={sessionStorage.getItem("townBell")==="on" ? <Switch defaultChecked/> : <Switch />} disabled label="Town bell" />
    </FormControl>
    <p className='legalTxt'>
      This is a web port of <a href="https://twitter.com/AnimalRadio_App">Animal Sounds</a>.
      <br></br>
      Not associated with or endorsed by Nintendo, Animal Sounds, or Animal Radio.
    </p>
    </div>
  );
}
