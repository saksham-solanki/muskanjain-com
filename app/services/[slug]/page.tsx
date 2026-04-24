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
  AlertTriangle,
  Zap,
  Wrench,
  Check,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'

/* ── Per-service detailed content ── */

interface ServiceDetail {
  problem: string
  solution: string
  deliverables: string[]
  techStack: string[]
  stats: { label: string; value: string }[]
}

const serviceContent: Record<string, ServiceDetail> = {
  'community-engine': {
    problem:
      'community managers burn $5K-$15K/mo answering the same 50 questions. spam and scams slip through. no analytics. 24/7 coverage requires 3-5 people across timezones.',
    solution:
      'AI bots trained on your protocol docs handle 80% of queries. auto-moderate spam and scams. onboarding flows via Collab.Land/Guild.xyz. sentiment analysis dashboards. all for ~$500/month in API costs.',
    deliverables: [
      'Discord bot trained on your docs',
      'Telegram bot with FAQ automation',
      'Quest integration (Galxe/Zealy)',
      'Community analytics dashboard',
      'Escalation routing to human team',
      'Spam and scam auto-moderation',
      'Onboarding flows for new members',
      'Sentiment analysis and alerts',
    ],
    techStack: [
      'Discord.js',
      'Telegram Bot API',
      'Claude API',
      'Collab.Land',
      'Guild.xyz',
      'Galxe',
      'Zealy',
      'n8n',
    ],
    stats: [
      { label: 'queries automated', value: '80%' },
      { label: 'setup cost', value: '~$250' },
      { label: 'payback period', value: '3-5 days' },
      { label: 'coverage', value: '24/7' },
    ],
  },
  'gtm-engine': {
    problem:
      'BD happens through random telegram DMs and event networking. no pipeline. no CRM. no follow-up system. $50K+ spent on events with zero tracking.',
    solution:
      'AI agents monitor funding rounds, new listings, hiring signals. Clay enriches leads with on-chain data. Claude writes personalized outreach. Instantly/Smartlead sends multi-channel sequences. HubSpot routes responses.',
    deliverables: [
      'Signal detection agents (funding, listings, hires)',
      'Clay enrichment tables with on-chain data',
      'AI copywriting for personalized outreach',
      'Email + LinkedIn + Telegram sequences',
      'CRM integration and pipeline tracking',
      'Event intelligence and follow-up automation',
      'Lead scoring based on on-chain activity',
      'Weekly pipeline reports',
    ],
    techStack: [
      'Clay',
      'n8n',
      'Claude API',
      'Instantly',
      'Heyreach',
      'HubSpot',
      'Crunchbase',
      'CoinGecko',
    ],
    stats: [
      { label: 'pipeline type', value: 'signal-based' },
      { label: 'channels', value: '3+' },
      { label: 'enrichment', value: 'on-chain' },
      { label: 'follow-up', value: 'automated' },
    ],
  },
  'content-system': {
    problem:
      'google classifies crypto as YMYL, enforcing strict quality. most projects produce 2-5 posts/month. no AEO optimization, invisible to AI search engines. SEO keyword difficulty 90+.',
    solution:
      'multi-agent content pipeline: research agent monitors trends, writer agent produces brand-voice content, editor agent fact-checks for YMYL compliance, publisher handles SEO and distribution. 52+ posts per month.',
    deliverables: [
      'Multi-agent content pipeline (15+ agents)',
      'AEO optimization for AI citations',
      'Programmatic SEO (100-500 pages)',
      'Distribution automation (X, LinkedIn, Discord)',
      'Citation tracking dashboard',
      'YMYL compliance checking',
      'Brand voice calibration',
      'Editorial calendar automation',
    ],
    techStack: [
      'Claude API',
      'n8n',
      'Next.js',
      'MDX',
      'Ahrefs',
      'Perplexity',
      'Buffer',
      'Custom agents',
    ],
    stats: [
      { label: 'posts per month', value: '52+' },
      { label: 'pSEO pages', value: '100-500' },
      { label: 'agents in pipeline', value: '15+' },
      { label: 'YMYL compliant', value: '100%' },
    ],
  },
  'growth-intelligence': {
    problem:
      'web analytics can\'t see on-chain behavior. blockchain explorers can\'t attribute acquisition sources. zero unified view. 70-80% of marketing budget is a guess.',
    solution:
      'unified analytics connecting web traffic to wallet activity. KOL attribution. wallet segmentation. retention triggers. campaign optimization based on on-chain data.',
    deliverables: [
      'Formo/Spindl attribution setup',
      'Dune/Nansen analytics dashboards',
      'Cookie3 KOL tracking',
      'Wallet CRM (Absolute Labs)',
      'XMTP/Push Protocol retention triggers',
      'Campaign ROI attribution',
      'Wallet cohort segmentation',
      'Monthly attribution reports',
    ],
    techStack: [
      'Formo',
      'Spindl',
      'Dune Analytics',
      'Nansen',
      'Cookie3',
      'Absolute Labs',
      'XMTP',
      'Push Protocol',
    ],
    stats: [
      { label: 'attribution', value: 'full-stack' },
      { label: 'data sources', value: 'on + off chain' },
      { label: 'budget waste cut', value: '70-80%' },
      { label: 'unique offering', value: 'managed service' },
    ],
  },
  'launch-engine': {
    problem:
      '88% of airdrop tokens crash within months. 70% of rewards go to sybil accounts. 93% of Uniswap airdrop recipients dumped tokens within 7 days.',
    solution:
      'sybil detection before distribution. task-based eligibility filtering mercenaries. quest deployment. KOL automation. post-TGE retention campaigns triggered by on-chain behavior.',
    deliverables: [
      'Sybil detection and filtering',
      'Quest campaigns (Galxe/Zealy/Intract/Layer3)',
      'KOL vetting and automation',
      'Compliant paid ads for launch',
      'Lifecycle marketing automation',
      'Post-TGE retention campaigns',
      'Token distribution optimization',
      'Launch analytics dashboard',
    ],
    techStack: [
      'Galxe',
      'Zealy',
      'Intract',
      'Layer3',
      'Sybil detection APIs',
      'n8n',
      'Claude API',
      'XMTP',
    ],
    stats: [
      { label: 'airdrop success rate', value: '11% industry avg' },
      { label: 'sybil filtering', value: 'pre-distribution' },
      { label: 'quest platforms', value: '4+' },
      { label: 'retention', value: 'on-chain triggered' },
    ],
  },
}

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={32} strokeWidth={1.5} />,
  Radar: <Radar size={32} strokeWidth={1.5} />,
  PenTool: <PenTool size={32} strokeWidth={1.5} />,
  BarChart3: <BarChart3 size={32} strokeWidth={1.5} />,
  Rocket: <Rocket size={32} strokeWidth={1.5} />,
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

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()

  const service = siteConfig.services.find((s) => s.slug === slug)
  if (!service) notFound()

  const content = serviceContent[slug]
  if (!content) notFound()

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
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-[#FF6B6B] transition-colors mb-8"
            >
              <ArrowRight size={14} className="rotate-180" />
              all services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-14 h-14 rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center mb-6"
          >
            {iconMap[service.icon]}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.08] mb-4"
          >
            {service.title.toLowerCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed mb-6"
          >
            {service.clientFacing}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B6B]/10 text-[#FF6B6B] text-base font-semibold rounded-full"
          >
            {service.metric}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
          >
            {content.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-[#232340] rounded-xl p-4 ring-1 ring-white/[0.06]"
              >
                <p className="text-xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/40 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-[#FFE4E1] section-padding">
        <div className="container-width max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] tracking-tight">
                the problem
              </h2>
            </div>

            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-soft ring-1 ring-black/[0.04]">
              <p className="text-lg text-[#2D2D44] leading-relaxed">
                {content.problem}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="bg-[#FFF0F0] section-padding">
        <div className="container-width max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center">
                <Zap size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] tracking-tight">
                what we build
              </h2>
            </div>

            <p className="text-lg text-[#6B6B80] leading-relaxed mb-8">
              {content.solution}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {content.deliverables.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 bg-white rounded-[12px] p-4 shadow-soft ring-1 ring-black/[0.04]"
              >
                <Check size={16} className="text-[#FF6B6B] mt-0.5 shrink-0" />
                <span className="text-sm text-[#2D2D44]">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-[#FFE4E1] section-padding">
        <div className="container-width max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center">
                <Wrench size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] tracking-tight">
                tech stack
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {content.techStack.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white text-[#2D2D44] text-sm font-medium rounded-full shadow-soft ring-1 ring-black/[0.04]"
                >
                  {tool}
                </span>
              ))}
            </div>
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
              ready to deploy {service.shortTitle.toLowerCase()}?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              book a 30-minute call. i will show you exactly how{' '}
              {service.shortTitle.toLowerCase()} works for your protocol.
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
