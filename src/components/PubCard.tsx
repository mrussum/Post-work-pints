import type { Pub } from "../types";
import { getOpenStatus } from "../openHours";
import { PintRating } from "./PintRating";
import { PubImage } from "./PubImage";

interface Props {
  pub: Pub;
  rating: number;
  reviewCount: number;
  onOpen: () => void;
}

const priceText = (level: number) => "£".repeat(level);

export function PubCard({ pub, rating, reviewCount, onOpen }: Props) {
  const status = getOpenStatus(pub.hours);
  return (
    <button className="card" onClick={onOpen} aria-label={`Open ${pub.name}`}>
      <div className="card__image-wrap">
        <PubImage pub={pub} className="card__image" />
        <span className={`open-badge ${status.open ? "is-open" : "is-closed"}`}>
          <span className="open-badge__dot" aria-hidden="true" />
          {status.open ? "Open now" : "Closed"}
        </span>
      </div>
      <div className="card__body">
        <div className="card__title-row">
          <h3 className="card__title">{pub.name}</h3>
          <span className="card__price" title="Roughly how much your wallet will cry">
            {priceText(pub.priceLevel)}
          </span>
        </div>
        <p className="card__tagline">{pub.tagline}</p>
        <div className="card__rating">
          <PintRating value={rating} count={reviewCount} size={16} />
        </div>
        <div className="card__meta">
          <span className="chip chip--walk">🚶 {pub.walkMins} min</span>
          {pub.vibes.slice(0, 2).map((v) => (
            <span key={v} className="chip">
              {v}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
