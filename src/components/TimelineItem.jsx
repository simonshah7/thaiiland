import { useState } from 'react';
import InfoBadge from './InfoBadge';

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
        {item.bookingInfo && <InfoBadge info={item.bookingInfo} />}
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
