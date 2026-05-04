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
  ArrowLeft,
  TrendingUp,
  Landmark,
  Layers,
  Vote,
  Gamepad2,
  Cpu,
  Gem,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'

interface VerticalDetail {
  headline: string
  marketContext: string
  buildersAsk: { title: string; detail: string }[]
  serviceSlugs: string[]
}

const verticalContent: Record<string, VerticalDetail> = {
  defi: {
    headline: 'Invisible in AI search, hemorrhaging users with broken funnels, and can\'t produce content fast enough.',
    marketContext: '$129B TVL. The most competitive Web3 vertical. Every protocol fights for the same liquidity, users, and mindshare.',
    buildersAsk: [
      { title: 'How do I show up in AI answers?', detail: 'When VCs ask Perplexity "best DeFi lending protocols," your protocol doesn\'t show up. AI citations drive deal flow now.' },
      { title: 'Why is bounce rate 70%+?', detail: 'Dark-mode sites with "Launch App" as the only CTA. Users leave before understanding what your protocol does.' },
      { title: 'How do I scale content?', detail: 'Protocol updates, features, competitor launches. Most projects produce 2–5 posts/month when they need 52+.' },
      { title: 'Where\'s the budget going?', detail: 'Web analytics can\'t see on-chain behavior. 70–80% of marketing budget is a guess.' },
    ],
    serviceSlugs: ['community-engine', 'gtm-engine', 'content-system', 'growth-intelligence', 'launch-engine'],
  },
  rwa: {
    headline: 'Institutional buyers research via AI before investing. If you\'re not cited, you\'re not in the consideration set.',
    marketContext: '$29.2B market with 185.8% YTD growth. Fastest-growing Web3 vertical. Bridge between TradFi and crypto.',
    buildersAsk: [
      { title: 'How do I pass AI due diligence?', detail: 'Institutional allocators use AI research tools before due-diligence calls. Zero AI citations means zero consideration.' },
      { title: 'How do I scale compliant content?', detail: 'MiCA, VARA, and jurisdiction rules make content slow. You need scale without sacrificing accuracy.' },
      { title: 'Where do trust signals live?', detail: 'Institutional buyers need authority signals at every touchpoint. Your content must demonstrate expertise.' },
    ],
    serviceSlugs: ['content-system', 'gtm-engine', 'growth-intelligence'],
  },
  'l1-l2': {
    headline: 'Chains compete on developer acquisition, ecosystem visibility, and "why build here" comparisons. Growth is existential.',
    marketContext: 'Multi-trillion aggregate market. Every chain fights for developers, dapps, TVL, and mindshare.',
    buildersAsk: [
      { title: 'How do I win developers?', detail: 'When a developer asks "which chain should I build on?", your chain needs to be the answer. AI search is the new discovery layer.' },
      { title: 'How do I grow the ecosystem?', detail: 'Ecosystem visibility drives TVL, dapp deployment, partnerships. Most chains are invisible outside crypto Twitter.' },
      { title: 'Who ranks for chain comparisons?', detail: '"Solana vs Avalanche", "Base vs Arbitrum", thousands of monthly searches. Nobody ranks for these.' },
      { title: 'How do I support 24/7 community?', detail: 'Developer communities need round-the-clock support across Discord and Telegram. Humans can\'t scale.' },
    ],
    serviceSlugs: ['community-engine', 'gtm-engine', 'content-system', 'growth-intelligence', 'launch-engine'],
  },
  daos: {
    headline: 'Governance turnout below 10%, community costs spiraling, and treasury decisions made without enough participation.',
    marketContext: '550+ projects. Rapidly evolving governance models, AI agent integration, and community-driven coordination.',
    buildersAsk: [
      { title: 'Why won\'t people vote?', detail: 'Less than 10% voter turnout on critical proposals. Proposals fail quorum. Tiny minorities make decisions.' },
      { title: 'How do I cut community spend?', detail: 'Community management scales linearly while budgets don\'t. $5K–$15K/month on mods answering the same questions.' },
      { title: 'Where is the treasury going?', detail: 'No data-driven allocation. Zero attribution. Millions in treasury with no ROI tracking.' },
    ],
    serviceSlugs: ['community-engine', 'content-system', 'growth-intelligence'],
  },
  gamefi: {
    headline: 'Blockchain gaming needs mainstream onboarding, content at scale, and community-driven growth to survive the next cycle.',
    marketContext: '$17.47B market cap. DeFi mechanics integration is creating new hybrid gaming models.',
    buildersAsk: [
      { title: 'How do I onboard mainstream?', detail: '70% of users drop off during wallet setup. Mainstream gamers don\'t search crypto-native terms. Bridge content is critical.' },
      { title: 'How do I ship launch content?', detail: 'Game launches require massive output: guides, comparisons, reviews, tutorials. Most teams can\'t produce fast enough.' },
      { title: 'How do I support 50k+ Discords?', detail: 'Gaming communities are high-volume, high-engagement. 50k+ member servers need 24/7 mod and support.' },
    ],
    serviceSlugs: ['community-engine', 'content-system', 'launch-engine'],
  },
  depin: {
    headline: 'Explaining decentralized physical infrastructure to people who don\'t know what it means. Simplicity at scale.',
    marketContext: 'Emerging market with early but accelerating growth. Massive potential if the story can be told simply.',
    buildersAsk: [
      { title: 'How do I talk to non-crypto buyers?', detail: 'Your ICP includes IoT buyers, enterprise, hardware operators. They use completely different search patterns.' },
      { title: 'How do I bridge technical + business?', detail: 'Content needs to be accurate enough for engineers but accessible enough for business buyers. Most projects can\'t do both.' },
      { title: 'How do I build dev relations?', detail: 'Developer ecosystem requires docs, tutorials, community support, at scale.' },
    ],
    serviceSlugs: ['content-system', 'gtm-engine'],
  },
  'nft-fi': {
    headline: 'NFT lending and fractionalization need liquidity, engagement, and market education. Most potential users don\'t know these products exist.',
    marketContext: 'Growing market blending DeFi mechanics with NFT ownership. Novel financial primitives need explanation.',
    buildersAsk: [
      { title: 'How do I bootstrap liquidity?', detail: 'You need users to bootstrap the flywheel. But users need liquidity to see value. Education is the unlock.' },
      { title: 'How do I educate the market?', detail: 'NFT lending and fractionalization are novel. Your audience needs education before they need your product.' },
      { title: 'How do I sustain engagement?', detail: 'NFT communities spike at mint and decay fast. Sustaining engagement requires content, utility, and investment.' },
    ],
    serviceSlugs: ['community-engine', 'content-system', 'launch-engine'],
  },
}

const verticalIcons: Record<string, LucideIcon> = {
  defi: TrendingUp,
  rwa: Landmark,
  'l1-l2': Layers,
  daos: Vote,
  gamefi: Gamepad2,
  depin: Cpu,
  'nft-fi': Gem,
}

const serviceIconMap: Record<string, LucideIcon> = {
  'community-engine': Users,
  'gtm-engine': Radar,
  'content-system': PenTool,
  'growth-intelligence': BarChart3,
  'launch-engine': Rocket,
}

const initiativeMap: Record<string, string> = {
  'community-engine': 'Community Ops Jam',
  'gtm-engine': 'Signal Labs',
  'content-system': 'Content Guild',
  'growth-intelligence': 'On-Chain Reads',
  'launch-engine': 'launch table',
}

export default function VerticalPage() {
  const { slug } = useParams<{ slug: string }>()
  const vertical = siteConfig.verticals.find((v) => v.slug === slug)
  if (!vertical) notFound()
  const content = verticalContent[slug]
  if (!content) notFound()
  const Icon = verticalIcons[slug] ?? TrendingUp

  const applicableServices = siteConfig.services.filter((s) =>
    content.serviceSlugs.includes(s.slug),
  )

  return (
    <main className="min-h-screen pt-24">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}>
        <div className="absolute top-[12%] right-[14%] w-[320px] h-[320px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <Link href="/verticals" className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-coral transition-colors mb-10">
            <ArrowLeft size={14} />
            All Fields
          </Link>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] tabular text-ink-muted">FIELD · {vertical.slug}</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">{vertical.title.toUpperCase()}</span>
              </div>
              <div className="mt-7 w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                <Icon size={24} className="text-coral" />
              </div>
              <h1 className="h-display mt-7">
                <span className="block">Building in</span>
                <span className="block serif-italic text-coral">{vertical.title}.</span>
              </h1>
              <p className="text-lead mt-7 max-w-xl [text-wrap:pretty]">
                {content.headline}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center px-4 py-2 bg-coral/10 text-coral text-sm font-bold rounded-full tabular ring-1 ring-coral/20">
                  {vertical.marketSize}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white/65 text-ink-muted text-sm font-medium rounded-full ring-1 ring-rose-mist/55 serif-italic">
                  {vertical.growth}
                </span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="rounded-[22px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55">
                <span className="font-mono text-[10px] tabular text-ink-faint uppercase">Market context</span>
                <p className="mt-4 text-[15px] text-ink-secondary leading-[1.6] [text-wrap:pretty]">
                  {content.marketContext}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Builders ask ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="section-label">WHAT BUILDERS ASK IN THIS FIELD</span>
              <h2 className="h-section mt-5">
                Same questions,{' '}
                <span className="serif-italic text-coral">different rooms.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-3 max-w-3xl">
            {content.buildersAsk.map((q, i) => (
              <motion.div
                key={q.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[18px] p-6 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tabular text-coral font-bold">
                    Q.{String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    {q.title}
                  </h3>
                </div>
                <p className="mt-3 pl-8 text-[15px] text-ink-muted leading-[1.6] [text-wrap:pretty]">
                  {q.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Rooms that help ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="section-label">ROOMS THAT HELP</span>
              <h2 className="h-section mt-5">
                {applicableServices.length} of 5 rooms{' '}
                <span className="serif-italic text-coral">map directly</span>{' '}
                here.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl">
            {applicableServices.map((service) => {
              const SIcon = serviceIconMap[service.slug] ?? Users
              const roomName = initiativeMap[service.slug] ?? service.title.toLowerCase()
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-[20px] p-6 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 hover:ring-coral/40 hover:bg-white/90 hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                      <SIcon size={18} className="text-coral" />
                    </div>
                    <span className="text-[10px] font-mono tabular text-ink-faint mt-1">
                      room
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-black text-ink lowercase tracking-tight group-hover:text-coral transition-colors">
                    the {roomName} room
                  </h3>
                  <p className="mt-2 text-[14px] text-ink-muted leading-[1.55]">
                    {service.clientFacing}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 bg-coral-muted text-coral text-[11px] font-medium rounded-full">
                      {service.metric}
                    </span>
                    <ArrowRight size={14} className="text-ink-faint group-hover:text-coral group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
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
            BUILDING IN {vertical.title.toUpperCase()}?
          </span>
          <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem] max-w-3xl mx-auto">
            come{' '}
            <span className="serif-italic text-coral">build</span>{' '}
            with the field.
          </h2>
          <Link href="/#join" className={cn('mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300')}>
            Request Invite
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
