'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Radio } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp, stagger } from '@/lib/motion'

type Status = 'shipped' | 'wip' | 'planned'

interface BuildEntry {
  author: string
  handle: string
  title: string
  status: Status
  tools: string[]
  date: string
  note?: string
  gradient: string
}

const entries: BuildEntry[] = [
  {
    author: 'Muskan',
    handle: '@muskanjain0401',
    title: 'Building muskanjain.com from scratch',
    status: 'shipped',
    tools: ['next.js', 'tailwind', 'vercel'],
    date: 'Apr 24',
    note: 'Editorial, soft edges, on purpose. Zero templates touched.',
    gradient: 'from-coral to-coral-deep',
  },
  {
    author: 'Aarav K.',
    handle: '@aarav_builds',
    title: 'First wallet conversion overnight on pSEO pages',
    status: 'shipped',
    tools: ['next.js', 'dune', 'vercel'],
    date: 'Apr 25',
    note: 'Long-tail Web3 queries are wide open. Canton thesis holding up.',
    gradient: 'from-[#F0A500] to-[#A87000]',
  },
  {
    author: 'Kavya T.',
    handle: '@kavyatarun',
    title: 'Multi-agent content pipeline, weekend build',
    status: 'shipped',
    tools: ['claude-code', 'n8n', 'notion'],
    date: 'Apr 26',
    note: '14 posts queued, all on-brand. Dropping the prompts on Friday.',
    gradient: 'from-coral to-[#A8C9E8]',
  },
  {
    author: 'Noor',
    handle: '@noor_codes',
    title: 'Open-sourcing the wallet attribution lib',
    status: 'wip',
    tools: ['typescript', 'cookie3', 'spindl'],
    date: 'Apr 28',
    note: 'Finally connecting ad spend to first tx. MVP by Sunday.',
    gradient: 'from-coral-deep to-[#1A1A2E]',
  },
  {
    author: 'Muskan',
    handle: '@muskanjain0401',
    title: 'Shipping the AI citation tracker',
    status: 'wip',
    tools: ['claude-code', 'next.js', 'supabase'],
    date: 'Apr 30',
    note: 'Who\'s citing whom. A leaderboard for the post-search internet.',
    gradient: 'from-coral to-coral-deep',
  },
  {
    author: 'Priya S.',
    handle: '@priyaaaa',
    title: 'Sybil-resistant airdrop sim, draft one',
    status: 'wip',
    tools: ['python', 'dune', 'nansen'],
    date: 'May 1',
    note: 'Modeling 70% bot leak before token goes live. Need eyes on it.',
    gradient: 'from-[#5B8DEF] to-[#3D5FB5]',
  },
  {
    author: 'Muskan',
    handle: '@muskanjain0401',
    title: 'Setting up programmatic SEO for a DeFi protocol',
    status: 'planned',
    tools: ['next.js', 'vercel'],
    date: 'May 2',
    gradient: 'from-coral to-coral-deep',
  },
  {
    author: 'Rohan M.',
    handle: '@rohan_eth',
    title: 'Pre-TGE sanity check for an L2 launch',
    status: 'planned',
    tools: ['galxe', 'zealy', 'cookie3'],
    date: 'May 3',
    note: 'Last launch lost 70% to bots. Not doing that again.',
    gradient: 'from-[#2D9D78] to-[#1A6850]',
  },
  {
    author: 'Muskan',
    handle: '@muskanjain0401',
    title: 'First AEO audit for a Web3 client',
    status: 'planned',
    tools: ['claude', 'perplexity'],
    date: 'May 5',
    gradient: 'from-coral to-coral-deep',
  },
  {
    author: 'Arjun V.',
    handle: '@arjunvibes',
    title: 'Community ops bot for an RWA protocol',
    status: 'planned',
    tools: ['discord.js', 'claude', 'supabase'],
    date: 'May 7',
    note: 'The DXB meetup found the use case. Shipping in public.',
    gradient: 'from-coral to-[#F0A500]',
  },
  {
    author: 'Muskan',
    handle: '@muskanjain0401',
    title: 'The content system that writes 50+ posts per month',
    status: 'wip',
    tools: ['claude-code', 'n8n'],
    date: 'May 8',
    gradient: 'from-coral to-coral-deep',
  },
  {
    author: 'Kavya T.',
    handle: '@kavyatarun',
    title: 'Open-sourcing the writing-pod prompts',
    status: 'planned',
    tools: ['github', 'claude', 'notion'],
    date: 'May 12',
    note: 'So the Content Guild can fork from day one.',
    gradient: 'from-coral to-[#A8C9E8]',
  },
  {
    author: 'Aarav K.',
    handle: '@aarav_builds',
    title: 'On-chain retention dashboard, v0',
    status: 'planned',
    tools: ['dune', 'nansen', 'vercel'],
    date: 'May 15',
    note: 'Cohort math nobody else is doing. Thursday reads, locked in.',
    gradient: 'from-[#F0A500] to-[#A87000]',
  },
]

const statusConfig: Record<Status, { label: string; classes: string }> = {
  shipped: {
    label: 'Shipped',
    classes: 'bg-[#2D9D78]/10 text-[#2D9D78] ring-[#2D9D78]/20',
  },
  wip: {
    label: 'WIP',
    classes: 'bg-[#F0A500]/15 text-[#A87000] ring-[#F0A500]/25',
  },
  planned: {
    label: 'Planned',
    classes: 'bg-ink/8 text-ink-muted ring-ink/15',
  },
}

/* ═══════════════════════════════════════════════════════════════
   TICKER — running activity strip on dark
   ═══════════════════════════════════════════════════════════════ */
function TickerStrip() {
  const items = [
    { tag: 'SHIPPED', text: 'Muskan · muskanjain.com live' },
    { tag: 'SHIPPED', text: 'Aarav · first wallet conversion overnight' },
    { tag: 'WIP', text: 'Noor · wallet attribution lib, MVP Sunday' },
    { tag: 'WIP', text: 'Priya · sybil-resistant airdrop sim' },
    { tag: 'SHIPPED', text: 'Kavya · multi-agent content pipeline' },
    { tag: 'PLANNED', text: 'Rohan · pre-TGE sanity check, L2' },
    { tag: 'PLANNED', text: 'Arjun · community ops bot, RWA' },
    { tag: 'WIP', text: 'Muskan · AI citation tracker' },
  ]
  const doubled = [...items, ...items]
  const tagColor: Record<string, string> = {
    SHIPPED: 'text-[#2D9D78]',
    WIP: 'text-[#F0A500]',
    PLANNED: 'text-white/50',
  }

  return (
    <section className="relative bg-ink text-white/80 overflow-hidden border-y border-white/5">
      <div
        className="flex items-center py-3"
        style={{ animation: 'marquee 60s linear infinite', willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-5 flex items-center gap-2.5 text-xs shrink-0 tabular"
          >
            <span
              className={cn(
                'text-[10px] font-bold uppercase tracking-[0.18em]',
                tagColor[item.tag] ?? 'text-white',
              )}
            >
              {item.tag}
            </span>
            <span className="text-white/70">{item.text}</span>
            <span className="text-white/20">◆</span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default function BuildInPublicPage() {
  return (
    <main className="pt-24">
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{
          background:
            'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)',
        }}
      >
        <div className="absolute top-[14%] right-[12%] w-[360px] h-[360px] rounded-full bg-[#FFE6D2]/80 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[-6rem] left-[-10rem] w-[480px] h-[480px] rounded-full bg-coral/15 blur-[140px] pointer-events-none" />

        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left gutter — section number + manifesto note */}
            <aside className="hidden lg:block lg:col-span-2 pt-6">
              <p className="serif-italic text-ink-muted/80 text-base mt-2 leading-snug">
                A public log. Everyone&apos;s receipts, in one place.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-coral/80 tabular uppercase tracking-[0.18em] font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                Live
              </div>
            </aside>

            {/* Center — main headline */}
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 01</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE BUILD FEED</span>
              </div>

              <h1 className="h-display mt-7">
                <span className="block">Everything We Ship,</span>
                <span className="block serif-italic text-coral mt-1">
                  in public.
                </span>
                <span className="block mt-1">Unpolished. On purpose.</span>
              </h1>

              <p className="mt-9 max-w-xl serif-italic text-ink-muted/90 text-lg sm:text-xl leading-snug [text-wrap:pretty]">
                No launch threads, no glossy demos. Just the room&apos;s actual
                work — WIPs, half-bugs, shipped wins — posted as it happens.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="#feed"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Radio size={15} className="text-coral" />
                  Open the Feed
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/#join"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 hover:ring-coral/30 transition-all duration-300"
                >
                  Ship with Us ↗
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-x-6 max-w-md border-t hairline pt-5 tabular">
                <Stat label="Shipped" value="5" />
                <Stat label="In Flight" value="4" />
                <Stat label="Planned" value="4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ticker ─── */}
      <TickerStrip />

      {/* ─── Feed timeline ─── */}
      <section id="feed" className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 02</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE LOG</span>
              </div>
              <h2 className="h-section mt-6">
                What the room is{' '}
                <span className="serif-italic text-coral">cooking</span> this
                week.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                One feed. Many builders. Zero polish — that&apos;s the whole
                point.
              </p>
              <p className="mt-3 text-xs text-ink-faint tabular">
                Apr 24 → May 15 · {entries.length} entries
              </p>
            </div>
          </div>

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative max-w-3xl mx-auto pl-8 sm:pl-12"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,107,107,0.45) 1.2px, transparent 1.4px)',
              backgroundSize: '2px 10px',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'left 8px top 8px',
            }}
          >
            {entries.map((entry, i) => {
              const status = statusConfig[entry.status]
              return (
                <motion.li
                  key={`${entry.author}-${entry.title}`}
                  variants={fadeUp}
                  className="relative pb-8 last:pb-0"
                >
                  {/* Rail dot */}
                  <span className="absolute -left-8 sm:-left-12 top-6 h-3 w-3 rounded-full bg-coral ring-4 ring-blush" />

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="group rounded-[18px] p-6 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 hover:ring-coral/40 transition-all"
                  >
                    {/* Header row */}
                    <header className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={cn(
                            'h-10 w-10 shrink-0 rounded-full bg-gradient-to-br grid place-items-center text-white text-sm font-bold ring-2 ring-white tabular',
                            entry.gradient,
                          )}
                        >
                          {entry.author[0].toUpperCase()}
                        </div>
                        <div className="leading-tight min-w-0">
                          <p className="text-sm font-semibold text-ink truncate">
                            {entry.author}
                          </p>
                          <p className="text-[11px] text-ink-faint tabular truncate">
                            {entry.handle}
                          </p>
                        </div>
                      </div>
                      <span
                        className={cn(
                          'shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ring-1',
                          status.classes,
                        )}
                      >
                        {status.label}
                      </span>
                    </header>

                    {/* Meta line */}
                    <div className="flex items-center gap-2 font-mono text-[10px] tabular text-ink-faint uppercase tracking-[0.18em]">
                      <span className="text-coral font-bold">{entry.date}</span>
                      <span className="text-ink-faint/50">·</span>
                      <span>ENTRY NO.{String(i + 1).padStart(2, '0')}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-base sm:text-lg font-bold text-ink leading-snug">
                      {entry.title}
                    </h3>

                    {/* Optional note */}
                    {entry.note && (
                      <p className="mt-3 serif-italic text-ink-muted text-[15px] leading-snug [text-wrap:pretty]">
                        {entry.note}
                      </p>
                    )}

                    {/* Tool pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {entry.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 rounded-full bg-coral-muted text-coral text-xs font-mono tabular"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{
          background:
            'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)',
        }}
      >
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-coral/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-white/35 blur-[120px] pointer-events-none" />

        <div className="container-width section-padding relative text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20 tabular">
            <Sparkles size={11} />
            YOUR TURN
          </span>
          <h2 className="h-section mt-6 max-w-3xl mx-auto">
            Ship something{' '}
            <span className="serif-italic text-coral">next.</span>
          </h2>
          <p className="mt-7 max-w-xl mx-auto serif-italic text-ink-muted/90 text-lg leading-snug [text-wrap:pretty]">
            The feed gets warmer when you post in it. WIPs are welcome. Half-bugs too.
          </p>
          <Link
            href="/#join"
            className="group mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Request Invite
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <p className="mt-5 text-xs text-ink-muted tabular">
            invite-only · free · lowercase by design
          </p>
        </div>
      </section>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-faint font-semibold">
        {label}
      </span>
      <span className="text-2xl font-black text-ink mt-0.5 tabular">{value}</span>
    </div>
  )
}
