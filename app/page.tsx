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
import WorkflowsSection from '@/components/sections/WorkflowsSection'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import BrandMarquee from '@/components/sections/BrandMarquee'
import WhyMe from '@/components/sections/WhyMe'
import ComparisonTable from '@/components/sections/ComparisonTable'

/* Three.js scenes, dynamically imported (client only, no SSR) */
const HeroAmbient = dynamic(
  () => import('@/components/r3f/HeroAmbient').then((m) => m.HeroAmbient),
  { ssr: false, loading: () => null },
)

/* ─── Editorial portrait, conic frame + floating metric chips ── */
function HeroPortrait() {
  return (
    <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] mx-auto lg:ml-auto lg:mr-0">
      {/* Coral glow halo */}
      <div className="absolute -inset-10 rounded-[44px] bg-gradient-to-br from-coral/35 via-rose-mist/40 to-[#FFE6D2]/45 blur-3xl -z-10" />

      {/* Rotating conic gradient frame */}
      <div
        className="absolute -inset-[3px] rounded-[31px] opacity-80 -z-[1]"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(255,107,107,0.55) 90deg, transparent 180deg, rgba(255,107,107,0.3) 270deg, transparent 360deg)',
          animation: 'spin 14s linear infinite',
        }}
      />

      {/* Photo card */}
      <div
        className="relative aspect-[4/5] rounded-[28px] overflow-hidden ring-1 ring-white/70 shadow-[0_30px_80px_-22px_rgba(255,107,107,0.45)] bg-[#FFE0DA]"
        style={{ filter: 'saturate(1.05) contrast(1.02)' }}
      >
        <Image
          src="/muskan.jpeg"
          alt="Muskan Jain, GTM operator and founder of The Build Club"
          width={760}
          height={950}
          priority
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 340px, 280px"
          className="w-full h-full object-cover"
        />

        {/* Bottom gradient overlay for caption legibility */}
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-ink/65 via-ink/25 to-transparent pointer-events-none" />

        {/* In-photo caption row */}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
              Operator
            </p>
            <p className="text-[15px] font-bold text-white tracking-tight mt-0.5">
              Muskan Jain
            </p>
            <p className="text-[11px] text-white/65 tracking-wide">
              Dubai · GTM × AI × Web3
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md rounded-full px-2.5 py-1 ring-1 ring-white/25">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-positive opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/85">
              Available
            </span>
          </span>
        </div>
      </div>

      {/* Floating chip — pipeline (top right, light) */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.95, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-4 -right-3 sm:-right-5 lg:-right-7"
      >
        <div className="bg-white rounded-2xl px-4 py-2.5 shadow-[0_18px_40px_-12px_rgba(26,26,46,0.25)] ring-1 ring-rose-mist/70">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-faint">
            Pipeline Driven
          </p>
          <p className="text-[22px] font-black text-coral tabular leading-none mt-1">
            $340K
          </p>
        </div>
      </motion.div>

      {/* Floating chip — events (bottom left, dark) */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 -left-3 sm:-left-5 lg:-left-7"
      >
        <div className="bg-ink text-white rounded-2xl px-4 py-2.5 shadow-[0_18px_40px_-12px_rgba(26,26,46,0.4)]">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50">
            DeKoded · Cities
          </p>
          <p className="text-[20px] font-black tabular leading-none mt-1 flex items-baseline gap-1.5">
            8
            <span className="text-coral text-[11px] font-mono uppercase tracking-wider">
              shipped
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO , editorial composition with trust strip + scroll cue
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const trustBrands = [
    { name: 'Canton', dot: '#10B981' },
    { name: 'KRNL', dot: '#FF6B6B' },
    { name: 'Smallest AI', dot: '#8B5CF6' },
    { name: 'Symbiote', dot: '#06B6D4' },
    { name: 'Bhindi AI', dot: '#F59E0B' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Pastel sky gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'linear-gradient(170deg, #B6CCE5 0%, #E5C5BC 25%, #FFD0C4 50%, #FFE0DA 78%, #FFEFEB 100%)',
        }}
      />
      {/* Three.js ambient particle field */}
      <HeroAmbient className="absolute inset-0 -z-10 opacity-90" />
      {/* Sun glow */}
      <div className="absolute top-[12%] right-[8%] w-[420px] h-[420px] rounded-full bg-[#FFE6D2]/85 blur-[120px] -z-10 pointer-events-none" />
      {/* Coral haze, bottom-left */}
      <div className="absolute bottom-[-6rem] left-[-10rem] w-[520px] h-[520px] rounded-full bg-coral/15 blur-[150px] -z-10 pointer-events-none" />

      <div className="container-width relative z-10 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT — copy column */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-7"
          >
            {/* Eyebrow row */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-coral/50" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
                Hi, I&apos;m Muskan · GTM × AI × Web3
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-black text-ink [text-wrap:balance]"
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.035em',
                fontFeatureSettings: "'ss01', 'salt', 'case'",
              }}
            >
              4 Years in GTM. Now I build{' '}
              <span className="serif-italic font-normal text-coral">content engines</span>,{' '}
              <span className="serif-italic font-normal text-coral">outbound flows</span>, and the boring middle of the funnel,{' '}
              <span className="relative inline-block whitespace-nowrap">
                using&#160;AI
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-[6px] bg-coral/25 rounded-full -z-[1]"
                />
              </span>
              .
            </motion.h1>

            {/* Subhead — editorial serif italic, quoted */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-ink-secondary serif-italic [text-wrap:pretty]"
              style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', lineHeight: 1.5 }}
            >
              &ldquo;Now I help you do the same — without burning a year figuring
              it out.&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
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

            {/* Trust strip — currently building with */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t hairline"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-ink/15" />
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
                  Currently Building With
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {trustBrands.map((b) => (
                  <span
                    key={b.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/65 backdrop-blur-sm ring-1 ring-rose-mist/60 text-xs font-semibold text-ink"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: b.dot }}
                    />
                    {b.name}
                  </span>
                ))}
                <span className="font-mono text-[11px] tracking-wide text-ink-faint pl-1">
                  + more
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — portrait with floating chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5 mt-6 lg:mt-0"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-ink-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-coral" />
        </motion.span>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-blush -z-[5]" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. EVENTS, DeKoded series, hosted end-to-end
   (CityGlobe r3f scene removed — all 8 cities now ship a real photo)
   ═══════════════════════════════════════════════════════════════ */
function CitiesSection() {
  const events = siteConfig.community.cities
  const shipped = events.filter((e) => e.status === 'shipped')

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

        {/* Shipped rooms — uniform 3×2 grid, every card same size + treatment */}
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

            <RevealOnScroll
              variant="slideUp"
              stagger={0.05}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
            >
              {shipped.map((event) => (
                <EventCard
                  key={event.name}
                  event={event}
                  index={events.indexOf(event)}
                />
              ))}
            </RevealOnScroll>

            {/* Footer CTA banner — separate from the events grid, full width */}
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-white/85 to-cream-pink/85 ring-1 ring-coral/25 backdrop-blur-md p-7 sm:p-9 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-coral/15 blur-[100px] pointer-events-none"
                />
                <div className="relative flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-coral tabular font-bold">
                    NEXT ROOM
                  </p>
                  <p className="mt-3 text-2xl sm:text-3xl font-black text-ink tracking-tight leading-tight [text-wrap:balance]">
                    Your city,{' '}
                    <span className="serif-italic font-normal text-coral">
                      next
                    </span>
                    ?
                  </p>
                  <p className="mt-3 text-[14px] sm:text-[15px] text-ink-muted leading-[1.55] max-w-md [text-wrap:pretty]">
                    Drop a note if you want DeKoded in your town. I pick one
                    new city a quarter — early notes get the front of the
                    line.
                  </p>
                </div>
                <Link
                  href="#join"
                  className="relative shrink-0 group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-white text-sm font-bold hover:bg-ink/85 transition-colors shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)]"
                >
                  Pitch your city
                  <ArrowUpRight
                    size={14}
                    className="text-coral transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </RevealOnScroll>
          </>
        )}
      </div>
    </section>
  )
}

/* Fallback poster when a city has no image. All 8 cities currently
   carry a real Unsplash URL, so this should never render — kept as
   a safety net so a missing image never breaks layout. */
function EventPoster({
  code,
  status,
}: {
  code: string
  status?: string
}) {
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
      <span className="absolute top-2 left-2 font-mono text-[9px] text-coral/30 select-none">+</span>
      <span className="absolute top-2 right-2 font-mono text-[9px] text-coral/30 select-none">+</span>
      <span className="absolute bottom-2 left-2 font-mono text-[9px] text-coral/30 select-none">+</span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-coral/30 select-none">+</span>

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

      <div className="relative text-center px-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
          DEKODED ROOM
        </p>
      </div>

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
  // Widen to allow future cities that haven't been photographed yet — keeps the
  // EventPoster fallback reachable per the type system.
  const image: string | undefined = event.image || undefined
  const headline = metrics[0]
  const restMetrics = metrics.slice(1, 3)

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
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent pointer-events-none"
            />
          </>
        ) : (
          <EventPoster code={event.emoji} status={event.status} />
        )}

        {/* Quiet city-code chip, top-left */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] font-mono font-bold tracking-[0.2em] text-ink shadow-sm tabular">
          <MapPin size={10} className="text-coral" />
          {event.emoji}
        </div>
      </div>

      {/* body */}
      <div
        className={cn(
          'flex flex-col flex-1',
          featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6',
        )}
      >
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

        {blurb && (
          <p className="mt-2 text-small text-ink-muted leading-[1.55] [text-wrap:pretty]">
            {blurb}
          </p>
        )}

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

        {/* Series bento — UNIFORM 3×2 grid. Every card same size, same skin.
            Hierarchy lives in the view-count number, not in card sizing. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {series.map((s, i) => {
            const Icon = s.icon
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
                className="group relative rounded-[22px] overflow-hidden ring-1 transition-all flex flex-col bg-white/78 backdrop-blur-md ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/92"
              >
                {/* Hover coral wash */}
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10 flex flex-col h-full p-6 sm:p-7">
                  <header className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl grid place-items-center ring-1 bg-coral/10 ring-coral/20 text-coral">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full tabular ring-1 text-coral bg-coral/10 ring-coral/15">
                      {s.tag}
                    </span>
                  </header>

                  <h3 className="font-black tracking-tight [text-wrap:balance] text-xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-[1.55] [text-wrap:pretty] text-ink-muted text-[14px]">
                    {s.subtitle}
                  </p>

                  <footer className="mt-auto pt-5 border-t hairline flex items-baseline justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-coral tabular tracking-[-0.03em]">
                      {s.views}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-faint">
                      TOTAL VIEWS
                    </span>
                  </footer>
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

        {/* selected brand work — numbered editorial list (NOT a card grid).
            Each row is one selected case study, magazine-style. Reads as a
            curated portfolio, visually distinct from the bento above. */}
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
            <ol className="rounded-[22px] bg-white/65 backdrop-blur-md ring-1 ring-rose-mist/55 overflow-hidden divide-y divide-ink/8">
              {selectedWork.map((w, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative grid grid-cols-12 gap-4 sm:gap-6 px-5 sm:px-7 lg:px-9 py-7 sm:py-8 hover:bg-coral/[0.04] transition-colors"
                >
                  {/* Left rail: big mono number */}
                  <div className="col-span-2 sm:col-span-1 flex items-start">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-coral tabular tracking-[-0.04em] leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Middle: brand + tag + project + blurb */}
                  <div className="col-span-10 sm:col-span-7 lg:col-span-8 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink-faint tabular">
                        {w.brand}
                      </p>
                      <span className="text-ink-faint/40">·</span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-coral bg-coral/10 ring-1 ring-coral/15 px-2 py-0.5 rounded-full tabular">
                        {w.tag}
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-ink tracking-tight leading-tight [text-wrap:balance]">
                      {w.project}
                    </h4>
                    <p className="mt-2 text-[14px] sm:text-[15px] text-ink-muted leading-[1.55] [text-wrap:pretty] max-w-2xl">
                      {w.blurb}
                    </p>
                  </div>

                  {/* Right rail: big metric + detail */}
                  <div className="col-span-12 sm:col-span-4 lg:col-span-3 flex flex-col items-start sm:items-end justify-start sm:text-right gap-1">
                    <p className="text-3xl sm:text-4xl font-black text-coral tabular leading-none tracking-[-0.03em]">
                      {w.headline}
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-faint">
                      {w.headlineLabel}
                    </p>
                    <span className="mt-2 text-[10px] font-mono uppercase tracking-[0.16em] text-ink-muted tabular">
                      {w.detail}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ol>
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
                <span className="eyebrow">No. 10</span>
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
      <WorkflowsSection />
      <HowItWorks />
      <CitiesSection />
      <CreatorHub />
      <WhyMe />
      <ComparisonTable />
      <Testimonials />
      <FAQSection />
      <JoinSection />
    </>
  )
}
