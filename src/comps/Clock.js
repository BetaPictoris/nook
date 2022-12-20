import React from "react";
import "./styles/Clock.css";

import getTranslation from "../lang";

// Clock
// Clock comp for main page
export default function Clock(props) {
  return (
    <div className="Clock">
      <div className="ClockTime">
        {props.date.getHours()}:
        {props.date.getMinutes() < 10
          ? `0${props.date.getMinutes()}`
          : props.date.getMinutes()}
      </div>
      <div className="ClockPeriod">
        {getTranslation(`${props.ToD}Greet`, props.lang)}!
      </div>
    </div>
  );
}
