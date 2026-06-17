import { useEffect, useState } from "react";
import type { ExperiencePhoto, GFInfo, Pub, Review } from "../types";
import { PintRating, PintPicker } from "./PintRating";
import { PubImage } from "./PubImage";
import { ExperienceGallery } from "./ExperienceGallery";
import { GfEditor } from "./GfEditor";
import { getOpenStatus, formatWeek } from "../openHours";

interface Props {
  pub: Pub;
  reviews: Review[]; // combined seed + user reviews for this pub
  rating: number;
  photos: ExperiencePhoto[];
  gf: GFInfo;
  gfCustom: boolean;
  onSetGf: (info: GFInfo) => void;
  onResetGf: () => void;
  onClose: () => void;
  onAddReview: (r: { name: string; pints: number; text: string }) => void;
  onAddPhoto: (file: File, caption: string) => Promise<void>;
  onDeletePhoto: (id: string) => void;
}

const mapsUrl = (pub: Pub) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${pub.name}, ${pub.address}`
  )}`;

export function PubModal({
  pub,
  reviews,
  rating,
  photos,
  gf,
  gfCustom,
  onSetGf,
  onResetGf,
  onClose,
  onAddReview,
  onAddPhoto,
  onDeletePhoto,
}: Props) {
  const [name, setName] = useState("");
  const [pints, setPints] = useState(0);
  const [text, setText] = useState("");
  const [justAdded, setJustAdded] = useState(false);

  // Close on Escape, lock background scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const status = getOpenStatus(pub.hours);
  const week = formatWeek(pub.hours);
  const todayIdx = new Date().getDay();
  // Map calendar day (0=Sun..6=Sat) to our Mon-first display order
  const todayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][todayIdx];

  const canSubmit = pints > 0 && text.trim().length > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onAddReview({
      name: name.trim() || "Anonymous Drinker",
      pints,
      text: text.trim(),
    });
    setName("");
    setPints(0);
    setText("");
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={pub.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <PubImage pub={pub} className="modal__image" />

        <div className="modal__content">
          <div className="modal__heading">
            <h2>{pub.name}</h2>
            <PintRating value={rating} count={reviews.length} />
          </div>

          <div className="modal__meta">
            <span className={`open-badge ${status.open ? "is-open" : "is-closed"}`}>
              <span className="open-badge__dot" aria-hidden="true" />
              {status.label}
            </span>
            <span className="chip chip--walk">🚶 {pub.walkMins} min from Shaw &amp; Co</span>
            <span className="chip">{"£".repeat(pub.priceLevel)}</span>
            {pub.vibes.map((v) => (
              <span key={v} className="chip">
                {v}
              </span>
            ))}
          </div>

          <p className="modal__blurb">{pub.blurb}</p>

          <ul className="modal__highlights">
            {pub.highlights.map((h) => (
              <li key={h}>
                <span aria-hidden="true">🍻</span> {h}
              </li>
            ))}
          </ul>

          <p className="modal__address">
            📍 {pub.address} ·{" "}
            <a href={mapsUrl(pub)} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </p>

          <div className="hours">
            <h3 className="modal__subhead">🕒 Opening hours</h3>
            <table className="hours__table">
              <tbody>
                {week.map((row) => {
                  const isToday = row.days.split("–").includes(todayName);
                  return (
                    <tr key={row.days} className={isToday ? "hours__today" : ""}>
                      <td className="hours__days">{row.days}</td>
                      <td className="hours__time">{row.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="hours__note">Hours are approximate — check before a special trip.</p>
          </div>

          <GfEditor gf={gf} isCustom={gfCustom} onSave={onSetGf} onReset={onResetGf} />

          <hr className="modal__rule" />

          <h3 className="modal__subhead">Leave a review 🍺</h3>
          <form className="review-form" onSubmit={submit}>
            <label className="field">
              <span className="field__label">Your name (or a silly alias)</span>
              <input
                type="text"
                value={name}
                maxLength={40}
                placeholder="e.g. Cider Steve"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <PintPicker value={pints} onChange={setPints} />

            <label className="field">
              <span className="field__label">The verdict</span>
              <textarea
                value={text}
                maxLength={500}
                rows={3}
                placeholder="Was it a pint of dreams or a regrettable half? Spill it…"
                onChange={(e) => setText(e.target.value)}
              />
            </label>

            <div className="review-form__actions">
              <button type="submit" className="btn-primary" disabled={!canSubmit}>
                Post my pint 🍺
              </button>
              {justAdded && <span className="review-form__thanks">Cheers! Added 🎉</span>}
            </div>
          </form>

          <h3 className="modal__subhead">
            What the regulars say <span className="count-pill">{reviews.length}</span>
          </h3>
          <div className="reviews">
            {reviews.length === 0 && (
              <p className="reviews__empty">No reviews yet — be the trailblazer. 🥾</p>
            )}
            {reviews.map((r) => (
              <div key={r.id} className="review">
                <div className="review__top">
                  <span className="review__name">{r.name}</span>
                  <PintRating value={r.pints} showNumber={false} size={14} />
                </div>
                <p className="review__text">{r.text}</p>
                {!r.seed && (
                  <span className="review__date">
                    {new Date(r.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
            ))}
          </div>

          <hr className="modal__rule" />

          <h3 className="modal__subhead">
            📸 Our nights out <span className="count-pill">{photos.length}</span>
          </h3>
          <ExperienceGallery photos={photos} onAdd={onAddPhoto} onDelete={onDeletePhoto} />
        </div>
      </div>
    </div>
  );
}
