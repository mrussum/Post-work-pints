import type { GFInfo, GFLevel } from "../types";

// Gluten-free availability, eyeballed from each venue's usual range. This is a
// guide, NOT gospel — ranges change and cross-contamination is a real thing,
// so coeliacs should always double-check with the bar. Cider, by the way, is
// almost always naturally gluten-free, which is why the cider spots score well.

const DEFAULT: GFInfo = {
  level: "ask",
  note: "Usually a gluten-free bottled lager or cider knocking about — worth asking at the bar.",
};

export const GF_LABELS: Record<GFLevel, string> = {
  great: "Loads of GF options",
  some: "A few GF options",
  ask: "Limited — ask at the bar",
};

const GF: Record<string, GFInfo> = {
  "the-apple": {
    level: "great",
    note: "It's a cider boat — almost everything aboard is naturally gluten-free. A coeliac's happy place.",
  },
  "the-stable": {
    level: "great",
    note: "Huge cider list (mostly naturally GF) plus gluten-free pizza bases on request. Brilliant all round.",
  },
  "brewdog-bristol": {
    level: "great",
    note: "BrewDog usually has dedicated gluten-free beers on tap or in cans, and the staff are clued up.",
  },
  "small-bar": {
    level: "some",
    note: "Rotating craft range often includes a gluten-free can or two — ask which are on today.",
  },
  "the-beer-emporium": {
    level: "some",
    note: "Big enough range that there's normally a GF lager and cider; the kitchen can flag GF food too.",
  },
  "zerodegrees": {
    level: "some",
    note: "House brews aren't GF, but they keep gluten-free bottles and do GF pizza bases.",
  },
  "the-commercial-rooms": {
    level: "some",
    note: "Spoons reliably stock gluten-free bottled lagers and ciders, plus a GF menu for food.",
  },
  "kings-street-brew-house": {
    level: "some",
    note: "House lager isn't GF, but there's usually a gluten-free cider or bottle behind the bar.",
  },
  "the-volley": {
    level: "some",
    note: "Bristol Beer Factory range plus a gluten-free option or two — worth checking the cans.",
  },
  "the-cottage-inn": {
    level: "some",
    note: "Standard pub selection with a gluten-free lager and cider on hand.",
  },
  "hyde-and-co": {
    level: "great",
    note: "It's cocktails — most are naturally gluten-free, and the bartenders will happily steer you right.",
  },
  "llandoger-trow": DEFAULT,
  "the-old-duke": DEFAULT,
  "seamus-odonnells": {
    level: "some",
    note: "Guinness isn't GF, but they keep a gluten-free cider/lager for those who need it.",
  },
  "the-hatchet": DEFAULT,
  "mr-wolfs": {
    level: "some",
    note: "Cocktails are mostly GF and there are gluten-free bottles; the noodle menu has GF options too.",
  },
  "the-christmas-steps": {
    level: "some",
    note: "Thoughtful craft list usually includes a gluten-free beer, and the kitchen is GF-aware.",
  },
  "the-cornubia": DEFAULT,
  "left-handed-giant": {
    level: "some",
    note: "Forward-thinking brewpub that usually has a gluten-free beer on the list, plus GF-friendly food.",
  },
  "the-bank-tavern": {
    level: "some",
    note: "Small but switched-on — normally a gluten-free bottle behind the bar, and happy to check the kitchen.",
  },
  "the-gryphon": DEFAULT,
  "the-stag-and-hounds": DEFAULT,
  "no1-harbourside": {
    level: "some",
    note: "Big bar-café menu with reliable gluten-free lager/cider options and GF food choices.",
  },
  "the-orchard-inn": {
    level: "great",
    note: "A cider institution — the vast majority of its huge cider and perry range is naturally gluten-free.",
  },
  "the-milk-thistle": {
    level: "great",
    note: "Cocktails are mostly naturally gluten-free and the bartenders really know their stuff — just tell them.",
  },
  "pata-negra": {
    level: "some",
    note: "Sherry, vermouth and wine are naturally gluten-free, and the kitchen can steer you to GF tapas.",
  },
  "the-drawbridge": {
    level: "some",
    note: "Big central pub — reliably a gluten-free lager and cider on, plus GF options on the food menu.",
  },
  "little-martha-brewing": {
    level: "some",
    note: "Modern brewery that often has a gluten-free beer or a GF can in the fridge — ask what's on.",
  },
  "three-tuns": DEFAULT,
  "the-old-market-assembly": {
    level: "some",
    note: "The bakery side is clued up on gluten-free, and the bar keeps GF beer and natural wines.",
  },
};

export const getGlutenFree = (pubId: string): GFInfo => GF[pubId] ?? DEFAULT;
