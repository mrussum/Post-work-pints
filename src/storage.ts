import type { ExperiencePhoto, GFInfo, Review } from "./types";

// Reviews live in the browser's localStorage — no backend, no sign-up,
// nothing to host. Clear your browser data and they're gone (fair warning).
const KEY = "pwp.reviews.v1";
const PHOTOS_KEY = "pwp.photos.v1";
const GF_KEY = "pwp.gfOverrides.v1";

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

// User-edited gluten-free statuses, keyed by pub id. These override the
// built-in defaults so the team can keep them current as venues change.
export function loadGfOverrides(): Record<string, GFInfo> {
  try {
    const raw = localStorage.getItem(GF_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as Record<string, GFInfo>) : {};
  } catch {
    return {};
  }
}

export function saveGfOverrides(map: Record<string, GFInfo>): void {
  try {
    localStorage.setItem(GF_KEY, JSON.stringify(map));
  } catch {
    // ignore — it's a small object, this should basically never fail
  }
}

export function loadPhotos(): ExperiencePhoto[] {
  try {
    const raw = localStorage.getItem(PHOTOS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as ExperiencePhoto[]) : [];
  } catch {
    return [];
  }
}

/** Returns true if saved, false if storage is full (photos are chunky). */
export function savePhotos(photos: ExperiencePhoto[]): boolean {
  try {
    localStorage.setItem(PHOTOS_KEY, JSON.stringify(photos));
    return true;
  } catch {
    return false;
  }
}

// Shrinks a chosen image to a sensible max dimension and re-encodes it as a
// compressed JPEG data URL, so a handful fit comfortably in localStorage.
export function downscaleImage(file: File, maxDim = 900, quality = 0.7): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Could not load image"));
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas unavailable"));
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}
