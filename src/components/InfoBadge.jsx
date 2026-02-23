import { useState, useEffect, useRef, useCallback } from 'react';

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
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef(null);
  const popRef = useRef(null);

  const updatePos = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setPos({ top: r.bottom + 8, left: r.left + r.width / 2 });
  }, []);

  useEffect(() => {
    if (!open) return;
    updatePos();
    const close = (e) => {
      if (
        popRef.current && !popRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    window.addEventListener('scroll', () => setOpen(false), true);
    return () => {
      document.removeEventListener('mousedown', close);
      window.removeEventListener('scroll', () => setOpen(false), true);
    };
  }, [open, updatePos]);

  return (
    <span className="info-badge-wrap">
      <button
        ref={btnRef}
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
        <div
          ref={popRef}
          className="info-popover"
          style={{ top: pos.top, left: pos.left }}
          onClick={(e) => e.stopPropagation()}
        >
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
