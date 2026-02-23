import { CHECKLIST_ITEMS } from '../data';

export default function Checklist({ checked, onToggle }) {
  return (
    <section id="checklist">
      <h2>
        <span className="icon">&#9745;</span> Pre-Trip Checklist
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
