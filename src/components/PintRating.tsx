interface DisplayProps {
  value: number;
  size?: number;
  showNumber?: boolean;
  count?: number;
}

// Read-only pint rating, e.g. 🍺🍺🍺🍺🫗  (4.2)
export function PintRating({ value, size = 20, showNumber = true, count }: DisplayProps) {
  const full = Math.round(value);
  return (
    <span className="pint-rating" title={`${value.toFixed(1)} out of 5 pints`}>
      <span className="pint-rating__glasses" style={{ fontSize: size }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= full ? "pint on" : "pint off"} aria-hidden="true">
            🍺
          </span>
        ))}
      </span>
      {showNumber && (
        <span className="pint-rating__num">
          {value.toFixed(1)}
          {typeof count === "number" && (
            <span className="pint-rating__count"> · {count} review{count === 1 ? "" : "s"}</span>
          )}
        </span>
      )}
    </span>
  );
}

interface PickerProps {
  value: number;
  onChange: (v: number) => void;
}

const LABELS = ["", "Tipped it out", "Meh, one and done", "Decent drop", "Properly good", "Pint of dreams"];

// Interactive 1–5 pint picker for the review form
export function PintPicker({ value, onChange }: PickerProps) {
  return (
    <div className="pint-picker">
      <div className="pint-picker__glasses" role="radiogroup" aria-label="Your pint rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            type="button"
            key={n}
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} pint${n === 1 ? "" : "s"}`}
            className={`pint-btn ${n <= value ? "on" : "off"}`}
            onClick={() => onChange(n)}
          >
            🍺
          </button>
        ))}
      </div>
      <span className="pint-picker__label">{value ? LABELS[value] : "Tap the pints →"}</span>
    </div>
  );
}
