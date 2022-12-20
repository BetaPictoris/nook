import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import PlayCircleSharp from "@mui/icons-material/PlayCircleSharp";
import Settings from "@mui/icons-material/Settings";

import getTranslation from "../lang";

/*
  BottomNav
  The bottom app navigation menu
*/
export default function BottomNav(props) {
  return (
    <Box className="bottomNavBox">
      <BottomNavigation
        showLabels
        className="bottomNav"
        value={props.page}
        onChange={props.onUpdate}
      >
        <BottomNavigationAction
          label={getTranslation("listenTabTitle", props.lang)}
          icon={<PlayCircleSharp />}
        />
        <BottomNavigationAction
          label={getTranslation("settingsTabTitle", props.lang)}
          icon={<Settings />}
        />
      </BottomNavigation>
    </Box>
  );
}
