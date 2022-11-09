import React from "react";
import "../styles/Clock.css";

import getTranslation from "../lang";

export default function Clock(props) {
  const [date, setDate] = React.useState(new Date());
  const lang = sessionStorage.getItem("lang");
  let timeGreet = getTranslation(`${props.ToD}Greet`, lang);

  React.useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <div className="Clock">
      <div className="ClockTime">
        {date.getHours()}
        :
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </div>
      <div className="ClockPeriod">
        {timeGreet}!
      </div>
    </div>
  );
}
