import { useState } from 'react';
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
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <div className="day-card" id={day.id}>
      <div className="day-header">
        <div>
          <h3>
            {day.day}: {day.title}
          </h3>
          <span className="date">{day.date}</span>
        </div>
        <span className="location">{day.location}</span>
      </div>
      <div className="day-weather">&#9729; {day.weather}</div>

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

      {day.images?.length > 0 && (
        <>
          <button
            className="gallery-toggle"
            onClick={() => setGalleryOpen((v) => !v)}
          >
            {galleryOpen ? '\u25BC Hide' : '\u25B6 Show'} photos ({day.images.length})
          </button>
          {galleryOpen && (
            <div className="imgs">
              {day.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={day.title}
                  loading="lazy"
                  onClick={() => onOpenLightbox(src)}
                />
              ))}
            </div>
          )}
        </>
      )}

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
