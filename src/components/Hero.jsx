import { useState, useEffect } from 'react';
import { TRIP_START } from '../data';

export default function Hero() {
  const [diff, setDiff] = useState(TRIP_START - new Date());

  useEffect(() => {
    const id = setInterval(() => setDiff(TRIP_START - new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const started = diff <= 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const units = [
    { n: d, l: 'Days' },
    { n: h, l: 'Hours' },
    { n: m, l: 'Mins' },
    { n: s, l: 'Secs' },
  ];

  return (
    <header className="hero">
      <h1>Thailand 2026</h1>
      <p className="subtitle">Anniversary Trip &bull; 10 Days of Adventure</p>
      <div className="countdown">
        {started ? (
          <div className="unit" style={{ minWidth: 'auto', padding: '12px 24px' }}>
            <span className="num" style={{ fontSize: '1.2rem' }}>
              We&apos;re in Thailand! &#127796;
            </span>
          </div>
        ) : (
          units.map((u) => (
            <div className="unit" key={u.l}>
              <span className="num">{u.n}</span>
              <span className="lbl">{u.l}</span>
            </div>
          ))
        )}
      </div>
    </header>
  );
}
