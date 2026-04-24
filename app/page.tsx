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
  Check,
  ChevronDown,
  X,
} from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { TextRotate } from '@/components/ui/text-rotate'
import { CountUp } from '@/components/ui/count-up'
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import { heroStagger, fadeUp, ease } from '@/lib/motion'

const iconMap: Record<string, React.ElementType> = {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-midnight text-white overflow-hidden">
      {/* Background: animated grid */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.12}
        duration={5}
        className="stroke-white/[0.06] fill-white/[0.03]"
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-coral/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-coral/[0.04] blur-[120px] pointer-events-none" />

      <div className="container-width relative z-10 py-32 sm:py-40">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow pill */}
          <motion.div variants={fadeUp}>
            <span className="section-label">{siteConfig.hero.eyebrow}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl"
          >
            ai agents that run your{' '}
            <span className="text-coral">web3 gtm</span>{' '}
            while you sleep
          </motion.h1>

          {/* Rotating verticals */}
          <motion.div variants={fadeUp} className="mt-6">
            <p className="text-lg sm:text-xl text-white/50">
              built for{' '}
              <TextRotate
                texts={siteConfig.hero.rotatingPhrases as unknown as string[]}
                className="text-coral font-semibold"
                rotationInterval={2400}
              />
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-white/40 max-w-2xl leading-relaxed"
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <Link
              href={siteConfig.hero.primaryCTA.href}
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-medium text-white bg-coral rounded-full shadow-coral hover:bg-coral-hover hover:shadow-[0_6px_24px_rgba(255,107,107,0.35)] transition-all duration-300"
            >
              {siteConfig.hero.primaryCTA.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={siteConfig.hero.secondaryCTA.href}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white border border-white/20 rounded-full hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              {siteConfig.hero.secondaryCTA.label}
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 w-full max-w-3xl"
          >
            {siteConfig.hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-coral">{stat.value}</p>
                <p className="text-xs text-white/35 mt-1.5 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to blush */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blush to-transparent" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   2. PAIN POINT MARQUEE
   ═══════════════════════════════════════════════════════════════ */
function PainPointMarquee() {
  const items = siteConfig.painPoints
  const doubled = [...items, ...items]

  return (
    <section className="bg-blush py-6 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 40s linear infinite',
          willChange: 'transform',
        }}
      >
        {doubled.map((point, i) => (
          <span key={i} className="mx-6 flex items-center gap-3 text-sm shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-coral/60 shrink-0" />
            <span className="font-bold text-coral">{point.stat}</span>
            <span className="text-ink-muted">{point.label}</span>
          </span>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   3. SERVICES
   ═══════════════════════════════════════════════════════════════ */
function ServicesSection() {
  const services = siteConfig.services

  return (
    <section id="services" className="bg-blush section-padding">
      <div className="container-width">
        <RevealOnScroll variant="blur" className="text-center mb-14">
          <span className="section-label">WHAT I BUILD</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            5 ai systems that replace your<br className="hidden sm:block" /> entire marketing team
          </h2>
        </RevealOnScroll>

        {/* Creative layout: first card full-width, then 2x2 */}
        <div className="space-y-6">
          {/* Featured first card */}
          <RevealOnScroll variant="slideUp" delay={0.1}>
            <ServiceCard service={services[0]} featured />
          </RevealOnScroll>

          {/* 2x2 grid */}
          <RevealOnScroll
            variant="slideUp"
            stagger={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.slice(1).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  featured = false,
}: {
  service: (typeof siteConfig.services)[number]
  featured?: boolean
}) {
  const Icon = iconMap[service.icon] || Users

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group block bg-white rounded-[16px] p-8 shadow-soft ring-1 ring-rose-mist/50',
        'hover:ring-coral/30 hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300',
        featured && 'sm:flex sm:items-start sm:gap-8',
      )}
    >
      <div className={cn('shrink-0', featured && 'sm:w-16')}>
        <div className="w-12 h-12 rounded-xl bg-coral-muted flex items-center justify-center mb-5 sm:mb-0">
          <Icon size={22} className="text-coral" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className={cn(
          'font-bold text-ink mb-2',
          featured ? 'text-xl sm:text-2xl' : 'text-lg',
        )}>
          {service.title}
        </h3>
        <p className={cn(
          'text-ink-muted leading-relaxed mb-4',
          featured ? 'text-base max-w-2xl' : 'text-sm',
        )}>
          {service.clientFacing}
        </p>
        <span className="inline-flex items-center px-3.5 py-1.5 text-xs font-medium text-coral bg-coral-muted rounded-full">
          {service.metric}
        </span>
      </div>
      <ArrowRight
        size={18}
        className="hidden sm:block text-ink-faint group-hover:text-coral group-hover:translate-x-1 transition-all duration-300 mt-2 shrink-0"
      />
    </Link>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4. HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'audit',
      desc: 'we map your current GTM, identify automation opportunities, and build a 90-day roadmap',
    },
    {
      num: '02',
      title: 'build',
      desc: 'we deploy AI agents trained on your protocol, brand, and audience. production-grade, not prototypes.',
    },
    {
      num: '03',
      title: 'scale',
      desc: 'agents run 24/7. you get weekly reports, monthly attribution, and continuous optimization.',
    },
  ]

  return (
    <section className="bg-soft-pink section-padding">
      <div className="container-width">
        <RevealOnScroll variant="blur" className="text-center mb-16">
          <span className="section-label">THE PROCESS</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            three steps. zero fluff.
          </h2>
        </RevealOnScroll>

        <div className="max-w-4xl mx-auto">
          {/* Horizontal layout on desktop, vertical on mobile */}
          <RevealOnScroll
            variant="slideUp"
            stagger={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative"
          >
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center md:text-left">
                {/* Connecting line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px bg-coral/20" />
                )}
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-5xl sm:text-6xl font-black text-coral/20 leading-none mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-bold text-ink mb-3">{step.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. COMPARISON
   ═══════════════════════════════════════════════════════════════ */
function ComparisonSection() {
  const traditional = [
    '$25K-$70K/month',
    'human teams, 9-5',
    'manual community moderation',
    '2-5 posts per month',
    'vanity metrics (impressions)',
    '4-8 week onboarding',
  ]
  const aiNative = [
    '$5K-$25K/month',
    'AI agents, 24/7',
    '80% automated moderation',
    '52+ posts per month',
    'on-chain attribution',
    '1-2 week deployment',
  ]

  return (
    <section className="bg-blush section-padding">
      <div className="container-width">
        <RevealOnScroll variant="blur" className="text-center mb-14">
          <span className="section-label">THE DIFFERENCE</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            why this isn't another agency
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="slideUp" className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[16px] shadow-soft ring-1 ring-rose-mist/50 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-rose-mist/30">
              <div className="px-6 py-4 text-center">
                <p className="text-sm font-medium text-ink-muted">traditional agencies</p>
              </div>
              <div className="px-6 py-4 text-center bg-coral-muted/50">
                <p className="text-sm font-bold text-coral">ai-native gtm</p>
              </div>
            </div>

            {/* Rows */}
            {traditional.map((item, i) => (
              <div
                key={i}
                className={cn(
                  'grid grid-cols-2',
                  i < traditional.length - 1 && 'border-b border-rose-mist/20',
                )}
              >
                <div className="px-6 py-4 flex items-center">
                  <span className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <X size={14} className="text-ink-faint shrink-0" />
                    <span className="line-through decoration-ink-faint/40">{item}</span>
                  </span>
                </div>
                <div className="px-6 py-4 flex items-center bg-coral-muted/30">
                  <span className="flex items-center gap-2.5 text-sm text-ink font-medium">
                    <Check size={14} className="text-coral shrink-0" />
                    {aiNative[i]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   6. STATS
   ═══════════════════════════════════════════════════════════════ */
function StatsSection() {
  const stats = [
    { value: 80, suffix: '%', label: 'queries automated' },
    { value: 52, suffix: '+', label: 'posts per month' },
    { value: 88, suffix: '%', label: 'airdrop failure rate we fix' },
    { value: 70, suffix: '%', label: 'onboarding drop we prevent' },
  ]

  return (
    <section className="bg-midnight text-white section-padding">
      <div className="container-width">
        <RevealOnScroll
          variant="scaleIn"
          stagger={0.12}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-coral leading-none">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/40 mt-3 leading-snug">{stat.label}</p>
            </div>
          ))}
        </RevealOnScroll>

        {/* Extra stat: text callout */}
        <RevealOnScroll variant="fade" delay={0.5} className="text-center mt-12">
          <p className="text-lg sm:text-xl text-white/30">
            community AI payback:{' '}
            <span className="text-coral font-bold">3-5 days</span>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   7. TIERS
   ═══════════════════════════════════════════════════════════════ */
function TiersSection() {
  return (
    <section className="bg-blush section-padding">
      <div className="container-width">
        <RevealOnScroll variant="blur" className="text-center mb-14">
          <span className="section-label">WORK WITH ME</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            pick your pace
          </h2>
        </RevealOnScroll>

        <RevealOnScroll
          variant="slideUp"
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
        >
          {siteConfig.tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'group bg-white rounded-[16px] p-7 sm:p-8 shadow-soft ring-1 flex flex-col relative',
                'hover:-translate-y-1 transition-all duration-300',
                tier.popular
                  ? 'ring-coral ring-2 hover:shadow-[0_12px_40px_rgba(255,107,107,0.15)]'
                  : 'ring-rose-mist/50 hover:ring-coral/20 hover:shadow-medium',
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 text-xs font-semibold text-white bg-coral rounded-full shadow-coral">
                  most popular
                </span>
              )}

              <h3 className="text-xl font-bold text-ink">{tier.name}</h3>
              <span className="inline-flex items-center mt-2 px-3 py-1 text-xs font-medium text-coral bg-coral-muted rounded-full w-fit">
                {tier.timeline}
              </span>
              <p className="text-sm text-ink-muted mt-4 leading-relaxed">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                    <Check size={15} className="text-coral mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={siteConfig.links.calendly}
                className={cn(
                  'mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition-all duration-300',
                  tier.popular
                    ? 'bg-coral text-white shadow-coral hover:bg-coral-hover hover:shadow-[0_6px_24px_rgba(255,107,107,0.35)]'
                    : 'bg-coral-muted text-coral hover:bg-coral/10',
                )}
              >
                book a call
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   8. FAQ
   ═══════════════════════════════════════════════════════════════ */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="bg-soft-pink section-padding">
      <div className="container-width">
        <RevealOnScroll variant="blur" className="text-center mb-14">
          <span className="section-label">QUESTIONS</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            things people ask me
          </h2>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto space-y-3">
          {siteConfig.faqs.map((faq, i) => (
            <BlurFade key={i} delay={i * 0.05} yOffset={6} blur={4}>
              <div className="bg-white rounded-[16px] ring-1 ring-rose-mist/40 shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="text-sm sm:text-base font-medium text-ink pr-4 group-hover:text-coral transition-colors">
                    {faq.q}
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
                      <p className="px-6 pb-6 text-sm text-ink-muted leading-relaxed">
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
   9. FINAL CTA
   ═══════════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="relative bg-midnight text-white section-padding overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coral/[0.06] blur-[140px] pointer-events-none animate-glow-pulse" />

      <div className="container-width relative z-10 text-center">
        <BlurFade delay={0.1} yOffset={16}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            ready to stop burning cash on manual marketing?
          </h2>
        </BlurFade>

        <BlurFade delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href={siteConfig.links.calendly}
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-medium text-white bg-coral rounded-full shadow-coral hover:bg-coral-hover hover:shadow-[0_6px_24px_rgba(255,107,107,0.35)] transition-all duration-300"
            >
              book a call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white border border-white/20 rounded-full hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              get the free gtm audit
            </Link>
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
      <PainPointMarquee />
      <ServicesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <StatsSection />
      <TiersSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
