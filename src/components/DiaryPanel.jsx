import { useState } from 'react';

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
        &#128221; Journal {hasEntries ? '(has entries)' : ''}
      </button>

      {open && (
        <div className="diary-panel open">
          <h4>&#128221; {dayLabel} Journal</h4>
          <textarea
            placeholder="Write about your day... What did you see, feel, taste, love?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="upload-area">
            &#128247; Click or drag photos here to upload
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
