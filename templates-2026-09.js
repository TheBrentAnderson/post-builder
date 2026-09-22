/* Elevate Post Builder. Monthly template pack.
   Naming convention: templates-YYYY-MM.js, loaded after templates.js in index.html.
   Each pack pushes its own categories and templates onto the shared library, so a
   monthly drop never touches the core file. Same rules as templates.js:
   *word* renders in the accent colour, \n is a line break, alts walk together
   when an agent hits "Reword this post". */

window.CATEGORIES.push(
  { id: "listing", label: "Listing Feature", blurb: "The post that starts DMs. Sell the lifestyle, hold the price back." },
  { id: "local", label: "Local & Lifestyle", blurb: "Local businesses, relocation guides, and posts people actually share." },
  { id: "proof", label: "Social Proof", blurb: "Client stories and the introduction post that earns the follow." },
  { id: "money", label: "Money & Numbers", blurb: "Honest math on renting, buying, and what it all really costs." }
);

window.TEMPLATES.push(
  {
    thumb: "assets/thumbs/kitchen-island-yellow.jpg", id: "listing-feature", cat: "listing", name: "The Listing Feature",
    desc: "Room by room, sold on lifestyle. Price held back so people have to ask.",
    caption: "New listing in [Neighbourhood]: [bed] bed, [bath] bath, and the back yard is the whole reason to see it.\n\nWalking through it, here is what I would actually use each room for.\n\nThe kitchen is where you would end up hosting whether you planned to or not. [Detail, for example the island seats four and the sightline runs right into the living room.]\n\nThe living room has [feature], which matters more in January than you think.\n\n[Bonus room] is the flex space. Office now, nursery later, gym if you are honest with yourself.\n\nThe back yard is [south facing / mature trees / big enough for the garage you keep talking about].\n\nIt is [X] minutes to [landmark] and walkable to [local spot], so the location does as much work as the house.\n\nI am holding the price and the address for the DMs, so send me a message and I will send everything over, including the floor plan.\n\nWhich room would you claim first?",
    tags: "#newlisting #[neighbourhood] #edmontonrealestate #yeghomesforsale #homesforsaleedmonton",
    slides: [
      { kind: "media", pos: "bottom", hint: "Best exterior angle, or the standout feature",
        head: "[X] bed. [X] bath.\nAnd *that* back\nyard.", sub: "New in [Neighbourhood].",
        alts: [
          { head: "The one thing that\nsold *me* on it.", sub: "[Neighbourhood], [bed] bed, [bath] bath." },
          { head: "Just listed in\n*[Neighbourhood]*.", sub: "Swipe for the rooms that matter." },
        ] },
      { kind: "media", pos: "bottom", hint: "Kitchen",
        head: "You'd host here\nwhether you *meant*\nto or not.", sub: "[The detail that makes it, for example an island that seats four.]",
        alts: [
          { head: "The *kitchen*\ndoes the talking.", sub: "[Island, sightlines, storage. Whatever the real feature is.]" },
          { head: "Every party ends\nup in *here*.", sub: "[What makes it work as a gathering space.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Living room or main feature room",
        head: "[Feature] matters\nmore in *January*\nthan you think.", sub: "Ask anyone who has spent a winter in [City].",
        alts: [
          { head: "Built for an\n[City] *winter*.", sub: "[South-facing windows, the fireplace, the heated floors.]" },
          { head: "This is the room\nyou'd *live* in.", sub: "[What makes it the one you would actually use.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Primary bedroom or ensuite",
        head: "The primary is at\nthe *back* of the\nhouse.", sub: "Which means you hear the yard, not the street. [Ensuite detail.]",
        alts: [
          { head: "Four bedrooms.\nOne you'd actually\n*sleep* in.", sub: "[What makes the primary work. Light, quiet, the ensuite.]" },
          { head: "Upstairs is where\nit gets *good*.", sub: "[The bedroom detail worth the swipe.]" },
        ] },
      { kind: "media", pos: "top", hint: "Bonus room, basement, or yard",
        head: "What you'd do\nwith the *rest*:", list: "[Bonus room]: office now, [later use] later.\n[Basement]: [what it's set up for].\nYard: [south facing / mature trees].\nGarage: [size and what fits].",
        alts: [
          { head: "The parts nobody\nputs in the *listing*:", list: "[Flex room and what it solves].\n[Storage or basement].\n[Yard orientation].\n[Parking]." },
          { head: "Room to *grow*\ninto:", list: "[Bonus room].\n[Basement].\n[Yard].\n[Garage]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Neighbourhood or street context shot",
        head: "[X] minutes to\n[landmark]. *Walking*\ndistance to [spot].", sub: "The location does as much work here as the house does.",
        alts: [
          { head: "The address is\nhalf the *value*.", sub: "[X] minutes to [landmark], walkable to [local spot]." },
          { head: "You can fix a\nkitchen. Not a\n*location*.", sub: "And this one is already right." },
        ] },
      { kind: "cta", pos: "center",
        head: "Want the price\nand the *address*?", sub: "Send me a message and I'll send the full package.",
        alts: [
          { head: "Message me for\nthe *details*.", sub: "Price, floor plan, and the address." },
          { head: "Want to see it\nin *person*?", sub: "I'll get you in this week." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/cafe-interior.jpg", id: "local-business", cat: "local", name: "Local Business Spotlight",
    desc: "Feature a local spot and tag them. They reshare, you reach their followers.",
    caption: "If you live in [Neighbourhood] and have not been to [Business] yet, fix that this week.\n\n[Owner name] has been running it for [X] years, and it is the kind of place that makes a neighbourhood feel like a neighbourhood.\n\nWhat to order: [the thing]. [One honest sentence about why.]\n\nBest time to go: [when it is quiet or when it is at its best].\n\nWhy it matters: small businesses like this are a real part of what people are buying when they buy in [Neighbourhood]. Nobody moves somewhere for the square footage alone.\n\nI show this street to buyers constantly, and [Business] is usually the stop that sells it.\n\nGo support them, and tell them I sent you.\n\nTag a local spot that deserves this post next. I will go visit it.",
    tags: "#supportlocalyeg #[neighbourhood] #yeglocal #edmontonsmallbusiness #edmontonrealestate",
    slides: [
      { kind: "media", pos: "bottom", hint: "Storefront or interior of the business",
        head: "The best thing\nabout *[Neighbourhood]*\nisn't a house.", sub: "It's [Business], on [street].",
        alts: [
          { head: "Go here this\n*week*.", sub: "[Business], [Neighbourhood]." },
          { head: "[X] years on the\n*same* corner.", sub: "Meet [Business]." },
        ] },
      { kind: "media", pos: "bottom", hint: "The product, dish, or drink",
        head: "Order the\n*[the thing]*.", sub: "[One honest sentence about why it's the one.]",
        alts: [
          { head: "Don't overthink\nthe *menu*.", sub: "Get the [the thing]. Thank me later." },
          { head: "This is what\nthey're *known*\nfor.", sub: "[Why it's worth the trip.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Wide shot of the street or block",
        head: "Places like this\nmake a *street*\nworth living on.", sub: "When I show buyers [Neighbourhood], this is usually the stop that sells it.",
        alts: [
          { head: "I bring buyers\n*here*.", sub: "It does more for the neighbourhood than any listing photo." },
          { head: "Support the ones\nthat *stayed*.", sub: "They're a bigger part of your property value than you'd guess." },
        ] },
      { kind: "cta", pos: "center",
        head: "Tell them I\n*sent* you.", sub: "And tag the local spot I should feature next.",
        alts: [
          { head: "Who's *next*?", sub: "Tag a local business and I'll go visit it." },
          { head: "Go *support*\nthem.", sub: "Then tell me which one I should feature next." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/couple-walterdale.jpg", id: "local-moving", cat: "local", name: "Moving To Edmonton",
    desc: "The relocation post. Answers what people search, ends in a guide request.",
    caption: "Moving to Edmonton and have no idea which neighbourhood to look in? Start here.\n\nI get this question every week from people relocating from [common origin], and the honest answer depends on three things.\n\nBudget. [What $X actually buys you here versus there. Be specific, this is the part that shocks people.]\n\nCommute. [City] is spread out, so where you work narrows the map fast. [X] minutes from [area] to downtown, [X] from [area].\n\nWhat you want your weekends to look like. River valley access, walkable main street, big yard, new build. You usually pick two.\n\nIf you want the long version, I put together a [City] relocation guide that breaks down the main neighbourhoods by vibe, price, and commute, plus what is currently listed in each one.\n\nComment GUIDE and I will send it over, or just DM me your budget and what you do for work and I will tell you where I would look.\n\nWhere are you moving from? I am curious who is reading this.",
    tags: "#movingtoedmonton #relocatingtoedmonton #edmontonneighbourhoods #yegrealestate #edmontonrealestate",
    slides: [
      { kind: "media", pos: "bottom", hint: "City skyline, river valley, or a welcoming street",
        head: "Moving to *[City]*?\nStart here.", sub: "The three questions that narrow the map.",
        alts: [
          { head: "Which *[City]*\nneighbourhood is\nyours?", sub: "Answer three questions and you'll know." },
          { head: "Relocating to\n*[City]* this\nyear?", sub: "Read this before you pick a neighbourhood." },
        ] },
      { kind: "solid", pos: "top",
        head: "First: your\n*budget* goes\nfurther here.", sub: "[What $X buys in [City] versus [common origin]. Be specific. This is the part that shocks people.]",
        alts: [
          { head: "[$X] buys a *lot*\nmore than you\nthink.", sub: "[The honest comparison against where most of your buyers are moving from.]" },
          { head: "The sticker shock\ngoes the *good*\nway.", sub: "[What that same budget gets you here.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Commute, LRT, or road shot",
        head: "Second: *[City]*\nis bigger than\nit looks.", sub: "[X] minutes from [area] to downtown. [X] from [area]. Where you work narrows the list fast.",
        alts: [
          { head: "Your commute\npicks half the\n*map*.", sub: "[X] minutes from [area], [X] from [area]. Plan around it." },
          { head: "Don't pick a\nneighbourhood\nbefore your *job*.", sub: "The city is spread out. It matters more here than most places." },
        ] },
      { kind: "media", pos: "top", hint: "River valley, main street, or new build area",
        head: "Third: pick *two*\nof these:", list: "River valley at your door.\nWalkable main street.\nA real yard.\nBrand new build.",
        alts: [
          { head: "You get *two*.\nBe honest about\nwhich:", list: "River valley access.\nWalkable coffee and dinner.\nBig yard and garage.\nNew construction." },
          { head: "What do your\n*weekends* look\nlike?", list: "Trails and river valley.\nMain street and patios.\nYard, garden, garage.\nNew, low maintenance." },
        ] },
      { kind: "media", pos: "bottom", hint: "A rental building, or a new neighbourhood street",
        head: "Fourth: you don't\nhave to buy in your\n*first* year.", sub: "Renting in the area you think you want is the cheapest research there is. I will tell you that even though it costs me a sale.",
        alts: [
          { head: "Rent first if you're\nnot *sure*.", sub: "A year in the neighbourhood beats a year of regret." },
          { head: "The advice that\ncosts me *money*:", sub: "If you're new here, rent in the area first. Then buy properly." },
        ] },
      { kind: "media", pos: "bottom", hint: "Warm lifestyle or neighbourhood shot",
        head: "Nobody should\npick a city from\na *spreadsheet*.", sub: "Tell me your budget and what you do for work, and I'll tell you exactly where I'd look.",
        alts: [
          { head: "I do this call\nevery *week*.", sub: "Fifteen minutes on the phone saves you months of guessing." },
          { head: "You can't judge a\nneighbourhood\nfrom *online*.", sub: "Let me be your eyes until you get here." },
        ] },
      { kind: "cta", pos: "center",
        head: "Comment *GUIDE*\nfor the full\nbreakdown.", sub: "Neighbourhoods by vibe, price, and commute.",
        alts: [
          { head: "Want the\n*guide*?", sub: "Comment GUIDE and I'll send it over." },
          { head: "Moving here\n*soon*?", sub: "Message me your budget and I'll point you at the right areas." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/ice-district.jpg", id: "local-thisorthat", cat: "local", name: "This Or That",
    desc: "Fast engagement post. Real trade-offs buyers argue about, not filler.",
    caption: "This or that, [City] edition. Pick one in each and I will tell you what it says about the neighbourhood you should be shopping in.\n\nBungalow or two storey.\n\nMature trees or brand new build.\n\nGarage or a walkable main street.\n\nRiver valley trails or a big back yard.\n\nFinished basement or a main floor office.\n\nThese are not personality quiz questions. They are the actual trade-offs that decide which part of [City] fits you, because almost nobody gets all five in one budget.\n\nMy honest take: people regret location compromises far more than layout compromises. You can finish a basement. You cannot move your house closer to the river valley.\n\nPut your five answers in the comments and I will reply with the two or three neighbourhoods I would send you to.\n\nCurious which one splits the room the most.",
    tags: "#edmontonrealestate #yegrealestate #edmontonneighbourhoods #homebuyertips #thisorthat",
    slides: [
      { kind: "solid", pos: "center",
        head: "This or *that*.\n[City] edition.", sub: "Pick one in each. I'll tell you where to shop.",
        alts: [
          { head: "Pick *five*.\nI'll pick your\nneighbourhood.", sub: "Harder than it looks." },
          { head: "Five questions.\nOne *answer* each.", sub: "No fence sitting." },
        ] },
      { kind: "media", pos: "bottom", hint: "Bungalow or two-storey exterior",
        head: "Bungalow\nor *two storey*?", sub: "One is easier to age in. The other gives you the yard back.",
        alts: [
          { head: "One floor\nor *two*?", sub: "Stairs now, or square footage now. Pick." },
          { head: "Bungalow\nor *two storey*?", sub: "There's a right answer, and it's different for everyone." },
        ] },
      { kind: "media", pos: "bottom", hint: "Mature tree-lined street, or a new build",
        head: "Mature trees\nor *brand new*?", sub: "Character and shade, or nothing to fix for fifteen years.",
        alts: [
          { head: "Old bones\nor *new* build?", sub: "Both are right. They're just right for different people." },
          { head: "Trees\nor *warranty*?", sub: "You rarely get both." },
        ] },
      { kind: "media", pos: "bottom", hint: "Garage, or a walkable street",
        head: "Heated garage or\n*walkable* coffee?", sub: "In January you'll swear it's the garage. In July you'll change your mind.",
        alts: [
          { head: "Garage or *patio*\nseason?", sub: "[City] makes you pick a side twice a year." },
          { head: "Park inside or\nwalk to *dinner*?", sub: "Almost nobody gets both at this price." },
        ] },
      { kind: "media", pos: "bottom", hint: "River valley trail, or a big back yard",
        head: "River valley trails\nor a *big* back yard?", sub: "One you share with the whole city. One is just yours.",
        alts: [
          { head: "Trails at the door\nor a *yard* for the\ndog?", sub: "Both are right. They're in different neighbourhoods." },
          { head: "Public green space\nor *private*?", sub: "This one splits every couple I work with." },
        ] },
      { kind: "media", pos: "bottom", hint: "Finished basement, or a main floor office",
        head: "Finished basement\nor a main floor\n*office*?",
        sub: "One adds square footage. One saves your sanity on work-from-home days.",
        alts: [
          { head: "Basement done\nor *office* up?", sub: "Depends entirely on how many days a week you're home." },
          { head: "Extra *space* or\nbetter space?", sub: "The last question, and the one people argue about most." },
        ] },
      { kind: "solid", pos: "top",
        head: "These aren't\nquiz *questions*.", sub: "They're the real trade-offs, because almost nobody gets all five in one budget. And people regret location compromises far more than layout ones.",
        alts: [
          { head: "You can finish a\n*basement*.", sub: "You can't move your house closer to the river valley. Choose accordingly." },
          { head: "Layout is\n*fixable*.\nLocation isn't.", sub: "That's the whole reason I make you answer these." },
        ] },
      { kind: "cta", pos: "center",
        head: "Drop your five\nin the *comments*.", sub: "I'll reply with the neighbourhoods I'd send you to.",
        alts: [
          { head: "Comment your\n*answers*.", sub: "I'll tell you where to look. No pitch." },
          { head: "Which one split\nthe *room*?", sub: "Tell me below." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/team-bw.jpg", id: "proof-client-story", cat: "proof", name: "The Client Story",
    desc: "A testimonial with the story around it. Person to person, not a quote card.",
    caption: "[Client first name] and [Client first name] closed on their [home type] in [Neighbourhood] last week, and their search was not a straight line.\n\nWhen we started, [the real starting point. They had been outbid twice. They were not sure they could buy at all. They had a house to sell first.]\n\nThe hard part: [the genuine obstacle, for example the budget did not match the neighbourhood they wanted, so we had to find the pocket that did.]\n\nWhat changed it: [the specific move, for example we widened the search by two neighbourhoods and found a home that had been listed wrong.]\n\n[X] months, [X] showings, and one very good Tuesday later, they got the keys.\n\nWhat they said afterwards: \"[the honest quote, in their words.]\"\n\nThis is the part of the job that does not show up in a sold graphic. Most searches have a rough middle. That is normal, and it is the part I am there for.\n\nIf you have been at this a while and it is not going the way you hoped, send me a message. There is usually a move nobody has suggested yet.",
    tags: "#clientlove #[neighbourhood] #edmontonrealestate #yegrealestate #happyclients",
    slides: [
      { kind: "media", pos: "bottom", hint: "Clients with keys, or on the front step",
        head: "[X] months.\n[X] showings.\n*One* very good\nTuesday.", sub: "[Client] and [Client], [Neighbourhood].",
        alts: [
          { head: "Their search\nwasn't a straight\n*line*.", sub: "It almost never is. Here's how theirs went." },
          { head: "They got the\n*keys* last week.", sub: "It took longer than any of us expected." },
        ] },
      { kind: "media", pos: "top", hint: "The clients early on, or the first home they toured",
        head: "Where we\n*started*.", sub: "[The honest starting point. Outbid twice. Not sure they could buy at all. A house to sell first.]",
        alts: [
          { head: "They'd already\nbeen *outbid*\ntwice.", sub: "By the time they called me they were ready to quit for the year." },
          { head: "It didn't look\n*promising*.", sub: "[The real situation when we first sat down.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "Neighbourhood shot, or a home they toured",
        head: "The hard part\nnobody *posts*\nabout.", sub: "[The genuine obstacle. The budget didn't match the neighbourhood they wanted.]",
        alts: [
          { head: "The middle of a\nsearch is *rough*.", sub: "[What specifically made theirs hard.]" },
          { head: "There was a real\n*problem* to\nsolve.", sub: "[The obstacle, stated plainly.]" },
        ] },
      { kind: "media", pos: "top", hint: "The home they bought",
        head: "What actually\n*changed* it:", list: "[Widened the search by two areas].\n[Found a home listed wrong].\n[Moved the same day it hit].\n[Wrote it clean and firm].",
        alts: [
          { head: "Four moves that\n*worked*:", list: "[The search change].\n[The home nobody noticed].\n[The speed].\n[The offer]." },
          { head: "How it *turned*:", list: "[Change one].\n[Change two].\n[Change three].\n[Change four]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Clients in their new home",
        head: "In their *words*:", sub: "\"[The honest quote. Leave it in their voice, unpolished is better.]\"",
        alts: [
          { head: "What they said\n*after*:", sub: "\"[Their words, exactly as they said them.]\"" },
          { head: "This is the\n*whole* job.", sub: "\"[Their quote.]\"" },
        ] },
      { kind: "cta", pos: "center",
        head: "Search not\n*going* the way\nyou hoped?", sub: "Message me. There's usually a move nobody has suggested yet.",
        alts: [
          { head: "Been at this\na *while*?", sub: "Send me a message. Let's look at it differently." },
          { head: "Want a search\nthat *moves*?", sub: "Let's talk." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/brent-patio.jpg", id: "proof-meet-agent", cat: "proof", name: "Meet Your Realtor",
    desc: "The introduction post agents avoid. Drives follows and warms cold traffic.",
    caption: "New here? I am [Name], and I sell real estate in [City].\n\nThe short version: [X] years in, [X] families through, and I still drive past houses I sold five years ago to see what they did with the yard.\n\nBefore this I was [previous work], which taught me [the thing it actually taught you].\n\nWhat I am good at: [the honest specialty, for example first time buyers who are nervous about the money, or sellers whose homes did not sell the first time].\n\nWhat I will not do: [the honest boundary, for example talk you into a house you are not sure about, or tell you a number you want to hear just to get the listing].\n\nOutside of work: [two or three real things. Not hobbies you invented for a bio.]\n\nI post [what you post, for example neighbourhood breakdowns, honest market numbers, and the occasional look at what a transaction actually involves].\n\nIf you are thinking about buying or selling in [City] this year, or you just want to know what your place is worth, my DMs are open and there is no pitch waiting.\n\nTell me one thing about you. I would like to know who is out there.",
    tags: "#edmontonrealtor #yegrealestate #edmontonrealestate #meettherealtor #realtorlife",
    slides: [
      { kind: "media", pos: "bottom", hint: "A real photo of you. Not a stock headshot.",
        head: "Hi. I'm *[Name]*.", sub: "I sell real estate in [City]. Here's the honest version.",
        alts: [
          { head: "New here?\nLet's fix *that*.", sub: "I'm [Name], and I sell real estate in [City]." },
          { head: "[X] years.\n[X] *families*.", sub: "I'm [Name]. Here's what you should know." },
        ] },
      { kind: "solid", pos: "top",
        head: "Before this,\nI was *[previous\nwork]*.", sub: "[What it actually taught you that you still use.]",
        alts: [
          { head: "I didn't start\n*here*.", sub: "[Previous work], and it taught me [the thing]." },
          { head: "How I *got*\nhere.", sub: "[The short, true version.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "You working, or with clients",
        head: "What I'm actually\n*good* at:", sub: "[The honest specialty. Nervous first time buyers. Homes that didn't sell the first time. Rural acreages.]",
        alts: [
          { head: "I'm not for\n*everyone*.", sub: "[Who you're genuinely the right fit for.]" },
          { head: "My *lane*:", sub: "[The specialty, said plainly.]" },
        ] },
      { kind: "media", pos: "top", hint: "Lifestyle shot, family, or hobby",
        head: "Things that are\n*true* about me:", list: "[Real thing one].\n[Real thing two].\n[Real thing three].\n[Real thing four].",
        alts: [
          { head: "Outside of\n*work*:", list: "[Real thing one].\n[Real thing two].\n[Real thing three].\n[Real thing four]." },
          { head: "The non *real\nestate* part:", list: "[Thing one].\n[Thing two].\n[Thing three].\n[Thing four]." },
        ] },
      { kind: "media", pos: "bottom", hint: "You at work, or a home you sold",
        head: "Why I still *love* it.", sub: "[The honest reason. The day someone gets keys they didn't think they'd get.]",
        alts: [
          { head: "Twelve years in and\nI still drive *past*\nold listings.", sub: "To see what people did with the yard. Every time." },
          { head: "The part that keeps\nme *here*:", sub: "[The specific moment in a deal that still gets you.]" },
        ] },
      { kind: "solid", pos: "top",
        head: "What I *won't*\ndo:", sub: "[The honest boundary. Talk you into a house you're unsure about. Quote you a number you want to hear just to win the listing.]",
        alts: [
          { head: "I'd rather lose\nthe *listing*.", sub: "Than give you a price I can't defend. That's the whole policy." },
          { head: "No pressure.\n*Ever.*", sub: "If it's not the right house, I'll be the one telling you." },
        ] },
      { kind: "cta", pos: "center",
        head: "My DMs are\n*open*.", sub: "No pitch waiting. Tell me one thing about you.",
        alts: [
          { head: "Say *hi*.", sub: "Questions about [City] real estate, or just introduce yourself." },
          { head: "Thinking about\nthis *year*?", sub: "Message me. Zero pressure, honest answers." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/duplex-exterior.jpg", id: "money-buy-vs-rent", cat: "money", name: "Buy vs Rent, Real Numbers",
    desc: "The most-searched buyer question, answered with actual local math.",
    caption: "Renting versus buying in [City] right now: here are the real numbers, not the motivational version.\n\nRent on a [bed] bedroom in [Neighbourhood]: about [$X] a month.\n\nBuying the same kind of place at [$X] with [X]% down: roughly [$X] a month on the mortgage at [X]%, plus about [$X] in property taxes and [$X] in insurance. Call it [$X] all in.\n\nSo the monthly difference is [$X].\n\nHere is the part both sides get wrong. That gap is not the whole story, because roughly [$X] of that mortgage payment is principal, which is money moving from one pocket to the other. Adjust for it and the real cost difference is closer to [$X].\n\nWhen renting wins: you are moving within two or three years, your income is unstable, or you have not got the down payment without emptying your emergency fund.\n\nWhen buying wins: you are staying five years or more, the payment fits comfortably, and you would rather your housing cost stop moving every time a lease renews.\n\nNeither one is a moral position. It is a math question with a timeline attached.\n\nWant me to run these numbers for your actual situation? Send me a message, it takes ten minutes.",
    tags: "#buyvsrent #edmontonrealestate #yegrealestate #firsttimehomebuyer #homebuyertips",
    slides: [
      { kind: "solid", pos: "center",
        head: "Rent or *buy*\nin [City]?", sub: "The real numbers. Not the motivational version.",
        alts: [
          { head: "Let's do the\n*math* properly.", sub: "Renting versus buying in [City], with actual figures." },
          { head: "The honest\n*answer* to the\nmost asked\nquestion.", sub: "And it isn't \"always buy.\"" },
        ] },
      { kind: "media", pos: "bottom", hint: "Apartment or rental building",
        head: "Renting:\nabout *[$X]*\na month.", sub: "[bed] bedroom in [Neighbourhood]. That's today's number.",
        alts: [
          { head: "Side one:\n*[$X]* in rent.", sub: "[bed] bedroom, [Neighbourhood], current asking." },
          { head: "What rent\n*costs* you now.", sub: "[$X] a month for a [bed] bedroom in [Neighbourhood]." },
        ] },
      { kind: "media", pos: "top", hint: "A comparable home for sale",
        head: "Buying the same\nplace, *all* in:", list: "Mortgage at [X]%: [$X].\nProperty tax: [$X].\nInsurance: [$X].\nTotal: [$X] a month.",
        alts: [
          { head: "Owning it,\n*honestly*:", list: "Mortgage: [$X].\nTaxes: [$X].\nInsurance: [$X].\nAll in: [$X]." },
          { head: "The *real*\nmonthly cost\nto own:", list: "[$X] mortgage at [X]% down.\n[$X] taxes.\n[$X] insurance.\n[$X] total." },
        ] },
      { kind: "solid", pos: "top",
        head: "The part *both*\nsides get wrong.", sub: "About [$X] of that payment is principal. That's money moving pocket to pocket, not money spent. Adjust for it and the real gap is closer to [$X].",
        alts: [
          { head: "[$X] of it isn't\na *cost*.", sub: "It's principal. Money moving from one of your pockets to the other." },
          { head: "The gap isn't\n[$X]. It's *[$X]*.", sub: "Once you stop counting principal as an expense." },
        ] },
      { kind: "media", pos: "top", hint: "Warm lifestyle or home shot",
        head: "So *who* should\nrent?", list: "Moving within 2 to 3 years.\nIncome isn't steady yet.\nDown payment would empty savings.\nYou want zero maintenance.",
        alts: [
          { head: "Renting is the\nright call *if*:", list: "You're moving inside 3 years.\nWork is uncertain.\nSavings are thin.\nYou travel constantly." },
          { head: "Don't buy\n*yet* if:", list: "Short timeline.\nUnstable income.\nNo cushion after closing.\nThe payment scares you." },
        ] },
      { kind: "cta", pos: "center",
        head: "Want these\nnumbers for\n*your* situation?", sub: "Message me. It takes ten minutes and there's no pitch.",
        alts: [
          { head: "Let's run\n*your* numbers.", sub: "Ten minutes, honest answer, either way." },
          { head: "Not sure which\nside you're *on*?", sub: "Send me a message and we'll work it out." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/living-room-fireplace.jpg", id: "money-all-in-cost", cat: "money", name: "What Buying Actually Costs",
    desc: "Every cost beyond the down payment. Nobody posts this honestly.",
    caption: "Nobody tells first time buyers in [City] about the costs that are not the down payment. So here they are.\n\nOn a [$X] purchase with [X]% down, plan for roughly [$X] in closing costs on top of your down payment.\n\nWhere it goes:\n\nLegal fees and disbursements: [$X] to [$X]. Your lawyer registers the title and handles the money.\n\nHome inspection: [$X] to [$X]. Skip this one and you are gambling.\n\nTitle insurance: [$X] to [$X], usually required by your lender.\n\nLand titles registration in Alberta: a few hundred dollars, based on purchase price and mortgage amount.\n\nAdjustments: you reimburse the seller for property tax they already paid. Could be [$X], depends on the month you close.\n\nMoving, utility hookups, and the first round of things you did not know you needed: budget [$X] and you will still spend more.\n\nGood news for Alberta: no land transfer tax. That alone saves buyers here thousands compared to Ontario or BC.\n\nThe number to actually save is your down payment plus about [X]% of the purchase price. If that lands, you are ready.\n\nWant me to break this down for a specific price point? Send me a message with your number.",
    tags: "#firsttimehomebuyer #closingcosts #edmontonrealestate #yegrealestate #albertarealestate",
    slides: [
      { kind: "solid", pos: "center",
        head: "The down payment\nisn't the *whole*\nnumber.", sub: "What buying in [City] actually costs.",
        alts: [
          { head: "Nobody warns you\nabout *these*.", sub: "The costs that come after the down payment." },
          { head: "Budget *[$X]*\nmore than you\nthink.", sub: "Here's exactly where it goes." },
        ] },
      { kind: "media", pos: "top", hint: "Paperwork, keys, or a desk shot",
        head: "On a *[$X]*\npurchase, plan\nfor:", list: "Legal fees: [$X] to [$X].\nInspection: [$X] to [$X].\nTitle insurance: [$X] to [$X].\nLand titles: a few hundred.",
        alts: [
          { head: "Where the\n*closing* money\ngoes:", list: "Lawyer: [$X].\nInspection: [$X].\nTitle insurance: [$X].\nRegistration: [$X]." },
          { head: "The four you\n*can't* skip:", list: "Legal.\nInspection.\nTitle insurance.\nLand titles registration." },
        ] },
      { kind: "solid", pos: "top",
        head: "Then the one\nnobody *mentions*:\nadjustments.", sub: "You reimburse the seller for property tax they already paid. Could be [$X], depending entirely on what month you close.",
        alts: [
          { head: "*Adjustments*.\nThe surprise\nline item.", sub: "Property tax the seller already paid, paid back by you. Timing decides the size." },
          { head: "Close in\n*[month]* and\nthis one stings.", sub: "Tax adjustments can run [$X]. Nobody sees it coming." },
        ] },
      { kind: "media", pos: "top", hint: "Alberta landscape or an Edmonton street",
        head: "One thing Alberta\ngets *right*:", sub: "No land transfer tax. That saves buyers here thousands compared to Ontario or BC, and it's the single biggest reason closing costs are lower in this province.",
        alts: [
          { head: "No land transfer\n*tax* in Alberta.", sub: "Thousands cheaper to close here than in Ontario or BC. Genuinely." },
          { head: "The *good* news:", sub: "Alberta has no land transfer tax. Your closing costs are already lighter than most of the country." },
        ] },
      { kind: "cta", pos: "center",
        head: "Save your down\npayment plus\n*[X]%*.", sub: "Message me your price point and I'll break it down exactly.",
        alts: [
          { head: "Want the real\nnumber for *your*\nbudget?", sub: "Send me a message with your price point." },
          { head: "Not sure if\nyou're *ready*?", sub: "Let's do the math together. No pressure." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/agent-clients.jpg", id: "tips-after-offer", cat: "tips", name: "After Your Offer Is Accepted",
    desc: "The anxious-client explainer. High saves, great for first time buyers.",
    caption: "Your offer got accepted in [City]. Congratulations, and no, you are not done. Here is what happens next, in order.\n\nDeposit. Usually within [X] hours of acceptance, into the brokerage trust account. It is not a fee, it comes off your purchase price at closing.\n\nFinancing condition. Your lender now underwrites the actual property, not just you. They may order an appraisal. This is the condition that kills the most deals, so do not change jobs or buy a truck right now.\n\nHome inspection. Book it immediately, you typically have [X] days. Go to it. Ask the inspector every question you have.\n\nCondition removal. Once financing and inspection are satisfied, you sign a waiver and the deal goes firm. This is the real moment. Before this you can walk, after this you cannot.\n\nLawyer. Yours handles title, registration, and the money. Get them the accepted offer the day it is signed.\n\nFinal walkthrough. Usually the day before or morning of possession. Check that everything that was supposed to stay, stayed.\n\nPossession day. Funds transfer, keys release. Sometimes in the afternoon, not at 9am.\n\nThe whole stretch is normally [X] to [X] weeks and it feels longer than it is.\n\nIn this window? Send me a message with what you are stuck on.",
    tags: "#firsttimehomebuyer #homebuyingprocess #edmontonrealestate #yegrealestate #homebuyertips",
    slides: [
      { kind: "media", pos: "bottom", hint: "Clients signing, or a home exterior",
        head: "Offer *accepted*.\nYou're not done.", sub: "Here's what happens next, in order.",
        alts: [
          { head: "Accepted offer.\nNow *what*?", sub: "The seven steps between yes and keys." },
          { head: "The scariest\n*three* weeks\nof buying.", sub: "Because nobody explains them. So here." },
        ] },
      { kind: "solid", pos: "top",
        head: "First: the\n*deposit*.", sub: "Usually within [X] hours, into the brokerage trust account. It isn't a fee. It comes off your purchase price at closing.",
        alts: [
          { head: "The deposit\nisn't a *fee*.", sub: "It goes to trust, then straight off your purchase price at closing." },
          { head: "Step one: money\nin *trust*.", sub: "Within [X] hours of acceptance. It's your money, credited back to you." },
        ] },
      { kind: "media", pos: "top", hint: "Bank, paperwork, or a laptop",
        head: "Then the two\nthat *matter*:", list: "Financing: your lender now underwrites the home, not just you.\nInspection: book it today. You have [X] days.",
        alts: [
          { head: "Your *conditions*,\nplainly:", list: "Financing: the bank now checks the property too.\nInspection: [X] days, book it immediately." },
          { head: "Two clocks are\nnow *running*:", list: "Financing condition.\nInspection condition." },
        ] },
      { kind: "solid", pos: "center",
        head: "Do *not* buy\na truck right\nnow.", sub: "Financing is the condition that kills the most deals. No new jobs, no new debt, no big purchases until conditions are removed.",
        alts: [
          { head: "Don't change\n*anything*.", sub: "Not your job, not your debt, not your credit. Your lender is watching until closing." },
          { head: "The deal killer\nis almost always\n*financing*.", sub: "And usually because something changed after acceptance." },
        ] },
      { kind: "media", pos: "top", hint: "Keys, or a front door",
        head: "Then it goes\n*firm*:", list: "Conditions removed. You sign the waiver.\nLawyer handles title and money.\nFinal walkthrough, day before.\nPossession: funds move, keys release.",
        alts: [
          { head: "The last *four*\nsteps:", list: "Waiver signed, deal is firm.\nLawyer does title and funds.\nWalkthrough.\nPossession day." },
          { head: "Firm, then\n*keys*:", list: "Condition removal.\nLawyer.\nWalkthrough.\nPossession." },
        ] },
      { kind: "media", pos: "bottom", hint: "Keys, or clients at the front door",
        head: "Possession day is\nrarely at *9 AM*.", sub: "Funds have to move before keys release. Plan for an afternoon and do not book the movers for sunrise.",
        alts: [
          { head: "Don't book the\nmovers for *morning*.", sub: "Keys release when the money lands, and that's usually afternoon." },
          { head: "The last *wait*.", sub: "Lawyers transfer funds, then you get keys. Same day, later than you'd like." },
        ] },
      { kind: "cta", pos: "center",
        head: "In this window\nright *now*?", sub: "Message me with whatever you're stuck on.",
        alts: [
          { head: "Questions about\n*any* of this?", sub: "Send me a message. I explain this weekly." },
          { head: "Save this for\nwhen you *need*\nit.", sub: "And message me if you'd rather have it explained live." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/living-room-dusk.jpg", id: "tips-seasonal", cat: "tips", name: "The Edmonton Seasonal Checklist",
    desc: "Local, practical home maintenance. Evergreen and reposts every year.",
    caption: "[Season] in [City] is coming, and there are about six things on your house that will cost you real money if you ignore them.\n\nThis is the list I send clients every [season], and none of it takes a contractor.\n\n[Item one]: [why it matters here specifically, tied to Edmonton weather.]\n\n[Item two]: [the specific thing to check and what it prevents.]\n\n[Item three]: [what fails locally if this gets skipped.]\n\n[Item four]: [the cheap fix now versus the expensive repair later.]\n\n[Item five]: [the one people always forget.]\n\n[Item six]: [the five minute job with the biggest payoff.]\n\nThe reason a realtor cares: I see what deferred maintenance does to a sale price. [The specific example, for example water in a basement from a downspout nobody extended, which knocked [$X] off an offer.]\n\nAn afternoon of this is worth thousands when you eventually sell, and it is worth more than that in not having a bad [season].\n\nSave this one. What did I miss? [City] homeowners always know one more.",
    tags: "#homemaintenance #edmontonhomeowners #yeg #edmontonrealestate #homeownertips",
    slides: [
      { kind: "media", pos: "bottom", hint: "Seasonal exterior shot. Snow, melt, or fall leaves.",
        head: "[Season] is\n*coming* for\nyour house.", sub: "Six things to do before it does.",
        alts: [
          { head: "Six jobs. One\n*afternoon*.", sub: "The [season] list I send every client in [City]." },
          { head: "Do these *before*\n[season] hits.", sub: "All six, no contractor needed." },
        ] },
      { kind: "media", pos: "top", hint: "Gutters, roof, or foundation detail",
        head: "Start *outside*:", list: "[Item one].\n[Item two].\n[Item three].",
        alts: [
          { head: "The *outdoor*\nthree:", list: "[Item one].\n[Item two].\n[Item three]." },
          { head: "Outside first.\nIt *matters*\nmost:", list: "[Item one].\n[Item two].\n[Item three]." },
        ] },
      { kind: "media", pos: "top", hint: "Furnace, water heater, or basement",
        head: "Then *inside*:", list: "[Item four].\n[Item five].\n[Item six].",
        alts: [
          { head: "The *indoor*\nthree:", list: "[Item four].\n[Item five].\n[Item six]." },
          { head: "Twenty minutes\n*inside*:", list: "[Item four].\n[Item five].\n[Item six]." },
        ] },
      { kind: "solid", pos: "top",
        head: "Why a *realtor*\nis telling you\nthis.", sub: "Because I see what deferred maintenance does to a sale price. [The example. Water in a basement from a downspout nobody extended, and [$X] off an offer.]",
        alts: [
          { head: "I've watched this\ncost people\n*[$X]*.", sub: "[The specific example from a real sale.]" },
          { head: "Buyers *find*\nall of it.", sub: "And they price it in, at about three times what the fix would have cost you." },
        ] },
      { kind: "cta", pos: "center",
        head: "Save this for\n*[season]*.", sub: "And tell me what I missed. Someone always knows one more.",
        alts: [
          { head: "What did I\n*miss*?", sub: "[City] homeowners always have one more. Drop it below." },
          { head: "Want the full\n*checklist*?", sub: "Message me and I'll send the printable version." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/brent-brick.jpg", id: "sold-seller-estate", cat: "sold", name: "Sold: The Family Home",
    desc: "Estate or long-held home. Sold as is, on the family's timeline.",
    caption: "Just sold in [Neighbourhood]: the family home of [X] years, listed at [$list], firm at [$sold].\n\nThis is a different kind of sale, and it is the one I get asked about most quietly.\n\nThe situation: [the honest starting point. An estate with three siblings. A downsizer who had been in the same house since [year]. Nobody had updated it and nobody wanted to.]\n\nThe hard conversation: what the home was worth in as-is condition, not what it would be worth after [$X] of renovations nobody had the time or the stomach to do.\n\nWhat we did instead of renovating: cleaned it out, priced it honestly for its condition, disclosed everything up front, and found the buyer who wanted a project in that location.\n\nThe result: [X] showings, [X] offers, firm at [$sold] with a possession date that gave the family time to clear the rest.\n\nSelling a home like this is not really a marketing problem. It is a sequencing problem, and most of the work is making sure nobody feels rushed.\n\nIf you are dealing with a family property, an estate, or a parent who is ready to downsize, send me a message. No pressure, and no timeline but yours.",
    tags: "#justsold #[neighbourhood] #edmontonrealestate #estatesale #downsizing",
    slides: [
      { kind: "media", pos: "bottom", hint: "The home exterior, or a detail that shows its age",
        head: "The family home\nof *[X]* years.", sub: "Sold as is, in [X] days, on their timeline.",
        alts: [
          { head: "Sold, and it hadn't\nbeen *touched*\nsince [year].", sub: "[Neighbourhood]. [bed/bath]. Firm at [$sold]." },
          { head: "[X] years in\none *house*.", sub: "Here's how that sale actually goes." },
        ] },
      { kind: "media", pos: "top", hint: "An interior that shows the home's era",
        head: "Three opinions.\n*One* house.", sub: "[The real situation. An estate, a downsizer, a home nobody had updated and nobody wanted to.]",
        alts: [
          { head: "Nobody wanted\nthe *project*.", sub: "Not the family, and not most of the buyers who walked through." },
          { head: "Where it *started*.", sub: "[The honest starting point, including what everyone was worried about.]" },
        ] },
      { kind: "media", pos: "bottom", hint: "A dated room, or boxes mid-cleanout",
        head: "The hard part was\nthe *number*.", sub: "What it's worth as is, not what it'd be worth after [$X] of work nobody had the time for.",
        alts: [
          { head: "We didn't\n*renovate* a thing.", sub: "And I'd tell you the same. That money almost never comes back on a home like this." },
          { head: "Honest beats\n*hopeful*.", sub: "[The price conversation, and why the as-is number was the right one.]" },
        ] },
      { kind: "media", pos: "top", hint: "The cleared-out home, or the sold sign",
        head: "What we did\n*instead*:", list: "[Cleaned out, not renovated].\n[Priced for its real condition].\n[Disclosed everything up front].\n[Possession that suited the family].",
        alts: [
          { head: "Four *decisions*:", list: "[Clear it out].\n[Price it honestly].\n[Disclose it all].\n[Give the family time]." },
          { head: "No renos.\nNo *surprises*:", list: "[Cleanout only].\n[As-is pricing].\n[Full disclosure].\n[Flexible possession]." },
        ] },
      { kind: "cta", pos: "center",
        head: "Handling a family\n*property*?", sub: "I'll walk you through it at your pace, not mine.",
        alts: [
          { head: "Is a parent ready\nto *downsize*?", sub: "Send me a message. There's no timeline but theirs." },
          { head: "An estate to\n*sort out*?", sub: "I've done this often. Let me make it simpler." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/for-sale-sign.jpg", id: "sold-seller-bidding", cat: "sold", name: "Sold: The Offer Weekend",
    desc: "Priced to compete, offers held to a date, sold over list.",
    caption: "Just sold in [Neighbourhood]: [X] offers in one weekend, firm at [$sold], which is [$X] over list.\n\nThat does not happen by accident, so here is the strategy.\n\nWe could have listed at [$X]. The comps supported it. I told them not to.\n\nInstead we listed at [$X], just under what the comps said, because a price that looks like value brings ten groups through the door and a price that looks ambitious brings two.\n\nWhat we had ready before it went live: professional photos, a floor plan, the real property report, and answers to every question an agent would ask. Nothing slows momentum like waiting on documents.\n\nWe held offers until [day] and told every agent the same thing at the same time. No games, no whisper offers, no confusion about the process.\n\n[X] showings. [X] offers. Firm at [$sold] with terms the sellers actually chose, including the possession date they wanted.\n\nThe risk is real and I will not pretend otherwise. Price too low in a slow month and you sell too low. That is a judgement call about the specific home, the specific week, and the comps, and it is the part you are actually hiring me for.\n\nThinking of listing in [City] this spring? Send me a message and we will talk strategy before we talk price.",
    tags: "#justsold #[neighbourhood] #edmontonrealestate #sellingyeg #yeghomesforsale",
    slides: [
      { kind: "media", pos: "bottom", hint: "The home exterior, or a busy open house",
        head: "*[X]* offers in\none weekend.", sub: "[Neighbourhood], [bed/bath], firm at [$X] over list.",
        alts: [
          { head: "Listed Thursday.\n*[X]* offers by\nSunday.", sub: "Here's the strategy, not the luck." },
          { head: "[$X] *over* list.\nOn purpose.", sub: "[Neighbourhood], [bed/bath]." },
        ] },
      { kind: "solid", pos: "top",
        head: "We could have\nlisted at *[$X]*.", sub: "The comps supported it. I told them not to, and that is the whole post.",
        alts: [
          { head: "The comps said\n*[$X]*.", sub: "We listed lower. Deliberately." },
          { head: "Most sellers price\n*up*. We didn't.", sub: "Here's the thinking behind it." },
        ] },
      { kind: "media", pos: "bottom", hint: "The best room in the home",
        head: "A price that looks\nlike *value* brings\nten groups.", sub: "A price that looks ambitious brings two. Ten groups is how you get competition.",
        alts: [
          { head: "Ten showings beat\n*two*. Every time.", sub: "You cannot create competition without traffic, and price sets the traffic." },
          { head: "You can't bid\nagainst *nobody*.", sub: "The whole plan was getting bodies through the door in the first 72 hours." },
        ] },
      { kind: "media", pos: "top", hint: "Listing photos, documents, or the floor plan",
        head: "Ready *before*\nit went live:", list: "[Professional photos and floor plan].\n[Real property report in hand].\n[Every agent question answered].\n[Offers held until [day]].",
        alts: [
          { head: "Momentum needs\n*preparation*:", list: "[Photos and floor plan done].\n[RPR ready].\n[Answers ready].\n[One offer date, told to everyone]." },
          { head: "Four things, all\ndone *first*:", list: "[Media].\n[Documents].\n[Process].\n[Offer date]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Sold sign, or the sellers signing",
        head: "[X] offers.\n*[$X]* over list.\nTheir terms.", sub: "Including the possession date they wanted, which is the part sellers usually give up.",
        alts: [
          { head: "They *chose*.\nThey didn't hope.", sub: "[X] offers means the seller picks the terms, not just the price." },
          { head: "Firm in [X] days,\nat *[$sold]*.", sub: "And the possession date they actually needed." },
        ] },
      { kind: "cta", pos: "center",
        head: "Listing this\n*season*?", sub: "Let's talk strategy before we talk price.",
        alts: [
          { head: "Want *offers*,\nnot just showings?", sub: "Message me. Pricing strategy is most of the job." },
          { head: "Curious what your\nhome would *do*?", sub: "Send me a message. I'll give you the honest read." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/brent-black-house.jpg", id: "sold-buyer-patient", cat: "sold", name: "Sold: The Patient Buyer",
    desc: "Walked away from three, bought the tired listing under asking.",
    caption: "My buyers just closed in [Neighbourhood] at [$X] under list, and they walked away from three homes to get there.\n\nHere is the version nobody posts.\n\nEvery home they loved in the first two months went over asking. [X] times. We were competing against people with more money and fewer conditions, and it was demoralizing.\n\nSo we changed the search entirely. Instead of watching new listings, I started watching old ones. Anything over [X] days on market in the areas they wanted.\n\nThe home they bought had been listed [X] days. Priced wrong from day one, bad photos, and a seller who had stopped expecting the phone to ring.\n\nWhat we did: asked the listing agent directly why it had not sold, offered [$X] under with the comps attached so it did not read as an insult, and gave the sellers a fast, clean close.\n\nThey accepted in [X] hours. No competition, no waived conditions, no panic.\n\nPatience is a strategy. It just does not feel like one in month four, which is why most buyers abandon it right before it works.\n\nLosing every bid in [City]? Send me a message. There is a whole other list nobody is watching.",
    tags: "#justsold #[neighbourhood] #edmontonrealestate #yegbuyers #homebuyertips",
    slides: [
      { kind: "media", pos: "bottom", hint: "Keys, or the buyers at their new place",
        head: "They walked away\nfrom *three* homes.", sub: "The fourth one they got at [$X] under list.",
        alts: [
          { head: "Four months.\n*Three* walkaways.", sub: "And then the one nobody else was watching." },
          { head: "[$X] *under* list,\nwith nobody else\nbidding.", sub: "[Neighbourhood], [bed/bath]." },
        ] },
      { kind: "media", pos: "top", hint: "A busy open house, or a sold sign on another home",
        head: "Every house they\nloved went *over*\nasking.", sub: "[X] times in a row. Against buyers with more money and fewer conditions.",
        alts: [
          { head: "Outbid *[X]*\ntimes.", sub: "By month three they were ready to stop looking for the year." },
          { head: "We kept *losing*.", sub: "Not because we were doing it wrong. Because we were doing what everyone else was." },
        ] },
      { kind: "solid", pos: "center",
        head: "So we stopped\nwatching *new*\nlistings.", sub: "And started watching the old ones. Anything over [X] days on market in the areas they wanted.",
        alts: [
          { head: "The list nobody\nelse *refreshes*.", sub: "Everyone fights over day-one listings. Almost nobody looks at day sixty." },
          { head: "New listings are\nthe *crowded*\nones.", sub: "So we went the other direction entirely." },
        ] },
      { kind: "media", pos: "bottom", hint: "The home they bought",
        head: "[X] days on\nmarket. Bad photos.\nWrong *price*.", sub: "A seller who had stopped expecting the phone to ring. And a house that was genuinely good.",
        alts: [
          { head: "Nobody had called\nin *weeks*.", sub: "[X] days listed, priced wrong from day one, and better than it looked online." },
          { head: "The listing was\nthe *problem*.\nNot the house.", sub: "Which is exactly what we were looking for." },
        ] },
      { kind: "media", pos: "top", hint: "You with the clients, or the paperwork",
        head: "How we *wrote*\nit:", list: "[Asked why it hadn't sold].\n[Offered [$X] under, comps attached].\n[Fast, clean close].\n[No waived conditions].",
        alts: [
          { head: "Four moves:", list: "[One honest phone call].\n[A low offer with reasons].\n[Speed the seller wanted].\n[Conditions we kept]." },
          { head: "Not an *insult*.\nAn argument.", list: "[Called the agent first].\n[Comps attached to the offer].\n[Quick possession].\n[Inspection kept in]." },
        ] },
      { kind: "cta", pos: "center",
        head: "Losing every\n*bid*?", sub: "There's a whole other list nobody is watching.",
        alts: [
          { head: "Been at this\n*four* months?", sub: "Message me. Let's change the search, not the budget." },
          { head: "Tired of getting\n*outbid*?", sub: "Send me a message. There's another way to do this." },
        ] },
    ],
  },
  {
    thumb: "assets/thumbs/unpacking-kitchen.jpg", id: "sold-buyer-firsttime", cat: "sold", name: "Sold: First Home, Fast",
    desc: "First-time buyers on a tight budget who won on speed.",
    caption: "My first-time buyers got the keys in [Neighbourhood] this week, and they won on speed, not money.\n\nTheir budget was [$X]. In that neighbourhood at that price, a decent home has three offers by day two, and they knew it.\n\nSo we did the boring part first. Full pre-approval, not a rate hold. Deposit money liquid and ready. A clear list of what they would and would not compromise on, written down, agreed between the two of them before we looked at anything.\n\nThen the home came up on a Friday morning. We saw it at 11, wrote at 6, and the sellers had it signed before the weekend started.\n\nTwo more offers came in on Saturday. Both, I later found out, higher than ours.\n\nSpeed costs nothing. Most first-time buyers spend it waiting for the weekend, or waiting to feel ready, or waiting to see if something better comes up. In this price range that is the whole game.\n\nThinking about your first place in [City]? Send me a message before you start looking, not after you lose one. The preparation is the part that wins.",
    tags: "#justsold #firsttimehomebuyer #[neighbourhood] #edmontonrealestate #yegbuyers",
    slides: [
      { kind: "media", pos: "bottom", hint: "The buyers with keys, or the front step",
        head: "First home, and\none *shot* at it.", sub: "Pre-approved Friday. Firm before the weekend.",
        alts: [
          { head: "They won on\n*speed*, not money.", sub: "[Neighbourhood], first home, [bed/bath]." },
          { head: "Saw it at 11.\n*Firm* by 6.", sub: "Here's why that was possible." },
        ] },
      { kind: "media", pos: "top", hint: "The home they bought, or the street",
        head: "Their budget was\n[$X]. The good\nones went *fast*.", sub: "At that price in [Neighbourhood], a decent home has three offers by day two.",
        alts: [
          { head: "[$X] doesn't buy\nyou *time*.", sub: "In this price range the good listings are gone inside 48 hours." },
          { head: "The entry level is\nthe *busiest*\nmarket there is.", sub: "Everyone competes here. Almost nobody prepares for it." },
        ] },
      { kind: "media", pos: "top", hint: "Paperwork, a laptop, or the mortgage meeting",
        head: "The boring part,\ndone *first*:", list: "[Full pre-approval, not a rate hold].\n[Deposit money liquid].\n[Compromises agreed in writing].\n[Both of them on the same page].",
        alts: [
          { head: "Prepared beats\n*lucky*:", list: "[Real pre-approval].\n[Deposit ready to move].\n[Their must-haves written down].\n[No arguing at the offer table]." },
          { head: "Four things, all\nbefore we *looked*:", list: "[Financing].\n[Deposit].\n[Priorities].\n[Agreement]." },
        ] },
      { kind: "media", pos: "bottom", hint: "Keys in hand, or the sold sign",
        head: "Two more offers\ncame in *after*\nours went firm.", sub: "Both higher than ours. Speed costs nothing, and most first-time buyers spend it waiting.",
        alts: [
          { head: "Both Saturday\noffers were *higher*.", sub: "It didn't matter. The house was already firm." },
          { head: "Waiting for the\nweekend costs\npeople *houses*.", sub: "That's the whole lesson from this one." },
        ] },
      { kind: "cta", pos: "center",
        head: "First place, and\nit feels *fast*?", sub: "Message me before you start looking, not after you lose one.",
        alts: [
          { head: "Buying your\n*first* home?", sub: "Let's get the boring part done early." },
          { head: "Want to be\n*ready* when it\ncomes up?", sub: "Send me a message. Preparation is the part that wins." },
        ] },
    ],
  }
);
