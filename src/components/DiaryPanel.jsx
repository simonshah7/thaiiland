import { useState } from 'react';

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: 6 }}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: 4 }}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export default function DiaryPanel({ dayId, dayLabel, diary, onSave, onOpenLightbox }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(diary.text || '');
  const [saved, setSaved] = useState(false);

  const hasEntries = diary.text || diary.images?.length;

  const handleUpload = (files) => {
    const promises = Array.from(files).map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const MAX = 800;
              let w = img.width,
                h = img.height;
              if (w > MAX || h > MAX) {
                if (w > h) {
                  h = (h * MAX) / w;
                  w = MAX;
                } else {
                  w = (w * MAX) / h;
                  h = MAX;
                }
              }
              canvas.width = w;
              canvas.height = h;
              canvas.getContext('2d').drawImage(img, 0, 0, w, h);
              resolve(canvas.toDataURL('image/jpeg', 0.7));
            };
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        })
    );

    Promise.all(promises).then((dataUrls) => {
      onSave(dayId, { text, images: [...(diary.images || []), ...dataUrls] });
    });
  };

  const removePhoto = (index, e) => {
    e.stopPropagation();
    const newImages = [...(diary.images || [])];
    newImages.splice(index, 1);
    onSave(dayId, { text, images: newImages });
  };

  const handleSave = () => {
    onSave(dayId, { text, images: diary.images || [] });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <>
      <button className="diary-btn" onClick={() => setOpen((v) => !v)}>
        <BookOpenIcon /> Journal {hasEntries ? '(has entries)' : ''}
      </button>

      {open && (
        <div className="diary-panel open">
          <h4><BookOpenIcon /> {dayLabel} Journal</h4>
          <textarea
            placeholder="Write about your day... What did you see, feel, taste, love?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="upload-area">
            <CameraIcon /> Click or drag photos here to upload
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleUpload(e.target.files)}
            />
          </div>
          {diary.images?.length > 0 && (
            <div className="diary-photos">
              {diary.images.map((src, i) => (
                <div className="diary-photo-wrap" key={i}>
                  <img
                    src={src}
                    alt="Diary photo"
                    onClick={() => onOpenLightbox(src)}
                  />
                  <button
                    className="remove-photo"
                    onClick={(e) => removePhoto(i, e)}
                    title="Remove"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
          <button className="diary-save" onClick={handleSave}>
            Save Journal Entry
          </button>
          {saved && <span className="save-confirm show">Saved!</span>}
        </div>
      )}
    </>
  );
}
