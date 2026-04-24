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
} from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'

const verticalDescriptions: Record<string, string> = {
  defi: 'lending, DEXs, yield, and derivatives protocols competing for $129B in TVL. invisible in AI search with 70%+ bounce rates.',
  rwa: 'tokenized real-world assets bridging tradfi and crypto. 185.8% YTD growth. institutional buyers research via AI first.',
  'l1-l2': 'layer 1 and layer 2 chains competing for developers, ecosystem growth, and "which chain should i build on?" queries.',
  daos: 'decentralized governance with <10% voter turnout, spiraling community costs, and treasury mismanagement.',
  gamefi: 'blockchain gaming struggling with mainstream onboarding (70% drop-off at wallet setup), content at scale, and community management.',
  depin: 'decentralized physical infrastructure explaining complexity to non-crypto audiences. technical content meets business buyers.',
  'nft-fi': 'NFT lending, fractionalization, and liquidity protocols fighting low engagement and needing market education at scale.',
}

const verticalIcons: Record<string, React.ReactNode> = {
  defi: <TrendingUp size={22} strokeWidth={1.5} />,
  rwa: <Landmark size={22} strokeWidth={1.5} />,
  'l1-l2': <Layers size={22} strokeWidth={1.5} />,
  daos: <Vote size={22} strokeWidth={1.5} />,
  gamefi: <Gamepad2 size={22} strokeWidth={1.5} />,
  depin: <Cpu size={22} strokeWidth={1.5} />,
  'nft-fi': <Gem size={22} strokeWidth={1.5} />,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

export default function VerticalsPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#1A1A2E] section-padding pt-32 sm:pt-36 pb-20">
        <div className="container-width text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#FF6B6B] bg-[#FF6B6B]/10 rounded-full mb-8"
          >
            verticals
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6"
          >
            every vertical.{' '}
            <span className="text-[#FF6B6B]">custom playbook.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            every web3 vertical has unique pain points, audiences, and growth
            dynamics. i build AI systems specific to yours.
          </motion.p>
        </div>
      </section>

      {/* ── Vertical Cards ── */}
      <section className="bg-[#FFF0F0] section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {siteConfig.verticals.map((vertical, i) => (
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
                    'group flex flex-col bg-white rounded-[16px] p-7 h-full',
                    'shadow-soft ring-1 ring-black/[0.04]',
                    'hover:shadow-medium hover:ring-[#FF6B6B]/20 hover:-translate-y-1',
                    'transition-all duration-300'
                  )}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center mb-4">
                    {verticalIcons[vertical.slug]}
                  </div>

                  {/* Title + Full Name */}
                  <h2 className="text-xl font-bold text-[#1A1A2E] mb-0.5 group-hover:text-[#FF6B6B] transition-colors">
                    {vertical.title}
                  </h2>
                  <p className="text-xs text-[#9B9BAD] mb-3">
                    {vertical.fullTitle}
                  </p>

                  {/* Market Size + Growth */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] text-xs font-semibold rounded-full">
                      {vertical.marketSize}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 bg-[#1A1A2E]/5 text-[#6B6B80] text-xs font-medium rounded-full">
                      {vertical.growth}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#6B6B80] text-[15px] leading-relaxed mb-5 flex-1">
                    {verticalDescriptions[vertical.slug]}
                  </p>

                  {/* Link */}
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

      {/* ── CTA ── */}
      <section className="bg-[#1A1A2E] section-padding">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              don't see your vertical?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              i work with any web3 project that needs ai-powered gtm. book a
              call and i will scope it.
            </p>
            <Link
              href={siteConfig.links.calendly}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6B6B] text-white font-semibold rounded-full shadow-[0_4px_16px_rgba(255,107,107,0.25)] hover:bg-[#FF5252] transition-colors"
            >
              book a call
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
