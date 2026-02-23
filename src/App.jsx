import { useState, useEffect, useCallback } from 'react';
import { DAYS, CITIES } from './data';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useScrollReveal } from './hooks/useScrollReveal';
import Hero from './components/Hero';
import DayNav from './components/DayNav';
import CitySection from './components/CitySection';
import DayCard from './components/DayCard';
import Album from './components/Album';
import Lightbox from './components/Lightbox';
import Budget from './components/Budget';
import Checklist from './components/Checklist';
import './App.css';

export default function App() {
  const [dark, setDark] = useLocalStorage('trip-darkmode', false);
  const [notes, setNotes] = useLocalStorage('trip-notes', {});
  const [diaryData, setDiaryData] = useLocalStorage('trip-diary', {});
  const [checklist, setChecklist] = useLocalStorage('trip-checklist', {});
  const [albumOpen, setAlbumOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useScrollReveal();

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setLightboxSrc(null);
        setAlbumOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleSaveNote = useCallback(
    (key, text) => {
      setNotes((prev) => ({ ...prev, [key]: text }));
    },
    [setNotes]
  );

  const handleSaveDiary = useCallback(
    (dayId, entry) => {
      setDiaryData((prev) => ({ ...prev, [dayId]: entry }));
    },
    [setDiaryData]
  );

  const handleToggleCheck = useCallback(
    (index, checked) => {
      setChecklist((prev) => ({ ...prev, [index]: checked }));
    },
    [setChecklist]
  );

  return (
    <>
      <div className="top-controls">
        <button onClick={() => setAlbumOpen(true)} title="View trip album">
          Album
        </button>
        <button onClick={() => setDark((d) => !d)} title="Toggle dark mode">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>

      <Hero />
      <DayNav />

      {albumOpen && (
        <Album
          diaryData={diaryData}
          onClose={() => setAlbumOpen(false)}
          onOpenLightbox={setLightboxSrc}
        />
      )}

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />

      {CITIES.map((city) => {
        const [start, end] = city.dayRange;
        const cityDays = DAYS.filter((_, i) => i + 1 >= start && i + 1 <= end);

        return (
          <div key={city.name}>
            <CitySection city={city} />
            <div className="container">
              <section id={`itinerary-${city.name.toLowerCase().replace(/\s+/g, '-')}`}>
                {cityDays.map((day) => (
                  <DayCard
                    key={day.id}
                    day={day}
                    notes={notes}
                    onSaveNote={handleSaveNote}
                    diary={diaryData[day.id] || { text: '', images: [] }}
                    onSaveDiary={handleSaveDiary}
                    onOpenLightbox={setLightboxSrc}
                  />
                ))}
              </section>
            </div>
          </div>
        );
      })}

      <div className="container">
        <Budget />
        <Checklist checked={checklist} onToggle={handleToggleCheck} />
      </div>

      <footer>
        Here&apos;s to <span className="footer-gold">25 More</span> &hearts; Three cities. Five hotels. Fourteen nights. One incredible adventure together.
      </footer>
    </>
  );
}
