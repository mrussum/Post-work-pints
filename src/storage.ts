import type { Review } from "./types";

// Reviews live in the browser's localStorage — no backend, no sign-up,
// nothing to host. Clear your browser data and they're gone (fair warning).
const KEY = "pwp.reviews.v1";

export function loadReviews(): Review[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Review[]) : [];
  } catch {
    return [];
  }
}

export function saveReviews(reviews: Review[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(reviews));
  } catch {
    // storage full / blocked — fail quietly, it's only pints
  }
}

export function makeId(): string {
  return `r_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
