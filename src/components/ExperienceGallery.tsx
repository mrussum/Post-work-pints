import { useRef, useState } from "react";
import type { ExperiencePhoto } from "../types";

interface Props {
  photos: ExperiencePhoto[];
  onAdd: (file: File, caption: string) => Promise<void>;
  onDelete: (id: string) => void;
}

export function ExperienceGallery({ photos, onAdd, onDelete }: Props) {
  const [caption, setCaption] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("That doesn't look like an image, friend.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await onAdd(file, caption.trim());
      setCaption("");
      if (inputRef.current) inputRef.current.value = "";
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't add that photo.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="gallery">
      <div className="gallery__add">
        <label className="field">
          <span className="field__label">Caption (optional)</span>
          <input
            type="text"
            value={caption}
            maxLength={80}
            placeholder="e.g. Dave's 3rd attempt at the dartboard"
            onChange={(e) => setCaption(e.target.value)}
          />
        </label>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="gallery__file"
          id="gallery-file"
          onChange={(e) => handleFile(e.target.files?.[0])}
          disabled={busy}
        />
        <label htmlFor="gallery-file" className={`btn-primary gallery__btn ${busy ? "is-busy" : ""}`}>
          {busy ? "Adding…" : "📸 Add a photo"}
        </label>
        {error && <p className="gallery__error">{error}</p>}
        <p className="gallery__hint">
          Photos are squished down and saved in your browser only — they don&apos;t leave this device.
        </p>
      </div>

      {photos.length === 0 ? (
        <p className="reviews__empty">No snaps yet — go make some memories (then upload the evidence). 📷</p>
      ) : (
        <div className="gallery__grid">
          {photos.map((p) => (
            <figure key={p.id} className="gallery__item">
              <a href={p.dataUrl} target="_blank" rel="noreferrer" title="Open full size">
                <img src={p.dataUrl} alt={p.caption || "A night out"} loading="lazy" />
              </a>
              <button
                className="gallery__delete"
                onClick={() => onDelete(p.id)}
                aria-label="Delete photo"
                title="Delete photo"
              >
                ✕
              </button>
              {p.caption && <figcaption>{p.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
