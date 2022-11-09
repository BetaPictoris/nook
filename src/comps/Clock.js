import React from "react";
import "../styles/Clock.css";

import getTranslation from "../lang";

export default function Clock(props) {
  const [date, setDate] = React.useState(new Date());
  var lang = sessionStorage.getItem("lang");

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  var timeGreet = getTranslation(`${props.ToD}Greet`, lang);

  return (
    <div className="Clock">
      <div className="ClockTime">
        {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
        {date.getSeconds() % 2 === 0 ? ":" : ":"}
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </div>
      <div className="ClockPeriod">
        {timeGreet}!
      </div>
    </div>
  );
}
