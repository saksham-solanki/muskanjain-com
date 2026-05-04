'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  MapPin,
  Video,
  MessageSquare,
  Mic,
  Star,
} from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { InviteForm } from '@/components/forms/InviteForm'
import { cn } from '@/lib/utils'
import { heroStagger, fadeUp } from '@/lib/motion'
import StatsStrip from '@/components/sections/StatsStrip'
import WhatIDo from '@/components/sections/WhatIDo'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import BrandMarquee from '@/components/sections/BrandMarquee'

/* Three.js scenes, dynamically imported (client only, no SSR) */
const HeroAmbient = dynamic(
  () => import('@/components/r3f/HeroAmbient').then((m) => m.HeroAmbient),
  { ssr: false, loading: () => null },
)
const CityGlobe = dynamic(
  () => import('@/components/r3f/CityGlobe').then((m) => m.CityGlobe),
  { ssr: false, loading: () => null },
)

/* ─── Pixelated AI-robot portrait ─────────────────────────── */
function PixelPortrait() {
  return (
    <div className="relative">
      {/* coral glow behind the frame */}
      <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-br from-coral/30 via-rose-mist/30 to-[#FFE6D2]/40 blur-3xl -z-10" />

      <div
        className="relative w-[260px] sm:w-[320px] lg:w-[380px] aspect-[4/5] rounded-[28px] overflow-hidden ring-1 ring-white/70 shadow-[0_30px_80px_-22px_rgba(255,107,107,0.45)] bg-[#FFE0DA]"
        style={{ filter: 'saturate(1.15) contrast(1.08)' }}
      >
        <Image
          src="/muskan.jpeg"
          alt="Muskan Jain"
          width={760}
          height={950}
          priority
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 260px"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO , asymmetric editorial composition
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Pastel sky gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'linear-gradient(170deg, #B6CCE5 0%, #E5C5BC 25%, #FFD0C4 50%, #FFE0DA 78%, #FFEFEB 100%)',
        }}
      />
      {/* Three.js ambient particle field, soft coral dust + lanterns */}
      <HeroAmbient className="absolute inset-0 -z-10 opacity-90" />
      {/* Sun */}
      <div className="absolute top-[14%] right-[12%] w-[360px] h-[360px] rounded-full bg-[#FFE6D2]/80 blur-[110px] -z-10 pointer-events-none" />
      {/* coral haze */}
      <div className="absolute bottom-[-6rem] left-[-10rem] w-[520px] h-[520px] rounded-full bg-coral/15 blur-[150px] -z-10 pointer-events-none" />

      <div className="container-width relative z-10 py-20 sm:py-28">
        {/* 12-col asymmetric grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Center, main headline */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-7"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-black text-ink [text-wrap:balance]"
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: 'clamp(1.875rem, 3.4vw, 2.875rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                fontFeatureSettings: "'ss01', 'salt', 'case'",
              }}
            >
              4 Years in GTM. Now I build{' '}
              <span className="serif-italic font-normal text-coral">
                content engines
              </span>
              ,{' '}
              <span className="serif-italic font-normal text-coral">
                outbound flows
              </span>
              , and the boring middle of the funnel,{' '}
              <span className="relative inline-block">
                using AI.
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              className="text-lead mt-7 max-w-lg [text-wrap:pretty]"
            >
              Now I help you do the same, without burning a year figuring it
              out.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#join"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:shadow-[0_14px_40px_-8px_rgba(26,26,46,0.6)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Sparkles size={15} className="text-coral" />
                Join the Club
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 hover:ring-coral/30 transition-all duration-300"
              >
                Explore Services
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column, pixelated portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center lg:justify-end"
          >
            <PixelPortrait />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-blush -z-[5]" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. EVENTS, DeKoded series, hosted end-to-end
   ═══════════════════════════════════════════════════════════════ */
function CitiesSection() {
  const events = siteConfig.community.cities
  const live = events.find((e) => e.status === 'live')
  const soon = events.find((e) => e.status === 'soon')
  const shipped = events.filter((e) => e.status === 'shipped')
  const goa = shipped.find((e) => e.emoji === 'GOI')
  const restShipped = shipped.filter((e) => e.emoji !== 'GOI')

  return (
    <section id="cities" className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        {/* centered editorial header */}
        <RevealOnScroll variant="blur">
          <header className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
                No. 04 · EVENTS HOSTED
              </span>
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
            </div>
            <h2 className="h-section text-ink tracking-tight mt-7">
              Eight rooms.{' '}
              <span className="serif-italic text-coral">Hundreds</span> of
              founders. One playbook, shipped every time.
            </h2>
            <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.45] max-w-2xl mx-auto mt-7 [text-wrap:balance]">
              DeKoded, end to end. Strategy, content, outbound, the room
              itself, here&apos;s what each one shipped.
            </p>
            <p className="mt-5 text-[11px] text-ink-faint tabular font-mono uppercase tracking-[0.22em]">
              No badges · No panels · Just receipts
            </p>
          </header>
        </RevealOnScroll>

        {/* 3D city globe, interactive tour visualization */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <div className="mb-16 -mt-2 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-pink/40 to-transparent rounded-[32px] -z-10" />
            <CityGlobe />
          </div>
        </RevealOnScroll>

        {/* Featured row: live event (wide) + coming-soon (narrow) */}
        {(live || soon) && (
          <RevealOnScroll variant="slideUp" delay={0.02}>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-coral tabular font-bold">
                STILL OPEN
              </span>
              <span className="h-px flex-1 bg-coral/15" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint tabular">
                LIVE NOW · COMING UP
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
              {live && (
                <div className="lg:col-span-2 relative">
                  <div
                    aria-hidden
                    className="absolute -inset-3 rounded-[28px] bg-coral/12 blur-2xl pointer-events-none -z-10"
                  />
                  <EventCard event={live} index={events.indexOf(live)} />
                </div>
              )}
              {soon && (
                <div className="opacity-90">
                  <EventCard event={soon} index={events.indexOf(soon)} />
                </div>
              )}
            </div>
          </RevealOnScroll>
        )}

        {/* Shipped grid: GOI hero (col-span-2) above a 3-col row of the rest */}
        {shipped.length > 0 && (
          <>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink tabular font-bold">
                SHIPPED ROOMS
              </span>
              <span className="h-px flex-1 bg-ink/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint tabular">
                {shipped.length} CITIES · INDIA TOUR
              </span>
            </div>

            {goa && (
              <RevealOnScroll variant="slideUp" delay={0.02}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                  <div className="sm:col-span-2 lg:col-span-2 relative">
                    <div
                      aria-hidden
                      className="absolute -inset-3 rounded-[28px] bg-coral/10 blur-2xl pointer-events-none -z-10"
                    />
                    <EventCard
                      event={goa}
                      index={events.indexOf(goa)}
                      featured
                    />
                  </div>
                  {/* Ghost CTA tile filling the remaining slot on lg */}
                  <div className="hidden lg:flex flex-col justify-between rounded-[20px] ring-1 ring-dashed ring-coral/30 bg-white/40 backdrop-blur-md p-6 text-ink-muted">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-coral tabular">
                        NEXT ROOM
                      </p>
                      <p className="mt-3 text-2xl font-black text-ink tracking-tight leading-tight">
                        Your city,{' '}
                        <span className="serif-italic text-coral">next</span>?
                      </p>
                      <p className="mt-3 text-small text-ink-muted/85 leading-[1.55]">
                        Drop a note if you want DeKoded in your town. We pick
                        one new city every quarter.
                      </p>
                    </div>
                    <Link
                      href="#join"
                      className="mt-6 inline-flex items-center gap-1.5 self-start text-[11px] font-mono uppercase tracking-[0.18em] text-coral hover:text-coral-deep transition-colors tabular"
                    >
                      Pitch your city
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            )}

            <RevealOnScroll
              variant="slideUp"
              stagger={0.05}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {restShipped.map((event) => (
                <EventCard
                  key={event.name}
                  event={event}
                  index={events.indexOf(event)}
                />
              ))}
            </RevealOnScroll>
          </>
        )}
      </div>
    </section>
  )
}

function EventPoster({
  code,
  status,
  headline,
}: {
  code: string
  status?: string
  headline?: string
}) {
  // Per-city accent gradient, kept as a quiet color swatch (not a poster)
  const gradients: Record<string, string> = {
    BLR: 'from-[#FFD0C4] via-coral/30 to-[#E5C5BC]',
    DEL: 'from-[#E5C5BC] via-rose-mist/50 to-[#FFD0C4]',
    BOM: 'from-[#FFD0C4] via-[#FFE6D2] to-coral/20',
    HYD: 'from-rose-mist/60 via-coral/20 to-[#FFD0C4]',
    PNQ: 'from-[#FFE0DA] via-rose-mist/45 to-coral/15',
    GOI: 'from-[#FFD0C4] via-coral/25 to-[#FFE0DA]',
    DXB: 'from-coral/30 via-[#FFD0C4] to-[#FFE6D2]',
    SIN: 'from-[#B6CCE5] via-[#E5C5BC] to-[#FFE0DA]',
  }
  const grad = gradients[code] ?? 'from-coral/15 via-rose-mist/40 to-blush'
  const statusLabel =
    status === 'live'
      ? 'COHORT LIVE'
      : status === 'soon'
        ? 'OPENING SOON'
        : 'SHIPPED'

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between bg-gradient-to-br ${grad} p-5`}
    >
      {/* Quieter corner crop marks */}
      <span className="absolute top-2 left-2 font-mono text-[9px] text-coral/30 select-none">
        +
      </span>
      <span className="absolute top-2 right-2 font-mono text-[9px] text-coral/30 select-none">
        +
      </span>
      <span className="absolute bottom-2 left-2 font-mono text-[9px] text-coral/30 select-none">
        +
      </span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-coral/30 select-none">
        +
      </span>

      {/* Subtle grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.3 0 0 0 0 0.18 0 0 0 0 0.22 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Top: small mono city code + status, demoted from text-6xl to text-2xl */}
      <div className="relative flex items-center justify-between">
        <p className="font-mono text-2xl font-black tracking-[-0.02em] text-ink/85 tabular leading-none">
          {code}
        </p>
        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/55 backdrop-blur ring-1 ring-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink/70 tabular">
            {statusLabel}
          </span>
        </span>
      </div>

      {/* Center: headline metric becomes the visual anchor */}
      <div className="relative text-center px-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55 mb-2">
          DEKODED ROOM
        </p>
        {headline ? (
          <p className="font-black text-2xl sm:text-3xl tracking-[-0.02em] text-ink tabular leading-tight [text-wrap:balance]">
            {headline}
          </p>
        ) : (
          <p className="font-black text-2xl tracking-[-0.02em] text-ink tabular leading-tight">
            Receipts shipped.
          </p>
        )}
      </div>

      {/* Bottom: minimal spacer line */}
      <div className="relative h-px w-12 bg-coral/40" />
    </div>
  )
}

function EventCard({
  event,
  index,
  featured = false,
}: {
  event: (typeof siteConfig.community.cities)[number]
  index: number
  featured?: boolean
}) {
  const statusDot: Record<string, string> = {
    shipped: 'bg-ink/70',
    live: 'bg-coral animate-pulse',
    soon: 'bg-ink-faint',
  }
  const statusLabel: Record<string, string> = {
    shipped: 'SHIPPED',
    live: 'LIVE',
    soon: 'SOON',
  }
  const blurb = event.blurb ?? ''
  const metrics = event.metrics ?? []
  const image = event.image
  const headline = metrics[0]
  const restMetrics = metrics.slice(1, 3) // cap at 2 to avoid crowding

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative rounded-[20px] bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/90 transition-all overflow-hidden flex flex-col h-full',
        featured && 'ring-coral/35 bg-white/85',
      )}
    >
      {/* image / poster, slightly taller for featured */}
      <div
        className={cn(
          'relative overflow-hidden',
          featured ? 'aspect-[16/9]' : 'aspect-[4/3]',
        )}
      >
        {image ? (
          <>
            <Image
              src={image}
              alt={`Muskan at DeKoded ${event.emoji}`}
              fill
              sizes={
                featured
                  ? '(min-width: 1024px) 66vw, 100vw'
                  : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            {/* Legibility wash for the small city-code chip on top-left */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent pointer-events-none"
            />
          </>
        ) : (
          <EventPoster
            code={event.emoji}
            status={event.status}
            headline={headline}
          />
        )}

        {/* Quiet city-code chip, top-left only (status moves into body) */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] font-mono font-bold tracking-[0.2em] text-ink shadow-sm tabular">
          <MapPin size={10} className="text-coral" />
          {event.emoji}
        </div>
      </div>

      {/* body, new hierarchy: code+dot, big headline metric, h-card, blurb, small metric pills */}
      <div
        className={cn(
          'flex flex-col flex-1',
          featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6',
        )}
      >
        {/* Top: small mono city code + status dot */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint tabular font-bold">
            {event.emoji}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                statusDot[event.status],
              )}
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint tabular">
              {statusLabel[event.status]}
            </span>
          </span>
          <span className="h-px flex-1 bg-ink/8" />
          <span className="font-mono text-[10px] text-ink-faint tabular">
            No.{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Big: headline outcome, the visual anchor */}
        {headline && (
          <p
            className={cn(
              'mt-3 font-black text-coral tabular tracking-[-0.02em] leading-[1.05] [text-wrap:balance]',
              featured ? 'text-4xl sm:text-5xl' : 'text-3xl',
            )}
          >
            {headline}
          </p>
        )}

        {/* h-card: city name + DeKoded prefix */}
        <h3
          className={cn(
            'h-card mt-3 text-ink tracking-tight',
            featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg',
          )}
        >
          DeKoded {event.emoji}
          <span className="text-ink-muted/70 font-semibold">
            {' '}
            · {event.name}
          </span>
        </h3>

        {/* Subtitle blurb */}
        {blurb && (
          <p className="mt-2 text-small text-ink-muted leading-[1.55] [text-wrap:pretty]">
            {blurb}
          </p>
        )}

        {/* Bottom: remaining 1-2 metrics as small mono pills */}
        {restMetrics.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
            {restMetrics.map((m) => (
              <span
                key={m}
                className="inline-flex items-center px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted bg-ink/[0.04] ring-1 ring-ink/8 rounded-full tabular"
              >
                {m}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

/* ═══════════════════════════════════════════════════════════════
   6. CREATOR HUB, videos, podcasts, brand work
   ═══════════════════════════════════════════════════════════════ */
function CreatorHub() {
  const brands = [
    { name: 'Base', hex: '#0052FF' },
    { name: 'Bhindi AI', hex: '#8B5CF6' },
    { name: 'Avici', hex: '#F59E0B' },
    { name: 'Canton', hex: '#10B981' },
    { name: 'Aztec', hex: '#DC2626' },
    { name: 'Cypher', hex: '#06B6D4' },
  ]

  const series = [
    {
      title: 'Building KRNL',
      subtitle: 'Founder docu-series · 2 phases · 21 episodes.',
      views: '305k',
      tag: 'DOCU-SERIES',
      icon: Video,
      featured: true,
    },
    {
      title: 'India Tour',
      subtitle: 'Six cities, one camera. On-the-ground KRNL.',
      views: '130k',
      tag: 'TRAVEL',
      icon: MapPin,
    },
    {
      title: 'Proof of Hustle',
      subtitle: 'Founder podcast, long-form, no fluff.',
      views: '125k',
      tag: 'PODCAST',
      icon: Mic,
      featured: true,
    },
    {
      title: 'Base Fellowship',
      subtitle: 'Day-by-day, inside the cohort.',
      views: '94k',
      tag: 'SPONSORED',
      icon: Sparkles,
    },
    {
      title: 'Product Reviews',
      subtitle: 'CoinEx · Cypher · Avici · Bhindi AI.',
      views: '110k',
      tag: 'REVIEWS',
      icon: Star,
    },
    {
      title: 'Technical Podcasts',
      subtitle: 'AI governance · KRNL tech · use-cases.',
      views: '48k',
      tag: 'TECHNICAL',
      icon: MessageSquare,
    },
  ]

  const podcast = {
    blurb:
      'Long-form founder convos. Unedited, building in public, no PR fluff.',
    episodes: [
      { ep: 1, views: '24K', url: 'https://x.com/Muskanjain0401/status/1895704446094426606' },
      { ep: 2, views: '11K', url: 'https://x.com/Muskanjain0401/status/1898312289846964262' },
      { ep: 3, views: '28K', url: 'https://x.com/Muskanjain0401/status/1902990752273092974' },
      { ep: 4, views: '20K', url: 'https://x.com/Muskanjain0401/status/1917855355658461195' },
      { ep: 5, views: '12K', url: 'https://x.com/Muskanjain0401/status/1919644601897648353' },
      { ep: 6, views: '16K', url: 'https://x.com/Muskanjain0401/status/1945752483982180506' },
      { ep: 7, views: '14K', url: 'https://x.com/Muskanjain0401/status/1945752483982180506' },
    ],
  }

  // Selected brand work, real outcomes, not placeholder quotes.
  const selectedWork = [
    {
      brand: 'KRNL Labs',
      project: 'Building KRNL · Phase 1 + 2',
      blurb:
        'Founder docu-series filmed day-by-day. Ran the GTM, the camera, and the edit. 21 episodes shipped, organic distribution only.',
      headline: '305K',
      headlineLabel: 'TOTAL VIEWS',
      detail: '21 EPISODES',
      tag: 'DOCU-SERIES',
    },
    {
      brand: 'Base · UAE',
      project: 'Base Fellowship & Based UAE',
      blurb:
        'Day-by-day cohort coverage and on-the-ground city activations. Sponsored series + open-publication video work for the Base ecosystem.',
      headline: '94K',
      headlineLabel: 'TOTAL VIEWS',
      detail: '5 SPONSORED VIDEOS',
      tag: 'BASE FELLOWSHIP',
    },
    {
      brand: 'Avici · Bhindi AI · Canton',
      project: 'Brand films + product reviews',
      blurb:
        'Long-form product reviews and brand storytelling for AI × Web3 launches. From the brief to the post in under a week, every time.',
      headline: '110K',
      headlineLabel: 'TOTAL VIEWS',
      detail: '6+ BRANDS',
      tag: 'BRAND WORK',
    },
  ]

  const videoIndex = [
    {
      title: 'Building KRNL, Phase 1',
      total: '167k',
      videos: [
        { label: 'Intro', views: '14k', url: 'https://x.com/muskanjain0401/status/1882436229188448267' },
        { label: 'Day 1', views: '21k', url: 'https://x.com/muskanjain0401/status/1882686864345415963' },
        { label: 'Day 2', views: '19k', url: 'https://x.com/muskanjain0401/status/1883077431709647191' },
        { label: 'Day 3', views: '17k', url: 'https://x.com/muskanjain0401/status/1883455932304335230' },
        { label: 'Day 4', views: '19k', url: 'https://x.com/muskanjain0401/status/1884142994850496733' },
        { label: 'Day 5', views: '13k', url: 'https://x.com/muskanjain0401/status/1884895178525479275' },
        { label: 'Day 6', views: '10k', url: 'https://x.com/muskanjain0401/status/1886698001793736957' },
        { label: 'Day 7', views: '9.3k', url: 'https://x.com/muskanjain0401/status/1887769419235139913' },
        { label: 'Day 8', views: '10k', url: 'https://x.com/muskanjain0401/status/1891020418150023490' },
        { label: 'Day 9', views: '12k', url: 'https://x.com/muskanjain0401/status/1899005310355873946' },
        { label: 'Day 10', views: '11k', url: 'https://x.com/muskanjain0401/status/1900093536479174945' },
        { label: 'Day 11', views: '12k', url: 'https://x.com/muskanjain0401/status/1901185757622227453' },
      ],
    },
    {
      title: 'Building KRNL, Phase 2',
      total: '138k',
      videos: [
        { label: 'Episode 1', views: '15k', url: 'https://x.com/muskanjain0401/status/1912074558238298515' },
        { label: 'Episode 2', views: '8.5k', url: 'https://x.com/muskanjain0401/status/1913447326020153810' },
        { label: 'Episode 3', views: '13k', url: 'https://x.com/muskanjain0401/status/1914585859405570118' },
        { label: 'Episode 4', views: '12k', url: 'https://x.com/muskanjain0401/status/1916029506869146099' },
        { label: 'Episode 5', views: '16k', url: 'https://x.com/muskanjain0401/status/1920738394109309241' },
        { label: 'Episode 6', views: '9.4k', url: 'https://x.com/muskanjain0401/status/1922204067331281105' },
        { label: 'Episode 7', views: '24k', url: 'https://x.com/muskanjain0401/status/1932697420430762297' },
        { label: 'Episode 8', views: '24k', url: 'https://x.com/muskanjain0401/status/1937444297571181037' },
        { label: 'Episode 9', views: '16k', url: 'https://x.com/muskanjain0401/status/1942153137965457871' },
      ],
    },
    {
      title: 'Base Fellowship',
      total: '94k',
      videos: [
        { label: 'Tweet 1', views: '17k', url: 'https://x.com/muskanjain0401/status/1920021074122596786' },
        { label: 'Tweet 2', views: '16k', url: 'https://x.com/muskanjain0401/status/1915675097119309846' },
        { label: 'Day 1', views: '25k', url: 'https://x.com/muskanjain0401/status/1920376684894638479' },
        { label: 'Day 2', views: '14k', url: 'https://x.com/muskanjain0401/status/1921089418300895403' },
        { label: 'Day 3 & 4', views: '22k', url: 'https://x.com/muskanjain0401/status/1926570112712139145' },
      ],
    },
    {
      title: 'India Tour',
      total: '130k',
      videos: [
        { label: 'Intro (1)', views: '13k', url: 'https://x.com/krnl_xyz/status/1922556601577218155' },
        { label: 'Intro (2)', views: '28k', url: 'https://x.com/muskanjain0401/status/1923267016808354193' },
        { label: 'Delhi (1)', views: '11k', url: 'https://x.com/krnl_xyz/status/1927329842548072491' },
        { label: 'Delhi (2)', views: '41k', url: 'https://x.com/Muskanjain0401/status/1926214782656409611' },
        { label: 'Mumbai', views: '13k', url: 'https://x.com/muskanjain0401/status/1930169617219010973' },
        { label: 'Pune', views: '7k', url: 'https://x.com/krnl_xyz/status/1931290425119404051' },
        { label: 'Hyderabad', views: '10k', url: 'https://x.com/muskanjain0401/status/1933795202306597095' },
        { label: 'Vadodara', views: '8.8k', url: 'https://x.com/krnl_xyz/status/1934961649280319734' },
      ],
    },
    {
      title: 'Proof of Hustle',
      total: '125k',
      videos: [
        { label: 'Pod 1', views: '24K', url: 'https://x.com/Muskanjain0401/status/1895704446094426606' },
        { label: 'Pod 2', views: '11K', url: 'https://x.com/Muskanjain0401/status/1898312289846964262' },
        { label: 'Pod 3', views: '28K', url: 'https://x.com/Muskanjain0401/status/1902990752273092974' },
        { label: 'Pod 4', views: '20K', url: 'https://x.com/Muskanjain0401/status/1917855355658461195' },
        { label: 'Pod 5', views: '12K', url: 'https://x.com/Muskanjain0401/status/1919644601897648353' },
        { label: 'Pod 6', views: '16K', url: 'https://x.com/Muskanjain0401/status/1945752483982180506' },
        { label: 'Pod 7', views: '14K', url: 'https://x.com/Muskanjain0401/status/1945752483982180506' },
      ],
    },
    {
      title: 'Product Reviews',
      total: '110k',
      videos: [
        { label: 'CoinEx', views: '24.7k', url: 'https://x.com/muskanjain0401/status/1873609564010303583' },
        { label: 'Cypher', views: '32k', url: 'https://x.com/muskanjain0401/status/1876179673346171010' },
        { label: 'Avici', views: '15k', url: 'https://x.com/Muskanjain0401/status/1959154603964150045' },
        { label: 'Bhindi AI', views: '13k', url: 'https://x.com/Muskanjain0401/status/1962414221821706640' },
        { label: 'Bhindi AI II', views: '25k', url: 'https://x.com/Muskanjain0401/status/1978390494938792029' },
      ],
    },
    {
      title: 'Technical Podcasts',
      total: '48k',
      videos: [
        { label: 'AI Governance', views: '17k', url: 'https://x.com/Muskanjain0401/status/1956991711827378485' },
        { label: 'KRNL Tech', views: '18k', url: 'https://x.com/Muskanjain0401/status/1954805222146179208' },
        { label: 'KRNL Use-cases', views: '13k', url: 'https://x.com/Muskanjain0401/status/1914585859405570118' },
      ],
    },
    {
      title: 'Videos for Base',
      total: '5 videos',
      videos: [
        { label: 'Video 1', views: '-', url: 'https://x.com/Based_UAE/status/1990741412447445347' },
        { label: 'Video 2', views: '-', url: 'https://x.com/Muskanjain0401/status/1965333893047091383' },
        { label: 'Video 3', views: '-', url: 'https://x.com/Based_UAE/status/1993982948916515192' },
        { label: 'Video 4', views: '-', url: 'https://x.com/Based_UAE/status/2002383780242391045' },
        { label: 'Video 5', views: '-', url: 'https://x.com/Based_UAE/status/1997985861414301982' },
      ],
    },
  ]

  const stats = [
    { value: '800k+', label: 'TOTAL VIEWS' },
    { value: '55+', label: 'VIDEOS SHIPPED' },
    { value: '6+', label: 'BRANDS WORKED WITH' },
  ]
  const totalVideos = videoIndex.reduce(
    (sum, g) => sum + g.videos.length,
    0,
  )

  return (
    <section className="relative bg-soft-pink overflow-hidden">
      <div className="container-width section-padding">
        {/* editorial header band, headline + inline metrics */}
        <div className="mb-12">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-7">
              <RevealOnScroll variant="blur">
                <div className="flex items-center gap-3">
                  <span className="eyebrow">No. 05</span>
                  <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                  <span className="section-label">CREATOR HUB</span>
                </div>
              </RevealOnScroll>
              <RevealOnScroll variant="slideUp" delay={0.05}>
                <h2 className="h-section mt-6">
                  What I&apos;ve made{' '}
                  <span className="serif-italic text-coral">on camera</span>.
                </h2>
              </RevealOnScroll>
            </div>
            <RevealOnScroll
              variant="slideUp"
              delay={0.1}
              className="col-span-12 lg:col-span-5"
            >
              <p className="text-ink-muted/85 text-lg leading-snug">
                Series, podcasts, product reviews, brand films. Built and
                shipped, week by week.
              </p>
            </RevealOnScroll>
          </div>

          {/* inline metrics row, no boxes */}
          <RevealOnScroll variant="slideUp" delay={0.12}>
            <div className="mt-8 pt-6 border-t hairline">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-3 text-ink">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="inline-flex items-baseline gap-2.5"
                  >
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="text-ink-faint/60 text-2xl leading-none px-2 sm:px-4 select-none"
                      >
                        ·
                      </span>
                    )}
                    <span className="text-3xl sm:text-4xl font-black tabular tracking-tight leading-none">
                      {s.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-ink-faint">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Series bento — one unified card design, hierarchy from size only.
            Plain <div> grid (NOT RevealOnScroll) so col-span classes survive. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[minmax(200px,auto)] gap-4 lg:gap-5 mb-16">
          {series.map((s, i) => {
            const Icon = s.icon
            const isFeatured = s.title === 'Building KRNL'

            // Size — featured spans 7×2, large secondaries span 5, rest span 4
            const isLarge =
              s.title === 'India Tour' || s.title === 'Proof of Hustle'
            const span = isFeatured
              ? 'md:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-0'
              : isLarge
                ? 'lg:col-span-5'
                : 'lg:col-span-4'

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                }}
                className={cn(
                  'group relative rounded-[22px] overflow-hidden ring-1 transition-all flex flex-col',
                  span,
                  isFeatured
                    ? 'text-white ring-coral/30 hover:ring-coral/50 shadow-[0_24px_60px_-24px_rgba(255,107,107,0.45)]'
                    : 'bg-white/78 backdrop-blur-md ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/92',
                )}
              >
                {/* Featured tile — coral gradient + soft dot pattern (no image) */}
                {isFeatured && (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10"
                      style={{
                        background:
                          'linear-gradient(135deg, #FF6B6B 0%, #E84545 55%, #1A1A2E 130%)',
                      }}
                    />
                    {/* Subtle dot pattern */}
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10 opacity-[0.18] mix-blend-overlay"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)',
                        backgroundSize: '14px 14px',
                      }}
                    />
                    {/* Corner glow */}
                    <div
                      aria-hidden
                      className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-coral/40 blur-[140px] -z-10 pointer-events-none"
                    />
                  </>
                )}

                {/* Hover wash for non-featured cards */}
                {!isFeatured && (
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}

                <div
                  className={cn(
                    'relative z-10 flex flex-col h-full',
                    isFeatured ? 'p-8 sm:p-10' : 'p-6 sm:p-7',
                  )}
                >
                  <header className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className={cn(
                        'rounded-xl grid place-items-center ring-1',
                        isFeatured
                          ? 'w-12 h-12 bg-white/12 ring-white/25 text-white'
                          : 'w-11 h-11 bg-coral/10 ring-coral/20 text-coral',
                      )}
                    >
                      <Icon size={isFeatured ? 22 : 18} />
                    </div>
                    <span
                      className={cn(
                        'text-[10px] font-mono font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full tabular ring-1',
                        isFeatured
                          ? 'text-white bg-white/12 ring-white/25'
                          : 'text-coral bg-coral/10 ring-coral/15',
                      )}
                    >
                      {s.tag}
                    </span>
                  </header>

                  <h3
                    className={cn(
                      'font-black tracking-tight [text-wrap:balance]',
                      isFeatured
                        ? 'text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05]'
                        : 'text-xl text-ink',
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-3 leading-[1.55] [text-wrap:pretty]',
                      isFeatured
                        ? 'text-white/80 text-base sm:text-lg max-w-md'
                        : 'text-ink-muted text-[14px]',
                    )}
                  >
                    {s.subtitle}
                  </p>

                  {isFeatured && (
                    <div className="mt-auto pt-8 flex items-end justify-between gap-4 flex-wrap">
                      <div>
                        <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tabular tracking-[-0.045em] leading-none">
                          {s.views}
                        </p>
                        <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.22em] text-white/55">
                          21 EPISODES · TOTAL VIEWS
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-white/85 group-hover:text-white transition-colors">
                        Watch the docu-series
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  )}

                  {!isFeatured && (
                    <footer className="mt-auto pt-5 border-t hairline flex items-baseline justify-between">
                      <span className="text-2xl sm:text-3xl font-black text-coral tabular tracking-[-0.03em]">
                        {s.views}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-faint">
                        TOTAL VIEWS
                      </span>
                    </footer>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* brand wall, monochrome editorial credit line */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-ink-faint">
                BRANDS WORKED WITH
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="text-[10px] font-mono tabular text-ink-muted">
                Paid · Sponsored · Owned
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {brands.map((b, i) => (
                <span
                  key={b.name}
                  className="inline-flex items-center"
                >
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="px-3 text-ink-faint/60 select-none"
                    >
                      ·
                    </span>
                  )}
                  <span
                    className="text-[12px] sm:text-[13px] font-mono font-bold uppercase tracking-[0.22em] text-ink/70 transition-colors duration-200 cursor-default"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = b.hex
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ''
                    }}
                  >
                    {b.name}
                  </span>
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs text-ink-muted/85 max-w-xl">
              Hands-on collabs across AI, Web3, and the messy middle. Each one
              shipped with metrics, not pitch decks.
            </p>
          </div>
        </RevealOnScroll>

        {/* Proof of Hustle highlight */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <div className="relative rounded-[24px] bg-ink text-white p-7 sm:p-10 ring-1 ring-white/10 overflow-hidden mb-16">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-coral/15 blur-[130px] pointer-events-none" />
            <div className="relative grid grid-cols-12 gap-6 items-end mb-8">
              <div className="col-span-12 md:col-span-7">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-coral bg-coral/15 rounded-full ring-1 ring-coral/30 tabular">
                    <Mic size={10} />
                    PODCAST
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                    7 EPISODES · 125K VIEWS
                  </span>
                </div>
                <h3 className="display-tight mt-5 text-white text-3xl sm:text-4xl">
                  Proof of{' '}
                  <span className="serif-italic text-coral">Hustle</span>.
                </h3>
                <p className="mt-3 text-white/70 leading-[1.55] max-w-lg [text-wrap:pretty]">
                  {podcast.blurb}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 md:text-right">
                <p className="text-5xl sm:text-6xl font-black text-coral tabular tracking-tight">
                  125k
                </p>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                  TOTAL VIEWS · 7 EPISODES
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {podcast.episodes.map((ep) => (
                <a
                  key={ep.ep}
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-xl bg-white/[0.04] ring-1 ring-white/10 hover:ring-coral/40 hover:bg-white/[0.08] p-4 transition-all"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    POD 0{ep.ep}
                  </span>
                  <p className="mt-2 text-2xl font-black text-coral tabular tracking-tight">
                    {ep.views}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.16em] text-white/50 group-hover:text-coral transition-colors">
                    WATCH <ArrowUpRight size={10} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* selected brand work */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
                SELECTED BRAND WORK
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="font-mono text-[10px] tabular text-ink-muted">
                Real numbers · Not vanity
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {selectedWork.map((w, i) => (
                <motion.article
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[22px] p-7 bg-white/78 backdrop-blur-md ring-1 ring-rose-mist/55 hover:ring-coral/40 transition-all overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-coral/8 blur-3xl pointer-events-none" />
                  <header className="relative flex items-center gap-2 mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-coral bg-coral/10 ring-1 ring-coral/20 px-2.5 py-1 rounded-full tabular">
                      {w.tag}
                    </span>
                    <span className="font-mono text-[10px] text-ink-faint tabular">
                      No.{String(i + 1).padStart(2, '0')}
                    </span>
                  </header>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-ink-faint">
                    {w.brand}
                  </p>
                  <h4 className="relative mt-1 text-lg font-black text-ink tracking-tight leading-tight">
                    {w.project}
                  </h4>
                  <p className="relative mt-3 text-[14px] text-ink-muted leading-[1.55] [text-wrap:pretty]">
                    {w.blurb}
                  </p>
                  <footer className="relative mt-6 pt-5 border-t hairline flex items-baseline justify-between">
                    <div>
                      <p className="text-3xl font-black text-coral tabular leading-none tracking-tight">
                        {w.headline}
                      </p>
                      <p className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-ink-faint">
                        {w.headlineLabel}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted tabular">
                      {w.detail}
                    </span>
                  </footer>
                </motion.article>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* full video index */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <div className="rounded-[24px] bg-white/55 backdrop-blur-md ring-1 ring-rose-mist/60 p-6 sm:p-9">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
                FULL VIDEO INDEX
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="text-[10px] font-mono text-ink-muted tabular">
                {totalVideos} VIDEOS
              </span>
            </div>
            <div className="space-y-7">
              {videoIndex.map((group) => (
                <div key={group.title}>
                  <div className="flex items-baseline justify-between mb-3 pb-2 border-b hairline gap-3">
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink font-bold">
                      {group.title}
                    </h4>
                    <span className="text-[10px] font-mono text-ink-muted tabular shrink-0">
                      TOTAL: {group.total}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                    {group.videos.map((v, i) => (
                      <li key={`${group.title}-${i}`}>
                        <a
                          href={v.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-coral/10 transition-colors"
                        >
                          <span className="text-[13px] text-ink-secondary group-hover:text-ink truncate">
                            {v.label}
                          </span>
                          <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-mono text-coral tabular">
                            {v.views}
                            <ArrowUpRight size={10} />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
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
      q: 'Is this free?',
      a: 'Yes, invite-only but free. Members get cohort access, the wall, weekly rituals, and city events. Premium tracks for protocols come separately.',
    },
    {
      q: 'Who fits?',
      a: "People building at the seam of AI and Web3. Founders, researchers, marketers, ops folks, vibe coders. You don't have to be senior, you have to be shipping.",
    },
    {
      q: 'How do invites work?',
      a: "Every member gets one invite a month. We also open the doors on Fridays, drop your work in the open application and a member will pick it up.",
    },
    {
      q: 'Do you record sessions?',
      a: "No. The deal is: nothing leaves the room. That's why people show their actual work here.",
    },
    {
      q: 'Where does this live?',
      a: "The wall lives in a private Discord-meets-Substack space. Events are IRL and on-cam. You'll get the link the day you're in.",
    },
  ]

  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 08</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">SOFTBALL QUESTIONS</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="h-section mt-6">
                Things people ask <br className="hidden sm:block" />
                <span className="serif-italic text-coral">before joining.</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="slideUp" delay={0.1} className="col-span-12 lg:col-span-4">
            <p className="text-ink-muted/85 text-lg leading-snug">
              Short answers. No marketing speak.
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
   11. JOIN, final glassy CTA with avatar collage
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
      className="relative overflow-hidden"
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
                WORK WITH ME
              </span>
              <h2 className="h-section mt-6">
                Let&apos;s Build Your Next{' '}
                <span className="serif-italic text-coral">Growth System.</span>
              </h2>
              <p className="text-lead mt-7 max-w-xl mx-auto [text-wrap:pretty]">
                Tell me what you&apos;re building. I&apos;ll reply within a day with the
                shortest path from where you are to revenue.
              </p>

              <div className="mt-9 max-w-md mx-auto">
                <InviteForm />
              </div>
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
      <BrandMarquee />
      <StatsStrip />
      <WhatIDo />
      <HowItWorks />
      <CitiesSection />
      <CreatorHub />
      <Testimonials />
      <FAQSection />
      <JoinSection />
    </>
  )
}
