import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";

import getTranslation from "../lang";

import "./styles/Settings.css";

/*
 * Settings
 * Settings page
 */
export default function SettingsPage() {
  const lang = sessionStorage.getItem("lang");

  // gameChange settings event
  // When the game settings option changes update the session's storage
  // to have the new value.
  const gameChange = (event) => {
    sessionStorage.setItem("game", event.target.value);
  };

  // weatherChange settings event
  // When the weather settings option changes update the session's storage
  // to have the new value.
  const weatherChange = (event) => {
    sessionStorage.setItem("weather", event.target.value);
  };

  // languageChange settings event
  // When the language settings option changes update the session's storage
  // to have the new value.
  const languageChange = (event) => {
    sessionStorage.setItem("lang", event.target.value);
  };

  // darkModeChange settings event
  // When the darkMode settings option changes update the session's storage to
  // have the new value.
  const darkModeChange = () => {
    if (sessionStorage.getItem("darkMode") === "on") {
      sessionStorage.setItem("darkMode", "off");
    } else {
      sessionStorage.setItem("darkMode", "on");
    }
  };

  return (
    <div
      className={`settingsCompDarkMode settingsCompDarkMode${sessionStorage.getItem(
        "darkMode"
      )}`}
    >
      <FormControl>
        <FormLabel id="gameFormLabel">{getTranslation("game", lang)}</FormLabel>
        <RadioGroup
          aria-labelledby="gameFormLabel"
          value={sessionStorage.getItem("game")}
          name="gameForm"
          onChange={gameChange}
        >
          <FormControlLabel
            value="new-horizons"
            control={<Radio />}
            label={getTranslation("gameNH", lang)}
          />
          <FormControlLabel
            value="new-leaf"
            control={<Radio />}
            label={getTranslation("gameNL", lang)}
          />
          <FormControlLabel
            value="population-growing"
            control={<Radio />}
            label={getTranslation("gamePG", lang)}
          />
          <FormControlLabel
            value="wild-world"
            control={<Radio />}
            label={getTranslation("gameWW", lang)}
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="weatherFormLabel">
          {getTranslation("weather", lang)}
        </FormLabel>
        <RadioGroup
          aria-labelledby="weatherFormLabel"
          value={sessionStorage.getItem("weather")}
          name="weatherForm"
          onChange={weatherChange}
        >
          <FormControlLabel
            value="clear"
            control={<Radio />}
            label={getTranslation("weatherClear", lang)}
          />
          <FormControlLabel
            value="rainy"
            control={<Radio />}
            label={getTranslation("weatherRainy", lang)}
          />
          <FormControlLabel
            value="snowy"
            control={<Radio />}
            label={getTranslation("weatherSnowy", lang)}
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="languageFormLabel">
          {getTranslation("language", lang)}
        </FormLabel>
        <RadioGroup
          aria-labelledby="languageFormLabel"
          value={sessionStorage.getItem("lang")}
          name="languageForm"
          onChange={languageChange}
        >
          <FormControlLabel value="en" control={<Radio />} label="English" />
          <FormControlLabel value="de" control={<Radio />} label="Deutsch" />
          <FormControlLabel value="fr" control={<Radio />} label="Français" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormControlLabel
          control={<Switch checked={sessionStorage.getItem("darkMode") === "on"} />}
          onChange={darkModeChange}
          label={getTranslation("darkMode", lang)}
        />
      </FormControl>
      <p className="legalTxt">
        {`${getTranslation("webPort", lang)} `}
        <a href="https://twitter.com/AnimalRadio_App">
          {getTranslation("animalSounds", lang)}
        </a>
        .<br />
        {getTranslation("notAssociated", lang)}
      </p>
    </div>
  );
}
