'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { CountUp } from '@/components/ui/count-up'
import { cn } from '@/lib/utils'

/* ═══════════════════════════════════════════════════════
   TIMELINE DATA, real milestones in chronological order
   ═══════════════════════════════════════════════════════ */
interface Milestone {
  date: string
  headline: string
  detail: string
  metric?: string
  loading?: boolean
}

const milestones: Milestone[] = [
  {
    date: 'Dec 2022',
    headline: 'Started Twitter @Muskanjain0401 from 0.',
    detail: 'Opened the account, wrote the first tweet, hit post. No audience. No plan. Just the build.',
  },
  {
    date: 'Sep 2023',
    headline: 'First flight paid by self.',
    detail: 'Solo-funded a work trip. The first real proof the content was compounding into something.',
  },
  {
    date: 'May 2024',
    headline: '10K followers, organic.',
    detail: 'No ads, no follow-for-follow. Just shipping notes from inside the work every day.',
    metric: '10,000 followers',
  },
  {
    date: 'Q3 2024',
    headline: 'Joined Symbiote. DeKoded Bangalore, first event.',
    detail: '120+ people in a room for Web3 GTM teardowns over biryani. The community got a face.',
    metric: '120+ in the room',
  },
  {
    date: 'Q4 2024',
    headline: 'KRNL Labs + KRNL documentary series launched.',
    detail: 'Kicked off the Building KRNL docu series, raw footage from inside a protocol launch.',
    metric: '305K views',
  },
  {
    date: 'H1 2025',
    headline: 'India Tour, 6 cities.',
    detail: 'Bangalore → Delhi → Mumbai → Hyderabad → Pune → Goa. One DeKoded event per city.',
    metric: '130K views',
  },
  {
    date: 'H2 2025',
    headline: 'Canton Foundation, marketing role.',
    detail: 'Joined the $9T/month blockchain network as a core marketing contributor.',
  },
  {
    date: 'Q4 2025',
    headline: 'DeKoded Dubai. Build Club goes international.',
    detail: 'First event outside India. 140+ founders, GCC market entry playbook live on stage.',
    metric: '140+ founders',
  },
  {
    date: 'Q1 2026',
    headline: '@Smallest_AI voice agents work.',
    detail: 'Deep in the voice agent stack, building and shipping inside the Smallest AI ecosystem.',
  },
  {
    date: 'Q3 2026',
    headline: 'Singapore room.',
    detail: 'Loading. Drop a note if you want a seat at the first one.',
    loading: true,
  },
]

/* ═══════════════════════════════════════════════════════
   LIVE LEDGER STATS
   ═══════════════════════════════════════════════════════ */
const ledger = [
  { label: 'Twitter followers', value: 20200, suffix: '', display: '20.2K' },
  { label: 'Posts published', value: 5544, suffix: '', display: '5,544' },
  { label: 'Video views', value: 800, suffix: 'K+', display: '800K+' },
  { label: 'Builders through DeKoded', value: 600, suffix: '+', display: '600+' },
]

/* ═══════════════════════════════════════════════════════
   WALL TAG COLORS
   ═══════════════════════════════════════════════════════ */
const tagClasses: Record<string, string> = {
  Shipped: 'bg-[#2D9D78]/10 text-[#2D9D78] ring-[#2D9D78]/25',
  Win:     'bg-[#F0A500]/12 text-[#A87000] ring-[#F0A500]/25',
  Asking:  'bg-coral/10 text-coral ring-coral/25',
  'Real Talk': 'bg-ink/8 text-ink-muted ring-ink/15',
  IRL:     'bg-[#5B8DEF]/12 text-[#3D5FB5] ring-[#5B8DEF]/25',
}

export default function BuildInPublicPage() {
  return (
    <main className="pt-24">

      {/* ─── Editorial Hero ─── */}
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
          <BlurFade delay={0.05}>
            <div className="flex items-center gap-3">
              <span className="eyebrow">No. 01</span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="section-label">BUILD IN PUBLIC</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h1 className="h-display mt-7">
              <span className="block">build-in-public</span>
              <span className="block serif-italic text-coral mt-1">the receipts.</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="mt-7 max-w-xl text-lead [text-wrap:pretty]">
              what i actually shipped, in the order i shipped it.
            </p>
          </BlurFade>

          <BlurFade delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#timeline"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                See the Timeline
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/#join"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 hover:ring-coral/30 transition-all duration-300"
              >
                Want a seat at the wall? ↗
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── Live Ledger Strip ─── */}
      <section className="bg-ink text-white relative overflow-hidden">
        <div className="container-width py-10 lg:py-12">
          <BlurFade delay={0.05}>
            <p className="section-label text-white/40 mb-8">LIVE LEDGER, CURRENT NUMBERS</p>
          </BlurFade>
          <RevealOnScroll variant="slideUp" stagger={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {ledger.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="text-3xl sm:text-4xl font-black tabular text-white leading-none">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45 font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── Vertical Timeline ─── */}
      <section id="timeline" className="bg-blush relative">
        <div className="container-width section-padding">
          <BlurFade delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow">No. 02</span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="section-label">THE TIMELINE</span>
            </div>
            <h2 className="h-section max-w-xl">
              every milestone,{' '}
              <span className="serif-italic text-coral">in the order it happened.</span>
            </h2>
          </BlurFade>

          <div className="mt-14 max-w-2xl mx-auto relative">
            {/* Vertical rail */}
            <div
              className="absolute left-[11px] top-6 bottom-6 w-[2px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,107,107,0.5) 0%, rgba(255,107,107,0.08) 100%)',
                backgroundImage:
                  'radial-gradient(circle, rgba(255,107,107,0.45) 1.2px, transparent 1.4px)',
                backgroundSize: '2px 12px',
                backgroundRepeat: 'repeat-y',
              }}
            />

            <ol className="space-y-6 pl-10">
              {milestones.map((m, i) => (
                <BlurFade key={m.date} delay={0.05 + i * 0.06}>
                  <li className="relative">
                    {/* Rail dot */}
                    <span
                      className={cn(
                        'absolute -left-10 top-5 h-[14px] w-[14px] rounded-full ring-4 ring-blush z-10',
                        m.loading ? 'bg-white/60 ring-rose-mist/60 border border-dashed border-coral/40' : 'bg-coral',
                      )}
                    />

                    <motion.div
                      whileHover={{ y: -3, rotateZ: 0.4 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        'rounded-[18px] p-6 ring-1 transition-all',
                        m.loading
                          ? 'bg-white/40 backdrop-blur-md ring-rose-mist/35 opacity-60'
                          : 'bg-white/72 backdrop-blur-md ring-rose-mist/55 hover:ring-coral/40 hover:shadow-[0_14px_40px_-14px_rgba(255,107,107,0.22)]',
                      )}
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          {/* Date pill */}
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-ink text-white text-[10px] font-bold uppercase tracking-[0.16em] tabular mb-3">
                            {m.loading && <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-coral/60 animate-pulse" />}
                            {m.date}
                          </span>
                          <h3 className="h-card leading-snug [text-wrap:balance]">{m.headline}</h3>
                          <p className="mt-2 text-[14.5px] text-ink-muted leading-[1.55] [text-wrap:pretty]">
                            {m.detail}
                          </p>
                        </div>
                        {m.metric && (
                          <span className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full bg-coral/12 text-coral ring-1 ring-coral/25 text-xs font-bold tabular whitespace-nowrap">
                            {m.metric}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </li>
                </BlurFade>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── The Wall This Week ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <BlurFade delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow">No. 03</span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="section-label">THE WALL THIS WEEK</span>
            </div>
            <h2 className="h-section">
              what the room is{' '}
              <span className="serif-italic text-coral">saying.</span>
            </h2>
            <p className="mt-4 text-lead max-w-lg [text-wrap:pretty]">
              live posts from inside the build club. receipts, questions, wins.
            </p>
          </BlurFade>

          <RevealOnScroll
            variant="slideUp"
            stagger={0.08}
            className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {siteConfig.community.wall.map((post) => (
              <motion.div
                key={post.handle + post.time}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid rounded-[18px] p-6 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 hover:ring-coral/40 hover:shadow-[0_14px_40px_-14px_rgba(255,107,107,0.2)] transition-all"
              >
                {/* Author row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-coral to-coral-deep grid place-items-center text-white text-sm font-bold ring-2 ring-white shrink-0 tabular">
                      {post.author[0].toUpperCase()}
                    </div>
                    <div className="leading-tight min-w-0">
                      <p className="text-sm font-semibold text-ink truncate">{post.author}</p>
                      <p className="text-[11px] text-ink-faint tabular truncate">{post.handle}</p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ring-1',
                      tagClasses[post.tag] ?? 'bg-ink/8 text-ink-muted ring-ink/15',
                    )}
                  >
                    {post.tag}
                  </span>
                </div>

                <p className="text-[14.5px] text-ink leading-[1.6] [text-wrap:pretty]">{post.body}</p>

                <p className="mt-4 text-[11px] text-ink-faint tabular">{post.time} ago</p>
              </motion.div>
            ))}
          </RevealOnScroll>
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
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20 tabular">
              <Sparkles size={11} />
              YOUR TURN
            </span>
            <h2 className="h-section mt-6 max-w-3xl mx-auto">
              want a seat at{' '}
              <span className="serif-italic text-coral">the wall?</span>
            </h2>
            <p className="mt-7 max-w-xl mx-auto serif-italic text-ink-muted/90 text-lg leading-snug [text-wrap:pretty]">
              the wall gets warmer when you post in it. WIPs welcome. half-bugs too.
            </p>
            <Link
              href="/#join"
              className="group mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Invite
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="mt-5 text-xs text-ink-muted tabular">
              invite-only · free · lowercase by design
            </p>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}