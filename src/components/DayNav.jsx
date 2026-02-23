import { DAYS } from '../data';

export default function DayNav() {
  return (
    <nav className="day-nav">
      {DAYS.map((day, i) => (
        <a key={day.id} href={`#${day.id}`} title={`${day.day}: ${day.title}`}>
          {i + 1}
        </a>
      ))}
    </nav>
  );
}
