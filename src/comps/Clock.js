import React from "react";
import "../styles/Clock.css";

export default function Clock(props) {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className="Clock">
      <div className="ClockTime">
        {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
        {date.getSeconds() % 2 === 0 ? ":" : ":"}
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </div>
      <div className="ClockPeriod">
        Good {props.period}!
      </div>
    </div>
  );
}
