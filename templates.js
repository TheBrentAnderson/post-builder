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
  { id: "sold", label: "Sold Story", blurb: "The case study behind the sold sign. What we did, and what it got them." },
];

window.TEMPLATES = [
  {
    thumb: "assets/thumbs/river-valley-fall.jpg", id: "hood-hidden-gem", cat: "neighbourhood", name: "The Hidden Gem",
    desc: "For an underrated pocket buyers keep overlooking.",
    caption: "Homes for sale in [Neighbourhood] are still some of the best value in [City], and most buyers never look here.\n\nI send people to this neighbourhood constantly. Here is why it works:\n\n[Housing style] on mature, tree-lined streets, most of them built in [era] and built properly.\n\n[Landmark] is walking distance, which is the part that surprises people.\n\nIt is roughly [X] minutes to downtown [City], so you are not trading your commute for the quiet.\n\nPrices sit around [$X] for [bed/bath], which is [$X] less than comparable homes in [nearby area].\n\nThe catch is that there is no catch. It is just a neighbourhood that has never marketed itself, so it stays off most buyers' lists until someone points them at it.\n\nIf you are house hunting in [City] and your budget is not going as far as you hoped, this is the pocket I would show you first.\n\nWhich [City] neighbourhood do you think is the most underrated? Tell me below, I will give you an honest answer.",
    tags: "#[neighbourhood] #edmontonrealestate #yeghomesforsale #edmontonneighbourhoods",
    slides: [
      { kind: "media", pos: "bottom", hint: "Street-level b-roll or a standout home",
        head: "The best street in town\nis one you've *never*\ndriven down.", sub: "Welcome to [Neighbourhood].",
        alts: [
          { head: "Nobody talks about\n*[Neighbourhood]*.", sub: "Let's fix that." },
          { head: "[City]'s most\n*underrated* pocket.", sub: "Twenty minutes of your time and you'll see it." },
        ] },
      { kind: "media", pos: "bottom", hint: "Architecture detail or the local landmark",
        head: "[Housing style].\n[Landmark] at the\n*end of the block*.", sub: "They don't build these anymore.",
        alts: [
          { head: "Homes with *stories*\nin the woodwork.", sub: "[Housing style], most of them original." },
          { head: "Character you cannot\n*rebuild*.", sub: "[Landmark] sits at the end of the block." },
        ] },
      { kind: "solid", pos: "top",
        head: "Ten minutes from\ndowntown. *Feels* like\nanother world.", sub: "In the best possible way.",
        alts: [
          { head: "There's a reason\nyou've never *heard*\nof it.", sub: "The people who live here like it that way." },
          { head: "The commute of a condo.\nThe calm of a *cul-de-sac*.", sub: "You don't usually get both." },
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
    thumb: "assets/thumbs/cafe-patio-street.jpg", id: "hood-day-in-life", cat: "neighbourhood", name: "A Day In The Life",
    desc: "Walk through a day in the area. Sells the lifestyle, not the listing.",
    caption: "Living in [Neighbourhood] without using your car: here is what a full Saturday actually looks like.\n\nThis is the part a listing sheet can never show you, so I walked it.\n\nMorning at [Coffee spot], about [X] minutes on foot from most front doors.\n\nLate morning at [Outdoor spot], where half the neighbourhood seems to end up.\n\nAfternoon along [Main street] for [what you would actually do there].\n\nDinner at [Evening spot], then home without ever touching the car.\n\nWhen buyers ask me about walkability in [City], this is the neighbourhood I bring up. Not because it scores well on a website, but because the things people actually use on a weekend are genuinely close together.\n\nThat is what separates a good location from a good address. Square footage you can change later. What sits within a ten minute walk of your front door, you cannot.\n\nWhat is the one thing you would want within walking distance of your home? Curious what people say.",
    tags: "#[neighbourhood] #walkableedmonton #edmontonliving #yegrealestate",
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
      { kind: "cta", pos: "center",
        head: "Want a Saturday\nthat looks like *this*?", sub: "Let's find you the right pocket.",
        alts: [
          { head: "Want this to be\nyour *routine*?", sub: "Let's find the street that fits it." },
          { head: "Ready to live\nlike *this*?", sub: "Send me a message and we'll start looking." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/skyline-sunset.jpg", id: "hood-compare", cat: "neighbourhood", name: "Two Neighbourhoods, Compared",
    desc: "Head-to-head for buyers torn between two areas.",
    caption: "[Area A] vs [Area B]: two [City] neighbourhoods at the same price point, for two completely different lives.\n\nBuyers ask me to compare these two constantly, so here is the honest breakdown.\n\nChoose [Area A] if you want [trait one], [trait two] and [trait three]. It suits [type of buyer] best.\n\nChoose [Area B] if you want [trait one], [trait two] and [trait three]. It suits [type of buyer] best.\n\nOn price, roughly [$X] gets you [what] in [Area A] and [what] in [Area B]. Similar money, very different daily routine.\n\nThe question I ask before we book a single showing is not which one is better. It is what your ordinary Tuesday looks like. Where you work, whether you drive, who is coming with you, what you want to be able to walk to.\n\nAnswer that honestly and the right neighbourhood usually picks itself.\n\nWhich would you choose, [Area A] or [Area B]? I am genuinely curious.",
    tags: "#[areaa] #[areab] #edmontonneighbourhoods #yeghomesforsale",
    slides: [
      { kind: "media", pos: "bottom", hint: "Split-worthy wide shot",
        head: "[Area A] or *[Area B]*?", sub: "Two great answers to two different questions.",
        alts: [
          { head: "Torn between [Area A]\nand *[Area B]*?", sub: "You're not the first. Let's sort it out." },
          { head: "Same budget.\nTwo very different\n*lives*.", sub: "[Area A] and [Area B], side by side." },
        ] },
      { kind: "media", pos: "center", hint: "Street or homes in Area A",
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
    thumb: "assets/thumbs/new-build-dusk.jpg", id: "market-monthly", cat: "market", name: "Monthly Market Snapshot",
    desc: "The headline numbers, translated into plain English.",
    caption: "[City] real estate market update for [Month] [Year]: average price [$X], [up/down] [X]% year over year.\n\nHere is what those numbers actually mean if you are thinking about buying or selling.\n\nAverage sale price: [$X], [up/down] [X]% from [Month] last year.\n\nSales volume: [X] homes sold, [up/down] [X]%.\n\nDays on market: [X], compared to [X] a year ago.\n\nInventory: [X] months of supply, which puts us in a [buyer's/seller's/balanced] market.\n\nIf you are buying: [one honest sentence about competition, timing or leverage right now].\n\nIf you are selling: [one honest sentence about pricing and preparation right now].\n\nThe city-wide average is a blunt instrument though. [Neighbourhood] and [Neighbourhood] are behaving nothing like each other right now, and your street matters more than the headline.\n\nWant the numbers for your specific neighbourhood? Comment your area below or send me a message and I will pull them.",
    tags: "#edmontonmarketupdate #yegrealestate #edmontonhomeprices #albertarealestate",
    slides: [
      { kind: "media", pos: "bottom", hint: "Skyline or neighbourhood aerial",
        head: "[Month] in the\n*[City]* market.", sub: "The numbers, in plain English.",
        alts: [
          { head: "The [Month] numbers\nare *in*.", sub: "Here's what they actually mean." },
          { head: "[Month], by the\n*numbers*.", sub: "No spin, no panic, just what happened." },
        ] },
      { kind: "media", pos: "center", hint: "A recent sold home, or a street of listings",
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
    thumb: "assets/thumbs/savona-condo.jpg", id: "market-myth", cat: "market", name: "Market Myth vs Reality",
    desc: "Bust one piece of bad advice going around right now.",
    caption: "\"[The myth you keep hearing]\" is the most common thing I hear about the [City] real estate market right now, and it is wrong.\n\nHeard it three times this week alone. Here is what is actually happening.\n\nThe belief: [the myth, stated plainly].\n\nThe reality: [the real explanation in one or two plain sentences, with the number that disproves it].\n\nWhy it spread: [the grain of truth that made it believable, or the year it actually was true].\n\nWhat it means for you:\n\nIf you are buying, [implication one].\n\nIf you are selling, [implication two].\n\nIf you are waiting, [implication three].\n\nI would rather give you the boring accurate answer than the exciting wrong one. You are making one of the largest financial decisions of your life and you deserve better than something someone repeated at a barbecue.\n\nWhat is something you have been told about the [City] market that you are not sure about? Ask me below and I will give you a straight answer.",
    tags: "#edmontonrealestate #realestatemyths #yeghomebuyers #albertahousingmarket",
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
      { kind: "cta", pos: "center",
        head: "Got a question\nyou've been *sitting* on?", sub: "Ask me. No pitch, I promise.",
        alts: [
          { head: "Heard something that\ndidn't sound *right*?", sub: "Send it over and I'll give you a straight answer." },
          { head: "Ask me *anything*.", sub: "No pitch, no pressure." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/couple-laptop.jpg", id: "market-rates", cat: "market", name: "Rate Change Explainer",
    desc: "For Bank of Canada announcement days.",
    caption: "The Bank of Canada [raised/cut/held] rates today. Here is what it actually changes for [City] buyers and homeowners.\n\nThe announcement: [what was announced, in one line].\n\nIn real money, on a [$X] mortgage that is roughly [$X] a month. Real, but often not the thing that decides your move.\n\nWhat I would actually pay attention to:\n\nYour pre-approval expiry date and whether your hold is still good.\n\nWhat payment you can carry comfortably, not the maximum you qualify for.\n\nInventory in your price band, which drives competition far more than the overnight rate.\n\nYour own timeline, because a five year decision should not hinge on a five week headline.\n\nNobody times this market perfectly, including me. The people who do well are the ones who buy when their own life is ready and their numbers work.\n\nWant to see what this does to your actual payment? Send me a message and we will run it properly.",
    tags: "#bankofcanada #canadianmortgagerates #edmontonrealestate #yeghomebuyers",
    slides: [
      { kind: "media", pos: "bottom", hint: "Downtown or office b-roll",
        head: "Rates just\n*[moved]*.", sub: "Here's the part that affects you.",
        alts: [
          { head: "The Bank of Canada\njust *moved*.", sub: "Here's the part that affects you." },
          { head: "Everyone's talking\nabout *rates* again.", sub: "Let's cut through it." },
        ] },
      { kind: "media", pos: "top", hint: "Kitchen or living room",
        head: "On a [$X] mortgage,\nthat's about\n*[$X] a month*.", sub: "Real money, but maybe not the deciding factor.",
        alts: [
          { head: "In real terms:\n*[$X] a month*.", sub: "On a [$X] mortgage. Real money, but rarely the deciding factor." },
          { head: "What it costs your\n*payment*:", sub: "About [$X] a month on a [$X] mortgage." },
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
    thumb: "assets/thumbs/buyers-guide-keys.jpg", id: "tips-first-time", cat: "tips", name: "First-Time Buyer Basics",
    desc: "The things nobody explains before your first offer.",
    caption: "Buying your first home in [City]: the things nobody explains before you write your first offer.\n\nSave this one. You will want it later.\n\nPre-approval is not a mortgage. It is a lender's estimate based on unverified information, and it can change.\n\nYour conditions are your protection. Financing and inspection periods exist so you can walk away without losing your deposit.\n\nPossession day is not the day you get keys automatically. Funds have to move first, and that timing catches people out.\n\nThe deposit is not extra money. It comes off your down payment.\n\nClosing costs run roughly [X]% on top of your purchase price. Budget for them early.\n\nYou do not need to understand all of this today. That is genuinely the job you are hiring me for. What you do need is someone who will explain it in plain language instead of making you feel behind.\n\nFirst home on your mind? Ask me the question you have been too embarrassed to Google. I have answered it a hundred times.",
    tags: "#firsttimehomebuyer #edmontonrealestate #yeghomebuyers #albertahomebuying",
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
    thumb: "assets/thumbs/kitchen-green.jpg", id: "tips-seller-prep", cat: "tips", name: "Before You List",
    desc: "What actually moves the needle before a home hits the market.",
    caption: "Selling your home in [City]? Do not renovate before you call your agent. You may be about to spend [$X] you will never get back.\n\nAfter [X] listings, here is what actually moves the sale price.\n\nWorth doing:\n\nFresh paint in a neutral colour. Cheapest return in real estate.\n\nEvery bulb working and every blind open. Buyers equate light with space.\n\nRemoving roughly half your furniture. Empty-ish rooms read bigger in photos and in person.\n\nA spotless entry, because the first ten seconds set the tone for the whole showing.\n\nRarely worth doing:\n\nA full kitchen renovation right before listing. You will rarely recover the cost.\n\nHigh-end flooring throughout, landscaping overhauls, or anything built around your personal taste.\n\nBuyers are not paying for your choices. They are paying for condition, light and space.\n\nThinking about listing in the next [X] months? Send me a message and I will walk through it with you before you spend a dollar.",
    tags: "#sellingyourhome #edmontonrealestate #homestagingtips #yeghomesforsale",
    slides: [
      { kind: "media", pos: "bottom", hint: "Home exterior or reno shot",
        head: "Don't renovate\nbefore you *call* me.", sub: "You might be about to waste [$X].",
        alts: [
          { head: "Put the hammer\n*down*.", sub: "That renovation might cost you money." },
          { head: "Call me *before*\nthe contractor.", sub: "It's a five minute conversation that saves thousands." },
        ] },
      { kind: "media", pos: "top", hint: "Clean, bright interior",
        head: "The cheap fixes that\n*actually* pay:", list: "Paint, in the right colour.\nEvery bulb working.\nHalf your furniture, gone.\nA spotless entry.",
        alts: [
          { head: "Spend here.\nIt *pays*:", list: "Paint, in the right colour.\nEvery bulb working.\nHalf your furniture, gone.\nA spotless entry." },
          { head: "The high-return\n*basics*:", list: "Paint, in the right colour.\nEvery bulb working.\nHalf your furniture, gone.\nA spotless entry." },
        ] },
      { kind: "solid", pos: "top",
        head: "Buyers don't pay\nfor your *taste*.", sub: "They pay for condition, light, and space.",
        alts: [
          { head: "Nobody pays extra\nfor your *backsplash*.", sub: "They pay for condition, light, and space." },
          { head: "Your taste isn't\nthe *asset*.", sub: "The condition of the house is." },
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
    thumb: "assets/thumbs/desk-keys-calculator.jpg", id: "tips-offer-day", cat: "tips", name: "How Offers Really Work",
    desc: "Demystify the offer process. Great for nervous buyers.",
    caption: "How real estate offers actually work in [City], because it is nothing like the bidding wars on TV.\n\nPrice is one of six things on the table, and often not the one that wins.\n\nPossession date. Matching the seller's timeline can be worth more to them than money.\n\nConditions and how long you need for them. Fewer days reads as lower risk.\n\nDeposit size, which signals how serious you are.\n\nWhat stays with the house, from appliances to the shed.\n\nHow the offer is presented, which matters more than most buyers think.\n\nSellers do not always take the biggest number. They take the deal most likely to actually close, because a collapsed sale costs them weeks and their next purchase.\n\nAnd if we lose one, that is not a failure. It means we did not panic-bid [$X] over asking on a house that will appraise below it.\n\nWriting your first offer soon? Comment below and I will explain any line of it.",
    tags: "#homebuyingtips #edmontonrealestate #yeghomebuyers #realestateoffers",
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
      { kind: "media", pos: "bottom", hint: "Paperwork, or a handshake",
        head: "A deposit says\nyou're *serious*.", sub: "Sellers read it as proof you'll close. It's your money back at closing either way, so use it.",
        alts: [
          { head: "The cheapest way\nto look *credible*.", sub: "A real deposit costs you nothing and says everything." },
          { head: "Money talks, but\nnot the way you\n*think*.", sub: "The deposit matters more to a seller than most buyers realize." },
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
  {
    thumb: "assets/thumbs/bungalow-backyard.jpg", id: "sold-seller-case", cat: "sold", name: "Sold: The Seller's Story",
    desc: "The case study behind a listing that sold. Problem, plan, result.",
    caption: "Just sold in [Neighbourhood]: [bed/bath] listed at [$list], firm at [$sold] in [X] days.\n\nHere is what actually happened, because the number on its own does not tell you much.\n\nThe problem: [the real issue, for example the home had sat with another brokerage for X days, or the layout scared buyers off, or they needed to be out by a date].\n\nWhat we changed: [the specific fixes, for example repriced against the right comps, decluttered and painted two rooms, new photos, relaunched on a Thursday].\n\nThe result: [X] showings in the first weekend, [X] offers, and a firm deal at [$sold], which is [X]% of list.\n\nWhat made the difference was not luck. It was pricing to the comps buyers were actually comparing against, fixing the two things every showing complained about, and relaunching so the home looked new instead of stale.\n\nIf your home is sitting, or you are about to list in [City] and want to know what your number really is, send me a message. I will tell you straight.\n\nThinking of selling this year? Drop a question below.",
    tags: "#justsold #[neighbourhood] #edmontonrealestate #yeghomesforsale #sellingyeg",
    slides: [
      { kind: "media", pos: "bottom", hint: "Exterior of the sold home, or the sold sign",
        head: "Sold in [X] days.\nHere's what *actually*\nhappened.", sub: "[Neighbourhood], [bed/bath].",
        alts: [
          { head: "This one didn't\nsell *itself*.", sub: "[Neighbourhood], [bed/bath], firm in [X] days." },
          { head: "[$sold].\n*[X]* days.", sub: "The story behind the number." },
        ] },
      { kind: "media", pos: "top", hint: "The home as it looked when you took it on",
        head: "First, the *problem*.", sub: "[The real issue. It sat for [X] days with another brokerage. The layout scared buyers off. They had to be out by a date.]",
        alts: [
          { head: "It had already\n*failed* once.", sub: "[X] days on the market, no offers, and a seller who was done with it." },
          { head: "Where we\n*started*.", sub: "[The honest starting point, including what was working against us.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Before shot, or the room you fixed",
        head: "Every showing\ncomplained about\nthe *same* thing.", sub: "[What buyers kept saying.] So we stopped guessing and fixed it.",
        alts: [
          { head: "Buyers told us\nexactly what was\n*wrong*.", sub: "[What the feedback kept saying.] We listened instead of waiting it out." },
          { head: "The feedback was\n*unanimous*.", sub: "[The one objection that came up at every single showing.]" },
        ] },
      { kind: "media", pos: "top", hint: "After shot, staging, or new photography",
        head: "What we *changed*:", list: "[Repriced against the right comps].\n[Decluttered and painted [rooms]].\n[New photography and floor plan].\n[Relaunched on a [day]].",
        alts: [
          { head: "The plan, in\n*four* moves:", list: "[Repriced to the real comps].\n[Fixed the two objections].\n[Reshot the whole home].\n[Relaunched as new]." },
          { head: "Four weeks.\nFour *decisions*:", list: "[Price].\n[Presentation].\n[Photography].\n[Timing]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Sold sign, or the happy sellers",
        head: "[X] showings.\n[X] offers.\n*Firm* in [X] days.", sub: "[$sold], which is [X]% of list. Same house. Different strategy.",
        alts: [
          { head: "Relisted Thursday.\n*Firm* by Monday.", sub: "[X] showings, [X] offers, [$sold]. Nothing about the house changed." },
          { head: "[$X] more than\ntheir *last* offer.", sub: "Sold at [$sold] in [X] days, and they were out on the date they needed." },
        ] },
      { kind: "cta", pos: "center",
        head: "Is your home\n*sitting*?", sub: "Message me and I'll tell you why, honestly.",
        alts: [
          { head: "Thinking of\n*selling*?", sub: "Let's talk about what your number really is." },
          { head: "Want this for\nyour *home*?", sub: "Send me a message and we'll build the plan." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/townhouse-exterior.jpg", id: "sold-buyer-case", cat: "sold", name: "Sold: The Buyer's Win",
    desc: "How your buyers got the home. Great for competitive or tricky deals.",
    caption: "My buyers just got the keys in [Neighbourhood], and they were not the highest offer.\n\nHere is how that happened.\n\n[X] offers on the table. Ours was [$X] under the top number. The sellers took it anyway.\n\nWhat we did differently: [the specific edge, for example we called the listing agent and found out the sellers needed a [X] day possession, so we matched it, kept conditions tight and clean, and wrote a deposit that showed we were serious].\n\nThe lesson: price is one line of an offer. Sellers are also choosing certainty, timing, and the offer least likely to fall apart before closing.\n\nIt is also why I never let a client write blind. Five minutes on the phone with the other agent is worth more than [$X] of panic money.\n\nBuying in [City] this year? Send me a message before you write anything. I will walk you through every line.\n\nWhat is the hardest part of buying right now? Tell me below.",
    tags: "#justsold #[neighbourhood] #edmontonrealestate #yegbuyers #firsttimehomebuyer",
    slides: [
      { kind: "media", pos: "bottom", hint: "Buyers at the door, or keys in hand",
        head: "They weren't the\nhighest *offer*.", sub: "They still got the house.",
        alts: [
          { head: "[X] offers.\nWe *won* with\nthe [X]th.", sub: "[Neighbourhood], [bed/bath], keys in hand." },
          { head: "Beaten on price.\n*Chosen* anyway.", sub: "Here's exactly why." },
        ] },
      { kind: "media", pos: "top", hint: "The home they competed for, or the street",
        head: "[X] offers.\nOurs was [$X]\n*under* the top one.", sub: "On paper, we should have lost this.",
        alts: [
          { head: "The house they\n*loved*, with\n[X] others on it.", sub: "And a budget that couldn't win on price alone." },
          { head: "We were *not*\nthe best number.", sub: "So we stopped competing on the number." },
        ] },
      { kind: "media", pos: "center", hint: "Detail shot of the home",
        head: "So I *called*\nthe other agent.", sub: "[What that call turned up. The sellers needed a [X] day possession. They had already lost one deal to financing.]",
        alts: [
          { head: "One phone call\nchanged the\n*whole* offer.", sub: "[What the listing agent told me that nobody else asked for.]" },
          { head: "I asked what the\nsellers actually\n*needed*.", sub: "Nobody else did. That was the whole edge." },
        ] },
      { kind: "media", pos: "top", hint: "You with the clients, or the paperwork",
        head: "What we put\nin the *offer*:", list: "[Matched their possession date].\n[Tight, clean conditions].\n[A deposit that meant it].\n[Financing already lined up].",
        alts: [
          { head: "How we *won*\nwithout the\nhighest price:", list: "[Their date, not ours].\n[Fewer conditions].\n[Serious deposit].\n[Pre-approved and ready]." },
          { head: "Four things that\nbeat *money*:", list: "[Timing].\n[Certainty].\n[Deposit].\n[Speed]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Keys, or the clients on the porch",
        head: "Sellers don't just\npick the biggest\n*number*.", sub: "They pick the offer most likely to actually close. That's the part you can compete on.",
        alts: [
          { head: "Certainty is worth\nreal *money*.", sub: "Sellers pay for the deal that won't fall apart in three weeks." },
          { head: "Price is one *line*\nof the offer.", sub: "There are a dozen others, and most buyers never use them." },
        ] },
      { kind: "cta", pos: "center",
        head: "About to write\nan *offer*?", sub: "Message me first. I'll walk you through every line.",
        alts: [
          { head: "Buying in\n*[City]*?", sub: "Let's build an offer that wins without overpaying." },
          { head: "Losing out on\n*offers*?", sub: "Send me a message. There's more to work with than price." },
        ] },
    ],
  },
];
