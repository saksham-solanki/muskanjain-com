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
    whyExists: 'Because community managers burn $5K–$15K/mo answering the same 50 questions. Spam slips through. Mod coverage requires 3–5 people across timezones. Nobody should have to do this manually anymore.',
    howItWorks: 'We build and open-source AI bots together. Every member ships one. Trained on your protocol docs. Handles 80% of queries, auto-mods scams, runs onboarding flows. ~$500/month in API costs replaces a small team. Payback in 3–5 days.',
    shipsTogether: [
      'Discord bot trained on your docs',
      'Telegram bot with FAQ automation',
      'Quest integration (Galxe / Zealy)',
      'Community analytics dashboard',
      'Spam and scam auto-moderation',
      'Onboarding flows for new members',
      'Sentiment analysis with alerts',
      'Escalation routing to human team',
    ],
    toolsShared: ['discord.js', 'telegram-bot-api', 'claude-api', 'collab.land', 'guild.xyz', 'galxe', 'zealy', 'n8n'],
    stats: [
      { label: 'Queries Automated', value: '80%' },
      { label: 'Setup Cost', value: '~$250' },
      { label: 'Payback', value: '3–5 days' },
      { label: 'Coverage', value: '24/7' },
    ],
    rituals: ['Monthly cohort kickoff', 'Wednesday office hours', 'Friday Show & Tell'],
  },
  'gtm-engine': {
    whyExists: 'Because BD in Web3 still happens through Telegram DMs and event networking. No pipeline. No CRM. No follow-up. $50K+ on events with zero tracking. There\'s a better way — and it\'s mostly automated.',
    howItWorks: 'We share signal-detection agents that monitor funding rounds, listings, and hiring signals. Clay enriches with on-chain data. Claude writes personalized outreach. Instantly sends multi-channel sequences. HubSpot routes responses.',
    shipsTogether: [
      'Signal detection agents (funding, listings, hires)',
      'Clay enrichment with on-chain data',
      'AI copywriting for outreach',
      'Email + LinkedIn + Telegram sequences',
      'CRM integration and pipeline tracking',
      'Event intelligence and follow-up',
      'Lead scoring on on-chain activity',
      'Weekly pipeline reports',
    ],
    toolsShared: ['clay', 'n8n', 'claude-api', 'instantly', 'heyreach', 'hubspot', 'crunchbase', 'coingecko'],
    stats: [
      { label: 'Pipeline', value: 'Signal-based' },
      { label: 'Channels', value: '3+' },
      { label: 'Enrichment', value: 'On-chain' },
      { label: 'Follow-up', value: 'Automated' },
    ],
    rituals: ['Every other Tuesday', 'Live sequence reviews', 'Shared receipt thread'],
  },
  'content-system': {
    whyExists: 'Because Google classifies crypto as YMYL, enforcing strict quality. Most projects produce 2–5 posts/month. No AEO optimization. Invisible to AI search. SEO keyword difficulty 90+. You can\'t outsource your way out of this.',
    howItWorks: 'Multi-agent pipeline: research, strategy, writing, editing, publishing. AEO-optimized for AI citations. Programmatic SEO for 100–500 long-tail pages. Distribution across X, LinkedIn, Discord. You bring a draft, you leave with twelve posts.',
    shipsTogether: [
      'Multi-agent content pipeline (15+ agents)',
      'AEO optimization for AI citations',
      'Programmatic SEO (100–500 pages)',
      'Distribution automation (X, LinkedIn, Discord)',
      'Citation tracking dashboard',
      'YMYL compliance checking',
      'Brand voice calibration',
      'Editorial calendar automation',
    ],
    toolsShared: ['claude-api', 'n8n', 'next.js', 'mdx', 'ahrefs', 'perplexity', 'buffer', 'custom-agents'],
    stats: [
      { label: 'Posts / Month', value: '52+' },
      { label: 'pSEO Pages', value: '100–500' },
      { label: 'Agents', value: '15+' },
      { label: 'YMYL Compliant', value: '100%' },
    ],
    rituals: ['Weekly writing pods', 'Monthly distribution audit', 'Shared prompt library'],
  },
  'growth-intelligence': {
    whyExists: 'Because web analytics can\'t see on-chain behavior. Blockchain explorers can\'t attribute acquisition. Zero unified view. 70–80% of marketing budget is a guess. That\'s not okay anymore.',
    howItWorks: 'A slow book club for Dune dashboards, retention curves, and the cohort math nobody else does. We share queries, segments, and triggers — together connecting web traffic to wallet activity.',
    shipsTogether: [
      'Formo / Spindl attribution setup',
      'Dune / Nansen analytics dashboards',
      'Cookie3 KOL tracking',
      'Wallet CRM (Absolute Labs)',
      'XMTP / Push retention triggers',
      'Campaign ROI attribution',
      'Wallet cohort segmentation',
      'Monthly attribution reports',
    ],
    toolsShared: ['formo', 'spindl', 'dune', 'nansen', 'cookie3', 'absolute-labs', 'xmtp', 'push-protocol'],
    stats: [
      { label: 'Attribution', value: 'Full-stack' },
      { label: 'Data', value: 'On + off chain' },
      { label: 'Budget Waste Cut', value: '70–80%' },
      { label: 'Reads', value: 'Thursdays 9pm' },
    ],
    rituals: ['Thursday reads', 'Shared Dune fork', 'Monthly cohort retro'],
  },
  'launch-engine': {
    whyExists: 'Because 88% of airdrop tokens crash. 70% of rewards go to sybils. 93% of Uniswap recipients dumped within 7 days. Launching is the highest-stakes moment, and most projects do it alone.',
    howItWorks: 'Pre-TGE sanity checks. You bring your token plan, the room finds the holes. Sybil detection before distribution. Task-based eligibility. Quest deployment. KOL automation. On-chain retention triggers post-TGE.',
    shipsTogether: [
      'Sybil detection and filtering',
      'Quest campaigns (Galxe / Zealy / Intract / Layer3)',
      'KOL vetting and automation',
      'Compliant paid ads for launch',
      'Lifecycle marketing automation',
      'Post-TGE retention campaigns',
      'Token distribution optimization',
      'Launch analytics dashboard',
    ],
    toolsShared: ['galxe', 'zealy', 'intract', 'layer3', 'sybil-apis', 'n8n', 'claude-api', 'xmtp'],
    stats: [
      { label: 'Industry Success', value: '11%' },
      { label: 'Sybil Filter', value: 'Pre-distro' },
      { label: 'Quest Platforms', value: '4+' },
      { label: 'Retention', value: 'On-chain' },
    ],
    rituals: ['Invite-only table', 'Pre-launch dry run', 'Post-TGE retro'],
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
  'community-engine': 'Community Ops Jam',
  'gtm-engine': 'Signal Labs',
  'content-system': 'Content Guild',
  'growth-intelligence': 'On-Chain Reads',
  'launch-engine': 'Launch Table',
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
            All Rooms
          </Link>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] tabular text-ink-muted">
                  ROOM · {service.slug}
                </span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">{service.shortTitle.toUpperCase()}</span>
              </div>
              <div className="mt-7 w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                <Icon size={24} className="text-coral" />
              </div>
              <h1 className="h-display mt-7">
                <span className="block">The</span>
                <span className="block serif-italic text-coral">{roomName}</span>
                <span className="block">room.</span>
              </h1>
              <p className="text-lead mt-9 max-w-xl [text-wrap:pretty]">
                {service.clientFacing}
              </p>
            </div>

            {/* Stats card */}
            <div className="col-span-12 lg:col-span-4">
              <div className="rounded-[22px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 shadow-[0_14px_36px_-16px_rgba(26,26,46,0.16)]">
                <span className="font-mono text-[10px] tabular text-ink-faint uppercase">
                  The Room, in Numbers
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
                  <p className="text-xs text-ink-muted serif-italic">Rituals</p>
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
                <span className="serif-italic text-coral">Because</span> {content.whyExists.replace(/^because /,'')}
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
                ↳ Less a service, more a cohort.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="text-lead leading-[1.6] [text-wrap:pretty]">
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
              <h2 className="h-section mt-5">
                Eight things you walk out with.
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
                <span className="text-[14px] text-ink-secondary leading-snug">{item}</span>
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
            <h2 className="h-section mt-6 text-white">
              The stack,{' '}
              <span className="serif-italic text-coral">passed around.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {content.toolsShared.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/[0.04] ring-1 ring-white/10 text-sm font-mono tabular text-white/85 rounded-full">
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
          <h2 className="h-section mt-6 max-w-3xl mx-auto">
            Join the{' '}
            <span className="serif-italic text-coral">{roomName}</span>{' '}
            room.
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
