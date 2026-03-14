export default function DayMap({ stops }) {
  if (!stops || stops.length === 0) return null;

  return (
    <div className="day-map">
      <div className="day-map-header">
        <span className="day-map-icon">{'\ud83d\uddfa\ufe0f'}</span>
        <span>Today&apos;s Route</span>
      </div>
      <div className="day-map-route">
        {stops.map((stop, i) => (
          <div key={i} className="day-map-stop">
            {i > 0 && stop.distance && (
              <div className="day-map-connector">
                <div className="day-map-line" />
                <span className="day-map-distance">{stop.distance}</span>
                <div className="day-map-line" />
              </div>
            )}
            <div className="day-map-pin">
              <span className="day-map-pin-number">{i + 1}</span>
              <span className="day-map-pin-icon">{stop.icon}</span>
              <span className="day-map-pin-name">{stop.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
