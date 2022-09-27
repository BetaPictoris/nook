export default function Clock() {    
    const date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();

    return (
        <div className="Clock">
            {hour}:{min}
        </div>
    )
}