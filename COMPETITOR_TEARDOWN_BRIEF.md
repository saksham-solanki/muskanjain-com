# Muskan Jain — Website Revamp Brief
**For: Claude Code · Source: Competitor teardown of 15 sites**

---

## 0. Project Context

**Project:** muskanjain.com — personal brand site for Muskan Jain
**Repo:** github.com/saksham-solanki/muskanjain-com
**Live sample:** muskanjaincom.vercel.app
**Stack (do not change):** Next.js 16 (App Router) · TypeScript · Tailwind · Framer Motion · Geist font · Vercel
**Positioning (per repo README):** *"AI-native GTM agency for Web3 companies"*
**Brand name on site:** "The Build Club" / Muskan Jain
**Voice:** lowercase, anti-marketing-speak, numbered sections (NO. 01, NO. 02...), "no theatre, no slides, no decks"
**Based:** Dubai → Everywhere
**Hero promise:** *"4 Years in GTM. Now I build content engines, outbound flows, and the boring middle of the funnel, using AI."*
**3 services:** Content engines · Outbound flows · The boring middle (mid-funnel plumbing)
**Process:** 4-week engagement (Strategy call → Workshop → Build & Deploy → Optimize & Embed)
**Proof:** 800k+ video views, 55+ videos, 8 DeKoded events across BLR/DEL/BOM/HYD/PNQ/GOI/DXB/SIN, brands worked with: Base, Bhindi AI, Avici, Canton, Aztec, Cypher, KRNL, CoinEx
**Owned media:** "Proof of Hustle" podcast (7 eps, 125k views), "Building KRNL" docu-series (305k views, 21 eps)

---

## 1. Current Site — Audit (gaps Claude Code must fix)

| # | Issue | Severity | Where |
|---|---|---|---|
| 1 | Hero stats show **"0k+ VIDEO VIEWS / 0+ VIDEOS / 0 EVENTS / 0+ BRANDS"** in production — placeholder numbers visible to visitors | 🔴 Critical | Hero stats component |
| 2 | "WHAT THEY SAY" section has **literal `[Name] [Title]` placeholder text** — no real testimonials | 🔴 Critical | Testimonials section |
| 3 | No pricing or engagement tiers shown publicly (every strong peer shows them) | 🟠 High | Services section / Work With Me |
| 4 | "Build in Public" and "Journal" routes referenced in nav but content missing | 🟠 High | `/journal`, `/build-in-public` |
| 5 | 3 service cards are **text-only** — no icons, illustrations, or visual hierarchy | 🟠 High | Services section |
| 6 | "Softball Questions" FAQ has only Q1 answered, Q2-Q5 collapsed/empty | 🟡 Medium | FAQ section |
| 7 | Contact form asks for "Your handle / What you are building" but no Calendly fallback | 🟡 Medium | Contact form |
| 8 | Framer Motion underused — site lacks scroll-triggered animations Lammel/Prospektor use | 🟡 Medium | Global / page transitions |
| 9 | Footer has "veloice ai" typo (should be "Vercel AI" or removed) | 🟢 Low | Footer |
| 10 | No OG image, no favicon variant for dark/light, no structured data (JSON-LD) | 🟡 Medium | `app/layout.tsx`, `app/icon.tsx` |

---

## 2. Competitor Teardowns (15 sites)

> Format: each card = identity · IA · design · copy · services · proof · tech · what to steal

### BUCKET A — Direct AI-GTM agency peers

---

#### A1. **espressio.ai** (anchor — already known)
- **URL:** https://espressio.ai
- **Identity:** "AI Systems Built for Growth" — built by Lunar Strategy team (300+ clients, 7 yrs)
- **IA (sections in order):** Hero → Metrics ($60M+, 300+, 7+) → What We Do (3 areas) → How It Works (weeks not months) → Our Systems (Content OS + Revenue OS) → Why Us → Team → Final CTA → Footer
- **Design:** Light mode editorial, lots of whitespace, subtle warm accent
- **Copy:** *"7 years running a marketing agency taught us what breaks at scale. Content bottlenecks. Lead gen that doesn't compound."* — pain-first opener
- **Services:** Content (research/draft/schedule), Lead Gen (prospect/enrich/outreach), Competitive Intel (weekly brief)
- **Proof:** $60M+ budget managed · 300+ clients · 7+ yrs · "From the team behind Lunar Strategy" credibility transfer
- **Tech:** Webflow / custom; smooth scroll lib
- **What to steal:**
  1. The "X areas. All the same problem." framing (Muskan already has this)
  2. **Two productized "OS" systems** (Content OS, Revenue OS) with sub-modules — gives the buyer something tangible to point at
  3. Team page with named individuals + LinkedIn/X links per person
  4. Outcome-Based Pricing as a public stance (Muskan should add)

---

#### A2. **godwinmayaki.info**
- **URL:** https://godwinmayaki.info
- **Identity:** *"Your Pipeline Doesn't Fill Itself. We Fill It."* — 7-Day GTM Sprint
- **IA:** Hero → System Architecture (5 layers L1-L5) → Marquee of capability tags → Problem → Stage cards (Pre-Launch / Launch / Post-Launch / Scale-Up / Enterprise) → Real case studies → 5-layer build process → Deliverables → CTA
- **Design:** Dark, monospace-influenced, structured grid; "L1 / L2 / L3 / L4 / L5" labels for layers
- **Copy:** *"I don't run campaigns. I build revenue infrastructure"* — strong anti-positioning
- **Services:** Pipeline Ignition · Perpetual Outbound Engine · GTM Operating System (by stage)
- **Proof:** Named case studies w/ specific metrics: ClearVault (12.4% reply rate, 340 targets, 3x meetings), LoanSpark (61 beta users in 44 days)
- **Tech:** Next.js, Tailwind likely
- **What to steal:**
  1. **Layered system diagram** (L1-L5) — Muskan's 3 services could be visualized as a layered architecture
  2. **Stage tabs** (Pre-Launch / Launch / Scale-Up / Enterprise) — interactive way to show "find your exact use case"
  3. Case-study card pattern: company name → situation → what we built → 3 metric chips
  4. "7-Day Sprint" or "4-Week Sprint" as a productized opener (Muskan already has weeks-not-quarters; can sharpen further)

---

#### A3. **lammel.ai** (Leszek Lammel)
- **URL:** https://lammel.ai
- **Identity:** *"The revenue engine your team actually owns."* — solo embedded GTM engineer, Warsaw-based
- **IA:** Hero → Logos → 3-step (Foundation/Execution/Momentum) → Two ways to work (The Build / The Retainer) → About → Case studies → Footer
- **Design:** Dark editorial, restrained, looks like Linear/Vercel — Geist-style typography
- **Copy:** *"I ship what gets used on Monday, not what demos well on Friday"* — instantly memorable. *"Designed by someone who had to use the system before he learned to build it."*
- **Services:** The Build (6-week embedded sprint, $X) + The Retainer (month-to-month)
- **Proof:** 15+ B2B SaaS companies; Clay Club contributor; speaking on GTM engineering
- **Tech:** Next.js + Tailwind + Framer Motion (very similar to Muskan's stack)
- **What to steal:**
  1. **Solo brand authenticity** — "I" not "we" everywhere; Muskan should remove "The Build Club" plural language where she's the sole operator
  2. **Two-tier offer pattern**: sprint → retainer with explicit "Cancel anytime" / "Never locked in" promise
  3. About-section voice: *"I ship what gets used on Monday"*-style memorable line for Muskan (e.g. *"i build what runs on monday, not what looks good on launch day"*)
  4. Restrained dark palette w/ minimal accent — close to where Muskan should land

---

#### A4. **prospektor.ai**
- **URL:** https://prospektor.ai
- **Identity:** *"Your GTM motion, built by AI in 90 days."* — first agency where Claude builds the infrastructure
- **IA:** Hero (with live terminal animation) → What we build (4 cards) → How it works (4 steps) → Live build demo (animated code snippet) → Why us → Pricing block → Who we work with (Seed/Series A/B+)
- **Design:** Terminal/dev aesthetic — `$ prospektor build me a ↵ enter` cursor animation; monospace code block that "builds" live
- **Copy:** *"Not a strategy deck. A working machine."* — strongest anti-deliverable line on the internet. *"We're not an agency that uses AI to write blog posts."*
- **Services:** AI brain · Marketing hub · Lead capture+email · Outbound engine
- **Proof:** $25k+ build, 90d to pipeline, $3-5k retainer, "1 deal pays for the build" — frames pricing as ROI
- **Tech:** Next.js + Tailwind + Framer Motion + custom code-typing animation
- **What to steal:**
  1. **Live "build" animation** in hero — typewriter/terminal showing the system being constructed in real time (Framer Motion `useAnimate` + `motion.span`)
  2. *"Not a deck. A working machine."*-style framing
  3. **"1 deal pays for the build"** ROI line — Muskan can adapt: *"one closed deal pays for the engine. the rest compound."*
  4. Stage-segmented audience cards (Seed / Series A / Series B+) — Muskan could do (Pre-Token / Post-Listing / Mature Protocol)

---

#### A5. **sandsdx.com**
- **URL:** https://sandsdx.com
- **Identity:** *"You don't have a pipeline problem. You have a systems problem."* — 15+ yrs ex-Microsoft/Drift/Avalara
- **IA:** Hero → Logo wall (Microsoft, Drift, Avalara, Blackbaud, ConnectWise, Oleria) → "What I hear from founders" (4 pain cards) → Two engagements (Sprint $15-20K / Fractional $15K/mo) → Industry data (5 wks faster, 38% leaner, 15-25% reply rates) → 8 free diagnostic tools → CTA
- **Design:** Editorial light, very copy-heavy; logos-as-credibility-anchor approach
- **Copy:** *"GTM systems, not GTM consulting"* — clean dichotomy
- **Services:** GTM Sprint (4 wks, $15-20K) + Fractional GTM Operator ($15K/mo, 9-12 mo, "limited to 2 concurrent clients")
- **Proof:** Logo wall with role/outcome under each, industry-data callouts (cited sources: ICONIQ 2025, Bombora)
- **Tech:** WordPress / Webflow likely
- **What to steal:**
  1. **Public pricing** ($15-20K sprint, $15K/mo fractional) + scarcity ("limited to 2 concurrent clients") — Muskan should test this
  2. **Free diagnostic tools as lead magnets** (Hero Checker, Messaging Drift, Competitor Analyzer) — Muskan could ship 1-2: *"GTM Audit Bot"*, *"Outbound Deliverability Checker"*
  3. "What I hear from founders" pain section — Muskan currently jumps to services; adding a pain section before "What I Do" earns the pitch
  4. Logo wall with **role + outcome** under each company (not just logo soup)

---

### BUCKET B — Web3 GTM solo operators (her exact niche)

---

#### B1. **yanay.xyz** (Yanay Prop) — *highest-priority peer; Aztec testimonial overlaps with Muskan*
- **URL:** https://yanay.xyz
- **Identity:** *"Crypto marketing that ships results."*
- **IA:** Hero → Logos (L2/infra/wallets/DeFi) → Testimonials (Aztec, Lattice Capital) → 5 services → About → Contact (LinkedIn/Telegram/X/Email)
- **Design:** Minimal light editorial; tight typography; quote-led
- **Copy:** *"Crypto projects rarely fail because they capture negative attention — they die because they have no attention at all."* (quoted from @intern as a closing manifesto line)
- **Services:** Go To Market · Content Marketing · Product Marketing · Marketing Assets · Community Management
- **Proof:** Tom Walton-Pocock (Aztec co-founder) testimonial: *"This has been far more effective than hiring for the strategy and marketing roles we would need."* Regan Bozman (Lattice Capital) testimonial.
- **Tech:** Static site, custom
- **What to steal:**
  1. **MUSKAN MUST GET A QUOTE FROM AZTEC** — yanay has Tom Walton-Pocock on record; Muskan also worked with Aztec. Same person, same quality bar.
  2. Closing manifesto quote pattern (someone else's quote that crystallizes your worldview)
  3. Multi-channel contact (LinkedIn, Telegram, X, Email) — Muskan's contact form is too gated; add async channels
  4. Service descriptions written in builder-talk: *"I help technical teams deliver Web3 ideas more clearly"* — concrete who-it-helps + outcome

---

#### B2. **0xgeeky.com** (Frosty)
- **URL:** https://0xgeeky.com
- **Identity:** Web3 Marketing & Growth Expert · KOL · DeFi/NFT launches
- **IA:** Hero → Track record ($2M+ in sales) → Services (BD/Advisory/GTM, KOL, Social/Content) → Process → About → Schedule
- **Design:** Framer-built, dark with neon accent
- **Copy:** Heavy on "I've led / I've worked with" — track-record-led
- **Services:** Project Advisory & GTM · KOL Marketing · Social Media & Content
- **Proof:** $2M+ in sales/volume, ex-Mavin Records (Rema), CocaCola, Guinness — **multi-industry credibility transfer**
- **Tech:** Framer
- **What to steal:**
  1. Multi-industry credibility line — Muskan could highlight cross-domain GTM experience if she has it
  2. Track-record numbers in hero (specific $ figures)

---

#### B3. **claygarnett.com**
- **URL:** https://claygarnett.com
- **Identity:** *"Web3 Marketing Director · 10+ years · 5 yrs CMO · Onchain Since 2017"* — three-pillar credential stack in hero
- **IA:** Hero (3 stat pillars) → "Most teams don't know which campaigns are [profitable]. Do you?" → Token attribution framework → Marketing/Business Alignment → Data analysis → Crypto resources → About → Free Growth Oracle Template
- **Design:** Light editorial, on-chain themed (subtle blue accents)
- **Copy:** *"Most teams don't know which campaigns are [profitable]. Do you?"* — challenge-question framing
- **Services:** Token growth attribution, Marketing/Business alignment, Data-led growth
- **Proof:** Specific numbers — 7% increase in end users, 20% lift in lead-to-SQL, $1M+ marketing spend optimized, $328,950 projected token holdings increase
- **Tech:** Custom static
- **What to steal:**
  1. **Free template/lead magnet** ("Free Growth Oracle Template" — spreadsheet) — Muskan could ship "GTM Loop Audit" template
  2. **Challenge-question opener** ("Do you know which campaigns are working?")
  3. Specific dollar-impact numbers in case studies (not %, actual $)

---

#### B4. **gazenova.com** (Martina Gazenova / MGc)
- **URL:** https://gazenova.com
- **Identity:** Web3 Community Growth & Marketing — Bulgaria/Switzerland based
- **IA:** Hero → Services (6 packages) → How I Work → Background → Service Packages (transparent pricing) → CTA
- **Design:** **Framer-built** (visible from URLs), warm and approachable, light/cream palette, rounded
- **Copy:** *"Traditional marketing doesn't work in crypto. Web3 projects need communities that believe in the mission."*
- **Services:** Community Growth, Social Media & Content, Activation Quests, Marketing Strategy, UX/UI & Web Dev, Event Management
- **Proof:** ETHSofia (550+ attendees), Internet Computer Protocol, DFINITY Foundation
- **Tech:** Framer (gazenova is on Framer's CDN)
- **What to steal:**
  1. **Service Packages section with transparent pricing** — multiple package tiers, all priced
  2. Personal-narrative About section ("I grew up in Bulgaria, built fan forums as a teen") — Muskan's voice is right but her About is currently nearly absent
  3. "How I Work" 5-step roadmap with deliverables per phase (more concrete than current)

---

#### B5. **gian-site.vercel.app** (Gian Calixto)
- **URL:** https://gian-site.vercel.app
- **Identity:** Web3 Advisor — Tokenomics, Partnerships, Lead Gen
- **IA:** Hero → Track record stats (10-15 meetings/mo, 100+ partners, $45k depth) → Services & Packages (5 services) → Mini Case Studies → How we work (4 steps) → About → Quick facts → Book intro
- **Design:** Vercel-hosted (same stack family as Muskan), clean light, tag-heavy
- **Copy:** *"Clean execution, measurable KPIs, and zero hype"* — direct, anti-crypto-hype
- **Services:** Tokenomics Advisory, Listings & Liquidity, Pitch Decks, Lead Gen & Outreach, Readiness Audit
- **Proof:** Specific case-study metrics (2.8k signups, $45k depth @ ±2%, holder churn ↓18%, TVL ↑24%)
- **Tech:** Next.js on Vercel (most direct stack reference)
- **What to steal:**
  1. **Engagement model trio:** Readiness Audit (1-2 wks) → Strategy Sprint (3-4 wks) → Fractional Advisor (monthly) — Muskan could mirror with Audit/Build/Embed
  2. "Quick facts" component: tools (Airtable/Notion/Apollo/Clay/Instantly), channels (Email/LinkedIn/Telegram), focus areas — 3-line tech literacy proof
  3. Case study with **action chips** (Pancake/Uni v3 plan, Exchange shortlist, MM RFP) → outcome chips (2.8k signups, $45k depth) — visual list pairs

---

### BUCKET C — AI builder/operator personal sites

---

#### C1. **100xsteven.com** (Steven Pham)
- **URL:** https://100xsteven.com
- **Identity:** Solutions Engineer & Agentic Architect · SF · "100x AI Velocity"
- **IA:** Hero (WebGL fluid background) → Methodology → Projects (3D-tilt cards) → AI Agent (chat with Steven) → About → Contact
- **Design:** **Strongest aesthetic outlier in the set.** WebGL fluid shader hero, 3D-tilt portfolio cards, embedded AI agent that answers questions about him
- **Copy:** *"When GPT-4 dropped, I didn't just experiment — I rewired my entire workflow"*
- **Services:** Sales engineering + agentic build velocity (more portfolio than services)
- **Proof:** $200M+ TCV, 100+ deals closed, multiple President's Club wins
- **Tech:** Next.js + Three.js (WebGL fluid) + custom AI agent on-site
- **What to steal:**
  1. **Embedded AI agent** ("Ask Muskan AI") trained on her tweets, podcast transcripts, and case-study notes — fits her AI-native positioning perfectly
  2. Hero WebGL fluid as ambient texture (Three.js, can be lightweight)
  3. 3D-tilt cards for her DeKoded city events (drag-to-rotate already exists; extend to brand work)
  4. "Built in a single day using Agentic Velocity" — meta-flex about the site itself

---

#### C2. **paul-okhrem.com**
- **URL:** https://paul-okhrem.com
- **Identity:** AI Consultant & Fractional CAIO — *"$1,000/hr, 100-hour minimum, $100,000 project floor"*
- **IA:** Hero → Companies (Elogic + Uvik) → Outcome metrics (85% faster review, 60% Tier-1 automation) → First 30 days (6 milestones) → 4-phase process → Services → CTA
- **Design:** Premium minimal — confident dark/light, tight grid
- **Copy:** Direct money in the hero — most peers hide rates; he leads with them
- **Services:** Enterprise AI Strategy, Fractional CAIO, AI Implementation, AI Automation, AI Operating Systems
- **Proof:** Proof Standard™ trademark, named outcome metrics
- **Tech:** Custom
- **What to steal:**
  1. **Lead with the rate** if confident — separates serious buyers (Muskan probably not ready for $1k/hr but a "starts at $X" anchor sets seriousness)
  2. **First 30 days** breakdown — 6 milestones from kickoff to roadmap (Muskan has 4 weeks but no milestone-level detail)
  3. Trademark a proprietary methodology name ("DeKoded Method™" or "Boring Middle System™")

---

#### C3. **tamaraashworth.com**
- **URL:** https://tamaraashworth.com
- **Identity:** Operator. Builder. Investor.
- **IA:** Hero → 3 services (Marketing/Sales/Ops) → Flagship product (FlowSystem with Flora AI) → Diagnostic audit → 3-phase engagement → Target audience
- **Design:** Modern light/warm, founder-energy
- **Copy:** Hyphenated identity stack ("Operator. Builder. Investor.")
- **Services:** AI Marketing · Sales Automation · Ops Infrastructure · FlowSystem productized SaaS
- **Proof:** Identifies 20-40% uncaptured revenue per audit
- **Tech:** Custom
- **What to steal:**
  1. **3-noun identity stack** — Muskan could try: "Operator. Builder. Host." or "Builder. Operator. Distributor."
  2. **Productize 1 thing** — Tamara's "Flora AI" is a flagship product extending her services; Muskan's "Proof of Hustle Engine" or "DeKoded Playbook" could be a similar productization
  3. Diagnostic audit framing — "find the 20-40% you're leaving on the table"

---

### BUCKET D — Aesthetic / proof-led references

---

#### D1. **growingweb3.com** (James Ross)
- **URL:** https://growingweb3.com
- **Identity:** *"Strategy and tactics for growing $billion web3 protocols & communities"* — Mode L2 founder, ex-Hype agency MD
- **IA:** Substack-based — Newsletter → Podcast → Archive → About
- **Design:** Substack default, but the **About page is exemplary** — credentials sequenced for maximum credibility transfer
- **Copy:** Conference bio that doubles as an authority claim
- **Services:** Newsletter (paid?), advisory implied (DM @jrosstreacher)
- **Proof:** Founder of Mode L2, ex-MD of Hype agency (largest Web3 marketing agency), advisor/investor in EigenLayer/Avalanche/The Graph/Zerion
- **Tech:** Substack
- **What to steal:**
  1. **About page as credentials cascade** — every line a stronger claim. Muskan's About is currently empty.
  2. Newsletter as a permission-asset — Muskan has a podcast; pair with a thin newsletter for compounding distribution
  3. Conference bio (3rd-person paragraph) as a separately downloadable asset — useful for booking gigs

---

#### D2. **zygmuntbiela.com** ("Z. — I fix crypto marketing")
- **URL:** https://zygmuntbiela.com
- **Identity:** *"I fix crypto marketing"* — sharpest 4-word positioning in the set
- **IA:** Hero → 2 services (Growth Accelerator audit + Consulting) → Highlights (Coinbase listing, Binance listing, Polygon integration, etc.) → Reach metrics (1.4M+ views, 3.3M+ news views) → Case studies → Contact
- **Design:** Minimal personal-brand site, single-letter logo "Z."
- **Copy:** *"I fix crypto marketing"* — verb-led, problem-led, irreducible
- **Services:** Growth Accelerator (audit) + Consulting (real-time team support)
- **Proof:** Coinbase listing, Binance listing, Polygon integration, Bancor buybacks, ChainlinkGod buzz, Erik Voorhees buzz, Crypto.com CEO interview
- **Tech:** WordPress
- **What to steal:**
  1. **4-word verb-led positioning** — Muskan's "Build Club" is a brand; she also needs a verb-led one-liner: *"I build the boring middle"* or *"I build GTM systems for crypto"*
  2. Single-letter logo treatment ("M.") for favicon and minimal contexts
  3. **Highlights wall** — bulleted list of name-drop wins (Coinbase listing, Binance listing) creates social-proof density faster than logo soup

---

## 3. Cross-Site Patterns (winners' playbook)

| Pattern | Used by | Verdict |
|---|---|---|
| First-person "I build / I help / I fix" hero | lammel, godwin, sandsdx, zygmunt, yanay | **STEAL** — Muskan already does this, lean harder |
| Numerical + timeline anchor ("7 days", "6 weeks", "90 days") | godwin, lammel, prospektor, sandsdx | **STEAL** — Muskan has "weeks not quarters", make it specific: "live in 4 weeks" |
| 3-pillar service architecture | espressio, muskan, claygarnett, godwin | ✅ Already done |
| Two-tier pricing (sprint → retainer) | sandsdx, lammel, gian, prospektor | **STEAL** — currently absent |
| Public pricing with scarcity | sandsdx, paul-okhrem, prospektor | **TEST** — adds seriousness |
| Logo marquee with role + outcome under each | sandsdx, espressio | **STEAL** — Muskan has logos but no context |
| Named testimonial with role + linked company | yanay, lammel, espressio | **CRITICAL** — replace `[Name] [Title]` placeholders |
| Pain-section before service-section | sandsdx, espressio | **STEAL** — earn the pitch |
| Live terminal / typewriter animation | prospektor | **STEAL** — fits AI-native theme |
| Free lead-magnet tool | sandsdx, claygarnett | **TEST** — "GTM Loop Audit" worksheet |
| Stage-segmented audience cards | prospektor, godwin | **STEAL** — Pre-token / Post-listing / Mature protocol |
| Layered system architecture diagram | godwin (L1-L5) | **STEAL** — visualize the 3 services as a stack |
| Embedded AI agent / chat | 100xsteven | **STEAL** — fits AI-native brand best of any pattern |
| Numbered sections (NO. 01...) | muskan | ✅ Distinctive — keep |
| Lowercase voice | muskan, lammel | ✅ Already done |
| 3-noun identity stack | tamaraashworth | **TEST** — "Builder. Operator. Host." |
| Conference bio / About cascade | growingweb3 | **STEAL** — fix empty About |

---

## 4. Revamp Checklist — File-by-File

> Tied to Next.js 16 App Router structure. Assumes `app/page.tsx` is the homepage, components in `components/`, content/data in `content/` or `data/`.

### Priority 0 — Credibility-killers (ship first)

```
[ ] components/HeroStats.tsx
    Replace placeholder "0k+ / 0+ / 0 / 0+" with actual values:
      - 800k+ video views
      - 55+ videos shipped
      - 8 events hosted
      - 8+ brands worked with
    Animate count-up via framer-motion useMotionValue + animate.

[ ] components/Testimonials.tsx
    Remove every literal [Name] [Title] placeholder.
    Replace with real quotes OR hide section entirely until 3+ real quotes exist.
    Format: { quote, name, role, company, companyUrl, avatarUrl? }
    Get quotes from: Aztec (Tom Walton-Pocock — public), Base, KRNL, Bhindi AI, Avici.

[ ] components/Footer.tsx
    Fix typo "powered by veloice ai" → either remove or correct.

[ ] app/layout.tsx
    Add OG image (1200x630), Twitter card meta, JSON-LD Person schema.
    Add favicon SVG with "M." monogram.
```

### Priority 1 — Conversion infrastructure

```
[ ] components/Services.tsx
    Add 3 visual icons or numbered SVG illustrations for the 3 service cards.
    Layer the architecture: L1 Content Engine / L2 Outbound Flow / L3 Boring Middle (steal Godwin's L1-L5 visual).
    Add scroll-triggered reveal animation (framer-motion whileInView).

[ ] components/Pricing.tsx (NEW)
    Add a two-tier pricing block under "Work With Me":
      Tier 1: 4-Week Sprint — strategy + workshop + first system live
      Tier 2: Embedded Retainer — month-to-month, monthly retros, slack open
    Include "limited to N concurrent clients" for scarcity (steal sandsdx).

[ ] components/PainPoints.tsx (NEW)
    Insert BEFORE "What I Do" section.
    4 cards: "Founder-led marketing hitting a ceiling" / "Content team drowning in calendar" / "Outbound replies = 2%" / "Mid-funnel is a black box".
    Steal sandsdx's "What I hear from founders" pattern; use Muskan's voice (lowercase).

[ ] components/Logos.tsx
    Add role/outcome below each logo (e.g., "Base — sponsored series, 94k views").
    Make the marquee pause on hover.
```

### Priority 2 — Distinctive moves (steal-from-best)

```
[ ] components/HeroTerminal.tsx (NEW — optional but high-impact)
    Live typewriter animation in hero showing system being built:
      $ buildClub init
      → ICP: Web3 founders, post-token, DXB/SIN
      → Voice ingested: 47 tweets, 7 podcast eps, 21 docu episodes
      → Pipeline: live in 4 weeks
    Use framer-motion useAnimate + setTimeout chain. Steal from prospektor.

[ ] components/AIAgent.tsx (NEW — high-impact, AI-native fit)
    Embedded chat: "Ask Muskan AI" — answers questions about her services, past work, availability.
    Use OpenAI/Anthropic API + RAG over her tweets, transcripts, case studies.
    Steal from 100xsteven.com.

[ ] components/About.tsx (NEW — currently empty)
    Conference-bio cascade:
      Para 1: 4 yrs in GTM, started in [origin].
      Para 2: Today — building AI-native GTM systems for AI/Web3.
      Para 3: Outside the work — DeKoded, Proof of Hustle, India tour.
    Add separately-downloadable bio asset for booking.
    Steal from growingweb3.com About page.

[ ] components/StageCards.tsx (NEW)
    3-tab interactive: "Pre-Token" / "Post-Listing" / "Mature Protocol"
    Each tab swaps the example/use-case shown.
    Steal from prospektor + godwin.

[ ] components/CaseStudy.tsx (REFACTOR)
    For each brand work item, structure:
      - Company name + logo
      - Situation (1-line)
      - What I built (3 chips)
      - Outcomes (3 metric pills)
    Steal from godwin/gian.

[ ] content/copy.ts (NEW)
    Centralize all copy. Add a memorable signature line:
      "i build what runs on monday, not what looks good on launch day."
    Steal pattern from lammel.
```

### Priority 3 — Lead generation

```
[ ] app/audit/page.tsx (NEW — free tool)
    Mini interactive: "GTM Loop Audit" — 5-question quiz, returns a score + 3 fixes.
    Email-gated PDF download. Feeds into newsletter list.
    Steal pattern from sandsdx + claygarnett.

[ ] app/journal/page.tsx (FIX)
    Currently empty. Either:
      a) Hide route until first post exists
      b) Seed with 3 short posts: "why the boring middle compounds", "what 8 cities taught me", "outbound that doesn't sound like AI"

[ ] app/build-in-public/page.tsx (FIX)
    Currently empty. Embed live X/Twitter feed via @Muskanjain0401 OR remove from nav.
```

### Priority 4 — Polish

```
[ ] components/PageTransitions.tsx (NEW)
    Wrap layout in framer-motion AnimatePresence for route transitions.
    Subtle fade + 8px slide-up on page change.

[ ] tailwind.config.ts
    Add custom font stack: Geist Sans (body), Geist Mono (numbered NO. 01 labels), maybe Crimson Pro for editorial pull quotes.
    Define accent color (warm amber #F2B33A or signature crypto-orange — NOT generic AI-purple).

[ ] app/icon.tsx
    SVG favicon with "M." monogram in serif on transparent background.

[ ] components/ContactForm.tsx
    Add Calendly fallback link below the form: "or just book 30 min: cal.com/muskanjain"
    Add async channels (Telegram, X DM) — steal from yanay.
```

---

## 5. Copy Library (paste-ready)

### Hero variants to test

```
Variant A (current, refined):
  4 years in GTM. now i build content engines, outbound flows,
  and the boring middle of the funnel — using AI.
  i help you do the same. without burning a year figuring it out.

Variant B (verb-led, zygmunt-style):
  i build the boring middle.
  the mid-funnel plumbing nobody posts screenshots of —
  but compounds harder than any launch tweet ever will.

Variant C (lammel-style, signature line):
  i build what runs on monday,
  not what looks good on launch day.
  4 years in GTM. now AI-native, for AI × Web3.
```

### Pain section ("What I hear from founders")

```
01. founder-led marketing is hitting the ceiling.
    you've been the brand. now you need a motion.

02. your content team is drowning in the calendar.
    one piece a week. shipped at midnight. nobody's compounding.

03. outbound replies sit at 2%.
    the lists are wrong, the copy reads like spam,
    and the follow-ups fire on vibes.

04. the mid-funnel is a black box.
    leads come in. some convert. nobody knows why.
    no scoring, no lifecycle, no signal.
```

### Two-tier pricing block

```
THE SPRINT — 4 weeks
  the strategy, the workshop, the first system live.
  one to two systems shipped inside your stack.
  you walk away with the keys.
  starts at $X. limited to 2 concurrent clients.

THE EMBED — month to month
  ongoing tuning, new motions, weekly retros.
  same operator. cancel anytime.
  $X/mo. capped at 3 clients.
```

### Closing manifesto (yanay-style)

```
"crypto projects rarely fail because the product is bad.
they die because nobody's listening — and the team is too tired
to figure out distribution after they've shipped the product."
                                                    — overheard, dxb 2025
```

---

## 6. Tech Stack Recommendations

**Keep:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Geist font (matches AI-native peers; vercel-native)
- Vercel hosting

**Add:**
- `@vercel/og` — dynamic OG image generation per page
- `next-mdx-remote` or `contentlayer2` — for `/journal` posts
- `react-intersection-observer` (or framer-motion's `useInView`) — for scroll-triggered section reveals
- `lucide-react` — icons for service cards
- `sonner` — toast notifications for form submission
- `@radix-ui/react-tabs` — for stage-segmented audience cards
- `@react-three/fiber` + `@react-three/drei` — IF doing WebGL hero like 100xsteven (optional, performance-cost)
- `@vercel/ai-sdk` + Anthropic/OpenAI — IF doing the embedded "Ask Muskan AI" agent

**Performance budget (must hit):**
- Lighthouse Performance ≥ 95 mobile
- LCP < 2.0s
- CLS < 0.05
- Hero hero-image / video preloaded with `<link rel="preload">`
- Framer Motion: lazy-load below-fold animations with dynamic imports

**SEO floor:**
- `app/layout.tsx` — full Open Graph + Twitter Card meta
- `app/sitemap.ts` — generate sitemap
- `app/robots.ts` — allow all
- JSON-LD Person + Organization schema
- One H1 per page only

---

## 7. Recommended Build Order for Claude Code

```
PHASE 1 (Day 1) — Stop the bleeding
  - Fix HeroStats placeholders
  - Hide or replace [Name] [Title] testimonials
  - Fix footer typo
  - Add OG image + favicon

PHASE 2 (Day 2-3) — Conversion lift
  - Add PainPoints section
  - Add Pricing tiers
  - Add icons + scroll-reveal to Services
  - Refactor CaseStudy to action+outcome chip pattern
  - Add Logos role/outcome captions

PHASE 3 (Day 4-5) — Distinctive moves
  - Build HeroTerminal animation
  - Build About page with cascade
  - Build StageCards interactive
  - Add page transitions
  - Centralize copy in content/copy.ts

PHASE 4 (Day 6-7) — Lead gen + polish
  - Ship /audit free tool
  - Seed /journal with 3 posts (or hide)
  - Add Calendly + async contact channels
  - Performance + SEO audit pass

PHASE 5 (optional, week 2) — AI-native flex
  - Build embedded "Ask Muskan AI" agent
  - Build WebGL hero ambient texture
  - A/B test hero copy variants
```

---

## 8. What NOT to do (anti-patterns observed)

- ❌ Don't add neon-glow / sci-fi effects (looks like every other AI site, kills credibility)
- ❌ Don't use stock AI imagery (circuit boards, glowing brains, neural networks)
- ❌ Don't capitalize headlines (Muskan's lowercase voice is a moat — protect it)
- ❌ Don't add a chatbot before the AI agent is ready (cheap chatbots kill premium positioning)
- ❌ Don't show pricing before testimonials exist (one cancels out the other)
- ❌ Don't add 4+ services (3 is the right number; competitors who try 5+ feel scattered)
- ❌ Don't lead with "We" — Muskan is solo + brand. "I" everywhere.

---

**END OF BRIEF.** This is the full context. Hand to Claude Code. Reference back to specific competitor URLs when implementing each pattern.
