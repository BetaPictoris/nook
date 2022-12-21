import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";

import RadioGroup from "@mui/material/RadioGroup";

import getTranslation from "../lang";

const options = [
  {
    name: "game",
    values: [
      { value: "new-horizons", langName: "gameNH" },
      { value: "new-leaf", langName: "gameNL" },
      { value: "population-growing", langName: "gamePG" },
      { value: "wild-world", langName: "gameWW" },
    ],
  },

  {
    name: "weather",
    values: [
      { value: "clear", langName: "weatherClear" },
      { value: "rainy", langName: "weatherRainy" },
      { value: "snowy", langName: "weatherSnowy" },
    ],
  },

  {
    name: "lang",
    values: [
      { value: "en", label: "English" },
      { value: "de", label: "Deutsch" },
      { value: "fr", label: "Français" },
    ],
  },
];

export default function SettingsOptions(props) {
  function onChange(event) {
    if (event.target.name === "darkMode") {
      if (sessionStorage.getItem("darkMode") === "on") {
        sessionStorage.setItem("darkMode", "off");
        return null;
      }

      sessionStorage.setItem("darkMode", "on");
      return null;
    }

    sessionStorage.setItem(event.target.name, event.target.value);
  }

  return (
    <>
      {options.map((option) => (
        <FormControl key={option.name}>
          <FormLabel id={`${option.name}FormLabel`} className="formLabel">
            {getTranslation(option.name, props.lang)}
          </FormLabel>
          <RadioGroup
            aria-labelledby={`${option.name}FormLabel`}
            value={sessionStorage.getItem(option.name)}
            name={option.name}
            onChange={onChange}
          >
            {option.values.map((value) => (
              <FormControlLabel
                key={value.value}
                value={value.value}
                control={<Radio />}
                label={
                  value.label
                    ? value.label
                    : getTranslation(value.langName, props.lang)
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      ))}
      <FormControl>
        <FormControlLabel
          control={
            <Switch
              name="darkMode"
              checked={sessionStorage.getItem("darkMode") === "on"}
            />
          }
          onChange={onChange}
          label={getTranslation("darkMode", props.lang)}
        />
      </FormControl>
    </>
  );
}
