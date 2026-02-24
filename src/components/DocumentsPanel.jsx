import { DOCUMENTS } from '../data';

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function DocumentsPanel({ onClose }) {
  const openDoc = (filename) => {
    window.open(`/docs/${encodeURIComponent(filename)}`, '_blank');
  };

  return (
    <div className="docs-overlay">
      <button className="docs-close" onClick={onClose}>
        &times;
      </button>
      <div className="docs-inner">
        <h2>Travel Documents</h2>
        <p className="docs-sub">All bookings &amp; confirmations in one place</p>

        {DOCUMENTS.map((cat) => (
          <div className="docs-category" key={cat.category}>
            <h3>
              <span className="docs-cat-icon">{cat.icon}</span> {cat.category}
            </h3>
            <div className="docs-list">
              {cat.docs.map((doc) => (
                <button
                  key={doc.filename}
                  className="docs-item"
                  onClick={() => openDoc(doc.filename)}
                  title={`Open ${doc.label}`}
                >
                  <div className="docs-item-text">
                    <span className="docs-item-label">{doc.label}</span>
                    <span className="docs-item-sub">{doc.sublabel}</span>
                  </div>
                  <span className="docs-item-open">
                    <ExternalLinkIcon /> Open
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
