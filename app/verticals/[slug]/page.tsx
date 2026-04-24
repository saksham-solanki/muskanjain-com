'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
  ArrowRight,
  AlertCircle,
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

/* ── Per-vertical detailed content ── */

interface VerticalDetail {
  headline: string
  marketContext: string
  painPoints: { title: string; detail: string }[]
  serviceSlugs: string[]
}

const verticalContent: Record<string, VerticalDetail> = {
  defi: {
    headline: 'defi protocols are invisible in AI search, hemorrhaging users with broken funnels, and can\'t produce content fast enough.',
    marketContext: '$129B TVL. the most competitive web3 vertical. every protocol fights for the same liquidity, same users, same mindshare.',
    painPoints: [
      { title: 'invisible in AI search', detail: 'when VCs ask perplexity "best defi lending protocols," your protocol doesn\'t show up. AI citations drive deal flow now.' },
      { title: '70%+ bounce rates', detail: 'dark mode sites with "Launch App" as the only CTA. users leave before understanding what your protocol does.' },
      { title: 'content can\'t keep up', detail: 'protocol updates, new features, competitor launches. most projects produce 2-5 posts/month when they need 52+.' },
      { title: 'no attribution', detail: 'web analytics can\'t see on-chain behavior. 70-80% of marketing budget is a guess.' },
    ],
    serviceSlugs: ['community-engine', 'gtm-engine', 'content-system', 'growth-intelligence', 'launch-engine'],
  },
  rwa: {
    headline: 'institutional buyers research via AI before investing. if you\'re not cited, you\'re not in the consideration set.',
    marketContext: '$29.2B market with 185.8% YTD growth. the fastest-growing web3 vertical, bridging tradfi and crypto.',
    painPoints: [
      { title: 'AI-first due diligence', detail: 'institutional allocators use AI research tools before due diligence calls. zero AI citations means zero consideration.' },
      { title: 'compliance complexity', detail: 'MiCA, VARA, and jurisdiction-specific regulations make content creation slow and expensive. you need scale without sacrificing accuracy.' },
      { title: 'trust signals required', detail: 'institutional buyers need authority signals at every touchpoint. your content must demonstrate expertise, not just exist.' },
    ],
    serviceSlugs: ['content-system', 'gtm-engine', 'growth-intelligence'],
  },
  'l1-l2': {
    headline: 'chains compete on developer acquisition, ecosystem visibility, and "why build here" comparisons. growth is existential.',
    marketContext: 'multi-trillion aggregate market. every chain fights for developers, dApps, TVL, and mindshare.',
    painPoints: [
      { title: 'developer acquisition', detail: 'when a developer asks "which chain should I build on?", your chain needs to be the answer. AI search is the new discovery layer.' },
      { title: 'ecosystem visibility', detail: 'ecosystem visibility drives TVL, dApp deployment, and partnership opportunities. most chains are invisible outside crypto twitter.' },
      { title: 'chain comparison queries', detail: '"solana vs avalanche", "base vs arbitrum" get thousands of searches monthly. nobody ranks for these.' },
      { title: 'community at scale', detail: 'developer communities need 24/7 support across discord and telegram. human moderators can\'t scale.' },
    ],
    serviceSlugs: ['community-engine', 'gtm-engine', 'content-system', 'growth-intelligence', 'launch-engine'],
  },
  daos: {
    headline: 'governance turnout below 10%, community costs spiraling, and treasury decisions made without enough participation.',
    marketContext: '550+ projects. rapidly evolving governance models, AI agent integration, and community-driven coordination.',
    painPoints: [
      { title: 'governance participation', detail: 'less than 10% voter turnout on critical proposals. proposals fail quorum. decisions get made by a tiny minority.' },
      { title: 'community costs', detail: 'community management costs scale linearly while budgets don\'t. $5K-$15K/month on moderators answering the same questions.' },
      { title: 'treasury mismanagement', detail: 'no data-driven allocation. marketing spend has zero attribution. millions in treasury with no ROI tracking.' },
    ],
    serviceSlugs: ['community-engine', 'content-system', 'growth-intelligence'],
  },
  gamefi: {
    headline: 'blockchain gaming needs mainstream onboarding, content at scale, and community-driven growth to survive the next cycle.',
    marketContext: '$17.47B market cap. DeFi mechanics integration is creating new hybrid gaming models.',
    painPoints: [
      { title: 'mainstream onboarding', detail: '70% of users drop off during wallet setup. mainstream gamers don\'t search crypto-native terms. bridge content is critical.' },
      { title: 'content at launch scale', detail: 'game launches require massive content output: guides, comparisons, reviews, tutorials. most teams can\'t produce fast enough.' },
      { title: 'community management', detail: 'gaming communities are high-volume, high-engagement. discord servers with 50K+ members need 24/7 moderation and support.' },
    ],
    serviceSlugs: ['community-engine', 'content-system', 'launch-engine'],
  },
  depin: {
    headline: 'explaining decentralized physical infrastructure to people who don\'t know what it means. simplicity at scale.',
    marketContext: 'emerging market with early but accelerating growth. massive potential if the story can be told simply.',
    painPoints: [
      { title: 'complexity translation', detail: 'your ICP includes non-crypto audiences: IoT buyers, enterprise, hardware operators. they use completely different search patterns.' },
      { title: 'technical content gap', detail: 'content needs to be accurate enough for engineers but accessible enough for business buyers. most projects can\'t do both.' },
      { title: 'developer relations', detail: 'building a developer ecosystem requires documentation, tutorials, and community support at scale.' },
    ],
    serviceSlugs: ['content-system', 'gtm-engine'],
  },
  'nft-fi': {
    headline: 'NFT lending and fractionalization need liquidity, engagement, and market education. most potential users don\'t know these products exist.',
    marketContext: 'growing market blending DeFi mechanics with NFT ownership. novel financial primitives need explanation.',
    painPoints: [
      { title: 'low liquidity chicken-and-egg', detail: 'you need users to bootstrap the liquidity flywheel. but users need liquidity to see value. education is the unlock.' },
      { title: 'market education gap', detail: 'NFT lending and fractionalization are novel concepts. your audience needs education before they need your product.' },
      { title: 'engagement decay', detail: 'NFT communities spike at mint and decay fast. sustaining engagement requires content, utility, and community investment.' },
    ],
    serviceSlugs: ['community-engine', 'content-system', 'launch-engine'],
  },
}

const verticalIcons: Record<string, React.ReactNode> = {
  defi: <TrendingUp size={32} strokeWidth={1.5} />,
  rwa: <Landmark size={32} strokeWidth={1.5} />,
  'l1-l2': <Layers size={32} strokeWidth={1.5} />,
  daos: <Vote size={32} strokeWidth={1.5} />,
  gamefi: <Gamepad2 size={32} strokeWidth={1.5} />,
  depin: <Cpu size={32} strokeWidth={1.5} />,
  'nft-fi': <Gem size={32} strokeWidth={1.5} />,
}

const serviceIconMap: Record<string, React.ReactNode> = {
  'community-engine': <Users size={20} strokeWidth={1.5} />,
  'gtm-engine': <Radar size={20} strokeWidth={1.5} />,
  'content-system': <PenTool size={20} strokeWidth={1.5} />,
  'growth-intelligence': <BarChart3 size={20} strokeWidth={1.5} />,
  'launch-engine': <Rocket size={20} strokeWidth={1.5} />,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export default function VerticalPage() {
  const { slug } = useParams<{ slug: string }>()

  const vertical = siteConfig.verticals.find((v) => v.slug === slug)
  if (!vertical) notFound()

  const content = verticalContent[slug]
  if (!content) notFound()

  const applicableServices = siteConfig.services.filter((s) =>
    content.serviceSlugs.includes(s.slug)
  )

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#1A1A2E] section-padding pt-32 sm:pt-36">
        <div className="container-width max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/verticals"
              className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-[#FF6B6B] transition-colors mb-8"
            >
              <ArrowRight size={14} className="rotate-180" />
              all verticals
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-14 h-14 rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center mb-6"
          >
            {verticalIcons[slug]}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.08] mb-4"
          >
            ai gtm for {vertical.title.toLowerCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed mb-6"
          >
            {content.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#FF6B6B]/10 text-[#FF6B6B] text-base font-semibold rounded-full">
              {vertical.marketSize}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white/5 text-white/50 text-sm font-medium rounded-full ring-1 ring-white/10">
              {vertical.growth}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Market Context ── */}
      <section className="bg-[#FFE4E1] section-padding-sm">
        <div className="container-width max-w-3xl mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg text-[#2D2D44] leading-relaxed text-center"
          >
            {content.marketContext}
          </motion.p>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="bg-[#FFF0F0] section-padding">
        <div className="container-width max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] tracking-tight mb-2">
              the pain points
            </h2>
            <p className="text-[#6B6B80]">
              specific challenges {vertical.title.toLowerCase()} projects face
              with growth and gtm.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="space-y-4"
          >
            {content.painPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className={cn(
                  'bg-white rounded-[16px] p-6',
                  'shadow-soft ring-1 ring-black/[0.04]'
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A2E] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-[#6B6B80] text-[15px] leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Applicable Services ── */}
      <section className="bg-[#FFE4E1] section-padding">
        <div className="container-width max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] tracking-tight mb-2">
              what i deploy for {vertical.title.toLowerCase()}
            </h2>
            <p className="text-[#6B6B80]">
              {applicableServices.length} of 5 ai systems are directly applicable
              to {vertical.title.toLowerCase()} projects.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {applicableServices.map((service) => (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    'group flex flex-col bg-white rounded-[16px] p-6 h-full',
                    'shadow-soft ring-1 ring-black/[0.04]',
                    'hover:shadow-medium hover:ring-[#FF6B6B]/20 hover:-translate-y-0.5',
                    'transition-all duration-300'
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center mb-4">
                    {serviceIconMap[service.slug]}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-1 group-hover:text-[#FF6B6B] transition-colors">
                    {service.title.toLowerCase()}
                  </h3>
                  <p className="text-[#6B6B80] text-sm leading-relaxed mb-3 flex-1">
                    {service.clientFacing}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] text-xs font-semibold rounded-full">
                      {service.metric}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-[#9B9BAD] group-hover:text-[#FF6B6B] transition-colors"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A1A2E] section-padding">
        <div className="container-width text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              let's grow your {vertical.title.toLowerCase()} project
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              book a 30-minute call. i will map your current gtm gaps and build
              a growth plan specific to {vertical.title.toLowerCase()}.
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
