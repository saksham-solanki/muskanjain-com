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
  Sparkles,
  Check,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'

interface ServiceDetail {
  whyExists: string
  howItWorks: string
  shipsTogether: string[]
  toolsShared: string[]
  stats: { label: string; value: string }[]
  rituals: string[]
}

const serviceContent: Record<string, ServiceDetail> = {
  'community-engine': {
    whyExists: 'because community managers burn $5K–$15K/mo answering the same 50 questions. spam slips through. mod coverage requires 3–5 people across timezones. nobody should have to do this manually anymore.',
    howItWorks: 'we build and open-source ai bots together. every member ships one. trained on your protocol docs. handle 80% of queries, auto-mod scams, run onboarding flows. ~$500/month in api costs replaces a small team. payback in 3–5 days.',
    shipsTogether: [
      'discord bot trained on your docs',
      'telegram bot with faq automation',
      'quest integration (galxe / zealy)',
      'community analytics dashboard',
      'spam and scam auto-moderation',
      'onboarding flows for new members',
      'sentiment analysis with alerts',
      'escalation routing to human team',
    ],
    toolsShared: ['discord.js', 'telegram bot api', 'claude api', 'collab.land', 'guild.xyz', 'galxe', 'zealy', 'n8n'],
    stats: [
      { label: 'queries automated', value: '80%' },
      { label: 'setup cost', value: '~$250' },
      { label: 'payback', value: '3–5 days' },
      { label: 'coverage', value: '24/7' },
    ],
    rituals: ['monthly cohort kickoff', 'wednesday office hours', 'friday show & tell'],
  },
  'gtm-engine': {
    whyExists: 'because bd in web3 still happens through telegram dms and event networking. no pipeline. no crm. no follow-up. $50k+ on events with zero tracking. there\'s a better way and it\'s mostly automated.',
    howItWorks: 'we share signal-detection agents that monitor funding rounds, listings, and hiring signals. clay enriches with on-chain data. claude writes personalized outreach. instantly sends multi-channel sequences. hubspot routes responses.',
    shipsTogether: [
      'signal detection agents (funding, listings, hires)',
      'clay enrichment with on-chain data',
      'ai copywriting for outreach',
      'email + linkedin + telegram sequences',
      'crm integration and pipeline tracking',
      'event intelligence and follow-up',
      'lead scoring on on-chain activity',
      'weekly pipeline reports',
    ],
    toolsShared: ['clay', 'n8n', 'claude api', 'instantly', 'heyreach', 'hubspot', 'crunchbase', 'coingecko'],
    stats: [
      { label: 'pipeline', value: 'signal-based' },
      { label: 'channels', value: '3+' },
      { label: 'enrichment', value: 'on-chain' },
      { label: 'follow-up', value: 'automated' },
    ],
    rituals: ['every other tuesday', 'live sequence reviews', 'shared receipt thread'],
  },
  'content-system': {
    whyExists: 'because google classifies crypto as ymyl, enforcing strict quality. most projects produce 2–5 posts/month. no aeo optimization. invisible to ai search. seo keyword difficulty 90+. you can\'t outsource your way out of this.',
    howItWorks: 'multi-agent pipeline: research, strategy, writing, editing, publishing. aeo-optimized for ai citations. programmatic seo for 100–500 long-tail pages. distribution across x, linkedin, discord. you bring a draft, you leave with 12 posts.',
    shipsTogether: [
      'multi-agent content pipeline (15+ agents)',
      'aeo optimization for ai citations',
      'programmatic seo (100–500 pages)',
      'distribution automation (x, linkedin, discord)',
      'citation tracking dashboard',
      'ymyl compliance checking',
      'brand voice calibration',
      'editorial calendar automation',
    ],
    toolsShared: ['claude api', 'n8n', 'next.js', 'mdx', 'ahrefs', 'perplexity', 'buffer', 'custom agents'],
    stats: [
      { label: 'posts / month', value: '52+' },
      { label: 'pseo pages', value: '100–500' },
      { label: 'agents', value: '15+' },
      { label: 'ymyl compliant', value: '100%' },
    ],
    rituals: ['weekly writing pods', 'monthly distribution audit', 'shared prompt library'],
  },
  'growth-intelligence': {
    whyExists: 'because web analytics can\'t see on-chain behavior. blockchain explorers can\'t attribute acquisition. zero unified view. 70–80% of marketing budget is a guess. that\'s not okay anymore.',
    howItWorks: 'a slow book club for dune dashboards, retention curves, and the cohort math nobody else does. we share queries, segments, and triggers — together connect web traffic to wallet activity.',
    shipsTogether: [
      'formo / spindl attribution setup',
      'dune / nansen analytics dashboards',
      'cookie3 kol tracking',
      'wallet crm (absolute labs)',
      'xmtp / push retention triggers',
      'campaign roi attribution',
      'wallet cohort segmentation',
      'monthly attribution reports',
    ],
    toolsShared: ['formo', 'spindl', 'dune', 'nansen', 'cookie3', 'absolute labs', 'xmtp', 'push protocol'],
    stats: [
      { label: 'attribution', value: 'full-stack' },
      { label: 'data', value: 'on + off chain' },
      { label: 'budget waste cut', value: '70–80%' },
      { label: 'reads', value: 'thursdays 9pm' },
    ],
    rituals: ['thursday reads', 'shared dune fork', 'monthly cohort retro'],
  },
  'launch-engine': {
    whyExists: 'because 88% of airdrop tokens crash. 70% of rewards go to sybils. 93% of uniswap recipients dumped within 7 days. launching is the highest-stakes moment and most projects do it alone.',
    howItWorks: 'pre-tge sanity checks. you bring your token plan, the room finds the holes. sybil detection before distribution. task-based eligibility. quest deployment. kol automation. on-chain retention triggers post-tge.',
    shipsTogether: [
      'sybil detection and filtering',
      'quest campaigns (galxe / zealy / intract / layer3)',
      'kol vetting and automation',
      'compliant paid ads for launch',
      'lifecycle marketing automation',
      'post-tge retention campaigns',
      'token distribution optimization',
      'launch analytics dashboard',
    ],
    toolsShared: ['galxe', 'zealy', 'intract', 'layer3', 'sybil apis', 'n8n', 'claude api', 'xmtp'],
    stats: [
      { label: 'industry success', value: '11%' },
      { label: 'sybil filter', value: 'pre-distro' },
      { label: 'quest platforms', value: '4+' },
      { label: 'retention', value: 'on-chain' },
    ],
    rituals: ['invite-only table', 'pre-launch dry run', 'post-tge retro'],
  },
}

const iconMap: Record<string, React.ElementType> = {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
}

const initiativeMap: Record<string, string> = {
  'community-engine': 'community ops jam',
  'gtm-engine': 'signal labs',
  'content-system': 'content guild',
  'growth-intelligence': 'on-chain reads',
  'launch-engine': 'launch table',
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = siteConfig.services.find((s) => s.slug === slug)
  if (!service) notFound()
  const content = serviceContent[slug]
  if (!content) notFound()
  const Icon = iconMap[service.icon] ?? Users
  const roomName = initiativeMap[slug] ?? service.title.toLowerCase()

  return (
    <main className="min-h-screen pt-24">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}>
        <div className="absolute top-[12%] right-[14%] w-[320px] h-[320px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-coral transition-colors mb-10">
            <ArrowLeft size={14} />
            all rooms
          </Link>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] tabular text-ink-muted">
                  room · {service.slug}
                </span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">{service.shortTitle.toUpperCase()}</span>
              </div>
              <div className="mt-7 w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                <Icon size={24} className="text-coral" />
              </div>
              <h1 className="display-tight mt-7 text-ink" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                <span className="block">the</span>
                <span className="block serif-italic text-coral">{roomName}</span>
                <span className="block">room.</span>
              </h1>
              <p className="mt-9 max-w-xl text-base sm:text-[17px] text-ink-secondary/85 leading-[1.55] [text-wrap:pretty]">
                {service.clientFacing}
              </p>
            </div>

            {/* Stats card */}
            <div className="col-span-12 lg:col-span-4">
              <div className="rounded-[22px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 shadow-[0_14px_36px_-16px_rgba(26,26,46,0.16)]">
                <span className="font-mono text-[10px] tabular text-ink-faint">
                  the room, in numbers
                </span>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
                  {content.stats.map((s) => (
                    <li key={s.label}>
                      <p className="text-2xl font-black text-coral leading-none tabular tracking-[-0.04em]">{s.value}</p>
                      <p className="mt-1.5 text-[11px] text-ink-muted uppercase tracking-[0.12em] font-semibold">{s.label}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t hairline">
                  <p className="text-xs text-ink-muted serif-italic">rituals</p>
                  <ul className="mt-2 space-y-1.5">
                    {content.rituals.map((r) => (
                      <li key={r} className="text-sm text-ink flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-coral" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why this room exists ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-10 max-w-5xl mx-auto">
            <div className="col-span-12 lg:col-span-4">
              <span className="section-label">WHY THIS ROOM EXISTS</span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="display-tight text-ink text-2xl sm:text-3xl lg:text-[2.2rem] leading-[1.15] [text-wrap:pretty]">
                <span className="serif-italic text-coral">because</span> {content.whyExists}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-10 max-w-5xl mx-auto">
            <div className="col-span-12 lg:col-span-4">
              <span className="section-label">HOW IT WORKS</span>
              <p className="mt-4 serif-italic text-ink-muted/85 leading-snug">
                ↳ less a service, more a cohort.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="text-[17px] text-ink-secondary leading-[1.6] [text-wrap:pretty]">
                {content.howItWorks}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What we ship together ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="section-label">WHAT WE SHIP TOGETHER</span>
              <h2 className="display-tight mt-5 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                eight things you walk out with.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
            {content.shipsTogether.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 bg-white/72 backdrop-blur-md rounded-[14px] p-4 ring-1 ring-rose-mist/55"
              >
                <span className="font-mono text-[10px] tabular text-ink-faint pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Check size={15} className="text-coral mt-1 shrink-0" />
                <span className="text-[14px] text-ink-secondary leading-snug lowercase">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tools shared ─── */}
      <section className="bg-midnight text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coral/10 blur-[140px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
              TOOLS WE SHARE
            </span>
            <h2 className="display-tight mt-6 text-white text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
              the stack,{' '}
              <span className="serif-italic text-coral">passed around.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {content.toolsShared.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/[0.04] ring-1 ring-white/10 text-sm font-mono tabular text-white/85 rounded-full lowercase">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)' }}>
        <div className="container-width section-padding relative text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20">
            <Sparkles size={11} />
            NEXT COHORT OPEN
          </span>
          <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem] max-w-3xl mx-auto">
            join the{' '}
            <span className="serif-italic text-coral">{roomName}</span>{' '}
            room.
          </h2>
          <Link href="/#join" className={cn('mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300')}>
            request invite
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
