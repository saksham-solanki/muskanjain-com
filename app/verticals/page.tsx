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

const verticalDescriptions: Record<string, string> = {
  defi: 'Lending, DEXs, yield, derivatives. Fighting for $129B in TVL. Invisible in AI search.',
  rwa: 'Tokenized real-world assets. 185.8% YTD growth. Institutional buyers research via AI first.',
  'l1-l2': 'Chains competing for developers, ecosystem, and "which chain should I build on?" queries.',
  daos: 'Decentralized governance with <10% turnout, spiraling community costs, treasury mismanagement.',
  gamefi: 'Blockchain gaming hitting mainstream wallets. 70% drop-off at setup. Content at scale required.',
  depin: 'Decentralized physical infrastructure. Simplicity meets technical depth. Crossover audience.',
  'nft-fi': 'NFT lending and fractionalization. Low liquidity flywheel. Needs market education at scale.',
}

const verticalIcons: Record<string, React.ElementType> = {
  defi: TrendingUp,
  rwa: Landmark,
  'l1-l2': Layers,
  daos: Vote,
  gamefi: Gamepad2,
  depin: Cpu,
  'nft-fi': Gem,
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
  return (
    <main className="min-h-screen pt-24">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}>
        <div className="absolute top-[14%] right-[12%] w-[340px] h-[340px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 01</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE FIELDS</span>
              </div>
              <h1 className="h-display mt-7">
                <span className="block">Seven</span>
                <span className="block serif-italic text-coral">fields</span>
                <span className="block">we cover.</span>
              </h1>
              <p className="text-lead mt-9 max-w-xl [text-wrap:pretty]">
                Every Web3 vertical has its own pain points, audiences, and
                growth dynamics. Members in each field share receipts, prompts,
                and dashboards specific to theirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Field cards ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {siteConfig.verticals.map((vertical, i) => {
              const Icon = verticalIcons[vertical.slug] ?? TrendingUp
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
                      'hover:ring-coral/40 hover:bg-white/90 hover:-translate-y-1',
                      'transition-all duration-300 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.14)]',
                    )}
                  >
                    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] tabular text-ink-faint">
                        FIELD NO.{String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-coral bg-coral-muted rounded-full">
                        {vertical.marketSize}
                      </span>
                    </div>
                    <div className="mt-5 w-12 h-12 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                      <Icon size={20} className="text-coral" />
                    </div>
                    <h2 className="mt-5 text-2xl font-black text-ink tracking-tight group-hover:text-coral transition-colors">
                      {vertical.title}
                    </h2>
                    <p className="text-[11px] text-ink-faint mt-1">
                      {vertical.fullTitle}
                    </p>
                    <p className="mt-4 text-[14px] text-ink-muted leading-[1.55] flex-1 [text-wrap:pretty]">
                      {verticalDescriptions[vertical.slug]}
                    </p>
                    <div className="mt-5 pt-4 border-t hairline flex items-center justify-between">
                      <span className="text-[11px] text-ink-muted serif-italic">
                        {vertical.growth}
                      </span>
                      <ArrowRight size={14} className="text-ink-faint group-hover:text-coral group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)' }}>
        <div className="container-width section-padding relative text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20">
            <Sparkles size={11} />
            DON&apos;T SEE YOUR FIELD?
          </span>
          <h2 className="h-section mt-6 max-w-3xl mx-auto">
            We&apos;ll{' '}
            <span className="serif-italic text-coral">make space</span>{' '}
            for you.
          </h2>
          <p className="mt-6 max-w-md mx-auto text-base text-ink-muted leading-[1.55]">
            New fields open when we have at least three members and a thesis. Tell us what you&apos;re building.
          </p>
          <Link href="/#join" className="mt-9 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300">
            Request Invite
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
