/* Elevate Post Builder. Shared template library.
   Curated centrally; agents fill in the bracketed parts.
   Slide kinds: media (photo/video behind), solid (Elevate Blue), cta (auto-stamped profile)
   *word* renders in Accent Aqua. \n is a line break.
   alts: alternate wordings for that slide. Each carries its own supporting line
   (and list where relevant) so a swap never leaves a mismatched pairing.
   "Reword this post" walks every slide to the same alt index, so the whole
   set reads as one coherent version. */
window.CATEGORIES = [
  { id: "neighbourhood", label: "Neighbourhood Spotlight", blurb: "Position yourself as the local expert, one pocket at a time." },
  { id: "market", label: "Market Update", blurb: "Turn the monthly stats into something people actually read." },
  { id: "tips", label: "Buyer & Seller Tips", blurb: "Useful, no-pressure advice that earns the next call." },
];

window.TEMPLATES = [
  {
    id: "hood-hidden-gem", cat: "neighbourhood", name: "The Hidden Gem",
    desc: "For an underrated pocket buyers keep overlooking.",
    caption: "[Neighbourhood] is one of [City]'s best-kept secrets, and it won't stay that way. Swipe through for what makes it work, then send me a message if you want the full rundown.",
    tags: "#yegrealestate #edmontonrealestate #[neighbourhood] #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Street-level b-roll or a standout home",
        head: "The best street in town\nis one you've *never*\ndriven down.", sub: "Welcome to [Neighbourhood].",
        alts: [
          { head: "Nobody talks about\n*[Neighbourhood]*.", sub: "Let's fix that." },
          { head: "[City]'s most\n*underrated* pocket.", sub: "Twenty minutes of your time and you'll see it." },
        ] },
      { kind: "solid", pos: "top",
        head: "Ten minutes from\ndowntown. *Feels* like\nanother world.", sub: "In the best possible way.",
        alts: [
          { head: "There's a reason\nyou've never *heard*\nof it.", sub: "The people who live here like it that way." },
          { head: "The commute of a condo.\nThe calm of a *cul-de-sac*.", sub: "You don't usually get both." },
        ] },
      { kind: "media", pos: "bottom", hint: "Architecture detail or the local landmark",
        head: "[Housing style].\n[Landmark] at the\n*end of the block*.", sub: "They don't build these anymore.",
        alts: [
          { head: "Homes with *stories*\nin the woodwork.", sub: "[Housing style], most of them original." },
          { head: "Character you cannot\n*rebuild*.", sub: "[Landmark] sits at the end of the block." },
        ] },
      { kind: "media", pos: "top", hint: "Park, café, or main-street shot",
        head: "Why the people who\nfind it *stay*:", list: "[Reason one].\n[Reason two].\n[Reason three].\n[Reason four].",
        alts: [
          { head: "What keeps people\nhere for *decades*:", list: "[Reason one].\n[Reason two].\n[Reason three].\n[Reason four]." },
          { head: "The short list:", list: "[Reason one].\n[Reason two].\n[Reason three].\n[Reason four]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Warm lifestyle shot",
        head: "It's not the flashiest\npart of *town*.", sub: "And that's exactly why I love sending people here. Real bones, real trees, a price that still makes sense.",
        alts: [
          { head: "No hype. No banners.\nJust a good *street*.", sub: "Real bones, real trees, and a price that still makes sense." },
          { head: "The quiet ones are\nalways the *good* ones.", sub: "It won't feel like a secret for much longer." },
        ] },
      { kind: "cta", pos: "center",
        head: "Curious about\n*[Neighbourhood]*?", sub: "Send me a message and I'll walk you through it.",
        alts: [
          { head: "Want the full\n*rundown*?", sub: "Message me and I'll send it over." },
          { head: "Let's go take\na *look*.", sub: "I'll show you the streets worth seeing." },
        ] },
    ],
  },
  {
    id: "hood-day-in-life", cat: "neighbourhood", name: "A Day In The Life",
    desc: "Walk through a day in the area. Sells the lifestyle, not the listing.",
    caption: "What a Saturday actually looks like in [Neighbourhood]. This is the part a listing sheet never tells you.",
    tags: "#yeg #edmontonliving #[neighbourhood] #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Morning street or coffee shot",
        head: "A Saturday in\n*[Neighbourhood]*.", sub: "No car required.",
        alts: [
          { head: "A Sunday in\n*[Neighbourhood]*.", sub: "Slow start, short walks, nowhere to drive." },
          { head: "An ordinary Tuesday\nin *[Neighbourhood]*.", sub: "The weekdays are the real test." },
        ] },
      { kind: "solid", pos: "center",
        head: "8 AM\n*[Coffee spot]*.", sub: "The one the locals actually line up for.",
        alts: [
          { head: "It starts at\n*[Coffee spot]*.", sub: "Nine in the morning and already a line." },
          { head: "First stop:\n*[Coffee spot]*.", sub: "Four minutes on foot from most front doors." },
        ] },
      { kind: "media", pos: "bottom", hint: "Park, trail, or river valley",
        head: "11 AM\n*[Outdoor spot]*.", sub: "Fifteen minutes on foot from most front doors.",
        alts: [
          { head: "Late morning:\n*[Outdoor spot]*.", sub: "Still haven't touched the car." },
          { head: "Then *[Outdoor spot]*,\non foot.", sub: "This is the part people move here for." },
        ] },
      { kind: "media", pos: "top", hint: "Main street or market",
        head: "The whole day,\nno *driving*:", list: "[Morning stop].\n[Midday stop].\n[Afternoon stop].\n[Evening stop].",
        alts: [
          { head: "Everything, within\n*walking* distance:", list: "[Morning stop].\n[Midday stop].\n[Afternoon stop].\n[Evening stop]." },
          { head: "The car stayed in\nthe *garage*:", list: "[Morning stop].\n[Midday stop].\n[Afternoon stop].\n[Evening stop]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Golden-hour lifestyle shot",
        head: "That's what people\nmean by a *good*\nneighbourhood.", sub: "It isn't square footage. It's what's within walking distance of your front door.",
        alts: [
          { head: "You don't buy a house.\nYou buy a *routine*.", sub: "This is the part no listing sheet ever shows you." },
          { head: "Location isn't a dot\non a *map*.", sub: "It's what you can reach on foot on an ordinary day." },
        ] },
      { kind: "cta", pos: "center",
        head: "Want a Saturday\nthat looks like *this*?", sub: "Let's find you the right pocket.",
        alts: [
          { head: "Want this to be\nyour *routine*?", sub: "Let's find the street that fits it." },
          { head: "Ready to live\nlike *this*?", sub: "Send me a message and we'll start looking." },
        ] },
    ],
  },
  {
    id: "hood-compare", cat: "neighbourhood", name: "Two Neighbourhoods, Compared",
    desc: "Head-to-head for buyers torn between two areas.",
    caption: "[Area A] or [Area B]? Both are great. They're just great for different people. Here's how I'd help you choose.",
    tags: "#edmontonrealestate #yegrealestate #firsttimehomebuyer #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Split-worthy wide shot",
        head: "[Area A] or *[Area B]*?", sub: "Two great answers to two different questions.",
        alts: [
          { head: "Torn between [Area A]\nand *[Area B]*?", sub: "You're not the first. Let's sort it out." },
          { head: "Same budget.\nTwo very different\n*lives*.", sub: "[Area A] and [Area B], side by side." },
        ] },
      { kind: "solid", pos: "center",
        head: "Pick *[Area A]* if\nyou want:", list: "[Trait one].\n[Trait two].\n[Trait three].",
        alts: [
          { head: "*[Area A]* is for\nyou if:", list: "[Trait one].\n[Trait two].\n[Trait three]." },
          { head: "Choose *[Area A]*\nwhen:", list: "[Trait one].\n[Trait two].\n[Trait three]." },
        ] },
      { kind: "media", pos: "top", hint: "Area B street scene",
        head: "Pick *[Area B]* if\nyou want:", list: "[Trait one].\n[Trait two].\n[Trait three].",
        alts: [
          { head: "*[Area B]* is for\nyou if:", list: "[Trait one].\n[Trait two].\n[Trait three]." },
          { head: "Choose *[Area B]*\nwhen:", list: "[Trait one].\n[Trait two].\n[Trait three]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Comparable home exterior",
        head: "Same budget.\nVery different *life*.", sub: "Roughly [$X] gets you [what] in one, and [what] in the other.",
        alts: [
          { head: "[$X] buys two very\ndifferent *mornings*.", sub: "[What] in one, [what] in the other." },
          { head: "Identical price.\nOpposite *feel*.", sub: "Roughly [$X] either way, and that's where it stops being similar." },
        ] },
      { kind: "media", pos: "bottom", hint: "You on location",
        head: "There's no wrong\nanswer. Only the\n*wrong fit*.", sub: "That's the whole conversation I'd want to have with you before we look at a single listing.",
        alts: [
          { head: "Neither is *better*.\nOne is better for\n*you*.", sub: "Which is the only thing I actually care about." },
          { head: "The right answer\ndepends on your\n*Tuesday*.", sub: "Not your weekend. Your ordinary week." },
        ] },
      { kind: "cta", pos: "center",
        head: "Still *torn*?\nLet's talk it through.", sub: "No pressure, just a straight answer.",
        alts: [
          { head: "Can't *decide*?\nThat's my job.", sub: "Twenty minutes and we'll narrow it down." },
          { head: "Let's narrow\nit *down*.", sub: "Message me and we'll compare properly." },
        ] },
    ],
  },

  {
    id: "market-monthly", cat: "market", name: "Monthly Market Snapshot",
    desc: "The headline numbers, translated into plain English.",
    caption: "[Month] numbers are in for [City]. Here's what actually matters if you're thinking about making a move.",
    tags: "#edmontonrealestate #yegmarketupdate #realestatestats #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Skyline or neighbourhood aerial",
        head: "[Month] in the\n*[City]* market.", sub: "The numbers, in plain English.",
        alts: [
          { head: "The [Month] numbers\nare *in*.", sub: "Here's what they actually mean." },
          { head: "[Month], by the\n*numbers*.", sub: "No spin, no panic, just what happened." },
        ] },
      { kind: "solid", pos: "center",
        head: "Average price\n*[$X]*", sub: "[Up/down] [X]% from this time last year.",
        alts: [
          { head: "The headline number:\n*[$X]*", sub: "That's [up/down] [X]% year over year." },
          { head: "*[$X]*", sub: "The typical [City] home this month, [up/down] [X]% on last year." },
        ] },
      { kind: "media", pos: "top", hint: "Street of homes",
        head: "The three numbers\nthat *matter*:", list: "[X] sales this month.\n[X] days on market.\n[X] months of inventory.",
        alts: [
          { head: "Past the *headline*:", list: "[X] sales this month.\n[X] days on market.\n[X] months of inventory." },
          { head: "What's actually\nworth *watching*:", list: "[X] sales this month.\n[X] days on market.\n[X] months of inventory." },
        ] },
      { kind: "solid", pos: "center",
        head: "What that means\nif you're *buying*:", sub: "[One honest sentence about competition, timing, or leverage right now.]",
        alts: [
          { head: "Buying right now?\n*Read this.*", sub: "[One honest sentence about competition, timing, or leverage right now.]" },
          { head: "For *buyers*:", sub: "[One honest sentence about competition, timing, or leverage right now.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Front door or sold sign",
        head: "And if you're\n*selling*:", sub: "[One honest sentence about pricing and preparation right now.]",
        alts: [
          { head: "Thinking of *listing*\nthis season?", sub: "[One honest sentence about pricing and preparation right now.]" },
          { head: "For *sellers*:", sub: "[One honest sentence about pricing and preparation right now.]" },
        ] },
      { kind: "cta", pos: "center",
        head: "Want *your* street's\nnumbers?", sub: "I'll pull them and send them over.",
        alts: [
          { head: "What's *your* home\nactually worth?", sub: "I'll pull the comparables for your block." },
          { head: "Want the numbers\nfor your *block*?", sub: "Message me and I'll send them over." },
        ] },
    ],
  },
  {
    id: "market-myth", cat: "market", name: "Market Myth vs Reality",
    desc: "Bust one piece of bad advice going around right now.",
    caption: "Heard this one again this week. Let's clear it up.",
    tags: "#realestatemyths #edmontonrealestate #yegrealestate #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "You talking to camera",
        head: "“[The myth you keep\nhearing.]”", sub: "Let's talk about that.",
        alts: [
          { head: "Heard this one\n*again* this week.", sub: "“[The myth you keep hearing.]”" },
          { head: "Let's kill this\n*myth*.", sub: "“[The myth you keep hearing.]”" },
        ] },
      { kind: "solid", pos: "top",
        head: "It sounds *right*.", sub: "It just isn't what the numbers say.",
        alts: [
          { head: "Everyone repeats it.\nNobody *checks* it.", sub: "The numbers tell a different story." },
          { head: "Reasonable.\nAnd *wrong*.", sub: "Here's where it falls apart." },
        ] },
      { kind: "media", pos: "bottom", hint: "Neighbourhood b-roll",
        head: "Here's what's\n*actually* happening:", sub: "[The real explanation, in one or two plain sentences.]",
        alts: [
          { head: "What the data\nactually *says*:", sub: "[The real explanation, in one or two plain sentences.]" },
          { head: "The real *story*:", sub: "[The real explanation, in one or two plain sentences.]" },
        ] },
      { kind: "media", pos: "top", hint: "Home exterior",
        head: "What this means\nfor *you*:", list: "[Implication one].\n[Implication two].\n[Implication three].",
        alts: [
          { head: "So what should\nyou *do*?", list: "[Implication one].\n[Implication two].\n[Implication three]." },
          { head: "The practical\n*takeaway*:", list: "[Implication one].\n[Implication two].\n[Implication three]." },
        ] },
      { kind: "media", pos: "bottom", hint: "You with clients",
        head: "I'd rather give you\nthe *boring truth*.", sub: "You're making one of the biggest decisions of your life. You deserve better than a confident guess.",
        alts: [
          { head: "I'll take accurate\nover *exciting*.", sub: "You deserve better than a confident guess on a decision this size." },
          { head: "No hype. Just what\nthe numbers *show*.", sub: "That's the whole job, as far as I'm concerned." },
        ] },
      { kind: "cta", pos: "center",
        head: "Got a question\nyou've been *sitting* on?", sub: "Ask me. No pitch, I promise.",
        alts: [
          { head: "Heard something that\ndidn't sound *right*?", sub: "Send it over and I'll give you a straight answer." },
          { head: "Ask me *anything*.", sub: "No pitch, no pressure." },
        ] },
    ],
  },
  {
    id: "market-rates", cat: "market", name: "Rate Change Explainer",
    desc: "For Bank of Canada announcement days.",
    caption: "Rates moved. Here's what it actually changes for you, and what it doesn't.",
    tags: "#bankofcanada #mortgagerates #edmontonrealestate #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Downtown or office b-roll",
        head: "Rates just\n*[moved]*.", sub: "Here's the part that affects you.",
        alts: [
          { head: "The Bank of Canada\njust *moved*.", sub: "Here's the part that affects you." },
          { head: "Everyone's talking\nabout *rates* again.", sub: "Let's cut through it." },
        ] },
      { kind: "solid", pos: "center",
        head: "The change:\n*[X]%*", sub: "[What the Bank of Canada announced, in one line.]",
        alts: [
          { head: "*[X]%*", sub: "[What the Bank of Canada announced, in one line.]" },
          { head: "Today's move:\n*[X]%*", sub: "[What the Bank of Canada announced, in one line.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Kitchen or living room",
        head: "On a [$X] mortgage,\nthat's about\n*[$X] a month*.", sub: "Real money, but maybe not the deciding factor.",
        alts: [
          { head: "In real terms:\n*[$X] a month*.", sub: "On a [$X] mortgage. Real money, but rarely the deciding factor." },
          { head: "What it costs your\n*payment*:", sub: "About [$X] a month on a [$X] mortgage." },
        ] },
      { kind: "solid", pos: "center",
        head: "What I'd actually\n*watch*:", list: "Your pre-approval expiry.\nWhat you can carry comfortably.\nInventory in your price band.\nYour own timeline.",
        alts: [
          { head: "More important\nthan the *rate*:", list: "Your pre-approval expiry.\nWhat you can carry comfortably.\nInventory in your price band.\nYour own timeline." },
          { head: "Where I'd put your\n*attention*:", list: "Your pre-approval expiry.\nWhat you can carry comfortably.\nInventory in your price band.\nYour own timeline." },
        ] },
      { kind: "media", pos: "bottom", hint: "Family or lifestyle shot",
        head: "Don't time the\nmarket. Time *your*\nlife.", sub: "The right move is the one you can live with for the next five years, not the one that wins a headline.",
        alts: [
          { head: "Nobody times this\n*perfectly*.", sub: "The right move is the one you can live with for five years." },
          { head: "The best time is\nwhen *you're* ready.", sub: "Not when the news cycle says so." },
        ] },
      { kind: "cta", pos: "center",
        head: "Wondering what this\nmeans for *you*?", sub: "Let's run your actual numbers.",
        alts: [
          { head: "Let's run *your*\nnumbers.", sub: "Fifteen minutes and you'll know exactly where you stand." },
          { head: "Not sure how this\nhits *your* plan?", sub: "Send me a message and we'll work it out." },
        ] },
    ],
  },

  {
    id: "tips-first-time", cat: "tips", name: "First-Time Buyer Basics",
    desc: "The things nobody explains before your first offer.",
    caption: "Nobody hands you a rulebook for this. Save this one for when you're ready.",
    tags: "#firsttimehomebuyer #yegrealestate #edmontonrealestate #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Keys, front door, or you with clients",
        head: "Buying your first home\nshouldn't feel like\na *test*.", sub: "Nobody hands you the rulebook.",
        alts: [
          { head: "Nobody hands you\na *rulebook*.", sub: "So here's the short version." },
          { head: "First time buying?\nStart *here*.", sub: "Save this one for when you're ready." },
        ] },
      { kind: "solid", pos: "top",
        head: "Pre-approval.\nConditions.\n*Possession.*", sub: "Words that meant nothing to you last year.",
        alts: [
          { head: "A language nobody\n*taught* you.", sub: "Pre-approval. Conditions. Possession." },
          { head: "The vocabulary\nnobody *explains*.", sub: "And it all arrives at once." },
        ] },
      { kind: "media", pos: "bottom", hint: "Coffee-shop meeting",
        head: "You don't need to\nknow any of it *yet*.", sub: "That's literally my job.",
        alts: [
          { head: "That's what I'm\n*for*.", sub: "You're not supposed to know this yet." },
          { head: "Let me carry\nthat *part*.", sub: "You focus on whether you like the house." },
        ] },
      { kind: "media", pos: "top", hint: "Home interior",
        head: "What we'll sort out\n*together*:", list: "What you can actually afford.\nWhich areas fit your life.\nWhat's worth fixing.\nHow to win without overpaying.",
        alts: [
          { head: "Step by step,\n*together*:", list: "What you can actually afford.\nWhich areas fit your life.\nWhat's worth fixing.\nHow to win without overpaying." },
          { head: "The *plan*:", list: "What you can actually afford.\nWhich areas fit your life.\nWhat's worth fixing.\nHow to win without overpaying." },
        ] },
      { kind: "media", pos: "bottom", hint: "You on the phone or at a showing",
        head: "No question is\n*too small*.", sub: "Ask me the thing you're embarrassed to look up. I've answered it a hundred times, and I'd rather you know than guess.",
        alts: [
          { head: "Ask me the thing\nyou'd rather *Google*.", sub: "I've answered it a hundred times. I'd rather you know than guess." },
          { head: "There are no *dumb*\nquestions here.", sub: "Ask the one you've been sitting on." },
        ] },
      { kind: "cta", pos: "center",
        head: "Ready when\n*you* are.", sub: "First-home walkthrough, on me.",
        alts: [
          { head: "No rush.\nNo *pressure*.", sub: "Start whenever you're ready. I'll be here." },
          { head: "Let's start with\na *coffee*.", sub: "No obligation, no pitch." },
        ] },
    ],
  },
  {
    id: "tips-seller-prep", cat: "tips", name: "Before You List",
    desc: "What actually moves the needle before a home hits the market.",
    caption: "The cheap stuff that changes your sale price, and the expensive stuff that doesn't.",
    tags: "#homeselling #yegrealestate #edmontonrealestate #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Home exterior or reno shot",
        head: "Don't renovate\nbefore you *call* me.", sub: "You might be about to waste [$X].",
        alts: [
          { head: "Put the hammer\n*down*.", sub: "That renovation might cost you money." },
          { head: "Call me *before*\nthe contractor.", sub: "It's a five minute conversation that saves thousands." },
        ] },
      { kind: "solid", pos: "top",
        head: "Buyers don't pay\nfor your *taste*.", sub: "They pay for condition, light, and space.",
        alts: [
          { head: "Nobody pays extra\nfor your *backsplash*.", sub: "They pay for condition, light, and space." },
          { head: "Your taste isn't\nthe *asset*.", sub: "The condition of the house is." },
        ] },
      { kind: "media", pos: "top", hint: "Clean, bright interior",
        head: "The cheap fixes that\n*actually* pay:", list: "Paint, in the right colour.\nEvery bulb working.\nHalf your furniture, gone.\nA spotless entry.",
        alts: [
          { head: "Spend here.\nIt *pays*:", list: "Paint, in the right colour.\nEvery bulb working.\nHalf your furniture, gone.\nA spotless entry." },
          { head: "The high-return\n*basics*:", list: "Paint, in the right colour.\nEvery bulb working.\nHalf your furniture, gone.\nA spotless entry." },
        ] },
      { kind: "media", pos: "top", hint: "Kitchen or yard",
        head: "The expensive ones\nthat usually *don't*:", list: "A brand-new kitchen.\nHigh-end flooring throughout.\nLandscaping overhauls.\nAnything too personal.",
        alts: [
          { head: "Skip these. They\nrarely *return*:", list: "A brand-new kitchen.\nHigh-end flooring throughout.\nLandscaping overhauls.\nAnything too personal." },
          { head: "Where sellers\n*overspend*:", list: "A brand-new kitchen.\nHigh-end flooring throughout.\nLandscaping overhauls.\nAnything too personal." },
        ] },
      { kind: "media", pos: "bottom", hint: "You in a home",
        head: "I'll tell you where\nto *stop*.", sub: "Walk me through before you spend anything. Sometimes the best advice is that you're already ready.",
        alts: [
          { head: "Sometimes the answer\nis *do nothing*.", sub: "Walk me through before you spend a dollar." },
          { head: "You might already\nbe *ready*.", sub: "More sellers are than think they are." },
        ] },
      { kind: "cta", pos: "center",
        head: "Thinking about\n*listing*?", sub: "Let's do a walkthrough first.",
        alts: [
          { head: "Walkthrough first.\n*Then* decide.", sub: "No commitment, no pressure." },
          { head: "Before you spend\na *dollar*.", sub: "Message me and we'll look at it together." },
        ] },
    ],
  },
  {
    id: "tips-offer-day", cat: "tips", name: "How Offers Really Work",
    desc: "Demystify the offer process. Great for nervous buyers.",
    caption: "What actually happens when you write an offer. It's less dramatic than TV makes it look.",
    tags: "#homebuyingtips #yegrealestate #edmontonrealestate #elevaterealtygroup",
    slides: [
      { kind: "media", pos: "bottom", hint: "Paperwork or handshake",
        head: "Writing an offer\nisn't an *auction*.", sub: "Here's how it really goes.",
        alts: [
          { head: "It's nothing like\nthe *TV* version.", sub: "Here's what actually happens." },
          { head: "Offer day,\n*actually* explained.", sub: "Less dramatic than you'd think." },
        ] },
      { kind: "solid", pos: "top",
        head: "Price is *one* of\nsix things.", sub: "And often not the one that wins.",
        alts: [
          { head: "The highest offer\ndoesn't always *win*.", sub: "Price is one of six things on the table." },
          { head: "Six things are on\nthe *table*.", sub: "Price is only the loudest one." },
        ] },
      { kind: "media", pos: "top", hint: "Interior detail",
        head: "What else is on\nthe *table*:", list: "Possession date.\nConditions and timelines.\nDeposit size.\nWhat stays in the house.",
        alts: [
          { head: "The other *five*:", list: "Possession date.\nConditions and timelines.\nDeposit size.\nWhat stays in the house." },
          { head: "Levers most buyers\n*forget*:", list: "Possession date.\nConditions and timelines.\nDeposit size.\nWhat stays in the house." },
        ] },
      { kind: "media", pos: "bottom", hint: "Front door or sold sign",
        head: "A clean offer beats\na loud *one*.", sub: "Sellers take the deal most likely to actually close, not always the biggest number on the page.",
        alts: [
          { head: "Sellers want\n*certainty*.", sub: "They take the deal most likely to actually close." },
          { head: "Simple beats\n*loud*.", sub: "Every time, in my experience." },
        ] },
      { kind: "media", pos: "bottom", hint: "You with clients",
        head: "And if we don't\nget it? *Good.*", sub: "It means we didn't overpay out of panic. There's always another one, and I'll be there for that one too.",
        alts: [
          { head: "Losing one beats\n*overpaying*.", sub: "There's always another house. I'll be there for that one too." },
          { head: "No panic bids.\n*Ever.*", sub: "If we lose it, we lost it at the right price." },
        ] },
      { kind: "cta", pos: "center",
        head: "Nervous about\nmaking an *offer*?", sub: "I'll walk you through every line.",
        alts: [
          { head: "First offer\ncoming *up*?", sub: "I'll explain every line before you sign it." },
          { head: "Let's write it\n*together*.", sub: "No surprises, no jargon." },
        ] },
    ],
  },
];
