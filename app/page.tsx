'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  MapPin,
  Calendar,
  MessageCircle,
  Clock,
} from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { TextRotate } from '@/components/ui/text-rotate'
import { CountUp } from '@/components/ui/count-up'
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { MountainScene } from '@/components/ui/mountain-scene'
import { FloatingPills } from '@/components/ui/floating-pills'
import { cn } from '@/lib/utils'
import { heroStagger, fadeUp } from '@/lib/motion'

const iconMap: Record<string, React.ElementType> = {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
}

/* ─── Decorative SVG annotations ──────────────────────────── */
function ScribbleUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 16"
      className={cn('absolute left-0 -bottom-3 w-full h-3.5', className)}
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M3 10 Q 50 2 105 8 T 217 6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5 13 Q 60 6 110 11 T 215 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  )
}

function CurlyArrow({
  className,
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 90 70"
      className={cn(className, flip && '-scale-x-100')}
      aria-hidden
    >
      <path
        d="M6 10 C 22 8, 56 8, 70 26 C 80 40, 70 54, 50 56"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M44 50 L 50 56 L 56 48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Asterisk({
  size = 12,
  className,
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        d="M12 2 V22 M3 7 L21 17 M3 17 L21 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO  — asymmetric editorial composition
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const community = siteConfig.community

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 grain">
      {/* Pastel sky gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(170deg, #B6CCE5 0%, #E5C5BC 25%, #FFD0C4 50%, #FFE0DA 78%, #FFEFEB 100%)',
        }}
      />
      {/* Sun */}
      <div className="absolute top-[14%] right-[12%] w-[360px] h-[360px] rounded-full bg-[#FFE6D2]/80 blur-[110px] -z-10 pointer-events-none" />
      {/* coral haze */}
      <div className="absolute bottom-[-6rem] left-[-10rem] w-[520px] h-[520px] rounded-full bg-coral/15 blur-[150px] -z-10 pointer-events-none" />

      <div className="container-width relative z-10 py-20 sm:py-28">
        {/* 12-col asymmetric grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left gutter — section number + manifesto note */}
          <motion.aside
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="hidden lg:block lg:col-span-2 pt-6"
          >
            <p className="eyebrow text-ink-muted">No. 01 / community</p>
            <p className="serif-italic text-ink-muted/80 text-base mt-6 leading-snug">
              a tiny corner of the internet, kept warm on purpose.
            </p>
            <div className="mt-6 flex items-center gap-1.5">
              <Asterisk size={9} className="text-coral/70" />
              <Asterisk size={13} className="text-coral" />
              <Asterisk size={8} className="text-coral/60" />
            </div>
          </motion.aside>

          {/* Center — main headline */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-7"
          >
            {/* live pill */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-coral bg-white/55 backdrop-blur-md rounded-full ring-1 ring-coral/15 shadow-[0_4px_20px_-8px_rgba(255,107,107,0.3)] tabular">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-70 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
                </span>
                {community.pulse.members.toLocaleString()} builders inside
                <span className="text-coral/40">·</span>
                live now
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="display-tight mt-8 text-ink"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
              }}
            >
              <span className="block">where ai × web3</span>
              <span className="block relative leading-[0.98] mt-1">
                <span className="serif-italic text-coral pr-3 inline-block">
                  <TextRotate
                    texts={community.rotatingMembers as unknown as string[]}
                    rotationInterval={2400}
                  />
                </span>
              </span>
              <span className="block mt-1">
                actually{' '}
                <span className="relative inline-block">
                  gather.
                  <ScribbleUnderline className="text-coral/75" />
                </span>
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              className="mt-12 max-w-lg text-base sm:text-[17px] text-ink-secondary/85 leading-[1.55] [text-wrap:pretty]"
            >
              {community.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#join"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:shadow-[0_14px_40px_-8px_rgba(26,26,46,0.6)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Sparkles size={15} className="text-coral" />
                join the club
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#wall"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 hover:ring-coral/30 transition-all duration-300"
              >
                peek at the wall
                <ArrowUpRight size={14} />
              </Link>
              <span className="serif-italic text-sm text-ink-muted/80 ml-1 hidden sm:inline">
                — free, by invite.
              </span>
            </motion.div>

            {/* mini-pulse */}
            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-3 gap-x-6 max-w-md border-t hairline pt-5 tabular"
            >
              <Pulse label="cities" value={community.pulse.cities} />
              <Pulse label="events" value={community.pulse.events} />
              <Pulse label="ships together" value={community.pulse.ships} />
            </motion.div>
          </motion.div>

          {/* Right column — floating pills cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-3 relative h-[320px] lg:h-[520px] mt-4 lg:mt-0"
          >
            <FloatingPills
              className="absolute inset-0"
              size="lg"
              density="lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-blush -z-[5]" />
    </section>
  )
}

function Pulse({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-faint font-semibold">
        {label}
      </span>
      <span className="text-2xl font-black text-ink mt-0.5 tabular">
        <CountUp value={value} />
      </span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   2. TICKER — running strip of recent activity
   ═══════════════════════════════════════════════════════════════ */
function TickerStrip() {
  const items = [
    { tag: 'shipped', text: 'muskan · scam-link bot, 80% mod work gone' },
    { tag: 'win', text: 'aarav · first wallet conversion overnight' },
    { tag: 'asking', text: 'priya · who knows sybil-resistant airdrops?' },
    { tag: 'irl', text: 'dekoded dxb · 24 builders, one room' },
    { tag: 'shipped', text: 'kavya · multi-agent content pipeline' },
    { tag: 'real talk', text: 'rohan · last token launch lost 70% to bots' },
    { tag: 'win', text: 'arjun · 3 collabs from delhi event' },
    { tag: 'shipped', text: 'noor · open-sourced the wallet attribution lib' },
  ]
  const doubled = [...items, ...items]
  const tagColor: Record<string, string> = {
    shipped: 'text-[#2D9D78]',
    win: 'text-coral',
    asking: 'text-[#5B8DEF]',
    'real talk': 'text-[#A87000]',
    irl: 'text-ink',
  }

  return (
    <section className="relative bg-ink text-white/80 overflow-hidden border-y border-white/5">
      <div className="flex items-center py-3" style={{ animation: 'marquee 60s linear infinite', willChange: 'transform' }}>
        {doubled.map((item, i) => (
          <span key={i} className="mx-5 flex items-center gap-2.5 text-xs shrink-0 tabular">
            <span className={cn('text-[10px] font-bold uppercase tracking-[0.18em]', tagColor[item.tag] ?? 'text-white')}>
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

/* ═══════════════════════════════════════════════════════════════
   3. MOUNTAIN MOMENT — editorial illustration with marginalia
   ═══════════════════════════════════════════════════════════════ */
function MountainMoment() {
  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Mountain */}
          <BlurFade delay={0.05} yOffset={20} blur={6} className="col-span-12 lg:col-span-6">
            <div className="relative">
              <MountainScene signLabel="join us" />
              {/* tiny note */}
              <div className="absolute -top-4 -left-2 lg:-left-6 hidden md:flex items-start gap-1.5 max-w-[160px]">
                <CurlyArrow className="w-12 h-10 text-coral/50 mt-2" />
                <span className="serif-italic text-sm text-ink-muted/80 leading-snug pt-2">
                  the room, illustrated.
                </span>
              </div>
            </div>
          </BlurFade>

          {/* Copy */}
          <div className="col-span-12 lg:col-span-6">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 02</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">A SOFT PLACE TO BUILD</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-ink text-4xl sm:text-5xl lg:text-[3.6rem]">
                most communities online <br className="hidden sm:block" />
                feel like a <span className="serif-italic text-ink-muted/70">feed.</span>
                <br />
                <span className="relative inline-block mt-2">
                  this one feels like
                  <span className="ml-2 serif-italic text-coral">a room.</span>
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll variant="slideUp" delay={0.1}>
              <p className="mt-7 text-base sm:text-[17px] text-ink-muted leading-[1.55] max-w-lg [text-wrap:pretty]">
                no pitch decks. no growth-hacker theatre. just builders showing
                their work in progress, asking real questions, and shipping
                faster because someone&apos;s in the room with them.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="slideUp" delay={0.15}>
              <ul className="mt-9 space-y-3.5 max-w-md">
                {[
                  ['invite-only', 'but generous about invites'],
                  ['lowercase. always.', 'voice matters as much as code'],
                  ['bots welcome', 'if you built them yourself'],
                  ['no recordings', 'nothing leaves the room'],
                ].map(([title, body]) => (
                  <li
                    key={title}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.55]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral shrink-0 self-start translate-y-1.5" />
                    <span>
                      <span className="font-semibold text-ink">{title}</span>
                      <span className="text-ink-muted"> — {body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4. COMMUNITY WALL
   ═══════════════════════════════════════════════════════════════ */
function CommunityWall() {
  const wall = siteConfig.community.wall

  return (
    <section id="wall" className="relative bg-soft-pink overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-white/40 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-coral/10 blur-[100px] pointer-events-none" />

      <div className="container-width section-padding relative">
        {/* Header — left aligned with marginalia */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 03</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE WALL</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                what&apos;s happening{' '}
                <span className="serif-italic text-coral">inside</span>, <br className="hidden sm:block" />
                today.
              </h2>
            </RevealOnScroll>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-8">
            <RevealOnScroll variant="slideUp" delay={0.1}>
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                a live snapshot. real builds, real wins, real questions —
                nothing staged.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-faint tabular">
                <Clock size={12} />
                refreshed 2 min ago · 47 posts today
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll
          variant="slideUp"
          stagger={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {wall.map((post, i) => (
            <WallCard key={i} post={post} index={i} />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

function WallCard({
  post,
  index,
}: {
  post: (typeof siteConfig.community.wall)[number]
  index: number
}) {
  const tagColor: Record<string, string> = {
    shipped: 'bg-[#2D9D78]/10 text-[#2D9D78] ring-[#2D9D78]/20',
    win: 'bg-coral/10 text-coral ring-coral/25',
    asking: 'bg-[#5B8DEF]/10 text-[#5B8DEF] ring-[#5B8DEF]/20',
    'real talk': 'bg-[#F0A500]/15 text-[#A87000] ring-[#F0A500]/25',
    irl: 'bg-ink/8 text-ink ring-ink/15',
  }
  const tilt = [-0.6, 0.4, -0.3, 0.5, -0.4, 0.3][index] ?? 0
  const lift = [0, -8, -4, -12, -2, -6][index] ?? 0

  return (
    <motion.article
      whileHover={{ y: lift - 6, rotate: tilt + 0.4 }}
      initial={{ rotate: tilt, y: lift }}
      animate={{ rotate: tilt, y: lift }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative group rounded-[20px] p-6 bg-white/72 backdrop-blur-md ring-1 ring-white/85 shadow-[0_12px_36px_-14px_rgba(26,26,46,0.16)] hover:shadow-[0_18px_50px_-14px_rgba(255,107,107,0.28)] hover:bg-white/90 transition-all"
    >
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-coral to-coral-deep grid place-items-center text-white text-xs font-bold ring-2 ring-white tabular">
            {post.author[0].toUpperCase()}
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">{post.author}</p>
            <p className="text-[11px] text-ink-faint tabular">
              {post.handle} · {post.time}
            </p>
          </div>
        </div>
        <span
          className={cn(
            'text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ring-1',
            tagColor[post.tag] ?? 'bg-ink/5 text-ink-muted ring-ink/10',
          )}
        >
          {post.tag}
        </span>
      </header>
      <p className="text-[15px] text-ink-secondary leading-[1.55] [text-wrap:pretty]">
        {post.body}
      </p>
      <footer className="mt-5 pt-4 border-t hairline flex items-center gap-4 text-[11px] text-ink-faint tabular">
        <span className="inline-flex items-center gap-1.5">
          <MessageCircle size={11} />
          {(index + 3) * 4}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles size={11} className="text-coral/60" />
          {(index + 7) * 3}
        </span>
        <span className="ml-auto group-hover:text-coral transition-colors">
          read →
        </span>
      </footer>
    </motion.article>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. CITIES — DeKoded tour
   ═══════════════════════════════════════════════════════════════ */
function CitiesSection() {
  const cities = siteConfig.community.cities

  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 04</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">DEKODED, IRL</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-ink text-4xl sm:text-5xl lg:text-[4rem]">
                six cities across india. <br className="hidden sm:block" />
                now <span className="serif-italic text-coral">dubai</span>.{' '}
                <span className="text-ink-muted">singapore loading.</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="slideUp" delay={0.1} className="col-span-12 lg:col-span-4">
            <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
              each room a tiny ecosystem. you walk in a stranger and walk out
              with collaborators.
            </p>
            <p className="mt-3 text-xs text-ink-faint tabular">
              no badges · no panels · no slides
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll
          variant="slideUp"
          stagger={0.05}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {cities.map((city, i) => (
            <CityCard key={city.name} city={city} index={i} />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

function CityCard({
  city,
  index,
}: {
  city: (typeof siteConfig.community.cities)[number]
  index: number
}) {
  const statusStyle: Record<string, string> = {
    shipped: 'text-ink-muted',
    live: 'text-coral',
    soon: 'text-ink-faint',
  }
  const statusDot: Record<string, string> = {
    shipped: 'bg-ink/30',
    live: 'bg-coral animate-pulse',
    soon: 'bg-ink/15',
  }

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[18px] p-5 bg-white/65 backdrop-blur-md ring-1 ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/90 transition-all overflow-hidden"
    >
      {/* corner glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-coral/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-start justify-between">
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-ink-faint">
          {city.emoji}
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em]',
            statusStyle[city.status],
          )}
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', statusDot[city.status])} />
          {city.status}
        </span>
      </div>

      <span className="relative mt-5 block font-mono text-[10px] text-ink-faint tabular">
        no.{String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="relative mt-1 text-2xl font-black text-ink lowercase tracking-tight">
        {city.name}
      </h3>
      <div className="relative mt-2 flex items-center justify-between text-[11px]">
        <span className="text-ink-muted tabular">
          {city.members > 0 ? `${city.members} members` : 'waitlist open'}
        </span>
        <MapPin size={12} className="text-coral/60 group-hover:text-coral transition-colors" />
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   6. INITIATIVES
   ═══════════════════════════════════════════════════════════════ */
function InitiativesSection() {
  const initiatives = siteConfig.community.initiatives

  return (
    <section className="relative bg-soft-pink overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 05</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">WHAT WE BUILD TOGETHER</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                five <span className="serif-italic text-coral">rooms</span>{' '}
                <br className="hidden sm:block" />
                inside the room.
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="slideUp" delay={0.1} className="col-span-12 lg:col-span-4">
            <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
              services, but soft. cohorts you actually finish.
            </p>
          </RevealOnScroll>
        </div>

        <div className="space-y-5">
          <RevealOnScroll variant="slideUp" delay={0.05}>
            <InitiativeCard initiative={initiatives[0]} featured index={1} />
          </RevealOnScroll>

          <RevealOnScroll
            variant="slideUp"
            stagger={0.07}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {initiatives.slice(1).map((init, i) => (
              <InitiativeCard key={init.title} initiative={init} index={i + 2} />
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

function InitiativeCard({
  initiative,
  featured = false,
  index,
}: {
  initiative: (typeof siteConfig.community.initiatives)[number]
  featured?: boolean
  index: number
}) {
  const Icon = iconMap[initiative.icon] ?? Users

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-[22px] p-7 sm:p-9',
        'bg-white/78 backdrop-blur-md ring-1 ring-rose-mist/60',
        'hover:ring-coral/40 transition-all',
        featured && 'sm:flex sm:items-start sm:gap-9',
      )}
    >
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={cn('relative shrink-0', featured && 'sm:w-20')}>
        <div className="flex flex-col items-start gap-4 mb-5 sm:mb-0">
          <span className="font-mono text-[10px] text-ink-faint tabular">
            no.{String(index).padStart(2, '0')}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
            <Icon size={20} className="text-coral" />
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <h3
          className={cn(
            'font-black text-ink mb-3 lowercase tracking-tight',
            featured ? 'text-2xl sm:text-3xl' : 'text-xl',
          )}
        >
          {initiative.title}
        </h3>
        <p
          className={cn(
            'text-ink-muted leading-[1.55] mb-5 [text-wrap:pretty]',
            featured ? 'text-[17px] max-w-xl' : 'text-[15px]',
          )}
        >
          {initiative.clientFacing}
        </p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-coral bg-coral-muted rounded-full tabular">
          <Calendar size={11} />
          {initiative.metric}
        </span>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   7. RITUALS — week strip on dark
   ═══════════════════════════════════════════════════════════════ */
function RitualsSection() {
  const rituals = siteConfig.community.rituals

  return (
    <section className="relative bg-midnight text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-coral/10 blur-[150px] pointer-events-none" />
      <div className="container-width section-padding relative">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-white/40">No. 06</span>
                <span className="h-px flex-1 max-w-[80px] bg-white/10" />
                <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
                  EVERY WEEK
                </span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-white text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                the <span className="serif-italic text-coral">rhythm</span>{' '}
                of the room
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="slideUp" delay={0.1} className="col-span-12 lg:col-span-4">
            <p className="serif-italic text-white/65 text-lg leading-snug">
              five days. five small things. one big habit.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll
          variant="slideUp"
          stagger={0.06}
          className="grid grid-cols-1 md:grid-cols-5 gap-3"
        >
          {rituals.map((r, i) => (
            <div
              key={r.day}
              className="group relative rounded-2xl p-5 bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:ring-coral/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-coral tabular">
                  {r.day}
                </span>
                <span className="font-mono text-[10px] text-white/30 tabular">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-4 text-sm text-white/85 leading-[1.55]">{r.label}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   8. VOICES — testimonial collage
   ═══════════════════════════════════════════════════════════════ */
function VoicesSection() {
  const voices = siteConfig.community.voices
  const tilts = [-1.4, 1.2, -0.8]
  const bgs = ['bg-white/80', 'bg-cream-pink/90', 'bg-white/80']

  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-12 gap-6 mb-14 items-end">
          <div className="col-span-12 lg:col-span-7">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 07</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">VOICES FROM INSIDE</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                members say it{' '}
                <span className="serif-italic text-coral">better.</span>
              </h2>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll
          variant="slideUp"
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {voices.map((v, i) => (
            <motion.figure
              key={i}
              initial={{ rotate: tilts[i] }}
              whileHover={{ y: -6, rotate: tilts[i] * 0.5 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'relative rounded-[22px] p-7 backdrop-blur-md ring-1 ring-rose-mist/50 shadow-[0_14px_36px_-16px_rgba(26,26,46,0.16)]',
                bgs[i],
              )}
            >
              <span
                className="absolute -top-4 left-6 text-7xl text-coral/30 leading-none select-none font-serif"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-6 text-[17px] text-ink-secondary leading-[1.55] [text-wrap:pretty]">
                {v.body}
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t hairline flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-coral/30 to-coral/15 ring-2 ring-white grid place-items-center text-sm font-bold text-coral">
                  {v.name[0].toUpperCase()}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-ink">{v.name}</p>
                  <p className="text-[11px] text-ink-muted">{v.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   9. PULSE — community stats with annotations
   ═══════════════════════════════════════════════════════════════ */
function PulseSection() {
  const stats = [
    { value: 1247, label: 'builders inside', note: '↑ +47 this week' },
    { value: 14, label: 'events in the wild', note: 'since 2024' },
    { value: 312, label: 'things shipped together', note: 'and counting' },
    { value: 6, label: 'cities · soon 8', note: 'dxb live · sin loading' },
  ]

  return (
    <section className="relative bg-soft-pink overflow-hidden">
      <div className="container-width section-padding">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <RevealOnScroll variant="blur">
            <span className="eyebrow text-ink-muted tabular">
              <Asterisk size={9} className="inline mr-1.5 text-coral" />
              MEASURED HONESTLY
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="slideUp" delay={0.05}>
            <h2 className="display-tight mt-5 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
              the pulse, in{' '}
              <span className="serif-italic text-coral">numbers.</span>
            </h2>
          </RevealOnScroll>
        </div>

        <RevealOnScroll
          variant="scaleIn"
          stagger={0.1}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-coral leading-none tracking-[-0.045em] tabular">
                <CountUp value={s.value} />
              </p>
              <p className="mt-3 text-sm text-ink leading-snug font-semibold">
                {s.label}
              </p>
              <p className="mt-1 serif-italic text-xs text-ink-muted/85 tabular">
                {s.note}
              </p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   10. FAQ
   ═══════════════════════════════════════════════════════════════ */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const faqs = [
    {
      q: 'is this free?',
      a: 'yes. invite-only but free. members get cohort access, the wall, weekly rituals, and city events. premium tracks for protocols come separately.',
    },
    {
      q: 'who fits?',
      a: 'people building at the seam of ai and web3. founders, researchers, marketers, ops folks, vibe coders. you don\'t have to be senior — you have to be shipping.',
    },
    {
      q: 'how do invites work?',
      a: 'every member gets one invite a month. we also open the doors on fridays — drop your work in the open application and a member will pick it up.',
    },
    {
      q: 'do you record sessions?',
      a: 'no. the deal is: nothing leaves the room. that\'s why people show their actual work here.',
    },
    {
      q: 'where does this live?',
      a: 'the wall lives in a private discord-meets-substack space. events are irl and on-cam. you\'ll get the link the day you\'re in.',
    },
  ]

  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 08</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">SOFTBALL QUESTIONS</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                things people ask <br className="hidden sm:block" />
                <span className="serif-italic text-coral">before joining.</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="slideUp" delay={0.1} className="col-span-12 lg:col-span-4">
            <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
              short answers. no marketing speak.
            </p>
          </RevealOnScroll>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <BlurFade key={i} delay={i * 0.05} yOffset={6} blur={4}>
              <div className="bg-white/78 backdrop-blur-md rounded-[18px] ring-1 ring-rose-mist/50 shadow-[0_4px_20px_-10px_rgba(26,26,46,0.1)] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="flex items-baseline gap-3 pr-4">
                    <span className="font-mono text-[11px] text-ink-faint tabular">
                      0{i + 1}
                    </span>
                    <span className="text-base font-semibold text-ink group-hover:text-coral transition-colors">
                      {faq.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 text-ink-muted"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-[3.25rem] text-[15px] text-ink-muted leading-[1.6] [text-wrap:pretty]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   11. JOIN — final glassy CTA with avatar collage
   ═══════════════════════════════════════════════════════════════ */
function JoinSection() {
  const avatars = [
    { letter: 'm', from: 'from-coral to-coral-deep' },
    { letter: 'a', from: 'from-[#F0A500] to-[#A87000]' },
    { letter: 'p', from: 'from-[#5B8DEF] to-[#3D5FB5]' },
    { letter: 'k', from: 'from-coral to-[#A8C9E8]' },
    { letter: 'r', from: 'from-[#2D9D78] to-[#1A6850]' },
    { letter: 'n', from: 'from-coral-deep to-[#1A1A2E]' },
  ]

  return (
    <section
      id="join"
      className="relative overflow-hidden grain"
      style={{
        background:
          'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 45%, #C9D5E8 100%)',
      }}
    >
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-coral/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[440px] h-[440px] rounded-full bg-white/35 blur-[120px] pointer-events-none" />

      <div className="container-width section-padding relative">
        <BlurFade yOffset={20} blur={6}>
          <div className="relative max-w-3xl mx-auto rounded-[32px] p-10 sm:p-14 bg-white/55 backdrop-blur-2xl ring-1 ring-white/85 shadow-[0_30px_80px_-20px_rgba(255,107,107,0.35)]">
            {/* corner pills */}
            <FloatingPills
              className="absolute -top-16 -right-12 w-[220px] h-[220px] pointer-events-none hidden sm:block"
              size="sm"
              density="sm"
            />

            {/* avatar collage */}
            <div className="flex justify-center -space-x-2.5 mb-8">
              {avatars.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    'h-10 w-10 rounded-full bg-gradient-to-br grid place-items-center text-white text-xs font-bold ring-2 ring-white shadow-md',
                    a.from,
                  )}
                >
                  {a.letter}
                </motion.div>
              ))}
              <div className="h-10 w-10 rounded-full bg-white/85 grid place-items-center text-[10px] font-bold text-ink ring-2 ring-white shadow-md tabular">
                +1.2k
              </div>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20 tabular">
                <Sparkles size={11} />
                THE DOOR IS OPEN TODAY
              </span>
              <h2 className="display-tight mt-6 text-ink text-4xl sm:text-5xl lg:text-[3.6rem]">
                come build with people who <br className="hidden sm:block" />
                <span className="serif-italic text-coral">actually finish</span>{' '}
                things.
              </h2>
              <p className="mt-7 text-base sm:text-[17px] text-ink-secondary/85 leading-[1.55] max-w-xl mx-auto [text-wrap:pretty]">
                drop your handle. tell us what you&apos;re building. a member
                picks it up within a day.
              </p>

              <form className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="@yourhandle"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/90 ring-1 ring-rose-mist/60 focus:ring-coral focus:outline-none text-sm text-ink placeholder:text-ink-faint transition-all"
                />
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-ink rounded-full hover:bg-ink/85 transition-colors"
                >
                  request invite
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </form>

              <p className="mt-5 text-xs text-ink-muted tabular">
                no spam · no newsletter · just the invite — or a soft no.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TickerStrip />
      <MountainMoment />
      <CommunityWall />
      <CitiesSection />
      <InitiativesSection />
      <RitualsSection />
      <VoicesSection />
      <PulseSection />
      <FAQSection />
      <JoinSection />
    </>
  )
}
