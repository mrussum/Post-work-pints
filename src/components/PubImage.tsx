import { useState } from "react";
import type { Pub } from "../types";

// Shows the pub photo, but falls back to a cute gradient + big emoji if the
// image fails to load (offline, blocked, broken link). Always looks intentional.
export function PubImage({ pub, className }: { pub: Pub; className?: string }) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className={`pub-image ${className ?? ""}`}
      style={{ background: pub.gradient }}
    >
      {!broken && (
        <img
          src={pub.photo}
          alt={pub.name}
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
      <span className="pub-image__emoji" aria-hidden="true">
        {pub.emoji}
      </span>
      <span className="pub-image__type">{pub.type}</span>
    </div>
  );
}
