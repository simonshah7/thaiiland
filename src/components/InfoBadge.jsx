import { useState, useEffect, useRef } from 'react';

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: 'middle' }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default function InfoBadge({ info }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  return (
    <span className="info-badge-wrap" ref={ref}>
      <button
        className="info-badge"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        title="Booking details"
        aria-label="Booking details"
      >
        <InfoIcon />
      </button>
      {open && (
        <div className="info-popover" onClick={(e) => e.stopPropagation()}>
          {info.map((line, i) => (
            <div key={i} className={`info-line${i === 0 ? ' info-title' : ''}`}>
              {line}
            </div>
          ))}
        </div>
      )}
    </span>
  );
}
