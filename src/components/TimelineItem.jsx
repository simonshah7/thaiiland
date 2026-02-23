import { useState } from 'react';

export default function TimelineItem({ item, noteKey, note, onSaveNote }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(note);

  const handleClick = (e) => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;
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
        {item.cost && <span className="cost">{item.cost}</span>}
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
