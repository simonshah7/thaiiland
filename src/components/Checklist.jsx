import { CHECKLIST_ITEMS } from '../data';

export default function Checklist({ checked, onToggle }) {
  const total = CHECKLIST_ITEMS.length;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section id="checklist" className="reveal">
      <h2>
        <span className="icon">&#9745;</span> Pre-Trip Checklist
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 500,
          color: 'var(--text-muted)',
          marginLeft: 'auto',
          marginRight: 8,
          letterSpacing: 0,
        }}>
          {done}/{total} complete
        </span>
      </h2>
      <div className="card-wrap">
        <ul className="checklist">
          {CHECKLIST_ITEMS.map((item, i) => (
            <li key={i} className={checked[i] ? 'done' : ''}>
              <input
                type="checkbox"
                checked={!!checked[i]}
                onChange={(e) => onToggle(i, e.target.checked)}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
