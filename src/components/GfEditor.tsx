import { useState } from "react";
import type { GFInfo, GFLevel } from "../types";
import { GF_LABELS } from "../data/glutenFree";

interface Props {
  gf: GFInfo;
  isCustom: boolean;
  onSave: (info: GFInfo) => void;
  onReset: () => void;
}

const LEVELS: GFLevel[] = ["great", "some", "ask"];

export function GfEditor({ gf, isCustom, onSave, onReset }: Props) {
  const [editing, setEditing] = useState(false);
  const [level, setLevel] = useState<GFLevel>(gf.level);
  const [note, setNote] = useState(gf.note);

  const startEditing = () => {
    setLevel(gf.level);
    setNote(gf.note);
    setEditing(true);
  };

  const save = () => {
    onSave({ level, note: note.trim() || GF_LABELS[level] });
    setEditing(false);
  };

  if (!editing) {
    return (
      <div className={`gf-callout gf-${gf.level}`}>
        <div className="gf-callout__head">
          <span className="gf-callout__icon" aria-hidden="true">
            🌾🚫
          </span>
          <span className="gf-callout__title">
            Gluten-free: <strong>{GF_LABELS[gf.level]}</strong>
          </span>
          <button className="gf-edit-link" onClick={startEditing}>
            ✏️ Update
          </button>
        </div>
        <p className="gf-callout__note">{gf.note}</p>
        {isCustom && (
          <p className="gf-callout__custom">
            ✅ Updated by your team ·{" "}
            <button className="gf-reset-link" onClick={onReset}>
              reset to default
            </button>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`gf-callout gf-${level} gf-callout--editing`}>
      <div className="gf-callout__head">
        <span className="gf-callout__icon" aria-hidden="true">
          🌾🚫
        </span>
        <span className="gf-callout__title">Update gluten-free status</span>
      </div>

      <div className="gf-levels" role="radiogroup" aria-label="Gluten-free availability">
        {LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={level === l}
            className={`gf-level-btn ${level === l ? "active" : ""} gf-level-btn--${l}`}
            onClick={() => setLevel(l)}
          >
            {GF_LABELS[l]}
          </button>
        ))}
      </div>

      <label className="field">
        <span className="field__label">Note (what's actually on offer?)</span>
        <textarea
          value={note}
          maxLength={240}
          rows={2}
          placeholder="e.g. They now stock a couple of GF cans behind the bar — ask the staff."
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <div className="gf-editor__actions">
        <button className="btn-primary" onClick={save}>
          Save
        </button>
        <button className="gf-cancel-link" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
