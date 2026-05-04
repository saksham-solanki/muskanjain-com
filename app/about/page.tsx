'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, MapPin } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { CountUp } from '@/components/ui/count-up'

// ─── Page-scoped data ────────────────────────────────────────────────────────

const timeline = [
  {
    year: '2023',
    title: 'Nakamoto Hub · CryptoFemale',
    location: 'BLR',
    text: 'First foothold in crypto at 17. Community-first, no playbook. Learned that the room matters as much as the protocol — hosted strangers, made them builders.',
  },
  {
    year: '2024',
    title: 'Genzio Media · Symbiote',
    location: 'DEL / BOM',
    text: 'Inside Web3 marketing for the first time. The mismatch between what projects needed and what agencies sold was obvious within weeks. Kept notes. Quietly planned.',
  },
  {
    year: '2024–2025',
    title: 'KRNL Labs → DeKoded Tour',
    location: '6 Indian cities',
    text: 'Ran DeKoded across Bangalore, Delhi, Mumbai, Hyderabad, Pune, and Goa. 600+ builders showed up. One Goa retreat shipped a full token launch — $340K pipeline in 72 hours. The wall idea was born.',
  },
  {
    year: '2025–2026',
    title: 'Canton Foundation',
    location: 'DXB / Global',
    text: 'Marketing the blockchain running $9T/month in institutional flow. Proved that soft-edge, editorial-first positioning works for enterprise infrastructure — if you actually understand the builder.',
  },
  {
    year: '2026',
    title: 'The Build Club, official',
    location: 'DXB · SIN loading',
    text: 'DXB cohort live. Singapore locked for Q3 2026. Voice agents shipping at @Smallest_AI. The room finally has a permanent address.',
  },
]

const beliefs = [
  {
    title: 'Builders, not talkers',
    body: 'Show your work, not your LinkedIn. The people who say the least often ship the most.',
    num: '01',
  },
  {
    title: 'Voice matters',
    body: 'as much as the code does. The best protocol in the world dies in a market that can\'t hear it.',
    num: '02',
  },
  {
    title: 'AI isn\'t replacing marketers',
    body: 'it\'s replacing bad marketing. The ones who understand the model will outpace everyone else in 18 months.',
    num: '03',
  },
  {
    title: 'Web3 deserves better',
    body: 'than dark mode templates and "Launch App" CTAs. This ecosystem earns serious storytelling.',
    num: '04',
  },
  {
    title: 'Nothing leaves the room',
    body: 'No recordings, no clout farming, no decks. What gets built here stays safe so people actually speak.',
    num: '05',
  },
]

const stats = [
  { value: 20, suffix: 'K', label: 'Twitter followers', note: '@Muskanjain0401' },
  { value: 8, suffix: '', label: 'cities hosted', note: 'BLR→DEL→BOM→HYD→PNQ→GOI→DXB→SIN' },
  { value: 600, suffix: '+', label: 'builders convened', note: 'across DeKoded + Build Club' },
  { value: 800, suffix: 'K+', label: 'video views', note: 'across content & event clips' },
  { value: 9, suffix: 'T/mo', label: 'Canton scale', note: 'institutional blockchain flow' },
]

const cityData = [
  { code: 'BLR', name: 'Bangalore', blurb: 'Web3 GTM teardowns over biryani. 120+ in the room.', status: 'shipped' },
  { code: 'DEL', name: 'Delhi', blurb: 'Pre-Devcon meetup. 8 protocols pitched their GTM live.', status: 'shipped' },
  { code: 'BOM', name: 'Mumbai', blurb: 'Outbound clinic — built and shipped a cold sequence on stage.', status: 'shipped' },
  { code: 'HYD', name: 'Hyderabad', blurb: 'Content engine workshop. One founder story, 30 assets.', status: 'shipped' },
  { code: 'PNQ', name: 'Pune', blurb: 'Founder dinner. What GTM gets wrong, in seven slides.', status: 'shipped' },
  { code: 'GOI', name: 'Goa', blurb: 'Three-day retreat. One launch, $340K pipeline shipped.', status: 'shipped' },
  { code: 'DXB', name: 'Dubai', blurb: 'First international room. GCC outbound playbook live.', status: 'live' },
  { code: 'SIN', name: 'Singapore', blurb: 'Loading. Waitlist open. Q3 2026.', status: 'soon' },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="pt-24">

      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}
      >
        <div className="absolute top-[18%] right-[16%] w-[340px] h-[340px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">

            {/* Left — copy */}
            <div className="col-span-12 lg:col-span-7">
              <BlurFade delay={0} duration={0.5}>
                <div className="flex items-center gap-3">
                  <span className="eyebrow">No. 01</span>
                  <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                  <span className="section-label">THE HOST</span>
                </div>
              </BlurFade>

              <RevealOnScroll variant="slideUp" stagger={0.12} delay={0.1} className="mt-7">
                <h1 className="h-display">
                  <span className="block">Hi, I&apos;m</span>
                </h1>
                <h1 className="h-display">
                  <span className="block serif-italic text-coral mt-1">Muskan.</span>
                </h1>
                <h1 className="h-display">
                  <span className="block mt-1">I host the room.</span>
                </h1>
              </RevealOnScroll>

              <BlurFade delay={0.42} duration={0.55} yOffset={12}>
                <p className="text-lead mt-9 max-w-xl [text-wrap:pretty]">
                  20. Been in crypto since 17. Ran DeKoded across 6 cities. Now I keep a soft-edged
                  corner of the internet warm so AI&nbsp;× Web3 builders can show up and ship together.
                </p>
              </BlurFade>

              <BlurFade delay={0.58} duration={0.5} yOffset={10}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href="/#join"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Sparkles size={15} className="text-coral" />
                    Join the Club
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="https://twitter.com/Muskanjain0401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 transition-all duration-300"
                  >
                    Read the Threads ↗
                  </a>
                </div>
              </BlurFade>
            </div>

            {/* Right — avatar card */}
            <div className="col-span-12 lg:col-span-5">
              <BlurFade delay={0.3} duration={0.6} yOffset={20}>
                <div className="relative max-w-sm mx-auto">
                  <div className="relative aspect-square rounded-[28px] bg-gradient-to-br from-coral/40 via-coral/55 to-[#9BB7DA]/60 ring-1 ring-white/70 shadow-[0_24px_60px_-16px_rgba(255,107,107,0.35)] overflow-hidden grain">
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="text-[12rem] font-black text-white/85 leading-none tracking-tighter select-none">M</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-3 px-3 py-1.5 bg-white/85 backdrop-blur-md rounded-full ring-1 ring-rose-mist/60 shadow-md">
                    <p className="text-[11px] font-semibold text-ink tabular flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                      Based in Dubai · Everywhere on Tuesdays
                    </p>
                  </div>
                  <p className="mt-7 serif-italic text-ink-muted/85 text-base text-center leading-snug">
                    Portrait, pending. Words doing the work for now.
                  </p>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ─── */}
      <section className="bg-ink relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-coral/8 blur-[120px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <BlurFade delay={0} duration={0.5}>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <span className="h-px w-12 bg-white/10" />
              <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
                BY THE NUMBERS
              </span>
              <span className="h-px w-12 bg-white/10" />
            </div>
          </BlurFade>

          <RevealOnScroll variant="slideUp" stagger={0.1} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center text-center px-6 py-8 bg-midnight-card hover:bg-midnight-elevated transition-colors duration-300 group"
              >
                <p className="font-black text-3xl sm:text-4xl text-white tracking-tight tabular leading-none">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[11px] font-bold tracking-[0.14em] uppercase text-coral/80">
                  {s.label}
                </p>
                <p className="mt-1.5 text-[10px] text-white/35 font-mono leading-snug max-w-[9rem]">
                  {s.note}
                </p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── The Journey timeline ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-14 items-end">
            <BlurFade delay={0} className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 02</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE JOURNEY</span>
              </div>
              <h2 className="h-section mt-6">
                Three years.{' '}
                <span className="serif-italic text-coral">Five companies.</span>{' '}
                Six cities. One room.
              </h2>
            </BlurFade>
            <BlurFade delay={0.15} className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                I don&apos;t do roadmap pages. This is how I actually got here.
              </p>
            </BlurFade>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical spine */}
            <div className="absolute left-[11px] sm:left-[13px] top-4 bottom-4 w-px bg-gradient-to-b from-coral/60 via-coral/30 to-coral/10" />

            <ol className="space-y-0">
              {timeline.map((item, i) => (
                <RevealOnScroll key={item.year} variant="slideFromLeft" delay={i * 0.08}>
                  <li className="relative pl-10 sm:pl-14 pb-12 last:pb-0 group">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blush ring-2 ring-coral flex items-center justify-center transition-all duration-300 group-hover:bg-coral group-hover:scale-110 shadow-[0_0_0_4px_#FFF0F0]"
                    >
                      <span className="text-[8px] font-bold text-coral group-hover:text-white transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="rounded-[18px] p-5 sm:p-6 bg-white/70 backdrop-blur-sm ring-1 ring-rose-mist/60 shadow-[0_4px_20px_-8px_rgba(26,26,46,0.10)] hover:shadow-[0_8px_32px_-12px_rgba(255,107,107,0.20)] hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="font-mono text-[10px] text-coral font-bold tracking-[0.18em] uppercase tabular bg-coral/8 px-2 py-0.5 rounded-full">
                          {item.year}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[10px] text-ink-faint tracking-wide">
                          <MapPin size={9} />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-[15px] font-bold text-ink tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-ink-secondary leading-[1.6] [text-wrap:pretty]">
                        {item.text}
                      </p>
                    </div>
                  </li>
                </RevealOnScroll>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── Right Now / Building ─── */}
      <section className="bg-cream-pink relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-coral/6 blur-[80px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <BlurFade delay={0} duration={0.5}>
            <div className="flex items-center gap-3 mb-10">
              <span className="eyebrow">No. 03</span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="section-label">RIGHT NOW</span>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl">

            {/* Pulse card 1 — @Smallest_AI */}
            <RevealOnScroll variant="scaleIn" delay={0.05}>
              <div className="rounded-[22px] p-6 sm:p-7 bg-ink text-white ring-1 ring-white/8 shadow-[0_12px_40px_-16px_rgba(26,26,46,0.5)] hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-coral/8 blur-[60px] pointer-events-none rounded-full" />
                <div className="flex items-start justify-between mb-5 relative">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-coral animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-coral/80">SHIPPING NOW</span>
                  </div>
                  <Zap size={14} className="text-coral/60" />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight mb-3 relative">
                  Voice agents{' '}
                  <span className="serif-italic text-coral">for real people</span>
                </h3>
                <p className="text-[14px] text-white/65 leading-[1.65] mb-5">
                  Building at{' '}
                  <a
                    href="https://twitter.com/Smallest_AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral/90 font-semibold hover:text-coral transition-colors"
                  >
                    @Smallest_AI
                  </a>
                  . Voice agents that actually sound human — not the robocall version. Deployed in production flows, not demos.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Voice AI', 'Agents', 'Infra'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold tracking-wide rounded-full bg-white/8 text-white/55 ring-1 ring-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Pulse card 2 — Build Club Singapore */}
            <RevealOnScroll variant="scaleIn" delay={0.15}>
              <div className="rounded-[22px] p-6 sm:p-7 bg-white/80 backdrop-blur-sm ring-1 ring-rose-mist/70 shadow-[0_12px_40px_-16px_rgba(26,26,46,0.12)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-coral/8 blur-[50px] pointer-events-none rounded-full" />
                <div className="flex items-start justify-between mb-5 relative">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#2D9D78] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2D9D78]/80">LOADING</span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-faint tabular">Q3 2026</span>
                </div>
                <h3 className="text-xl font-bold text-ink leading-tight mb-3 relative">
                  Build Club{' '}
                  <span className="serif-italic text-coral">Singapore</span>
                </h3>
                <p className="text-[14px] text-ink-secondary leading-[1.65] mb-5">
                  The room moves to Singapore. First cohort launching Q3 2026. If you&apos;re building at the AI&nbsp;× Web3 edge in SEA — drop your name on the waitlist.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Singapore', 'SEA', 'IRL', 'Q3 2026'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold tracking-wide rounded-full bg-coral/8 text-coral ring-1 ring-coral/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── Beliefs / House Rules ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end">
            <BlurFade delay={0} className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 04</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">WHAT I BELIEVE</span>
              </div>
              <h2 className="h-section mt-6">
                House rules,{' '}
                <span className="serif-italic text-coral">basically.</span>
              </h2>
            </BlurFade>
          </div>

          <RevealOnScroll variant="slideUp" stagger={0.09} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl">
            {beliefs.map((belief) => (
              <div
                key={belief.num}
                className="relative rounded-[20px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.14)] group hover:shadow-[0_16px_40px_-12px_rgba(255,107,107,0.18)] hover:-translate-y-1 hover:ring-coral/30 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral/0 to-coral/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]" />
                <div className="relative">
                  <span className="font-mono text-[10px] tabular text-ink-faint">RULE NO.{belief.num}</span>
                  <h3 className="h-card mt-3 group-hover:text-coral transition-colors duration-300">
                    {belief.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink-muted leading-[1.55]">
                    {belief.body}
                  </p>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── Cities map strip ─── */}
      <section className="bg-midnight text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-coral/10 blur-[140px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <BlurFade delay={0} duration={0.5}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-12 bg-white/10" />
                <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
                  CITIES OPENED
                </span>
                <span className="h-px w-12 bg-white/10" />
              </div>
              <h2 className="h-section mt-6 text-white">
                I&apos;ve hosted in{' '}
                <span className="serif-italic text-coral">eight rooms</span>{' '}
                across the world.
              </h2>
              <p className="mt-4 serif-italic text-white/55 max-w-md mx-auto text-base leading-snug">
                Each one a tiny ecosystem. You walk in a stranger and walk out with collaborators.
              </p>
            </div>
          </BlurFade>

          <RevealOnScroll variant="scaleIn" stagger={0.06} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cityData.map((city) => (
              <div
                key={city.code}
                className={`group relative rounded-2xl p-4 ring-1 transition-all duration-300 hover:-translate-y-0.5 ${
                  city.status === 'live'
                    ? 'bg-coral/10 ring-coral/30 hover:bg-coral/15'
                    : city.status === 'soon'
                    ? 'bg-white/[0.03] ring-white/10 hover:bg-white/[0.06]'
                    : 'bg-white/[0.04] ring-white/8 hover:bg-white/[0.07]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-bold tabular tracking-wide text-white/80">
                    {city.code}
                  </span>
                  {city.status === 'live' && (
                    <span className="flex items-center gap-1 text-[9px] font-bold tracking-wide uppercase text-coral">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                      LIVE
                    </span>
                  )}
                  {city.status === 'soon' && (
                    <span className="text-[9px] font-bold tracking-wide uppercase text-white/30">SOON</span>
                  )}
                  {city.status === 'shipped' && (
                    <span className="text-[9px] font-bold tracking-wide uppercase text-white/25">DONE</span>
                  )}
                </div>
                <p className="text-[11px] text-white/45 leading-snug group-hover:text-white/60 transition-colors">
                  {city.blurb}
                </p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)' }}
      >
        <div className="container-width section-padding relative text-center">
          <BlurFade delay={0} duration={0.5}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20">
              <Sparkles size={11} />
              THE DOOR IS OPEN TODAY
            </span>
          </BlurFade>

          <RevealOnScroll variant="slideUp" stagger={0.12} delay={0.1}>
            <h2 className="h-section mt-6 max-w-3xl mx-auto">
              Want to come{' '}
              <span className="serif-italic text-coral">build</span>{' '}
              with us?
            </h2>
            <p className="text-lead mt-4 max-w-lg mx-auto text-ink-muted [text-wrap:pretty]">
              DXB is live. Singapore loads Q3 2026. If you ship AI or Web3 and want a room
              where work happens — the door&apos;s open.
            </p>
          </RevealOnScroll>

          <BlurFade delay={0.36} duration={0.45} yOffset={8}>
            <Link
              href="/#join"
              className="group mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Invite
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </BlurFade>
        </div>
      </section>

    </main>
  )
}