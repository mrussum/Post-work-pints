import type { Pub } from "../types";

// All distances are "approx walk from Shaw & Co, BS1" (roughly the
// Welsh Back / King Street / harbourside end of town). They're eyeballed,
// not GPS-perfect — your mileage may vary depending on pint count.

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=60`;

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
];
