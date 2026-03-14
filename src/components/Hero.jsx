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
    { n: m, l: 'Minutes' },
    { n: s, l: 'Seconds' },
  ];

  return (
    <header className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Wat_Arun_Ratchawararam_and_Royal_Barge_Procession.JPG/1920px-Wat_Arun_Ratchawararam_and_Royal_Barge_Procession.JPG)',
        }}
      />
      <div className="hero-content">
        <p className="hero-couple-names">
          Simon <span className="hero-ampersand">&</span> Yevgeniya
        </p>
        <h1 className="hero-title">Thailand 2026</h1>
        <p className="hero-tagline">25th Anniversary &middot; 16 Nights &middot; 4 Cities</p>
        <div className="hero-divider" />
        <div className="countdown">
          {started ? (
            <div className="countdown-live">
              We&apos;re in Thailand!
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
      </div>
    </header>
  );
}
