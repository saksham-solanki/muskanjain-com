'use client'

import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  Landmark,
  Layers,
  Vote,
  Gamepad2,
  Cpu,
  Gem,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'
import { Sparkline } from '@/components/ui/sparkline'
import { BlurFade } from '@/components/ui/blur-fade'

// ─── Per-vertical sparkline seeds (12 monotonic-ish values) ────────────────────
const sparklineData: Record<string, number[]> = {
  defi:    [55, 62, 58, 70, 74, 80, 77, 85, 88, 91, 89, 95],
  rwa:     [10, 12, 15, 18, 24, 33, 44, 58, 72, 88, 102, 118],
  'l1-l2': [40, 48, 44, 52, 58, 61, 68, 72, 78, 80, 85, 90],
  daos:    [20, 22, 21, 25, 28, 26, 30, 33, 31, 35, 38, 40],
  gamefi:  [30, 35, 40, 38, 45, 50, 55, 60, 58, 64, 70, 75],
  depin:   [5, 8, 10, 12, 16, 20, 26, 30, 35, 42, 50, 60],
  'nft-fi':[15, 18, 16, 20, 22, 25, 23, 28, 30, 33, 36, 40],
}

// ─── Bar chart data, sorted by numeric value for comparison strip ────────────────────────
const barData: { slug: string; label: string; rawValue: number; display: string }[] = [
  { slug: 'defi',    label: 'DeFi',    rawValue: 129,    display: '$129B TVL' },
  { slug: 'rwa',     label: 'RWA',     rawValue: 29.2,   display: '$29.2B' },
  { slug: 'gamefi',  label: 'GameFi',  rawValue: 17.47,  display: '$17.47B' },
  { slug: 'l1-l2',   label: 'L1/L2',   rawValue: 10,     display: 'multi-trillion' },
  { slug: 'daos',    label: 'DAOs',    rawValue: 5.5,    display: '550+ projects' },
  { slug: 'depin',   label: 'DePIN',   rawValue: 3,      display: 'emerging' },
  { slug: 'nft-fi',  label: 'NFT-Fi',  rawValue: 2,      display: 'growing' },
].sort((a, b) => b.rawValue - a.rawValue)

const verticalIcons: Record<string, React.ComponentType<{ size?: number | string; strokeWidth?: number | string; className?: string }>> = {
  defi: TrendingUp,
  rwa: Landmark,
  'l1-l2': Layers,
  daos: Vote,
  gamefi: Gamepad2,
  depin: Cpu,
  'nft-fi': Gem,
}

const verticalDescriptions: Record<string, string> = {
  defi: 'Lending, DEXs, yield, derivatives. Fighting for $129B in TVL. Invisible in AI search.',
  rwa: 'Tokenized real-world assets. 185.8% YTD growth. Institutional buyers research via AI first.',
  'l1-l2': 'Chains competing for developers, ecosystem, and "which chain should I build on?" queries.',
  daos: 'Decentralized governance with <10% turnout, spiraling community costs, treasury mismanagement.',
  gamefi: 'Blockchain gaming hitting mainstream wallets. 70% drop-off at setup. Content at scale required.',
  depin: 'Decentralized physical infrastructure. Simplicity meets technical depth. Crossover audience.',
  'nft-fi': 'NFT lending and fractionalization. Low liquidity flywheel. Needs market education at scale.',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function VerticalsPage() {
  const maxBarValue = barData[0].rawValue

  return (
    <main className="min-h-screen pt-24">

      {/* ─── Editorial Hero ───────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}
      >
        <div className="absolute top-[14%] right-[12%] w-[340px] h-[340px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
              <BlurFade delay={0}>
                <div className="flex items-center gap-3">
                  <span className="eyebrow">No. 01</span>
                  <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                  <span className="section-label">THE PLAYBOOK</span>
                </div>
              </BlurFade>
              <BlurFade delay={0.08}>
                <h1 className="h-display mt-7">
                  <span className="block">Seven verticals.</span>
                  <span className="block serif-italic text-coral">One playbook.</span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.14}>
                <p className="text-lead mt-9 max-w-xl [text-wrap:pretty]">
                  every web3 vertical has its own pain points, audiences, and
                  growth dynamics. the gtm playbook adapts, community, content,
                  outbound, attribution, to the specific market you&apos;re in.
                </p>
              </BlurFade>
              <BlurFade delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3">
                  {siteConfig.verticals.map((v) => (
                    <span
                      key={v.slug}
                      className="inline-flex items-center px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20"
                    >
                      {v.title}
                    </span>
                  ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vertical Cards Grid ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <BlurFade delay={0}>
            <div className="mb-10">
              <span className="section-label">ALL SEVEN VERTICALS</span>
              <h2 className="h-section mt-4">
                pick your{' '}
                <span className="serif-italic text-coral">field.</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {siteConfig.verticals.map((vertical, i) => {
              const Icon = verticalIcons[vertical.slug] ?? TrendingUp
              const sparkData = sparklineData[vertical.slug] ?? [10,15,12,18,20,25,22,28,30,35,32,40]
              return (
                <motion.div
                  key={vertical.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                >
                  <Link
                    href={`/verticals/${vertical.slug}`}
                    className={cn(
                      'group relative flex flex-col rounded-[22px] p-7 h-full overflow-hidden',
                      'bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55',
                      'hover:ring-coral/40 hover:bg-white/90 hover:-translate-y-1.5',
                      'transition-all duration-300 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.14)]',
                    )}
                  >
                    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header row */}
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] tabular text-ink-faint">
                        FIELD NO.{String(i + 1).padStart(2, '0')}
                      </span>
                      <Sparkline
                        data={sparkData}
                        width={72}
                        height={22}
                        color="#FF6B6B"
                        showFill
                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* Icon */}
                    <div className="mt-5 w-12 h-12 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                      <Icon size={20} className="text-coral" />
                    </div>

                    {/* Title + full title */}
                    <h2 className="mt-5 text-2xl font-black text-ink tracking-tight group-hover:text-coral transition-colors">
                      {vertical.title}
                    </h2>
                    <p className="text-[11px] text-ink-faint mt-0.5">
                      {vertical.fullTitle}
                    </p>

                    {/* Market size, big coral tabular number */}
                    <p className="mt-4 text-[22px] font-black tabular text-coral leading-none">
                      {vertical.marketSize}
                    </p>

                    {/* Growth, italic */}
                    <p className="mt-1.5 text-[13px] serif-italic text-ink-muted">
                      {vertical.growth}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-[14px] text-ink-muted leading-[1.55] flex-1 [text-wrap:pretty]">
                      {verticalDescriptions[vertical.slug]}
                    </p>

                    {/* CTA, revealed on hover */}
                    <div className="mt-5 pt-4 border-t hairline flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-ink-faint group-hover:text-coral transition-colors">
                        See the GTM playbook →
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-ink-faint group-hover:text-coral group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Market Size Comparison Strip ───────────────────────────────────────────────────────────── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <BlurFade delay={0}>
            <div className="mb-10">
              <span className="section-label">MARKET SIZE COMPARISON</span>
              <h2 className="h-section mt-4">
                where the{' '}
                <span className="serif-italic text-coral">money lives.</span>
              </h2>
            </div>
          </BlurFade>
          <div className="max-w-3xl space-y-4">
            {barData.map((item, i) => {
              const pct = (item.rawValue / maxBarValue) * 100
              return (
                <BlurFade key={item.slug} delay={i * 0.06}>
                  <Link
                    href={`/verticals/${item.slug}`}
                    className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    {/* Label */}
                    <span className="w-14 shrink-0 font-mono text-[11px] tabular text-ink-muted uppercase">
                      {item.label}
                    </span>
                    {/* Bar */}
                    <div className="flex-1 h-7 rounded-full bg-rose-mist/40 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-coral"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.9, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    {/* Value */}
                    <span className="w-28 shrink-0 font-mono text-[11px] tabular text-coral font-bold text-right">
                      {item.display}
                    </span>
                  </Link>
                </BlurFade>
              )
            })}
          </div>
          <BlurFade delay={0.5}>
            <p className="mt-8 text-[12px] text-ink-faint font-mono">
              * DeFi shown as $129B (TVL). L1/L2 multi-trillion aggregate proxied for bar scale only.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)' }}
      >
        <div className="container-width section-padding relative text-center">
          <BlurFade delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20">
              <Sparkles size={11} />
              DON&apos;T SEE YOUR VERTICAL?
            </span>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="h-section mt-6 max-w-3xl mx-auto">
              let&apos;s{' '}
              <span className="serif-italic text-coral">talk</span>{' '}
              about your market.
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="mt-6 max-w-md mx-auto text-base text-ink-muted leading-[1.55]">
              the playbook adapts. if you&apos;re building in a vertical not listed,
              book a call and we&apos;ll map the GTM together.
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Link
              href="/book"
              className="mt-9 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Call
              <ArrowRight size={15} />
            </Link>
          </BlurFade>
        </div>
      </section>

    </main>
  )
}
