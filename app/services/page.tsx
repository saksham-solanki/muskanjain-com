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
  Star,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={28} strokeWidth={1.5} />,
  Radar: <Radar size={28} strokeWidth={1.5} />,
  PenTool: <PenTool size={28} strokeWidth={1.5} />,
  BarChart3: <BarChart3 size={28} strokeWidth={1.5} />,
  Rocket: <Rocket size={28} strokeWidth={1.5} />,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero (Dark) ── */}
      <section className="bg-[#1A1A2E] section-padding pt-32 sm:pt-36 pb-20">
        <div className="container-width text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#FF6B6B] bg-[#FF6B6B]/10 rounded-full mb-8"
          >
            the full stack
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6"
          >
            5 ai systems.{' '}
            <span className="text-[#FF6B6B]">one gtm machine.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            community bots. signal-based outbound. 52+ posts per month. on-chain
            attribution. sybil-resistant launches. all built by AI agents, running
            24/7, at 1/5th the cost of traditional agencies.
          </motion.p>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="bg-[#FFF0F0] section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="section-label mb-4 inline-block">services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] tracking-tight">
              what we deploy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {siteConfig.services.map((service, i) => (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    'group relative flex flex-col bg-white rounded-[16px] p-8 h-full',
                    'shadow-soft ring-1 ring-black/[0.04]',
                    'hover:shadow-medium hover:ring-[#FF6B6B]/20 hover:-translate-y-1',
                    'transition-all duration-300'
                  )}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center mb-5">
                    {iconMap[service.icon]}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2 group-hover:text-[#FF6B6B] transition-colors">
                    {service.title.toLowerCase()}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B6B80] text-[15px] leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Metric Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF6B6B]/10 text-[#FF6B6B] text-sm font-semibold rounded-full w-fit mb-4">
                    {service.metric}
                  </div>

                  {/* Learn More */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B6B] group-hover:gap-2.5 transition-all">
                    learn more
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Tiers ── */}
      <section className="bg-[#FFE4E1] section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="section-label mb-4 inline-block">
              engagement tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] tracking-tight mb-4">
              three ways to start
            </h2>
            <p className="text-[#6B6B80] text-lg max-w-xl mx-auto">
              every engagement starts with an audit. from there, pick the depth
              that matches your stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className={cn(
                  'relative bg-white rounded-[16px] p-8 flex flex-col',
                  'shadow-soft ring-1 ring-black/[0.04]',
                  tier.popular && 'ring-2 ring-[#FF6B6B] shadow-[0_4px_16px_rgba(255,107,107,0.15)]'
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 bg-[#FF6B6B] text-white text-xs font-semibold rounded-full">
                    <Star size={12} fill="currentColor" />
                    most popular
                  </div>
                )}

                <p className="text-xs font-semibold text-[#9B9BAD] uppercase tracking-[0.08em] mb-1">
                  {tier.timeline}
                </p>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                  {tier.name.toLowerCase()}
                </h3>
                <p className="text-[#6B6B80] text-[15px] leading-relaxed mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[#2D2D44]"
                    >
                      <Check
                        size={16}
                        className="text-[#FF6B6B] mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={siteConfig.links.calendly}
                  className={cn(
                    'mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors',
                    tier.popular
                      ? 'bg-[#FF6B6B] text-white hover:bg-[#FF5252]'
                      : 'bg-[#FF6B6B]/10 text-[#FF6B6B] hover:bg-[#FF6B6B]/20'
                  )}
                >
                  get started
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A1A2E] section-padding">
        <div className="container-width text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
          >
            ready to build your gtm machine?
          </motion.h2>
          <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
            book a 30-minute call. i will map your current gtm gaps and show
            you exactly which systems to deploy first.
          </p>
          <Link
            href={siteConfig.links.calendly}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6B6B] text-white font-semibold rounded-full shadow-[0_4px_16px_rgba(255,107,107,0.25)] hover:bg-[#FF5252] transition-colors"
          >
            book a call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
