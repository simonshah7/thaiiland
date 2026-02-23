import TimelineItem from './TimelineItem';
import DiaryPanel from './DiaryPanel';

export default function DayCard({
  day,
  notes,
  onSaveNote,
  diary,
  onSaveDiary,
  onOpenLightbox,
}) {
  return (
    <div className="day-card reveal" id={day.id}>
      <div className="day-header">
        <div>
          <h3>
            {day.day}: {day.title}
          </h3>
          <span className="date">{day.date}</span>
        </div>
        <span className="location">{day.location}</span>
      </div>
      {day.weather && <div className="day-weather">&#9729; {day.weather}</div>}

      {day.note && <div className="day-note">{day.note}</div>}

      {day.images?.length > 0 && (
        <div className="photo-grid">
          {day.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${day.title} photo ${i + 1}`}
              loading="lazy"
              onClick={() => onOpenLightbox(src)}
            />
          ))}
        </div>
      )}

      <div className="timeline">
        {day.items.map((item, i) => {
          const noteKey = `${day.id}-${i}`;
          return (
            <TimelineItem
              key={noteKey}
              item={item}
              noteKey={noteKey}
              note={notes[noteKey] || ''}
              onSaveNote={onSaveNote}
            />
          );
        })}
      </div>

      <DiaryPanel
        dayId={day.id}
        dayLabel={day.day}
        diary={diary}
        onSave={onSaveDiary}
        onOpenLightbox={onOpenLightbox}
      />
    </div>
  );
}
