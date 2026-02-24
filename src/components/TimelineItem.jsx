import { useState } from 'react';
import InfoBadge from './InfoBadge';
import { BOOKING_DOCS } from '../data';

function resolveBookingDocs(bookingInfo) {
  const seen = new Set();
  const docs = [];
  for (const line of bookingInfo) {
    for (const [key, filenames] of Object.entries(BOOKING_DOCS)) {
      if (line.startsWith(key)) {
        for (const filename of filenames) {
          if (!seen.has(filename)) {
            seen.add(filename);
            docs.push({ label: 'View PDF', filename });
          }
        }
      }
    }
  }
  return docs;
}

export default function TimelineItem({ item, noteKey, note, onSaveNote }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(note);

  const handleClick = (e) => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;
    if (e.target.closest('.info-badge-wrap')) return;
    setOpen((v) => !v);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    onSaveNote(noteKey, text);
  };

  return (
    <div className="timeline-item" onClick={handleClick}>
      <div className="time">{item.time}</div>
      <div className="activity">
        {item.activity}
        {item.bookingInfo && <InfoBadge info={item.bookingInfo} docs={resolveBookingDocs(item.bookingInfo)} />}
        {note.trim() && <span className="note-badge">Note</span>}
      </div>
      {open && (
        <div className="note-editor open">
          <textarea
            placeholder="Add a note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={handleSave}>Save Note</button>
        </div>
      )}
    </div>
  );
}
