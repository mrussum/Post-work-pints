import { useMemo, useState } from "react";
import { PUBS } from "./data/pubs";
import type { Review, Vibe } from "./types";
import { loadReviews, saveReviews, makeId } from "./storage";
import { isOpenNow } from "./openHours";
import { PubCard } from "./components/PubCard";
import { PubModal } from "./components/PubModal";

// Build the seed reviews (shipped with the app) once, with stable ids.
const SEED_REVIEWS: Review[] = PUBS.flatMap((pub) =>
  pub.seedReviews.map((r, i) => ({
    id: `seed_${pub.id}_${i}`,
    pubId: pub.id,
    name: r.name,
    pints: r.pints,
    text: r.text,
    date: "2026-01-01T00:00:00.000Z",
    seed: true,
  }))
);

type SortKey = "rating" | "nearest" | "cheapest";

const ALL_VIBES: Vibe[] = [
  "Historic & Haunted",
  "Craft Beer Nerd",
  "Cider Heaven",
  "Cosy & Snug",
  "Big Group Energy",
  "Cheeky & Cheap",
  "Fancy A Cocktail",
  "Live Music",
];

export default function App() {
  const [userReviews, setUserReviews] = useState<Review[]>(() => loadReviews());
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("rating");
  const [activeVibe, setActiveVibe] = useState<Vibe | null>(null);
  const [openNowOnly, setOpenNowOnly] = useState(false);

  const allReviews = useMemo(() => [...SEED_REVIEWS, ...userReviews], [userReviews]);

  // pubId -> { rating, count, list }
  const reviewsByPub = useMemo(() => {
    const map = new Map<string, Review[]>();
    for (const r of allReviews) {
      const list = map.get(r.pubId) ?? [];
      list.push(r);
      map.set(r.pubId, list);
    }
    return map;
  }, [allReviews]);

  const ratingFor = (pubId: string) => {
    const list = reviewsByPub.get(pubId) ?? [];
    if (list.length === 0) return 0;
    return list.reduce((s, r) => s + r.pints, 0) / list.length;
  };

  const addReview = (pubId: string, r: { name: string; pints: number; text: string }) => {
    const review: Review = {
      id: makeId(),
      pubId,
      name: r.name,
      pints: r.pints,
      text: r.text,
      date: new Date().toISOString(),
    };
    const next = [...userReviews, review];
    setUserReviews(next);
    saveReviews(next);
  };

  const visiblePubs = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PUBS.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.vibes.some((v) => v.toLowerCase().includes(q));
      const matchesVibe = !activeVibe || p.vibes.includes(activeVibe);
      const matchesOpen = !openNowOnly || isOpenNow(p);
      return matchesQuery && matchesVibe && matchesOpen;
    });

    list = [...list].sort((a, b) => {
      if (sort === "nearest") return a.walkMins - b.walkMins;
      if (sort === "cheapest") return a.priceLevel - b.priceLevel;
      return ratingFor(b.id) - ratingFor(a.id); // rating, high to low
    });
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, activeVibe, sort, openNowOnly, reviewsByPub]);

  const surpriseMe = () => {
    // Prefer somewhere actually open right now; fall back to anywhere.
    const openPubs = PUBS.filter((p) => isOpenNow(p));
    const pool = openPubs.length > 0 ? openPubs : PUBS;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setOpenId(pick.id);
  };

  const openPub = openId ? PUBS.find((p) => p.id === openId) ?? null : null;

  const totalReviews = allReviews.length;

  return (
    <div className="app">
      <header className="hero">
        <div className="hero__inner">
          <div className="hero__badge">🍺 Clocking off?</div>
          <h1 className="hero__title">Post Work Pints</h1>
          <p className="hero__subtitle">
            The official beer o&apos;clock detector for the fine people of{" "}
            <strong>Shaw &amp; Co, BS1</strong>. Close the laptop. The harbour is calling.
          </p>
          <div className="hero__stats">
            <span>🍻 {PUBS.length} watering holes</span>
            <span>📝 {totalReviews} reviews</span>
            <span>🚶 All a stroll from the office</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="controls">
          <input
            className="search"
            type="search"
            placeholder="Search pubs, vibes, 'cider', 'jazz'…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search pubs"
          />
          <div className="sort">
            <label htmlFor="sort">Sort by</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              <option value="rating">⭐ Top rated</option>
              <option value="nearest">🚶 Nearest to the office</option>
              <option value="cheapest">💸 Kindest to the wallet</option>
            </select>
          </div>
          <button className="surprise-btn" onClick={surpriseMe}>
            🎲 Surprise me
          </button>
        </div>

        <div className="vibes" role="group" aria-label="Filter by vibe">
          <button
            className={`vibe-pill vibe-pill--open ${openNowOnly ? "active" : ""}`}
            onClick={() => setOpenNowOnly((v) => !v)}
            aria-pressed={openNowOnly}
          >
            <span className="open-badge__dot" aria-hidden="true" /> Open now
          </button>
          <button
            className={`vibe-pill ${activeVibe === null ? "active" : ""}`}
            onClick={() => setActiveVibe(null)}
          >
            All vibes
          </button>
          {ALL_VIBES.map((v) => (
            <button
              key={v}
              className={`vibe-pill ${activeVibe === v ? "active" : ""}`}
              onClick={() => setActiveVibe(activeVibe === v ? null : v)}
            >
              {v}
            </button>
          ))}
        </div>

        {visiblePubs.length === 0 ? (
          <p className="no-results">
            No pubs match that. Loosen your standards or your search. 🍺
          </p>
        ) : (
          <section className="grid">
            {visiblePubs.map((pub) => (
              <PubCard
                key={pub.id}
                pub={pub}
                rating={ratingFor(pub.id)}
                reviewCount={(reviewsByPub.get(pub.id) ?? []).length}
                onOpen={() => setOpenId(pub.id)}
              />
            ))}
          </section>
        )}
      </main>

      <footer className="footer">
        <p>
          Made with 🍺 and mild dehydration for Shaw &amp; Co · Please drink responsibly,
          legends · Reviews are saved in your browser only.
        </p>
      </footer>

      {openPub && (
        <PubModal
          pub={openPub}
          reviews={[...(reviewsByPub.get(openPub.id) ?? [])].sort((a, b) => {
            // user reviews first (newest), then seeds
            if (a.seed && !b.seed) return 1;
            if (!a.seed && b.seed) return -1;
            return b.date.localeCompare(a.date);
          })}
          rating={ratingFor(openPub.id)}
          onClose={() => setOpenId(null)}
          onAddReview={(r) => addReview(openPub.id, r)}
        />
      )}
    </div>
  );
}
