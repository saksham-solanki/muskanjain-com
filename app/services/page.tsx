'use client'

import Link from 'next/link'
import {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

const iconMap: Record<string, React.ElementType> = {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function ServicesPage() {
  const initiatives = siteConfig.community.initiatives
  const services = siteConfig.services

  return (
    <main className="min-h-screen pt-24">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}>
        <div className="absolute top-[14%] right-[12%] w-[340px] h-[340px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 01</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE ROOMS</span>
              </div>
              <h1 className="display-tight mt-7 text-ink" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}>
                <span className="block">five rooms</span>
                <span className="block serif-italic text-coral mt-1">inside the room.</span>
              </h1>
              <p className="mt-9 max-w-xl text-base sm:text-[17px] text-ink-secondary/85 leading-[1.55] [text-wrap:pretty]">
                services, but soft. cohorts you actually finish. each room is a
                small group of builders working on the same problem at the same
                time — with the bots, dashboards, and prompts shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Rooms (initiatives) ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 02</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">WHAT WE BUILD TOGETHER</span>
              </div>
              <h2 className="display-tight mt-6 text-ink text-4xl sm:text-5xl lg:text-[3.5rem]">
                pick a room.{' '}
                <span className="serif-italic text-coral">show up.</span>{' '}
                ship.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                each room runs on its own cadence. join one, or stack a few.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {initiatives.map((init, i) => {
              const Icon = iconMap[init.icon] ?? Users
              const matchService = services[i] // 1:1 mapping with the service slugs
              return (
                <motion.div
                  key={init.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                >
                  <Link
                    href={`/services/${matchService?.slug ?? ''}`}
                    className={cn(
                      'group relative flex flex-col rounded-[22px] p-7 h-full overflow-hidden',
                      'bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55',
                      'hover:ring-coral/40 hover:bg-white/90 hover:-translate-y-1',
                      'transition-all duration-300 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.14)]',
                    )}
                  >
                    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="font-mono text-[10px] tabular text-ink-faint">
                      room no.{String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="mt-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                      <Icon size={20} className="text-coral" />
                    </div>
                    <h3 className="mt-5 text-xl font-black text-ink lowercase tracking-tight">
                      {init.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-ink-muted leading-[1.55] flex-1 [text-wrap:pretty]">
                      {init.clientFacing}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1.5 bg-coral-muted text-coral text-xs font-medium rounded-full tabular">
                        {init.metric}
                      </span>
                      <ArrowRight size={16} className="text-ink-faint group-hover:text-coral group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Tiers (membership tracks) ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <RevealOnScroll variant="blur">
              <span className="section-label">MEMBERSHIP TRACKS</span>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                three ways to{' '}
                <span className="serif-italic text-coral">show up.</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="slideUp" delay={0.1}>
              <p className="mt-6 serif-italic text-ink-muted/85 text-lg leading-snug">
                every track starts with the audit. then you pick the depth.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {siteConfig.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className={cn(
                  'relative rounded-[22px] p-8 flex flex-col bg-white/78 backdrop-blur-md ring-1',
                  tier.popular
                    ? 'ring-2 ring-coral shadow-[0_18px_48px_-16px_rgba(255,107,107,0.3)]'
                    : 'ring-rose-mist/55 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.12)]',
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-coral text-white text-[11px] font-bold uppercase tracking-[0.14em] rounded-full">
                    <Sparkles size={11} fill="currentColor" />
                    most picked
                  </div>
                )}
                <span className="font-mono text-[11px] tabular text-coral font-bold uppercase tracking-[0.16em]">
                  {tier.timeline}
                </span>
                <h3 className="mt-3 text-2xl font-black text-ink lowercase tracking-tight">
                  {tier.name.toLowerCase()}
                </h3>
                <p className="mt-3 text-[15px] text-ink-muted leading-[1.55] mb-6 [text-wrap:pretty]">
                  {tier.description}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <Check size={15} className="text-coral mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#join"
                  className={cn(
                    'mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all',
                    tier.popular
                      ? 'bg-ink text-white hover:bg-ink/85'
                      : 'bg-coral-muted text-coral hover:bg-coral/15',
                  )}
                >
                  request invite
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)' }}>
        <div className="container-width section-padding relative text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20">
            <Sparkles size={11} />
            THE DOOR IS OPEN TODAY
          </span>
          <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem] max-w-3xl mx-auto">
            ready to{' '}
            <span className="serif-italic text-coral">show up?</span>
          </h2>
          <Link href="/#join" className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300">
            request invite
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
