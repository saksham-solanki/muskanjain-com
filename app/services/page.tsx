'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  PenTool,
  Send,
  Users,
  ArrowRight,
  ArrowUpRight,
  Video,
  MessageSquare,
  Mail,
  Mic,
  Calendar,
  Wrench,
  Hammer,
  LineChart,
  ChevronRight,
  Check,
  X,
  Megaphone,
  EyeOff,
  Sparkles,
  Infinity as InfinityIcon,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { BlurFade } from '@/components/ui/blur-fade'
import { CountUp } from '@/components/ui/count-up'

/* ─────────────────────────────────────────────────────────────
   Type defs. Tool stack lives in the operator's head, not the page.
   ───────────────────────────────────────────────────────────── */
type Tier = {
  label: string
  tone: 'mint' | 'sky' | 'lilac' | 'amber' | 'coral' | 'ink'
}

type System = {
  slug: string
  title: string
  blurb: string
  icon: LucideIcon
  pillTag: string
  pillTone: string
  inputs: string[]
  flow: [string, string, string, string] // 4 abstract verb stages, no tool names
  tiers: Tier[]
  outputs: string[]
  outcome: string // headline result, the deliverable proof
  brand: string // where it has shipped, single line
  featured?: boolean
}

const tierTone: Record<Tier['tone'], string> = {
  mint: 'bg-[#2D9D78]/12 text-[#1F7256] ring-[#2D9D78]/25',
  sky: 'bg-[#5B8DEF]/14 text-[#2C5BC4] ring-[#5B8DEF]/25',
  lilac: 'bg-[#7C5CFF]/12 text-[#4F39B5] ring-[#7C5CFF]/25',
  amber: 'bg-[#F0A500]/16 text-[#A87000] ring-[#F0A500]/25',
  coral: 'bg-coral/14 text-coral ring-coral/30',
  ink: 'bg-ink/[0.08] text-ink ring-ink/20',
}

/* Six systems in production. Outcome-led, no tool chips, no recipe.
   The "flow" array names abstract operator stages, not vendors. */
const systems: System[] = [
  {
    slug: 'content-engines',
    title: 'Content Engines',
    blurb:
      'One source recording in. A month of platform-native long-form, threads, and posts out. The brand voice stays yours; the velocity stops being a bottleneck.',
    icon: PenTool,
    pillTag: 'Content',
    pillTone: 'bg-[#2D9D78]/12 text-[#2D9D78] ring-[#2D9D78]/25',
    inputs: ['Brand voice', 'Topic queue', 'Source library'],
    flow: ['Listen', 'Frame', 'Compose', 'Distribute'],
    tiers: [
      { label: 'Long-form', tone: 'mint' },
      { label: 'Threads', tone: 'sky' },
      { label: 'Shorts', tone: 'lilac' },
    ],
    outputs: ['Blog essay', 'X thread', 'LinkedIn post'],
    outcome: '12 native assets per source recording',
    brand: 'Live inside Canton, KRNL, Smallest AI',
  },
  {
    slug: 'ugc-video',
    title: 'UGC & Short-Form Video',
    blurb:
      'A month of native reels in a weekend. Voice, captions, and the boring edit pass, handled. You film once a quarter; the catalogue compounds weekly.',
    icon: Video,
    pillTag: 'Video',
    pillTone: 'bg-coral/10 text-coral ring-coral/25',
    inputs: ['Topic', 'Script outline', 'Brand assets'],
    flow: ['Script', 'Render', 'Edit', 'Publish'],
    tiers: [
      { label: 'Reel', tone: 'mint' },
      { label: 'Short', tone: 'sky' },
      { label: 'TikTok', tone: 'lilac' },
    ],
    outputs: ['Instagram', 'YouTube Shorts', 'X / TikTok'],
    outcome: '4 weeks of reels in a single weekend',
    brand: 'Production-tested on Building KRNL · 305k views',
  },
  {
    slug: 'reddit-traffic',
    title: 'Reddit-Led AI SEO',
    blurb:
      'Reddit shows up in 68% of AI Overviews. I build the playbook that gets your protocol cited inside the answer, not buried on page two.',
    icon: MessageSquare,
    pillTag: 'AI SEO',
    pillTone: 'bg-[#5B8DEF]/10 text-[#5B8DEF] ring-[#5B8DEF]/20',
    inputs: ['ICP keywords', 'Subreddit map', 'Brand POV'],
    flow: ['Mine', 'Match', 'Answer', 'Cite'],
    tiers: [
      { label: 'Educational', tone: 'mint' },
      { label: 'Comparison', tone: 'sky' },
      { label: 'Story', tone: 'lilac' },
    ],
    outputs: ['AI Overview cite', 'AI chat cite', 'AI search cite'],
    outcome: 'Cited inside the answer, not the search',
    brand: 'Pattern proven across protocol launches',
  },
  {
    slug: 'email-lifecycle',
    title: 'Lifecycle Email, Behaviour-Led',
    blurb:
      'The flows your funnel keeps forgetting, welcome, nurture, win-back, expansion. All wired to behaviour, none of them static, none of them generic.',
    icon: Mail,
    pillTag: 'Lifecycle',
    pillTone: 'bg-[#F0A500]/15 text-[#A87000] ring-[#F0A500]/25',
    inputs: ['Customer events', 'Triggers', 'Brand voice'],
    flow: ['Listen', 'Segment', 'Personalize', 'Send'],
    tiers: [
      { label: 'Welcome', tone: 'mint' },
      { label: 'Nurture', tone: 'sky' },
      { label: 'Win-back', tone: 'amber' },
    ],
    outputs: ['Onboarding flow', 'Re-engagement', 'Expansion'],
    outcome: 'Behaviour-routed flows live in 3 weeks',
    brand: 'Built for AI-native B2B funnels',
  },
  {
    slug: 'personal-brand',
    title: 'Founder Brand on Autopilot',
    blurb:
      'One 30-min recording in. A week of LinkedIn, X, and newsletter out. A ghostwriter calibrated to your phrasing, not a generic content mill.',
    icon: Mic,
    pillTag: 'Founder',
    pillTone: 'bg-coral text-white ring-coral/40',
    inputs: ['30-min recording', 'POV bank', 'Voice samples'],
    flow: ['Capture', 'Structure', 'Voice', 'Schedule'],
    tiers: [
      { label: 'LinkedIn', tone: 'sky' },
      { label: 'X', tone: 'ink' },
      { label: 'Newsletter', tone: 'amber' },
    ],
    outputs: ['5 posts/wk', '3 threads/wk', '1 essay/wk'],
    outcome: '5 posts + 3 threads + 1 essay every week',
    brand: 'Operator-tested across founder rosters',
    featured: true,
  },
  {
    slug: 'outbound-gtm',
    title: 'Outbound, Signal-Led',
    blurb:
      'Signal-based prospecting layered with on-chain enrichment. Senior-led sequences that move from trigger to qualified meeting in days, not quarters.',
    icon: Send,
    pillTag: 'Outbound',
    pillTone: 'bg-ink/[0.08] text-ink ring-ink/15',
    inputs: ['ICP', 'Trigger signals', 'Domain list'],
    flow: ['Detect', 'Enrich', 'Personalize', 'Send'],
    tiers: [
      { label: 'Tier 1', tone: 'mint' },
      { label: 'Tier 2', tone: 'sky' },
      { label: 'Tier 3', tone: 'lilac' },
    ],
    outputs: ['Calendar holds', 'Pipeline', 'Replies'],
    outcome: 'Signal to qualified meeting in under 14 days',
    brand: 'Live for Canton-adjacent protocols',
  },
]

/* ─────────────────────────────────────────────────────────────
   Pillars (3 capability buckets that frame the systems below).
   Capability tags only. The toolchain stays under the hood.
   ───────────────────────────────────────────────────────────── */
const pillars: {
  num: string
  title: string
  blurb: string
  capabilities: string[]
  href: string
  Icon: LucideIcon
  metric: string
  metricLabel: string
}[] = [
  {
    num: '01',
    title: 'Content & Brand Systems',
    blurb:
      'Operator-led content engines that turn one founder voice into a month of platform-native long-form, video, and AI-search citations. Built around the brand, never on top of it.',
    capabilities: ['Multi-Agent', 'Voice & Video', 'Programmatic SEO', 'AEO Citations'],
    href: '#content-engines',
    Icon: PenTool,
    metric: '12×',
    metricLabel: 'Native assets per recording',
  },
  {
    num: '02',
    title: 'Outbound & Pipeline',
    blurb:
      'Signal-based prospecting layered with on-chain enrichment. Senior-led sequences shipped on stage in Mumbai and inside Canton-adjacent protocols, fitted to your stack.',
    capabilities: ['Signal Detection', 'On-Chain Enrichment', 'Tiered Cadences', 'Pipeline Reporting'],
    href: '#outbound-gtm',
    Icon: Send,
    metric: '<14d',
    metricLabel: 'Signal to qualified meeting',
  },
  {
    num: '03',
    title: 'Community & Events',
    blurb:
      'The DeKoded methodology. IRL rooms that ship, paired with always-on community engines that absorb the repeat questions and surface the operator-grade signal.',
    capabilities: ['IRL Programming', 'Always-On Engines', 'Sentiment Routing', 'Onboarding Flows'],
    href: '#systems',
    Icon: Users,
    metric: '600+',
    metricLabel: 'Operators convened across 6 cities',
  },
]

/* ─────────────────────────────────────────────────────────────
   Process rows
   ───────────────────────────────────────────────────────────── */
const processRows = [
  {
    n: '01',
    step: 'Strategy Call',
    what: 'A 45-minute working session. We map your funnel, your stack, and the one bottleneck that, if cleared, moves the next quarter.',
    you: 'Show up with current numbers. No deck required.',
    when: 'Day 0',
    Icon: Calendar,
  },
  {
    n: '02',
    step: 'Workshop',
    what: 'I rebuild the chosen system on a shared screen. You watch the wiring, the routing, the agent logic. Nothing is a black box.',
    you: 'Two hours, your stack credentials, a sandbox env.',
    when: 'Week 1',
    Icon: Wrench,
  },
  {
    n: '03',
    step: 'Build & Deploy',
    what: 'The system goes live in your production stack, your Slack, your inbox, your CRM. You own every credential, every template.',
    you: 'Async reviews. One mid-build sync.',
    when: 'Weeks 2 to 5',
    Icon: Hammer,
  },
  {
    n: '04',
    step: 'Optimize',
    what: 'Weekly numbers. We tune what is firing, kill what is not, and scope the next workflow on top of the one that just shipped.',
    you: 'A 30-min review cadence, that is it.',
    when: 'Weeks 6+',
    Icon: LineChart,
  },
]

/* ─────────────────────────────────────────────────────────────
   Results case strip
   ───────────────────────────────────────────────────────────── */
const cases = [
  {
    headline: '$340K',
    unit: 'pipeline shipped',
    context: 'Goa 3-day retreat, one launch, end-to-end, in 72 hours.',
  },
  {
    headline: '130K',
    unit: 'tour views',
    context: 'H1 2025 India tour content, across X, LinkedIn, and YouTube.',
  },
  {
    headline: '140+',
    unit: 'founders convened',
    context: 'Dubai DeKoded, first international room, GCC outbound playbook.',
  },
  {
    headline: '$9T/mo',
    unit: 'institutional flow',
    context: 'Canton Foundation marketing, proving editorial works for infra.',
  },
]

/* ─────────────────────────────────────────────────────────────
   Comparison rows, Muskan vs Agency vs SaaS vs Junior
   ───────────────────────────────────────────────────────────── */
const compareRows = [
  {
    criterion: 'Has actually shipped Web3 GTM',
    muskan: 'Canton, KRNL, Symbiote, three deployments live',
    agency: 'Two case studies from 2022, mostly CEX',
    saas: 'Templates, no domain context',
    junior: 'Read a Bankless article last week',
  },
  {
    criterion: 'AI workflows running in production',
    muskan: 'Six pipelines live across three protocols',
    agency: 'A ChatGPT subscription on the company card',
    saas: 'You build the workflow yourself',
    junior: 'Knows the prompts, not the wiring',
  },
  {
    criterion: 'Time to first ship',
    muskan: 'Workshop in week one. Live in five.',
    agency: 'Six-week onboarding, then a deck',
    saas: 'Whenever you finish reading the docs',
    junior: 'Three months ramp, optimistic',
  },
  {
    criterion: 'Embedded in your stack',
    muskan: 'Yes, your Slack, your CRM, your sandbox',
    agency: 'A weekly status call and a Notion page',
    saas: 'A dashboard you open on Mondays',
    junior: 'Yes, but they also need managing',
  },
  {
    criterion: 'One person accountable end-to-end',
    muskan: 'Me. The same person who scoped it.',
    agency: 'An account manager and three handoffs',
    saas: 'A support inbox',
    junior: 'You, ultimately',
  },
]

/* ─────────────────────────────────────────────────────────────
   Pain points, what founders keep telling me before we ever
   talk tooling. Sandsdx-style "earn the pitch" pattern.
   ───────────────────────────────────────────────────────────── */
const painPoints: {
  icon: LucideIcon
  title: string
  body: string
}[] = [
  {
    icon: Megaphone,
    title: 'Founder-Led Marketing Is Hitting the Ceiling',
    body: 'You have been the brand on every pod, panel, and tweet. It worked. Now you need a motion that runs without your face on it.',
  },
  {
    icon: Calendar,
    title: 'Your Content Team Is Drowning in the Calendar',
    body: 'One piece a week. Shipped at midnight. Nothing compounds. The library is a folder, not a flywheel.',
  },
  {
    icon: Send,
    title: 'Outbound Replies Sit at 2%',
    body: 'The lists are wrong. The copy reads like a template. Follow-ups fire on vibes, not on signal.',
  },
  {
    icon: EyeOff,
    title: 'The Mid-Funnel Is a Black Box',
    body: 'Leads come in. Some convert. Nobody knows why. No scoring, no lifecycle, no on-chain attribution.',
  },
]

/* ─────────────────────────────────────────────────────────────
   Pricing tiers, two productized engagements with scarcity.
   Sandsdx + Lammel pattern. Public pricing as seriousness signal.
   ───────────────────────────────────────────────────────────── */
const pricingTiers: {
  badge: string
  name: string
  cadence: string
  pitch: string
  price: string
  priceNote: string
  scarcity: string
  inclusions: string[]
  cta: { label: string; href: string }
  highlight: boolean
  icon: LucideIcon
}[] = [
  {
    badge: 'Start Here',
    name: 'The Sprint',
    cadence: '4 Weeks · Fixed Scope',
    pitch:
      'Strategy call, workshop, and the first AI-native system live inside your stack. You walk away with the keys, the docs, and the runway.',
    price: 'From $18K',
    priceNote: 'Engagement fee, scoped in week one.',
    scarcity: 'Two concurrent slots · Booking 6 weeks out',
    inclusions: [
      '90-min positioning + offer audit',
      'One-day workshop with your operators',
      'One workflow shipped: Content, Outbound, or Mid-Funnel',
      'Full handover: Loom walkthroughs, runbooks, prompts',
      'Two weeks of post-launch tuning',
    ],
    cta: { label: 'Scope a Sprint', href: '/book' },
    highlight: false,
    icon: Sparkles,
  },
  {
    badge: 'Most Founders Stay Here',
    name: 'The Embed',
    cadence: 'Month to Month · Cancel Anytime',
    pitch:
      'Same operator, on retainer. New motions, weekly retros, your Slack open. Sprint deliverables get tuned, expanded, and instrumented in production.',
    price: 'From $9.5K /mo',
    priceNote: 'Three-month minimum, then month-to-month.',
    scarcity: 'Capped at three retainers · One slot left for Q3',
    inclusions: [
      'Weekly working sessions, async between',
      'New workflow shipped every 4-6 weeks',
      'Always-on prompt + agent maintenance',
      'On-chain attribution + funnel reporting',
      'Direct line to me, not an account team',
    ],
    cta: { label: 'Apply for an Embed', href: '/book' },
    highlight: true,
    icon: InfinityIcon,
  },
]

/* ─────────────────────────────────────────────────────────────
   Reusable atoms
   ───────────────────────────────────────────────────────────── */
function InputChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/70 ring-1 ring-ink/10 text-[10.5px] font-medium text-ink-muted tabular">
      {children}
    </span>
  )
}

function TierPill({ tier }: { tier: Tier }) {
  return (
    <span
      className={cn(
        'inline-flex text-center text-[10.5px] font-bold uppercase tracking-[0.1em] px-2.5 py-1.5 rounded-full ring-1 tabular',
        tierTone[tier.tone],
      )}
    >
      {tier.label}
    </span>
  )
}

function OutputPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 ring-1 ring-ink/12 text-[11px] font-semibold text-ink tabular shadow-[0_2px_6px_-2px_rgba(26,26,46,0.06)] hover:ring-coral/35 hover:bg-white transition-all">
      <span className="h-1 w-1 rounded-full bg-coral" aria-hidden />
      {children}
    </span>
  )
}

/* Animated coral pulse beam, used inside workflow rows.
   Renders a dashed SVG line that "draws in", with a small dot
   travelling left-to-right on whileInView. */
function PulseBeam({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative h-px w-full overflow-visible" aria-hidden>
      <svg
        viewBox="0 0 200 2"
        preserveAspectRatio="none"
        className="absolute inset-0 h-[2px] w-full"
      >
        <motion.line
          x1="0"
          y1="1"
          x2="200"
          y2="1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="text-coral/40"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <motion.span
        initial={{ left: '0%', opacity: 0 }}
        whileInView={{ left: '100%', opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.4, delay: delay + 0.2, ease: 'easeInOut' }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-coral shadow-[0_0_10px_rgba(255,107,107,0.7)]"
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   System card, outcome-led horizontal row.
   Left: identity + inputs.  Middle: abstract operator flow.
   Right: deliverables + headline outcome + brand proof.
   No tool names, no recipe leak.
   ───────────────────────────────────────────────────────────── */
function SystemRow({ sys, index }: { sys: System; index: number }) {
  const Icon = sys.icon
  return (
    <BlurFade delay={0.05 + index * 0.04} yOffset={18} blur={6}>
      <article
        id={sys.slug}
        className={cn(
          'group relative rounded-[24px] p-6 sm:p-8 backdrop-blur-md ring-1 transition-all duration-300 scroll-mt-28',
          'shadow-[0_18px_50px_-22px_rgba(26,26,46,0.18)] hover:shadow-[0_28px_60px_-22px_rgba(255,107,107,0.32)]',
          sys.featured
            ? 'bg-gradient-to-br from-coral/[0.10] via-white/85 to-white/72 ring-coral/30'
            : 'bg-white/78 ring-white/85 hover:bg-white/88',
        )}
      >
        {/* Featured ribbon, pinned top-right */}
        {sys.featured && (
          <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-coral text-white text-[9.5px] font-bold tracking-[0.18em] uppercase shadow-[0_8px_20px_-8px_rgba(255,107,107,0.6)]">
            <span className="h-1 w-1 rounded-full bg-white" aria-hidden />
            Most Booked
          </span>
        )}

        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ── LEFT: identity + outcome hero + brand proof ── */}
          <header className="col-span-12 lg:col-span-5 flex flex-col">
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  'h-11 w-11 rounded-xl grid place-items-center ring-1 shrink-0 transition-transform group-hover:scale-105',
                  sys.featured
                    ? 'bg-coral text-white ring-coral/40 shadow-[0_8px_20px_-8px_rgba(255,107,107,0.5)]'
                    : 'bg-coral/10 text-coral ring-coral/20',
                )}
              >
                <Icon size={20} strokeWidth={2.2} />
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className={cn(
                    'inline-flex shrink-0 text-[9.5px] font-bold uppercase tracking-[0.1em] px-2 py-[3px] rounded-full ring-1 tabular mb-1.5',
                    sys.pillTone,
                  )}
                >
                  {sys.pillTag}
                </span>
                <h3 className="h-card text-[20px] sm:text-[22px] leading-snug [text-wrap:balance]">
                  {sys.title}
                </h3>
              </div>
            </div>

            {/* OUTCOME — editorial cream panel, replaces dark navy box */}
            <div
              className="relative mt-5 rounded-2xl p-5 ring-1 ring-coral/20 overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #FFF5F2 0%, #FFE4E1 55%, #FFD6D1 100%)',
              }}
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-coral/15 blur-2xl pointer-events-none"
              />
              <p className="relative font-mono text-[9.5px] uppercase tracking-[0.22em] text-coral font-bold tabular">
                What Lands
              </p>
              <p className="relative mt-2 serif-italic text-[22px] sm:text-[24px] lg:text-[26px] text-ink leading-[1.18] [text-wrap:balance]">
                {sys.outcome}
              </p>
            </div>

            <p className="mt-5 text-[14.5px] text-ink-muted leading-[1.6] [text-wrap:pretty]">
              {sys.blurb}
            </p>

            {/* Brand proof anchored to bottom of left column */}
            <div className="mt-auto pt-5 border-t hairline">
              <div className="flex items-start gap-2">
                <span className="relative flex h-1.5 w-1.5 mt-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
                </span>
                <p className="text-[12px] text-ink-muted leading-snug [text-wrap:pretty]">
                  {sys.brand}
                </p>
              </div>
            </div>
          </header>

          {/* ── RIGHT: the mechanism (flow + deliverables) ── */}
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
                Operator Flow
              </p>
              <div className="hidden lg:block flex-1">
                <PulseBeam delay={0.05 + index * 0.04} />
              </div>
            </div>

            {/* 4 verb-nodes connected by horizontal pulse beams */}
            <div className="relative">
              {/* desktop: 4-node horizontal grid */}
              <ol className="hidden sm:grid grid-cols-4 gap-1.5 relative">
                {sys.flow.map((step, i) => (
                  <li key={step} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-xl bg-white/70 ring-1 ring-ink/8 p-3 text-center backdrop-blur-sm hover:ring-coral/40 hover:bg-white/90 transition-all"
                    >
                      <p className="font-mono text-[10px] tabular text-coral font-bold tracking-[0.18em]">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-1.5 text-[13px] font-bold text-ink leading-tight tracking-tight">
                        {step}
                      </p>
                    </motion.div>

                    {/* connector beam between nodes (desktop) */}
                    {i < sys.flow.length - 1 && (
                      <div
                        aria-hidden
                        className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 z-0"
                      >
                        <ChevronRight
                          size={14}
                          className="text-coral/45"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ol>

              {/* mobile: vertical stack with chevrons */}
              <ol className="sm:hidden flex flex-col gap-1.5">
                {sys.flow.map((step, i) => (
                  <li key={step}>
                    <div className="flex items-center gap-3 rounded-xl bg-white/70 ring-1 ring-ink/8 px-3 py-2.5">
                      <span className="font-mono text-[10px] tabular text-coral font-bold w-5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[13px] font-bold text-ink">{step}</p>
                    </div>
                    {i < sys.flow.length - 1 && (
                      <div className="flex justify-center py-0.5" aria-hidden>
                        <ChevronRight
                          size={12}
                          className="text-coral/40 rotate-90"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Variants + Ships As — paired side by side */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint mb-2">
                  Variants
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sys.tiers.map((tier) => (
                    <TierPill key={tier.label} tier={tier} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint mb-2">
                  Ships As
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sys.outputs.map((output) => (
                    <OutputPill key={output}>{output}</OutputPill>
                  ))}
                </div>
              </div>
            </div>

            {/* Inputs you bring — secondary footer */}
            <div className="mt-auto pt-5">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
                  Inputs You Bring
                </p>
                <span className="h-px flex-1 bg-ink/8" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {sys.inputs.map((input) => (
                  <InputChip key={input}>{input}</InputChip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </BlurFade>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">

      {/* ─── 1. Hero ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end">

            {/* Left, copy */}
            <div className="col-span-12 lg:col-span-8">
              <BlurFade delay={0} duration={0.5}>
                <div className="flex items-center gap-3">
                  <span className="eyebrow">No. 01</span>
                  <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                  <span className="section-label">SERVICES</span>
                </div>
              </BlurFade>

              <RevealOnScroll variant="slideUp" stagger={0.1} delay={0.08} className="mt-7">
                <h1 className="h-display">
                  <span className="block">AI Systems for</span>
                </h1>
                <h1 className="h-display">
                  <span className="block">Web3 GTM Teams</span>
                </h1>
                <h1 className="h-display">
                  <span className="block serif-italic text-coral mt-1">
                    Tired of Slideware.
                  </span>
                </h1>
              </RevealOnScroll>

              <BlurFade delay={0.42} duration={0.55} yOffset={12}>
                <p className="text-lead mt-9 max-w-2xl [text-wrap:pretty]">
                  I run marketing for Canton Foundation, the blockchain settling
                  $9T per month in institutional flow. Before that, I shipped the
                  DeKoded tour across six Indian cities and convened 600+ builders
                  on the way. The systems on this page are the same ones I deploy
                  inside protocol teams. No decks, no outsourced juniors, no
                  &ldquo;AI-powered&rdquo; vapor.
                </p>
              </BlurFade>

              <BlurFade delay={0.58} duration={0.5} yOffset={10}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book a Strategy Call
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="#systems"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/60 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/85 transition-all duration-300"
                  >
                    See the Systems
                    <ArrowRight size={14} className="rotate-90" />
                  </a>
                </div>
              </BlurFade>
            </div>

            {/* Right, stat triplet */}
            <div className="col-span-12 lg:col-span-4">
              <BlurFade delay={0.3} duration={0.55} yOffset={16}>
                <div className="grid grid-cols-1 gap-3">
                  {/* Canton, dark card with rotating conic border + aurora glow */}
                  <div className="relative rounded-[18px] p-[1.5px] overflow-hidden">
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-[18px]"
                      style={{
                        background:
                          'conic-gradient(from 0deg, #FF6B6B, #D04A4A, #FF6B6B)',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute -inset-6 bg-coral/15 blur-3xl rounded-full pointer-events-none -z-10" />
                    <div className="relative rounded-[16.5px] p-5 bg-ink text-white">
                      <p className="font-mono text-[10px] tabular text-coral font-bold uppercase tracking-[0.18em]">
                        Canton Scale
                      </p>
                      <p className="mt-2 font-black text-3xl text-white tabular tracking-tight leading-none">
                        $<CountUp value={9} />T<span className="text-coral">/mo</span>
                      </p>
                      <p className="mt-1.5 text-[12px] text-white/65 leading-snug">
                        Institutional blockchain flow we market today.
                      </p>
                    </div>
                  </div>

                  {/* Builders, light card with coral glow */}
                  <div className="relative">
                    <div className="absolute -inset-6 bg-coral/10 blur-3xl rounded-full pointer-events-none -z-10" />
                    <div className="relative rounded-[18px] p-5 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55">
                      <p className="font-mono text-[10px] tabular text-coral font-bold uppercase tracking-[0.18em]">
                        Builders Convened
                      </p>
                      <p className="mt-2 font-black text-3xl text-ink tabular tracking-tight leading-none">
                        <CountUp value={600} suffix="+" />
                      </p>
                      <p className="mt-1.5 text-[12px] text-ink-muted leading-snug">
                        Across DeKoded and Build Club rooms since 2024.
                      </p>
                    </div>
                  </div>

                  {/* Cities, light card with coral glow + count-up */}
                  <div className="relative">
                    <div className="absolute -inset-6 bg-coral/10 blur-3xl rounded-full pointer-events-none -z-10" />
                    <div className="relative rounded-[18px] p-5 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55">
                      <p className="font-mono text-[10px] tabular text-coral font-bold uppercase tracking-[0.18em]">
                        Cities Operated
                      </p>
                      <p className="mt-2 font-black text-3xl text-ink tabular tracking-tight leading-none">
                        <CountUp value={8} /><span className="text-coral"> rooms</span>
                      </p>
                      <p className="mt-1.5 text-[12px] text-ink-muted leading-snug">
                        BLR · DEL · BOM · HYD · PNQ · GOI · DXB live · SIN Q3 26
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1.5 Pain Section, "Where Web3 GTM Actually Breaks" ─── */}
      <section className="bg-soft-pink relative overflow-hidden">
        {/* soft coral glow, top-right */}
        <div
          aria-hidden
          className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-coral/10 blur-[110px] pointer-events-none"
        />
        <div className="container-width section-padding relative">
          <RevealOnScroll variant="blur">
            <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 sm:w-16 bg-coral/40" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
                  Before the Stack · What Founders Keep Telling Me
                </span>
                <span className="h-px w-10 sm:w-16 bg-coral/40" />
              </div>
              <h2 className="h-section text-ink tracking-tight mt-7">
                Where Web3 GTM{' '}
                <span className="serif-italic text-coral">actually breaks.</span>
              </h2>
              <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.45] max-w-2xl mx-auto mt-7 [text-wrap:pretty]">
                Four patterns that show up on every founder call before we ever
                talk tooling.
              </p>
            </header>
          </RevealOnScroll>

          <RevealOnScroll variant="slideUp" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
              {painPoints.map((p, i) => {
                const Icon = p.icon
                return (
                  <article
                    key={p.title}
                    className="group relative rounded-[20px] p-6 sm:p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 hover:ring-coral/45 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 grid place-items-center h-11 w-11 rounded-xl bg-coral/10 ring-1 ring-coral/15 text-coral">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-[11px] tabular text-ink-faint">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="h-card text-ink leading-tight [text-wrap:balance]">
                            {p.title}
                          </h3>
                        </div>
                        <p className="mt-2.5 text-[15px] text-ink-secondary leading-[1.55] [text-wrap:pretty]">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade" delay={0.3}>
            <p className="mt-10 text-center text-[13px] text-ink-muted/85 max-w-xl mx-auto serif-italic">
              Recognize one? You&rsquo;re in the right room. The three pillars
              below are how I unstick each.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 3. The 3 Pillars ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end">
            <BlurFade delay={0} className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 02</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE THREE PILLARS</span>
              </div>
              <h2 className="h-section mt-6">
                Three places where AI{' '}
                <span className="serif-italic text-coral">earns its keep.</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.15} className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                Pick the pillar that hurts most. We start there.
              </p>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.Icon
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col rounded-[22px] p-7 h-full bg-white/75 backdrop-blur-md ring-1 ring-rose-mist/55 hover:ring-coral/40 hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.14)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] tabular text-coral font-bold tracking-[0.18em]">
                      PILLAR {p.num}
                    </span>
                    <Icon size={18} className="text-coral/70" />
                  </div>
                  <h3 className="h-card mt-5 [text-wrap:balance]">{p.title}</h3>
                  <p className="mt-3 text-[14.5px] text-ink-muted leading-[1.6] flex-1 [text-wrap:pretty]">
                    {p.blurb}
                  </p>

                  {/* Headline metric, replaces the old tool-chip leak */}
                  <div className="mt-5 rounded-xl bg-coral/8 ring-1 ring-coral/15 px-4 py-3">
                    <div className="flex items-baseline gap-2">
                      <p className="font-black text-coral tabular text-[24px] leading-none tracking-tight">
                        {p.metric}
                      </p>
                      <p className="text-[11.5px] text-ink-muted leading-tight [text-wrap:pretty]">
                        {p.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Capability tags, abstract and brand-safe */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-white ring-1 ring-rose-mist/70 text-[11px] font-semibold text-ink-secondary tabular"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:text-coral transition-colors"
                  >
                    Explore the systems
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. Systems In Production ─── */}
      <section id="systems" className="bg-soft-pink relative overflow-hidden">
        {/* ambient coral haze, top-left */}
        <div
          aria-hidden
          className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-coral/10 blur-[120px] pointer-events-none"
        />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end">
            <BlurFade delay={0} className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 03</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">SYSTEMS IN PRODUCTION</span>
              </div>
              <h2 className="h-section mt-6">
                Six systems.{' '}
                <span className="serif-italic text-coral">
                  All operator-owned.
                </span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.15} className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug [text-wrap:pretty]">
                Inputs you bring. Outcomes that compound. The
                operator&rsquo;s playbook stays under the hood.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-ink-faint tabular">
                six systems · all live · all owned end-to-end
              </div>
            </BlurFade>
          </div>

          <div className="flex flex-col gap-5">
            {systems.map((sys, i) => (
              <SystemRow key={sys.slug} sys={sys} index={i} />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-[11.5px] text-ink-faint tabular max-w-2xl mx-auto text-center">
            <span className="serif-italic">
              The toolchain is fitted to your stack in week one. You hire an
              operator, not a vendor list.
            </span>
          </div>
        </div>
      </section>

      {/* ─── 5. Process ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-10 items-end">
            <BlurFade delay={0} className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 04</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">HOW WE WORK</span>
              </div>
              <h2 className="h-section mt-6">
                Four Steps.{' '}
                <span className="serif-italic text-coral">No mystery.</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.15} className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                Same process I run for protocol teams today.
              </p>
            </BlurFade>
          </div>

          <RevealOnScroll variant="slideUp" delay={0.05}>
            <div className="rounded-[22px] bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 overflow-hidden shadow-[0_10px_28px_-14px_rgba(26,26,46,0.12)]">
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-ink/[0.04] border-b border-ink/8">
                <span className="col-span-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint tabular">#</span>
                <span className="col-span-3 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">Step</span>
                <span className="col-span-5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">What happens</span>
                <span className="col-span-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">Your part</span>
                <span className="col-span-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint text-right">Timeline</span>
              </div>

              <ol>
                {processRows.map((row) => {
                  const Icon = row.Icon
                  return (
                    <li
                      key={row.n}
                      className="grid grid-cols-12 gap-4 px-6 py-6 border-b border-ink/8 last:border-b-0 hover:bg-white/40 transition-colors"
                    >
                      <span className="col-span-2 md:col-span-1 font-mono text-[14px] tabular text-coral font-bold">
                        {row.n}
                      </span>
                      <div className="col-span-10 md:col-span-3 flex items-center gap-2.5">
                        <Icon size={16} className="text-coral/70 shrink-0" />
                        <span className="text-[15px] font-bold text-ink leading-tight">
                          {row.step}
                        </span>
                      </div>
                      <p className="col-span-12 md:col-span-5 text-[14px] text-ink-secondary leading-[1.55] [text-wrap:pretty]">
                        {row.what}
                      </p>
                      <p className="col-span-8 md:col-span-2 text-[13px] text-ink-muted leading-[1.5]">
                        {row.you}
                      </p>
                      <span className="col-span-4 md:col-span-1 text-[12px] font-bold uppercase tracking-[0.1em] text-ink-faint tabular md:text-right">
                        {row.when}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 6. Results / Case Strip ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-10 items-end">
            <BlurFade delay={0} className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 05</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">RECEIPTS</span>
              </div>
              <h2 className="h-section mt-6">
                Numbers from{' '}
                <span className="serif-italic text-coral">rooms I have already run.</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.15} className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                Not projections. Not case studies. Things that happened.
              </p>
            </BlurFade>
          </div>

          {/* Asymmetric bento, hero tile + four supporting tiles. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:auto-rows-[200px]">
            {/* Hero tile, $340K Goa, 2x2 with Mumbai backdrop */}
            <BlurFade delay={0.05} yOffset={18} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <motion.article
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full min-h-[420px] rounded-[24px] overflow-hidden ring-1 ring-rose-mist/55 shadow-[0_18px_50px_-22px_rgba(26,26,46,0.22)]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1666843527155-14ec5f016802?w=1600&q=80&auto=format&fit=crop"
                  alt="Mumbai Marine Drive at dusk"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
                {/* legibility gradient + subtle wash to coral */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/92 via-white/72 to-white/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-transparent" />
                <div className="relative h-full flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-coral bg-coral/12 rounded-full ring-1 ring-coral/25 tabular">
                      Goa Retreat
                    </span>
                    <p className="mt-6 font-black text-[64px] sm:text-[88px] leading-none tabular tracking-tight text-ink">
                      $<CountUp value={340} />K
                    </p>
                    <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.14em] text-coral">
                      Pipeline Shipped
                    </p>
                  </div>
                  <p className="text-[14.5px] text-ink-muted leading-[1.6] max-w-md [text-wrap:pretty]">
                    One launch, end-to-end, in 72 hours. Three-day retreat,
                    every workflow on this page firing at once.
                  </p>
                </div>
              </motion.article>
            </BlurFade>

            {/* Dubai DeKoded, 140+ founders */}
            <BlurFade delay={0.12} yOffset={18}>
              <motion.article
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full min-h-[200px] rounded-[24px] overflow-hidden ring-1 ring-rose-mist/55 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.16)]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1753029111752-f12018752cd3?w=1600&q=80&auto=format&fit=crop"
                  alt="Dubai skyline at night with Burj Khalifa"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/20" />
                <div className="relative h-full flex flex-col justify-end p-5">
                  <p className="font-black text-[40px] leading-none tabular tracking-tight text-white">
                    <CountUp value={140} suffix="+" />
                  </p>
                  <p className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-coral">
                    Founders Convened
                  </p>
                  <p className="mt-2 text-[12.5px] text-white/75 leading-snug [text-wrap:pretty]">
                    Dubai DeKoded, GCC outbound playbook.
                  </p>
                </div>
              </motion.article>
            </BlurFade>

            {/* India tour, 130K, founders roundtable image */}
            <BlurFade delay={0.18} yOffset={18}>
              <motion.article
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full min-h-[200px] rounded-[24px] overflow-hidden ring-1 ring-rose-mist/55 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.16)]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1681949101473-9aea8b928a55?w=1600&q=80&auto=format&fit=crop"
                  alt="Founders at a roundtable discussion"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/50 to-ink/15" />
                <div className="relative h-full flex flex-col justify-end p-5">
                  <p className="font-black text-[40px] leading-none tabular tracking-tight text-white">
                    <CountUp value={130} />K
                  </p>
                  <p className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-coral">
                    Tour Views
                  </p>
                  <p className="mt-2 text-[12.5px] text-white/75 leading-snug [text-wrap:pretty]">
                    H1-2025 India tour, X · LinkedIn · YouTube.
                  </p>
                </div>
              </motion.article>
            </BlurFade>

            {/* Canton, $9T text-only dark tile */}
            <BlurFade delay={0.24} yOffset={18}>
              <motion.article
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full min-h-[200px] rounded-[24px] overflow-hidden bg-ink ring-1 ring-white/10 p-5 flex flex-col justify-between"
              >
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-coral/25 blur-3xl pointer-events-none" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-coral bg-coral/15 rounded-full ring-1 ring-coral/25 tabular">
                    Canton Foundation
                  </span>
                </div>
                <div className="relative">
                  <p className="font-black text-[44px] leading-none tabular tracking-tight text-white">
                    $<CountUp value={9} />T<span className="text-coral">/mo</span>
                  </p>
                  <p className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-coral">
                    Institutional Flow
                  </p>
                  <p className="mt-2 text-[12.5px] text-white/65 leading-snug [text-wrap:pretty]">
                    Editorial marketing, working at infra scale.
                  </p>
                </div>
              </motion.article>
            </BlurFade>

            {/* Build Club, coral-accent text tile */}
            <BlurFade delay={0.3} yOffset={18}>
              <motion.article
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full min-h-[200px] rounded-[24px] overflow-hidden bg-gradient-to-br from-coral/15 via-white/85 to-white/70 ring-1 ring-coral/25 p-5 flex flex-col justify-between"
              >
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-coral/20 blur-3xl pointer-events-none" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-coral rounded-full ring-1 ring-coral/40 tabular">
                    Build Club
                  </span>
                </div>
                <div className="relative">
                  <p className="font-black text-[44px] leading-none tabular tracking-tight text-ink">
                    <CountUp value={600} suffix="+" />
                  </p>
                  <p className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-coral">
                    Builders Convened
                  </p>
                  <p className="mt-2 text-[12.5px] text-ink-muted leading-snug [text-wrap:pretty]">
                    DeKoded plus Build Club rooms, 8 cities since 2024.
                  </p>
                </div>
              </motion.article>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ─── 6.5 Pricing, Two Productized Engagements ─── */}
      <section id="pricing" className="bg-blush relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -left-32 w-[460px] h-[460px] rounded-full bg-coral/10 blur-[120px] pointer-events-none"
        />
        <div className="container-width section-padding relative">
          <RevealOnScroll variant="blur">
            <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 sm:w-16 bg-coral/40" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
                  No. 06.5 · How We Work Together
                </span>
                <span className="h-px w-10 sm:w-16 bg-coral/40" />
              </div>
              <h2 className="h-section text-ink tracking-tight mt-7">
                Two ways in.{' '}
                <span className="serif-italic text-coral">Same operator.</span>
              </h2>
              <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.45] max-w-2xl mx-auto mt-7 [text-wrap:pretty]">
                Public pricing, fixed scope, capped seats. The same way I would
                want it if I were buying.
              </p>
            </header>
          </RevealOnScroll>

          <RevealOnScroll variant="slideUp" stagger={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 max-w-5xl mx-auto">
              {pricingTiers.map((t) => {
                const Icon = t.icon
                return (
                  <article
                    key={t.name}
                    className={cn(
                      'relative rounded-[24px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1',
                      t.highlight
                        ? 'bg-ink text-white ring-2 ring-coral shadow-[0_28px_60px_-18px_rgba(255,107,107,0.5)]'
                        : 'bg-white/80 backdrop-blur-md ring-1 ring-rose-mist/55 shadow-[0_18px_42px_-18px_rgba(26,26,46,0.18)]',
                    )}
                  >
                    {t.highlight && (
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-coral to-transparent"
                      />
                    )}

                    <div className="p-7 sm:p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={cn(
                            'inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase rounded-full',
                            t.highlight
                              ? 'bg-coral/15 text-coral ring-1 ring-coral/30'
                              : 'bg-coral/10 text-coral ring-1 ring-coral/20',
                          )}
                        >
                          <Icon size={12} strokeWidth={2.25} />
                          {t.badge}
                        </span>
                        <span
                          className={cn(
                            'font-mono text-[10px] uppercase tracking-[0.18em] tabular',
                            t.highlight ? 'text-white/45' : 'text-ink-faint',
                          )}
                        >
                          {t.cadence}
                        </span>
                      </div>

                      <h3
                        className={cn(
                          'mt-6 font-black tracking-tight',
                          t.highlight ? 'text-white' : 'text-ink',
                        )}
                        style={{
                          fontSize: 'clamp(1.75rem, 2.2vw, 2.125rem)',
                          letterSpacing: '-0.025em',
                          lineHeight: 1.1,
                        }}
                      >
                        {t.name}
                      </h3>

                      <p
                        className={cn(
                          'mt-3 text-[15px] leading-[1.55] [text-wrap:pretty]',
                          t.highlight ? 'text-white/72' : 'text-ink-secondary',
                        )}
                      >
                        {t.pitch}
                      </p>

                      <div
                        className={cn(
                          'mt-7 pt-6 border-t',
                          t.highlight ? 'border-white/12' : 'hairline',
                        )}
                      >
                        <p
                          className={cn(
                            'font-black tabular tracking-tight',
                            t.highlight ? 'text-white' : 'text-ink',
                          )}
                          style={{
                            fontSize: 'clamp(2rem, 2.6vw, 2.5rem)',
                            lineHeight: 1,
                          }}
                        >
                          {t.price}
                        </p>
                        <p
                          className={cn(
                            'mt-1.5 text-[12px]',
                            t.highlight ? 'text-white/55' : 'text-ink-muted',
                          )}
                        >
                          {t.priceNote}
                        </p>
                      </div>

                      <ul className="mt-6 space-y-2.5 flex-1">
                        {t.inclusions.map((inc) => (
                          <li key={inc} className="flex items-start gap-2.5">
                            <Check
                              size={15}
                              strokeWidth={2.5}
                              className="mt-0.5 shrink-0 text-coral"
                            />
                            <span
                              className={cn(
                                'text-[14px] leading-[1.5]',
                                t.highlight
                                  ? 'text-white/85'
                                  : 'text-ink-secondary',
                              )}
                            >
                              {inc}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={cn(
                          'mt-7 pt-5 border-t flex items-center gap-2',
                          t.highlight ? 'border-white/12' : 'hairline',
                        )}
                      >
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
                        </span>
                        <span
                          className={cn(
                            'font-mono text-[10.5px] uppercase tracking-[0.18em] tabular',
                            t.highlight ? 'text-white/65' : 'text-ink-muted',
                          )}
                        >
                          {t.scarcity}
                        </span>
                      </div>

                      <Link
                        href={t.cta.href}
                        className={cn(
                          'group mt-6 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-full transition-all duration-300',
                          t.highlight
                            ? 'bg-coral text-white shadow-[0_10px_30px_-8px_rgba(255,107,107,0.55)] hover:shadow-[0_14px_40px_-8px_rgba(255,107,107,0.7)] hover:-translate-y-0.5'
                            : 'bg-ink text-white shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:shadow-[0_14px_40px_-8px_rgba(26,26,46,0.6)] hover:-translate-y-0.5',
                        )}
                      >
                        {t.cta.label}
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade" delay={0.3}>
            <p className="mt-10 text-center text-[12.5px] text-ink-muted/85 max-w-2xl mx-auto">
              <span className="serif-italic">
                All engagements scoped after a 30-min strategy call.
              </span>{' '}
              <span className="font-mono text-[11px] tabular text-ink-faint">
                ·
              </span>{' '}
              <span>
                Refund-on-fit clause: if the week-one workshop does not resolve
                scope, you&rsquo;re unbilled.
              </span>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 7. Why Me, Not Them ─── */}
      <section className="bg-ink text-white relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-10 items-end">
            <BlurFade delay={0} className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-white/15" />
                <span className="inline-flex items-center gap-2 px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
                  No. 06 · The Honest Comparison
                </span>
              </div>
              <h2 className="h-section mt-6 text-white">
                Pick the column that fits{' '}
                <span className="serif-italic text-coral">your next quarter.</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.15} className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-white/55 text-lg leading-snug">
                I am not the right answer for everyone. I am the right answer for some.
              </p>
            </BlurFade>
          </div>

          <RevealOnScroll variant="slideUp" delay={0.05}>
            <div className="relative rounded-[22px] bg-white/[0.04] ring-1 ring-white/10 overflow-hidden">
              {/* Muskan column highlight bar, sits behind cells on md+ */}
              <div
                aria-hidden
                className="hidden md:block absolute top-0 bottom-0 pointer-events-none rounded-[18px] bg-coral/[0.08] ring-1 ring-coral/30"
                style={{ left: '25%', width: '25%' }}
              />

              {/* Header row */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/8 relative">
                <span className="col-span-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Criterion
                </span>
                <span className="col-span-3 -mx-2 px-3 py-1.5 rounded-md bg-coral text-white text-[10px] font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center">
                  Muskan
                </span>
                <span className="col-span-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Agency
                </span>
                <span className="col-span-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                  SaaS Tool
                </span>
                <span className="col-span-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Junior Hire
                </span>
              </div>

              <ul className="relative">
                {compareRows.map((row, i) => (
                  <li
                    key={row.criterion}
                    className={cn(
                      'grid grid-cols-12 gap-4 px-6 py-5 border-b hairline border-white/8 last:border-b-0',
                      i % 2 === 1 && 'bg-white/[0.015]',
                    )}
                  >
                    <p className="col-span-12 md:col-span-3 text-[13.5px] font-bold text-white leading-[1.4] [text-wrap:balance]">
                      {row.criterion}
                    </p>
                    <div className="col-span-12 md:col-span-3 flex items-start gap-2 text-[13px] text-coral/95 leading-[1.55] [text-wrap:pretty]">
                      <Check size={14} className="text-coral mt-0.5 shrink-0" aria-hidden />
                      <p>
                        <span className="md:hidden inline-block text-[10px] uppercase tracking-[0.14em] text-coral/70 font-bold mr-2">Muskan ·</span>
                        {row.muskan}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-2 flex items-start gap-2 text-[12.5px] text-white/55 leading-[1.55] [text-wrap:pretty]">
                      <X size={14} className="text-white/30 mt-0.5 shrink-0" aria-hidden />
                      <p>
                        <span className="md:hidden inline-block text-[10px] uppercase tracking-[0.14em] text-white/35 font-bold mr-2">Agency ·</span>
                        {row.agency}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-2 flex items-start gap-2 text-[12.5px] text-white/55 leading-[1.55] [text-wrap:pretty]">
                      <X size={14} className="text-white/30 mt-0.5 shrink-0" aria-hidden />
                      <p>
                        <span className="md:hidden inline-block text-[10px] uppercase tracking-[0.14em] text-white/35 font-bold mr-2">SaaS ·</span>
                        {row.saas}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-2 flex items-start gap-2 text-[12.5px] text-white/55 leading-[1.55] [text-wrap:pretty]">
                      <X size={14} className="text-white/30 mt-0.5 shrink-0" aria-hidden />
                      <p>
                        <span className="md:hidden inline-block text-[10px] uppercase tracking-[0.14em] text-white/35 font-bold mr-2">Junior ·</span>
                        {row.junior}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 8. CTA ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="rounded-[28px] p-10 sm:p-14 bg-ink text-white relative overflow-hidden ring-1 ring-white/8">
            <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-coral/25 blur-[140px] pointer-events-none" />
            <div className="relative grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
                  Step One
                </span>
                <h2 className="h-section mt-5 text-white [text-wrap:balance]">
                  Which workflow would{' '}
                  <span className="serif-italic text-coral">actually move your number?</span>
                </h2>
                <p className="mt-5 text-white/65 text-[16px] max-w-xl leading-[1.6]">
                  45 minutes on a call. We map the bottleneck, scope the first
                  build, and you decide if the next step is worth taking. No deck
                  on the way out.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/book"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-ink bg-white rounded-full shadow-[0_12px_32px_-10px_rgba(255,255,255,0.5)] hover:bg-coral hover:text-white transition-all"
                >
                  Book a Strategy Call
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
