'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PenTool,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  MapPin,
  Video,
  MessageSquare,
  Mail,
  Mic,
  Send,
  Star,
} from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { CountUp } from '@/components/ui/count-up'
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { MountainScene } from '@/components/ui/mountain-scene'
import { FloatingPills } from '@/components/ui/floating-pills'
import { InviteForm } from '@/components/forms/InviteForm'
import { cn } from '@/lib/utils'
import { heroStagger, fadeUp } from '@/lib/motion'

/* Three.js scenes — dynamically imported (client only, no SSR) */
const HeroAmbient = dynamic(
  () => import('@/components/r3f/HeroAmbient').then((m) => m.HeroAmbient),
  { ssr: false, loading: () => null },
)
const CityGlobe = dynamic(
  () => import('@/components/r3f/CityGlobe').then((m) => m.CityGlobe),
  { ssr: false, loading: () => null },
)

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

/* ─── Pixelated AI-robot portrait ─────────────────────────── */
function PixelPortrait() {
  return (
    <div className="relative">
      {/* coral glow behind the frame */}
      <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-br from-coral/30 via-rose-mist/30 to-[#FFE6D2]/40 blur-3xl -z-10" />

      {/* tiny serif marginalia */}
      <span className="absolute -top-4 -left-2 serif-italic text-xs text-ink-muted/70 -rotate-3 hidden sm:block">
        Muskan, ~rendered.
      </span>

      <div
        className="relative w-[260px] sm:w-[320px] lg:w-[380px] aspect-[4/5] rounded-[28px] overflow-hidden ring-1 ring-white/70 shadow-[0_30px_80px_-22px_rgba(255,107,107,0.45)] bg-[#FFE0DA]"
        style={{ filter: 'saturate(1.15) contrast(1.08)' }}
      >
        <Image
          src="/muskan.jpeg"
          alt="Muskan Jain"
          width={88}
          height={110}
          priority
          sizes="88px"
          className="w-full h-full object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* tiny mono caption pill */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-ink/80 bg-white/85 backdrop-blur rounded-full ring-1 ring-ink/10 shadow-sm tabular">
        <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
        RENDERED · V0.4
      </div>
    </div>
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
        className="absolute inset-0 -z-20"
        style={{
          background:
            'linear-gradient(170deg, #B6CCE5 0%, #E5C5BC 25%, #FFD0C4 50%, #FFE0DA 78%, #FFEFEB 100%)',
        }}
      />
      {/* Three.js ambient particle field — soft coral dust + lanterns */}
      <HeroAmbient className="absolute inset-0 -z-10 opacity-90" />
      {/* Sun */}
      <div className="absolute top-[14%] right-[12%] w-[360px] h-[360px] rounded-full bg-[#FFE6D2]/80 blur-[110px] -z-10 pointer-events-none" />
      {/* coral haze */}
      <div className="absolute bottom-[-6rem] left-[-10rem] w-[520px] h-[520px] rounded-full bg-coral/15 blur-[150px] -z-10 pointer-events-none" />

      <div className="container-width relative z-10 py-20 sm:py-28">
        {/* 12-col asymmetric grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Center — main headline */}
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
              , and the boring middle of the funnel —{' '}
              <span className="relative inline-block">
                using AI.
                <ScribbleUnderline className="text-coral/75" />
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              className="text-lead mt-7 max-w-lg [text-wrap:pretty]"
            >
              Now I help you do the same — without burning a year figuring it
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
                href="#wall"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 hover:ring-coral/30 transition-all duration-300"
              >
                Peek at the Wall
                <ArrowUpRight size={14} />
              </Link>
              <span className="serif-italic text-sm text-ink-muted/80 ml-1 hidden sm:inline">
                — free, by invite.
              </span>
            </motion.div>

            {/* mini-pulse */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-x-6 max-w-md border-t hairline pt-5 tabular"
            >
              <Pulse label="Cities" value={community.pulse.cities} />
              <Pulse label="Events" value={community.pulse.events} />
              <Pulse label="Ships Together" value={community.pulse.ships} />
            </motion.div>
          </motion.div>

          {/* Right column — pixelated portrait */}
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
              <MountainScene signLabel="Join Us" />
              {/* tiny note */}
              <div className="absolute -top-4 -left-2 lg:-left-6 hidden md:flex items-start gap-1.5 max-w-[160px]">
                <CurlyArrow className="w-12 h-10 text-coral/50 mt-2" />
                <span className="serif-italic text-sm text-ink-muted/80 leading-snug pt-2">
                  The room, illustrated.
                </span>
              </div>
            </div>
          </BlurFade>

          {/* Copy */}
          <div className="col-span-12 lg:col-span-6">
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="h-section">
                Most communities online <br className="hidden sm:block" />
                feel like a <span className="serif-italic text-ink-muted/70">feed.</span>
                <br />
                <span className="relative inline-block mt-2">
                  This one feels like
                  <span className="ml-2 serif-italic text-coral">a room.</span>
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll variant="slideUp" delay={0.1}>
              <p className="text-lead mt-7 max-w-lg [text-wrap:pretty]">
                No pitch decks. No growth-hacker theatre. Just builders showing
                their work in progress, asking real questions, and shipping
                faster because someone&apos;s in the room with them.
              </p>
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
type IconComponent = React.ComponentType<{
  size?: number | string
  strokeWidth?: number | string
  className?: string
}>

type ShipService = {
  slug: string
  title: string
  body: string
  icon: IconComponent
  tag: string
  tagColor: string
  featured?: boolean
}

const shipServices: ShipService[] = [
  {
    slug: 'content-engines',
    title: 'ai content engines',
    body: 'agentic pipelines that research, draft, edit, and publish in your voice. one topic in, twelve platform-ready pieces out. you review for 30 min, the engine ships the rest.',
    icon: PenTool,
    tag: 'Content',
    tagColor: 'bg-[#2D9D78]/10 text-[#2D9D78] ring-[#2D9D78]/20',
  },
  {
    slug: 'ugc-video',
    title: 'ai ugc + short-form video',
    body: 'heygen-style avatars, ai-cloned voiceovers, and auto-edited reels. produce a month of native content for instagram, youtube shorts, and x in a weekend.',
    icon: Video,
    tag: 'Video',
    tagColor: 'bg-coral/10 text-coral ring-coral/25',
  },
  {
    slug: 'reddit-traffic',
    title: 'reddit-led traffic',
    body: 'reddit shows up in 68% of ai-generated answers across google overviews, chatgpt, and perplexity. i build the playbooks that get your brand cited there, not just ranked.',
    icon: MessageSquare,
    tag: 'AI SEO',
    tagColor: 'bg-[#5B8DEF]/10 text-[#5B8DEF] ring-[#5B8DEF]/20',
  },
  {
    slug: 'email-lifecycle',
    title: 'email lifecycle, agentic',
    body: 'i build end to end the email flows your funnel keeps forgetting. signups get welcomed. warm leads get nurtured. the ones who ghosted get pulled back. customers you\'ve been ignoring get expansion plays.',
    icon: Mail,
    tag: 'Lifecycle',
    tagColor: 'bg-[#F0A500]/15 text-[#A87000] ring-[#F0A500]/25',
  },
  {
    slug: 'personal-brand',
    title: 'personal brand, on autopilot',
    body: 'linkedin + x + newsletter, all from one weekly recording. ai ghostwriter trained on your voice. you talk for 30 minutes. it ships for a week.',
    icon: Mic,
    tag: 'Most Aligned',
    tagColor: 'bg-coral text-white ring-coral/40',
    featured: true,
  },
  {
    slug: 'outbound-gtm',
    title: 'ai outbound + gtm engineering',
    body: 'signal-based prospecting, ai-personalized sequences, autonomous follow-ups. clay + n8n + claude. replace two sdrs with one workflow that never sleeps.',
    icon: Send,
    tag: 'Outbound',
    tagColor: 'bg-ink/[0.08] text-ink ring-ink/15',
  },
]

function CommunityWall() {
  return (
    <section id="wall" className="relative bg-soft-pink overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-white/40 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-coral/10 blur-[100px] pointer-events-none" />

      <div className="container-width section-padding relative">
        {/* Header — left aligned with marginalia */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="h-section">
                what i actually{' '}
                <span className="relative inline-block serif-italic text-coral">
                  ship
                  <ScribbleUnderline className="text-coral/70" />
                </span>
                .
              </h2>
            </RevealOnScroll>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-3">
            <RevealOnScroll variant="slideUp" delay={0.1}>
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                the stack i&apos;ve been heads-down on for months. shipped,
                broken, fixed, shipped again.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll
          variant="slideUp"
          stagger={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {shipServices.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </RevealOnScroll>

        <RevealOnScroll variant="slideUp" delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:shadow-[0_14px_40px_-8px_rgba(26,26,46,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles size={15} className="text-coral" />
              See the full workflows
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <span className="serif-italic text-sm text-ink-muted/80">
              — every stage, every tool, no fluff.
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: ShipService
  index: number
}) {
  const tilt = [-0.6, 0.4, -0.3, 0.5, -0.4, 0.3][index] ?? 0
  const lift = [0, -8, -4, -12, -2, -6][index] ?? 0
  const Icon = service.icon

  return (
    <Link
      href={`/services#${service.slug}`}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-soft-pink rounded-[20px]"
      aria-label={`See the workflow for ${service.title}`}
    >
    <motion.article
      whileHover={{ y: lift - 6, rotate: tilt + 0.4 }}
      initial={{ rotate: tilt, y: lift }}
      animate={{ rotate: tilt, y: lift }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative group rounded-[20px] p-6 backdrop-blur-md ring-1 shadow-[0_12px_36px_-14px_rgba(26,26,46,0.16)] hover:shadow-[0_18px_50px_-14px_rgba(255,107,107,0.28)] transition-all',
        service.featured
          ? 'bg-gradient-to-br from-coral/[0.12] via-white/85 to-white/72 ring-coral/30 hover:from-coral/[0.18]'
          : 'bg-white/72 ring-white/85 hover:bg-white/90',
      )}
    >
      {service.featured && (
        <span className="absolute -top-2.5 -right-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.14em] bg-ink text-white shadow-md tabular">
          <Star size={9} className="fill-coral text-coral" />
          For You
        </span>
      )}
      <header className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={cn(
              'h-10 w-10 rounded-xl grid place-items-center ring-1 shrink-0',
              service.featured
                ? 'bg-coral text-white ring-coral/40 shadow-[0_8px_20px_-8px_rgba(255,107,107,0.5)]'
                : 'bg-coral/10 text-coral ring-coral/20',
            )}
          >
            <Icon size={18} strokeWidth={2.2} />
          </div>
          <h3 className="text-[15px] font-bold text-ink leading-snug [text-wrap:balance]">
            {service.title}
          </h3>
        </div>
        <span
          className={cn(
            'text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ring-1 shrink-0',
            service.tagColor,
          )}
        >
          {service.tag}
        </span>
      </header>
      <p className="text-[14px] text-ink-secondary leading-[1.6] [text-wrap:pretty]">
        {service.body}
      </p>
      <footer className="mt-5 pt-4 border-t hairline flex items-center text-[11px] text-ink-faint tabular">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles size={11} className="text-coral/70" />
          ai-built · production-grade
        </span>
        <span className="ml-auto group-hover:text-coral transition-colors">
          See workflow →
        </span>
      </footer>
    </motion.article>
    </Link>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. EVENTS — DeKoded series, hosted end-to-end
   ═══════════════════════════════════════════════════════════════ */
function CitiesSection() {
  const events = siteConfig.community.cities

  return (
    <section id="cities" className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <RevealOnScroll variant="blur">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 04</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">EVENTS, HOSTED</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="h-section mt-6">
                Eight rooms.{' '}
                <span className="serif-italic text-coral">Hundreds</span> of
                founders. <br className="hidden sm:block" />
                One playbook, shipped every time.
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="slideUp" delay={0.1} className="col-span-12 lg:col-span-4">
            <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
              DeKoded — strategy, content, outbound, the room itself. Here&apos;s
              what each one shipped.
            </p>
            <p className="mt-3 text-xs text-ink-faint tabular">
              No badges · No panels · Just receipts
            </p>
          </RevealOnScroll>
        </div>

        {/* 3D city globe — interactive tour visualization */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <div className="mb-16 -mt-2 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-pink/40 to-transparent rounded-[32px] -z-10" />
            <CityGlobe />
          </div>
        </RevealOnScroll>

        <RevealOnScroll
          variant="slideUp"
          stagger={0.05}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {events.map((event, i) => (
            <EventCard key={event.name} event={event} index={i} />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

function EventPoster({ code, status }: { code: string; status?: string }) {
  // Per-city accent gradient — keeps each card visually distinct without photos
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
  return (
    <div className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${grad}`}>
      {/* Corner crops — editorial poster framing */}
      <span className="absolute top-2.5 left-2.5 font-mono text-xs text-coral/50 select-none">+</span>
      <span className="absolute top-2.5 right-2.5 font-mono text-xs text-coral/50 select-none">+</span>
      <span className="absolute bottom-2.5 left-2.5 font-mono text-xs text-coral/50 select-none">+</span>
      <span className="absolute bottom-2.5 right-2.5 font-mono text-xs text-coral/50 select-none">+</span>

      {/* Subtle grain overlay for poster texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.3 0 0 0 0 0.18 0 0 0 0 0.22 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70 mb-2">
          DEKODED ROOM
        </p>
        <p className="font-black text-6xl tracking-[-0.04em] text-ink tabular leading-none">
          {code}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur ring-1 ring-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink/70 tabular">
            {status === 'live' ? 'COHORT LIVE' : status === 'soon' ? 'OPENING SOON' : 'SHIPPED'}
          </span>
        </div>
      </div>
    </div>
  )
}

function EventCard({
  event,
  index,
}: {
  event: (typeof siteConfig.community.cities)[number]
  index: number
}) {
  const statusPill: Record<string, string> = {
    shipped: 'bg-ink/85 text-white',
    live: 'bg-coral text-white',
    soon: 'bg-white/90 text-ink-muted ring-1 ring-ink/10',
  }
  const statusLabel: Record<string, string> = {
    shipped: 'SHIPPED',
    live: 'LIVE',
    soon: 'SOON',
  }
  const blurb = event.blurb ?? ''
  const metrics = event.metrics ?? []
  const image = event.image

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[20px] bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/90 transition-all overflow-hidden flex flex-col"
    >
      {/* image / poster */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Muskan at DeKoded ${event.emoji}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <EventPoster code={event.emoji} status={event.status} />
        )}
        {/* event code chip */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-mono font-bold tracking-[0.2em] text-ink shadow-sm tabular">
          <MapPin size={10} className="text-coral" />
          {event.emoji}
        </div>
        {/* status pill */}
        <div
          className={cn(
            'absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] tabular shadow-sm',
            statusPill[event.status],
          )}
        >
          {event.status === 'live' && (
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          )}
          {statusLabel[event.status]}
        </div>
      </div>

      {/* body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[10px] text-ink-faint tabular">
            No.{String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 bg-ink/8" />
        </div>
        <h3 className="mt-2 text-xl font-black text-ink tracking-tight">
          DeKoded {event.emoji}
          <span className="text-ink-muted/70 font-bold">
            {' '}
            · {event.name}
          </span>
        </h3>
        {blurb && (
          <p className="mt-2 text-[14px] text-ink-muted leading-[1.55] [text-wrap:pretty]">
            {blurb}
          </p>
        )}
        {metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {metrics.map((m) => (
              <span
                key={m}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-coral bg-coral/10 ring-1 ring-coral/15 rounded-full tabular"
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
   6. CREATOR HUB — videos, podcasts, brand work
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
      subtitle: 'Founder podcast — long-form, no fluff.',
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

  // Selected brand work — real outcomes, not placeholder quotes.
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
      title: 'Building KRNL — Phase 1',
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
      title: 'Building KRNL — Phase 2',
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
        { label: 'Video 1', views: '—', url: 'https://x.com/Based_UAE/status/1990741412447445347' },
        { label: 'Video 2', views: '—', url: 'https://x.com/Muskanjain0401/status/1965333893047091383' },
        { label: 'Video 3', views: '—', url: 'https://x.com/Based_UAE/status/1993982948916515192' },
        { label: 'Video 4', views: '—', url: 'https://x.com/Based_UAE/status/2002383780242391045' },
        { label: 'Video 5', views: '—', url: 'https://x.com/Based_UAE/status/1997985861414301982' },
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
        {/* header */}
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
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
            <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
              Series, podcasts, product reviews, brand films. Built and
              shipped, week by week.
            </p>
          </RevealOnScroll>
        </div>

        {/* stats */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-12 max-w-3xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/65 backdrop-blur-md ring-1 ring-rose-mist/60 p-4 sm:p-6"
              >
                <p className="text-3xl sm:text-4xl font-black text-ink tabular tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-ink-faint">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* brand wall */}
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
            <div className="flex flex-wrap gap-2.5">
              {brands.map((b) => (
                <motion.div
                  key={b.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group inline-flex items-center gap-3 pl-3 pr-5 py-3 bg-white/85 backdrop-blur-md ring-1 ring-rose-mist/60 hover:ring-coral/40 hover:bg-white rounded-full transition-all shadow-[0_4px_14px_-8px_rgba(26,26,46,0.1)]"
                >
                  <span
                    className="grid place-items-center h-7 w-7 rounded-full text-white font-black text-[11px] shrink-0 ring-1 ring-white/30 shadow-sm tabular"
                    style={{ backgroundColor: b.hex }}
                  >
                    {b.name[0].toUpperCase()}
                  </span>
                  <span className="text-sm font-bold text-ink tracking-tight">
                    {b.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-xs serif-italic text-ink-muted/85">
              Hands-on collabs across AI, Web3, and the messy middle. Each one
              shipped with metrics, not pitch decks.
            </p>
          </div>
        </RevealOnScroll>

        {/* series cards */}
        <RevealOnScroll
          variant="slideUp"
          delay={0.05}
          stagger={0.05}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {series.map((s) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  'group relative rounded-[20px] p-6 sm:p-7 overflow-hidden ring-1 transition-all',
                  s.featured
                    ? 'bg-gradient-to-br from-coral/12 to-coral/[0.04] ring-coral/25 hover:ring-coral/45'
                    : 'bg-white/72 backdrop-blur-md ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/90',
                )}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <header className="relative flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-coral/10 ring-1 ring-coral/20 grid place-items-center">
                    <Icon size={18} className="text-coral" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-coral bg-coral/10 ring-1 ring-coral/15 px-2.5 py-1 rounded-full tabular">
                    {s.tag}
                  </span>
                </header>
                <h3 className="relative text-xl font-black text-ink tracking-tight">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-[14px] text-ink-muted leading-[1.55] [text-wrap:pretty]">
                  {s.subtitle}
                </p>
                <footer className="relative mt-5 pt-4 border-t hairline flex items-baseline justify-between">
                  <span className="text-2xl font-black text-coral tabular tracking-tight">
                    {s.views}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-faint">
                    TOTAL VIEWS
                  </span>
                </footer>
              </motion.article>
            )
          })}
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
                <span className="eyebrow !text-white/50">No. 06</span>
                <span className="h-px flex-1 max-w-[80px] bg-white/10" />
                <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
                  EVERY WEEK
                </span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="h-section mt-6 text-white">
                The <span className="serif-italic text-coral">rhythm</span>{' '}
                of the room.
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="slideUp" delay={0.1} className="col-span-12 lg:col-span-4">
            <p className="serif-italic text-white/65 text-lg leading-snug">
              Five days. Five small things. One big habit.
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
                <span className="eyebrow">No. 07</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">VOICES FROM INSIDE</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="h-section mt-6">
                Members say it{' '}
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
    { value: 1247, label: 'Builders inside', note: '↑ +47 this week' },
    { value: 14, label: 'Events in the wild', note: 'Since 2024' },
    { value: 312, label: 'Things shipped together', note: 'And counting' },
    { value: 6, label: 'Cities · soon 8', note: 'DXB live · SIN loading' },
  ]

  return (
    <section className="relative bg-soft-pink overflow-hidden">
      <div className="container-width section-padding">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <RevealOnScroll variant="blur">
            <span className="eyebrow tabular">
              <Asterisk size={9} className="inline mr-1.5 text-coral" />
              MEASURED HONESTLY
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="slideUp" delay={0.05}>
            <h2 className="h-section mt-5">
              The pulse, in{' '}
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
      q: 'Is this free?',
      a: 'Yes — invite-only but free. Members get cohort access, the wall, weekly rituals, and city events. Premium tracks for protocols come separately.',
    },
    {
      q: 'Who fits?',
      a: "People building at the seam of AI and Web3. Founders, researchers, marketers, ops folks, vibe coders. You don't have to be senior — you have to be shipping.",
    },
    {
      q: 'How do invites work?',
      a: "Every member gets one invite a month. We also open the doors on Fridays — drop your work in the open application and a member will pick it up.",
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
            <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
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
              <h2 className="h-section mt-6">
                Come build with people who <br className="hidden sm:block" />
                <span className="serif-italic text-coral">actually finish</span>{' '}
                things.
              </h2>
              <p className="text-lead mt-7 max-w-xl mx-auto [text-wrap:pretty]">
                Drop your handle. Tell us what you&apos;re building. A member
                picks it up within a day.
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
      <MountainMoment />
      <CommunityWall />
      <CitiesSection />
      <CreatorHub />
      <RitualsSection />
      <VoicesSection />
      <PulseSection />
      <FAQSection />
      <JoinSection />
    </>
  )
}
