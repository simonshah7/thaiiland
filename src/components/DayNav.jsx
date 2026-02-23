import { DAYS, CITIES } from '../data';

export default function DayNav() {
  return (
    <nav className="day-nav">
      {CITIES.map((city) => {
        const [start, end] = city.dayRange;
        const cityDays = DAYS.filter((_, i) => i + 1 >= start && i + 1 <= end);
        return (
          <div key={city.name}>
            <div className="day-nav-city-label">{city.name}</div>
            {cityDays.map((day, i) => (
              <a
                key={day.id}
                href={`#${day.id}`}
                title={`${day.day}: ${day.title}`}
              >
                {start + i}
              </a>
            ))}
          </div>
        );
      })}
    </nav>
  );
}
