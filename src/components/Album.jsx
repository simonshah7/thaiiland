import { DAYS } from '../data';

export default function Album({ diaryData, onClose, onOpenLightbox }) {
  const entries = DAYS.filter((day) => {
    const entry = diaryData[day.id];
    return entry && (entry.text || entry.images?.length);
  });

  return (
    <div className="album-overlay">
      <button className="album-close" onClick={onClose}>
        &times;
      </button>
      <div className="album-inner">
        <h2>Our Thailand Album</h2>
        <p className="album-sub">Memories from our anniversary adventure</p>

        {entries.length === 0 ? (
          <div className="album-empty">
            <div className="big-icon">&#128247;</div>
            <p>No journal entries yet.</p>
            <p style={{ marginTop: 10, fontSize: '.88rem' }}>
              Write about your day and upload photos in each day&apos;s Journal
              section. They&apos;ll appear here as your trip album.
            </p>
          </div>
        ) : (
          entries.map((day) => {
            const entry = diaryData[day.id];
            return (
              <div className="album-day" key={day.id}>
                <h3>
                  {day.day}: {day.title} &mdash; {day.date}
                </h3>
                {entry.text && (
                  <div className="album-text">{entry.text}</div>
                )}
                {entry.images?.length > 0 && (
                  <div className="album-photos">
                    {entry.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Memory"
                        onClick={() => onOpenLightbox(src)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
