import React from 'react';
import '../styles/Player.css';

export default function Clock() {    
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
            {date.getHours()}:{date.getMinutes()}
        </div>
    )
}