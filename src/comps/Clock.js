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

  function getToD() {
    var hour = date.getHours();
    if (hour >= 5 && hour <= 9) {
      return "Morning";
    } else if (hour >= 10 && hour <= 13) {
      return "Noon";
    } else if (hour >= 14 && hour <= 17) {
      return "Afternoon";
    } else {
      return "Night";
    }
  }
  function getToDLang() {
    var hour = date.getHours();

    if (hour >= 5 && hour <= 9) {
      return getTranslation("timeMorning", lang);
    } else if (hour >= 10 && hour <= 13) {
      return getTranslation("timeNoon", lang);
    } else if (hour >= 14 && hour <= 17) {
      return getTranslation("timeAfternoon", lang);
    } else {
      return getTranslation("timeNight", lang);
    }
  }
  var periodTime = getToDLang();
  var timeGreet = getTranslation(`time${getToD()}Greet`, lang);

  return (
    <div className="Clock">
      <div className="ClockTime">
        {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
        {date.getSeconds() % 2 === 0 ? ":" : ":"}
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </div>
      <div className="ClockPeriod">
        {timeGreet} {periodTime}!
      </div>
    </div>
  );
}
