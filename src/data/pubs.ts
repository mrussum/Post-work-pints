import type { DayHours, Pub } from "../types";

// All distances are "approx walk from Shaw & Co, BS1" (roughly the
// Welsh Back / King Street / harbourside end of town). They're eyeballed,
// not GPS-perfect — your mileage may vary depending on pint count.

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=60`;

// Tiny helper to keep the hours readable. Times are 24h "HH:MM"; a close
// time earlier than the open time means it runs past midnight.
const h = (open: string, close: string): DayHours => ({ open, close });

// Hours arrays are [Sun, Mon, Tue, Wed, Thu, Fri, Sat]. Approximate — always
// worth a quick check before a special journey.
const STANDARD = [
  h("12:00", "22:30"), // Sun
  h("12:00", "23:00"), // Mon
  h("12:00", "23:00"), // Tue
  h("12:00", "23:00"), // Wed
  h("12:00", "23:30"), // Thu
  h("12:00", "00:00"), // Fri
  h("12:00", "00:00"), // Sat
];

export const PUBS: Pub[] = [
  {
    id: "llandoger-trow",
    name: "The Llandoger Trow",
    type: "Pub",
    tagline: "Drink where the pirates drank (allegedly).",
    blurb:
      "A wonky 350-year-old timber pub on King Street that supposedly inspired the Admiral Benbow in Treasure Island. Low beams, creaky floors and the faint suspicion that a ghost is judging your round. Mind your head — and your wallet on payday.",
    address: "King St, Bristol BS1 4ER",
    walkMins: 4,
    vibes: ["Historic & Haunted", "Cosy & Snug"],
    priceLevel: 2,
    hours: STANDARD,
    emoji: "🏴‍☠️",
    gradient: "linear-gradient(135deg, #6d4c2f 0%, #b07b3e 100%)",
    photo: img("photo-1514933651103-005eec06c04b"),
    highlights: [
      "Genuinely 17th-century — duck or grouse",
      "Treasure Island lore for your one interesting fact",
      "Rumoured ghosts, definitely real beams",
    ],
    seedReviews: [
      {
        name: "Captain Carl from Accounts",
        pints: 4,
        text: "Hit my head on a beam, blamed the ghost, ordered another. Cracking after a long Friday.",
      },
      {
        name: "Priya",
        pints: 5,
        text: "It's basically a pirate film set. Took the new starters here and they were obsessed.",
      },
    ],
  },
  {
    id: "small-bar",
    name: "Small Bar",
    type: "Bar",
    tagline: "Two-thirds of a pint is a respected unit here.",
    blurb:
      "Craft beer cathedral on King Street with a tap list longer than the quarterly deck. Everything's served in thirds, halves and two-thirds, which sounds twee until you clock that some of these are 11%. Pace yourself, hero.",
    address: "31 King St, Bristol BS1 4DZ",
    walkMins: 4,
    vibes: ["Craft Beer Nerd", "Cosy & Snug"],
    priceLevel: 2,
    hours: [
      h("12:00", "22:30"),
      h("16:00", "23:00"),
      h("16:00", "23:00"),
      h("12:00", "23:00"),
      h("12:00", "23:30"),
      h("12:00", "00:00"),
      h("12:00", "00:00"),
    ],
    emoji: "🍺",
    gradient: "linear-gradient(135deg, #2b8a78 0%, #6fcf97 100%)",
    photo: img("photo-1535958636474-b021ee887b13"),
    highlights: [
      "30+ rotating craft taps",
      "Measures in thirds — try before you commit",
      "Staff who actually know their saisons",
    ],
    seedReviews: [
      {
        name: "Hoppy Tom",
        pints: 5,
        text: "Asked for 'something hazy' and they delivered enlightenment. Dangerous for a school night.",
      },
      {
        name: "Dani M",
        pints: 4,
        text: "Loads of choice, can get rammed by 6pm. Nab the corner table if the gods allow.",
      },
    ],
  },
  {
    id: "the-apple",
    name: "The Apple",
    type: "Cider House",
    tagline: "A boat. Full of cider. On the harbour.",
    blurb:
      "A converted barge moored on Welsh Back serving more ciders than you knew existed. Deck seating when the Bristol sun makes its rare cameo, blankets when it inevitably doesn't. The 'Methodist' is strong enough to rearrange your evening plans.",
    address: "Welsh Back, Bristol BS1 4SB",
    walkMins: 2,
    vibes: ["Cider Heaven", "Big Group Energy"],
    priceLevel: 2,
    hours: [
      h("12:00", "23:00"),
      h("12:00", "23:00"),
      h("12:00", "23:00"),
      h("12:00", "23:00"),
      h("12:00", "23:30"),
      h("12:00", "00:30"),
      h("12:00", "00:30"),
    ],
    emoji: "🍏",
    gradient: "linear-gradient(135deg, #3a7d2c 0%, #a8d96a 100%)",
    photo: img("photo-1606767041004-6b918a1e92b8"),
    highlights: [
      "It's a literal cider boat — 2 mins from the office",
      "Dozens of ciders, some perry, all trouble",
      "Sun deck for the four nice days a year",
    ],
    seedReviews: [
      {
        name: "Cider Steve",
        pints: 5,
        text: "Closest decent drink to the desk and it's a BOAT. What more do you want from life.",
      },
      {
        name: "Megan",
        pints: 4,
        text: "Had two Methodists, missed the bus, no regrets. The toffee apple cider is unreal.",
      },
    ],
  },
  {
    id: "the-volley",
    name: "The Famous Royal Navy Volunteer",
    type: "Pub",
    tagline: "Everyone just calls it The Volley.",
    blurb:
      "Bristol Beer Factory's flagship on King Street — gorgeous tiled frontage, proper local pints and pizza that quietly saves lives at 7pm. Friendly, buzzy and the kind of place where 'just the one' becomes a saga.",
    address: "17-18 King St, Bristol BS1 4DZ",
    walkMins: 4,
    vibes: ["Craft Beer Nerd", "Big Group Energy"],
    priceLevel: 2,
    hours: STANDARD,
    emoji: "⚓",
    gradient: "linear-gradient(135deg, #1f5673 0%, #4a9fc4 100%)",
    photo: img("photo-1571613316887-6f8d5cbf7ef7"),
    highlights: [
      "Bristol Beer Factory taps on lock",
      "Pizza that doubles as dinner",
      "Beautiful tiled exterior for the group photo",
    ],
    seedReviews: [
      {
        name: "Big Dave",
        pints: 5,
        text: "Pint of Milk Stout + a pepperoni and the working week simply melts away.",
      },
      {
        name: "Sofia",
        pints: 4,
        text: "Reliable, friendly, good for a team thing. Gets loud later which is either a pro or a con.",
      },
    ],
  },
  {
    id: "the-old-duke",
    name: "The Old Duke",
    type: "Pub",
    tagline: "Live jazz and a pint named after a legend.",
    blurb:
      "King Street institution dedicated to Duke Ellington, with live jazz and blues most nights. Pints, brass, and a crowd that ranges from students to people who've been propping up the bar since 1987. Toe-tapping guaranteed.",
    address: "45 King St, Bristol BS1 4ER",
    walkMins: 4,
    vibes: ["Live Music", "Cosy & Snug"],
    priceLevel: 2,
    hours: [
      h("12:00", "23:30"),
      h("12:00", "23:30"),
      h("12:00", "23:30"),
      h("12:00", "23:30"),
      h("12:00", "00:00"),
      h("12:00", "00:30"),
      h("12:00", "00:30"),
    ],
    emoji: "🎷",
    gradient: "linear-gradient(135deg, #5b2c6f 0%, #bb6bd9 100%)",
    photo: img("photo-1415201364774-f6f0bb35f28f"),
    highlights: [
      "Free live jazz most nights",
      "Proper old-school boozer charm",
      "Best spot when you want chat + a soundtrack",
    ],
    seedReviews: [
      {
        name: "Trumpet Trev",
        pints: 4,
        text: "Came for one, stayed for a full jazz set. The band was tighter than our Q3 forecast.",
      },
      {
        name: "Aisha",
        pints: 5,
        text: "Lovely vibe, real Bristol. Squeeze in early on a band night or you're standing.",
      },
    ],
  },
  {
    id: "the-beer-emporium",
    name: "The Beer Emporium",
    type: "Bar",
    tagline: "Vaulted cellars, vast beer list, mild danger.",
    blurb:
      "Down a set of stairs on King Street into atmospheric brick-vaulted cellars. Huge range of beers, a restaurant if HR insists on 'food', and the structural ability to lose an entire evening underground without noticing daylight leave.",
    address: "13-15 King St, Bristol BS1 4EF",
    walkMins: 4,
    vibes: ["Craft Beer Nerd", "Fancy A Cocktail"],
    priceLevel: 2,
    hours: STANDARD,
    emoji: "🍻",
    gradient: "linear-gradient(135deg, #8a3b12 0%, #d98c3f 100%)",
    photo: img("photo-1518176258769-f227c798150e"),
    highlights: [
      "Moody vaulted cellar setting",
      "Massive beer range + food menu",
      "Great for a long sit-down session",
    ],
    seedReviews: [
      {
        name: "Cellar Dweller Nick",
        pints: 4,
        text: "Went down at 5, emerged at 9 reborn. The vaults swallow time whole.",
      },
      {
        name: "Lauren",
        pints: 4,
        text: "Cosy and a bit dramatic in a good way. Food's decent if you need ballast.",
      },
    ],
  },
  {
    id: "seamus-odonnells",
    name: "Seamus O'Donnell's",
    type: "Pub",
    tagline: "The Irish pub that adopts everyone by 8pm.",
    blurb:
      "Tiny, legendary Irish bar near St Nick's Market with Guinness done properly and a craic-to-square-metre ratio that's frankly off the charts. Live music, zero pretension, and you will end up talking to strangers. That's the deal.",
    address: "4 St Nicholas St, Bristol BS1 1UE",
    walkMins: 5,
    vibes: ["Live Music", "Cheeky & Cheap"],
    priceLevel: 1,
    hours: [
      h("13:00", "23:30"),
      h("15:00", "23:30"),
      h("15:00", "23:30"),
      h("15:00", "23:30"),
      h("13:00", "00:00"),
      h("13:00", "01:00"),
      h("13:00", "01:00"),
    ],
    emoji: "🍀",
    gradient: "linear-gradient(135deg, #1e7d4f 0%, #6fcf97 100%)",
    photo: img("photo-1467810563316-b5476525c0f9"),
    highlights: [
      "Proper Guinness pour, no shortcuts",
      "Live trad music + huge craic",
      "Cheapest round on this list",
    ],
    seedReviews: [
      {
        name: "Guinness Gary",
        pints: 5,
        text: "Best pint of the black stuff in BS1, fight me. Made three new friends, lost my voice.",
      },
      {
        name: "Niamh",
        pints: 5,
        text: "Feels like a hug in pub form. Get there before it fills, which is approximately always.",
      },
    ],
  },
  {
    id: "brewdog-bristol",
    name: "BrewDog Bristol",
    type: "Bar",
    tagline: "IPAs the size of your overdraft.",
    blurb:
      "Big, buzzy craft bar on Baldwin Street with a wall of taps, board games and dependable burgers. Punky branding, reliable beer, and enough space to actually get the whole team in without a seating crisis.",
    address: "58 Baldwin St, Bristol BS1 1QW",
    walkMins: 6,
    vibes: ["Craft Beer Nerd", "Big Group Energy"],
    priceLevel: 2,
    hours: [
      h("12:00", "23:00"),
      h("12:00", "23:30"),
      h("12:00", "23:30"),
      h("12:00", "23:30"),
      h("12:00", "00:00"),
      h("12:00", "01:00"),
      h("12:00", "01:00"),
    ],
    emoji: "🐕",
    gradient: "linear-gradient(135deg, #222a33 0%, #5c6b7a 100%)",
    photo: img("photo-1600788886242-5c96aabe3757"),
    highlights: [
      "Wall of IPAs and guest taps",
      "Board games for the competitive among you",
      "Roomy — good for a big after-work crew",
    ],
    seedReviews: [
      {
        name: "Hazy Hannah",
        pints: 4,
        text: "Punk IPA on tap, burger, Connect 4 grudge match. Honestly the holy trinity.",
      },
      {
        name: "Marcus",
        pints: 3,
        text: "Solid and spacious if a touch chain-y. Does the job when there's 12 of you.",
      },
    ],
  },
  {
    id: "the-stable",
    name: "The Stable",
    type: "Cider House",
    tagline: "Cider, pizza, and a board you'll over-order from.",
    blurb:
      "Harbourside spot pairing a frankly absurd cider menu with sourdough pizza and pies. The cider board is a genuine adventure — order the tasting flight and let democracy decide your favourite. Big tables = big group friendly.",
    address: "Harbourside, Bristol BS1 5UH",
    walkMins: 7,
    vibes: ["Cider Heaven", "Big Group Energy"],
    priceLevel: 2,
    hours: [
      h("12:00", "22:00"),
      h("12:00", "22:00"),
      h("12:00", "22:00"),
      h("12:00", "22:00"),
      h("12:00", "22:30"),
      h("12:00", "23:00"),
      h("12:00", "23:00"),
    ],
    emoji: "🍕",
    gradient: "linear-gradient(135deg, #b5651d 0%, #e8b04b 100%)",
    photo: img("photo-1513104890138-7c749659a591"),
    highlights: [
      "Encyclopaedic cider menu + tasting flights",
      "Sourdough pizza to soak it all up",
      "Long benches built for a team night",
    ],
    seedReviews: [
      {
        name: "Flight Club Fran",
        pints: 4,
        text: "Did the cider flight 'for research'. Found my soulmate (it was the rhubarb one).",
      },
      {
        name: "Tom B",
        pints: 4,
        text: "Pizza + cider + harbour views. Sort of the dream post-work combo tbh.",
      },
    ],
  },
  {
    id: "kings-street-brew-house",
    name: "King Street Brew House",
    type: "Brewery Tap",
    tagline: "They brew it about four metres from your glass.",
    blurb:
      "Brews its own beer on-site in the middle of pub central. Sunny benches out front for prime King Street people-watching, plus a steady rotation of house lagers and ales. Freshness you can practically smell.",
    address: "King St, Bristol BS1 4EF",
    walkMins: 4,
    vibes: ["Craft Beer Nerd", "Cheeky & Cheap"],
    priceLevel: 2,
    hours: STANDARD,
    emoji: "🏭",
    gradient: "linear-gradient(135deg, #946b2d 0%, #d4af5f 100%)",
    photo: img("photo-1559526324-4b87b5e36e44"),
    highlights: [
      "Beer brewed on the premises",
      "Outdoor benches for King Street watching",
      "House lager goes down dangerously easy",
    ],
    seedReviews: [
      {
        name: "Fresh Pint Phil",
        pints: 4,
        text: "About as fresh as a pint gets without standing in the tank. Lovely on a sunny clock-off.",
      },
      {
        name: "Ortencia",
        pints: 4,
        text: "Grabbed an outside bench and watched all of King Street happen. Elite seat.",
      },
    ],
  },
  {
    id: "hyde-and-co",
    name: "Hyde & Co",
    type: "Wine & Cocktails",
    tagline: "Speakeasy energy for when 'just a pint' won't do.",
    blurb:
      "Hidden cocktail bar behind an unassuming door — knock and enter the 1920s. Expertly made drinks, low lighting and the perfect setting to pretend the spreadsheet never happened. Book ahead; capacity is fashionably tiny.",
    address: "The Basement, 2 Upper Byron Pl, Bristol BS8 1JY",
    walkMins: 15,
    vibes: ["Fancy A Cocktail", "Cosy & Snug"],
    priceLevel: 3,
    hours: [
      null, // Sun
      null, // Mon
      h("17:00", "00:00"),
      h("17:00", "00:00"),
      h("17:00", "00:00"),
      h("17:00", "01:00"),
      h("17:00", "01:00"),
    ],
    emoji: "🍸",
    gradient: "linear-gradient(135deg, #3d2c52 0%, #8e7cc3 100%)",
    photo: img("photo-1551024709-8f23befc6f87"),
    highlights: [
      "Hidden speakeasy door — feel very mysterious",
      "Cocktails made by people who care deeply",
      "Book ahead, it's properly intimate",
    ],
    seedReviews: [
      {
        name: "Martini Mads",
        pints: 5,
        text: "Not a pint in sight and I've never been happier. Treat-yourself tier after a brutal week.",
      },
      {
        name: "Olu",
        pints: 4,
        text: "Bit of a walk and pricey, but the drinks are art. Save it for a payday Friday.",
      },
    ],
  },
  {
    id: "the-cottage-inn",
    name: "The Cottage Inn",
    type: "Pub",
    tagline: "Best harbour view, requires a tiny ferry. Worth it.",
    blurb:
      "Sat across the water with a sun-trap terrace and arguably the finest harbour view of any Bristol pub. Hop the little yellow ferry from the centre for maximum 'we're on holiday' delusion. Pint in hand, water sparkling, emails unread.",
    address: "Baltic Wharf, Cumberland Rd, Bristol BS1 6XG",
    walkMins: 18,
    vibes: ["Cosy & Snug", "Big Group Energy"],
    priceLevel: 2,
    hours: STANDARD,
    emoji: "⛴️",
    gradient: "linear-gradient(135deg, #1f6f8b 0%, #6fc3df 100%)",
    photo: img("photo-1467189386124-0e36bcc4d2e7"),
    highlights: [
      "Unbeatable harbourside sunset views",
      "Reachable by the cute yellow ferry",
      "Feels like a mini holiday on a Tuesday",
    ],
    seedReviews: [
      {
        name: "Ferry Fiona",
        pints: 5,
        text: "Took the boat over 'for the commute'. Sunset pint on the terrace = peak Bristol.",
      },
      {
        name: "James",
        pints: 4,
        text: "A trek but you forget instantly once you see the view. Go on a clear evening.",
      },
    ],
  },
  {
    id: "the-hatchet",
    name: "The Hatchet Inn",
    type: "Pub",
    tagline: "1606, supposedly a door covered in human skin. Cheers!",
    blurb:
      "One of Bristol's oldest pubs (since 1606) and gloriously unbothered about it. Rock and metal on the speakers, a fierce local following and enough dark history — including that infamous door legend — to keep the ghost tours coming. Unpretentious to its bones.",
    address: "27 Frogmore St, Bristol BS1 5NA",
    walkMins: 11,
    vibes: ["Historic & Haunted", "Live Music"],
    priceLevel: 1,
    hours: [
      h("14:00", "00:00"),
      h("16:00", "00:00"),
      h("16:00", "00:00"),
      h("16:00", "00:00"),
      h("16:00", "01:00"),
      h("14:00", "02:00"),
      h("14:00", "02:00"),
    ],
    emoji: "🪓",
    gradient: "linear-gradient(135deg, #3a2d2d 0%, #7a4a4a 100%)",
    photo: img("photo-1538488881038-e252a119ace7"),
    highlights: [
      "Built in 1606 — older than your pension worries",
      "Rock & metal soundtrack, proper local crowd",
      "Spectacularly grisly backstory",
    ],
    seedReviews: [
      {
        name: "Metal Mike",
        pints: 5,
        text: "Riffs, real ale and history that'd make a pirate squeamish. My kind of Friday.",
      },
      {
        name: "Bex",
        pints: 4,
        text: "Properly unpretentious. Cheap pints and a playlist that absolutely goes. Loved it.",
      },
    ],
  },
  {
    id: "mr-wolfs",
    name: "Mr Wolf's",
    type: "Bar",
    tagline: "Noodles, cocktails and a dancefloor that ambushes you.",
    blurb:
      "Cosy basement-y bar that starts as a chilled noodle-and-cocktail joint and, somewhere around the third drink, becomes a sweaty live-music and DJ den. You came for a quiet one. You will not leave with a quiet one. Legendary.",
    address: "33 St Stephen's St, Bristol BS1 1JX",
    walkMins: 7,
    vibes: ["Live Music", "Fancy A Cocktail"],
    priceLevel: 2,
    hours: [
      h("16:00", "23:00"),
      null,
      h("17:00", "00:00"),
      h("17:00", "00:00"),
      h("17:00", "01:00"),
      h("17:00", "03:00"),
      h("17:00", "03:00"),
    ],
    emoji: "🐺",
    gradient: "linear-gradient(135deg, #4a2c6f 0%, #c44d8f 100%)",
    photo: img("photo-1514525253161-7a46d19cd819"),
    highlights: [
      "Noodles that soak up the cocktails nicely",
      "Live bands + DJs most weekends",
      "'Just one' to dancefloor pipeline is real",
    ],
    seedReviews: [
      {
        name: "Noodle Nat",
        pints: 4,
        text: "Came for noodles, left at 2am having joined a conga line. No notes.",
      },
      {
        name: "Sam",
        pints: 4,
        text: "Great cocktails and a brilliant atmosphere once the music kicks in. Sticky floors, happy heart.",
      },
    ],
  },
  {
    id: "the-commercial-rooms",
    name: "The Commercial Rooms",
    type: "Pub",
    tagline: "A palace. Pints cheaper than your meal deal.",
    blurb:
      "A grand, columned former merchants' club on Corn Street, now a Wetherspoons — which means jaw-dropping ceilings and jaw-droppingly cheap rounds in the same breath. Opens early, no frills, maximum value. Perfect when payday is a distant rumour.",
    address: "43-45 Corn St, Bristol BS1 1HT",
    walkMins: 6,
    vibes: ["Cheeky & Cheap", "Big Group Energy"],
    priceLevel: 1,
    hours: [
      h("08:00", "00:00"),
      h("08:00", "00:00"),
      h("08:00", "00:00"),
      h("08:00", "00:00"),
      h("08:00", "00:00"),
      h("08:00", "01:00"),
      h("08:00", "01:00"),
    ],
    emoji: "🏛️",
    gradient: "linear-gradient(135deg, #5a6273 0%, #9aa3b5 100%)",
    photo: img("photo-1543007630-9710e4a00a20"),
    highlights: [
      "Stunning historic former merchants' hall",
      "Bargain pints — kindest to the wallet",
      "Opens at 8am (for your... breakfast pint?)",
    ],
    seedReviews: [
      {
        name: "Thrifty Theo",
        pints: 4,
        text: "Round for the whole team and still change from a tenner. The ceilings are unreal too.",
      },
      {
        name: "Grace",
        pints: 3,
        text: "It's a Spoons, so you know the script — but what a building. Solid cheap clock-off spot.",
      },
    ],
  },
  {
    id: "the-christmas-steps",
    name: "The Christmas Steps",
    type: "Pub",
    tagline: "Tiny pub, mighty beer list, magical staircase.",
    blurb:
      "Perched by the famously photogenic medieval staircase of the same name, this snug little pub punches absurdly above its weight on craft beer and proper food. Cosy, characterful and ideal when you want quality over capacity.",
    address: "2 Christmas Steps, Bristol BS1 5BS",
    walkMins: 12,
    vibes: ["Craft Beer Nerd", "Cosy & Snug"],
    priceLevel: 2,
    hours: [
      null, // Sun
      null, // Mon
      h("16:00", "23:00"),
      h("16:00", "23:00"),
      h("16:00", "23:00"),
      h("12:00", "23:30"),
      h("12:00", "23:30"),
    ],
    emoji: "🎄",
    gradient: "linear-gradient(135deg, #1f5e3a 0%, #57b87e 100%)",
    photo: img("photo-1600891964599-f61ba0e24092"),
    highlights: [
      "Beside Bristol's prettiest medieval steps",
      "Seriously good craft beer for its size",
      "Cracking food if you're peckish",
    ],
    seedReviews: [
      {
        name: "Cosy Cara",
        pints: 5,
        text: "Snug, characterful and the beer list is way better than a pub this small has any right to.",
      },
      {
        name: "Will",
        pints: 4,
        text: "Lovely after a wander up the steps. Small, so go early or be prepared to perch.",
      },
    ],
  },
  {
    id: "zerodegrees",
    name: "Zerodegrees",
    type: "Brewery Tap",
    tagline: "Watch the tanks, drink the results, eat the pizza.",
    blurb:
      "A big, modern microbrewery on the hill where gleaming copper tanks brew the beer you're drinking right in front of you. House lagers, pale ales and fruit beers plus stone-baked pizza and mussels. Roomy enough for the whole department.",
    address: "53 Colston St, Bristol BS1 5BA",
    walkMins: 11,
    vibes: ["Craft Beer Nerd", "Big Group Energy"],
    priceLevel: 2,
    hours: [
      h("12:00", "22:30"),
      h("12:00", "23:00"),
      h("12:00", "23:00"),
      h("12:00", "23:00"),
      h("12:00", "23:30"),
      h("12:00", "00:00"),
      h("12:00", "00:00"),
    ],
    emoji: "🍕",
    gradient: "linear-gradient(135deg, #9a5b1d 0%, #e0a64b 100%)",
    photo: img("photo-1559526324-593bc073d938"),
    highlights: [
      "Beer brewed in front of you in giant tanks",
      "House fruit beers worth a punt",
      "Pizza + space = easy big-group win",
    ],
    seedReviews: [
      {
        name: "Tank Tony",
        pints: 4,
        text: "Mango beer sounds wrong, tastes very right. Loads of room for a big after-work mob.",
      },
      {
        name: "Priti",
        pints: 4,
        text: "Fun watching it brew while you drink. Pizza's good ballast. Bit of an uphill walk, mind.",
      },
    ],
  },
  {
    id: "the-cornubia",
    name: "The Cornubia",
    type: "Pub",
    tagline: "A real-ale hideaway that time forgot (thankfully).",
    blurb:
      "A tucked-away two-room free house near Temple, beloved by CAMRA types for its rotating cask ales and total lack of pretension. No telly, no fuss, just good beer, a little garden and the warm hum of proper pub conversation.",
    address: "142 Temple St, Bristol BS1 6EN",
    walkMins: 9,
    vibes: ["Craft Beer Nerd", "Cosy & Snug"],
    priceLevel: 1,
    hours: [
      null, // Sun
      h("16:00", "23:00"),
      h("16:00", "23:00"),
      h("16:00", "23:00"),
      h("12:00", "23:00"),
      h("12:00", "23:30"),
      h("12:00", "23:30"),
    ],
    emoji: "🛖",
    gradient: "linear-gradient(135deg, #7a5a2e 0%, #c79a52 100%)",
    photo: img("photo-1572116469696-31de0f17cc34"),
    highlights: [
      "Rotating cask ales the regulars rave about",
      "Hidden gem — feels like a secret",
      "Little garden for a sunny half",
    ],
    seedReviews: [
      {
        name: "Cask Colin",
        pints: 5,
        text: "Six ever-changing ales and not a fruit machine in sight. Proper pub. I could weep.",
      },
      {
        name: "Hana",
        pints: 4,
        text: "Hard to find, worth it. Quiet, friendly and the beer's always interesting. Hidden treat.",
      },
    ],
  },
];
