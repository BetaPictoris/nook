import { createTheme } from "@mui/material/styles";

/*
  getToD
  Returns the time of day (ie. noon) as a string.

  hour    Number    The current hour
*/
export function getToD(hour) {
  if (hour >= 5 && hour <= 9) {
    return "morning";
  } else if (hour >= 10 && hour <= 13) {
    return "noon";
  } else if (hour >= 14 && hour <= 17) {
    return "afternoon";
  }
  return "night";
}

/*
  getToDColor
  Returns a HEX color for a time of day, where hours match that of getToD().

  hour    Number    The current hour
*/
function getToDColor(hour) {
  if (hour >= 5 && hour <= 9) {
    return "#20a9e0";
  } else if (hour >= 10 && hour <= 13) {
    return "#ecbf3c";
  } else if (hour >= 14 && hour <= 17) {
    return "#ecbf3c";
  }
  return "#517bcc";
}

/*
  getTheme
  Returns a MUI.Theme object based off of user set theme and hour.

  theme   String    The theme type to use ("dark" or "light")
  hour    Number    The current hour
*/
export function getTheme(theme, hour) {
  if (theme === "dark") {
    return createTheme({
      palette: {
        type: "dark",
        primary: {
          main: getToDColor(hour),
        },
        secondary: {
          main: "#555",
        },
        background: {
          paper: "#000000",
          default: "#000000",
        },
        text: {
          primary: "#c5c5c5",
          secondary: "#c5c5c5",
          hint: "#c5c5c5",
          disabled: "#c5c5c5",
        },
      },
    });
  }

  return createTheme({
    palette: {
      type: "light",
      primary: {
        main: getToDColor(hour),
      },
    },
  });
}