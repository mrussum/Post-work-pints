export type Vibe =
  | "Historic & Haunted"
  | "Craft Beer Nerd"
  | "Cider Heaven"
  | "Cosy & Snug"
  | "Big Group Energy"
  | "Cheeky & Cheap"
  | "Fancy A Cocktail"
  | "Live Music";

export interface Review {
  id: string;
  pubId: string;
  /** Drinker's name (or alias — we don't judge) */
  name: string;
  /** 1–5 pints */
  pints: number;
  text: string;
  /** ISO date string */
  date: string;
  /** True for the hand-written seed reviews shipped with the app */
  seed?: boolean;
}

export interface Pub {
  id: string;
  name: string;
  type: "Pub" | "Bar" | "Cider House" | "Brewery Tap" | "Wine & Cocktails";
  /** One-liner that sells the place */
  tagline: string;
  /** Longer, funnier blurb */
  blurb: string;
  address: string;
  /** Approx walking minutes from Shaw & Co, BS1 */
  walkMins: number;
  vibes: Vibe[];
  /** ~£ per pint, for the "is it payday?" filter */
  priceLevel: 1 | 2 | 3;
  /** Big emoji shown if the photo fails to load */
  emoji: string;
  /** Background gradient for the card header */
  gradient: string;
  photo: string;
  /** Fun facts / why-you'd-go bullets */
  highlights: string[];
  /** Hand-written starter reviews */
  seedReviews: { name: string; pints: number; text: string }[];
}
