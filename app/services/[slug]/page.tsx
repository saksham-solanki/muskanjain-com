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
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

/* ─────────────────────────────────────────
   Per-slug content data
───────────────────────────────────────── */

interface ServiceDetail {
  roomNumber: string
  oneLiner: string
  painPoint: string
  solutionRole: string
  stackTools: string[]
  deliverables: { title: string; desc: string }[]
  process: {
    title: string
    week: string
    detail: string
  }[]
  whyExists: string
  howItWorks: string
  stats: { label: string; value: string }[]
  rituals: string[]
}

const serviceContent: Record<string, ServiceDetail> = {
  'community-engine': {
    roomNumber: '01',
    oneLiner: 'an ai-powered discord and telegram that handles 80% of queries, mods scams, and onboards members, 24/7, for ~$500/month.',
    painPoint: 'community managers burn $5K–$15K/mo answering the same 50 questions. spam slips through. three timezones, five humans, zero sleep.',
    solutionRole: 'muskan builds and trains bots on your protocol docs, ships moderation flows, and deploys onboarding sequences, so no human has to stay up for singapore.',
    stackTools: ['Discord', 'Telegram', 'n8n', 'Claude API'],
    deliverables: [
      { title: 'Discord bot, doc-trained', desc: 'answers FAQs, routes edge cases to humans, never guesses.' },
      { title: 'Telegram FAQ bot', desc: 'handles the same 50 questions without a moderator awake.' },
      { title: 'Scam + spam filter', desc: 'auto-mods contract addresses, fake giveaways, phishing links.' },
      { title: 'Onboarding flow', desc: 'new-member sequences that get wallets connected in < 5 min.' },
      { title: 'Quest integration', desc: 'Galxe / Zealy hooks so contributions earn points automatically.' },
      { title: 'Sentiment dashboard', desc: 'weekly view of community mood with spike alerts.' },
      { title: 'Escalation routing', desc: "anything the bot can't handle goes to the right human fast." },
      { title: 'Community analytics', desc: 'DAU, retention, and activation tracked in one place.' },
    ],
    process: [
      { title: 'call & audit', week: 'Week 1', detail: 'we map your community structure, top 50 questions, and existing mod coverage. outputs: a bot spec and a priority list.' },
      { title: 'build & train', week: 'Week 2–3', detail: 'we ingest your docs, configure discord.js / Telegram-bot-api, write the prompt layers, and wire n8n workflows end-to-end.' },
      { title: 'review & tune', week: 'Week 4', detail: 'shadow mode for 7 days, bot replies quietly while you review. you flag anything off-brand, we retrain and sharpen.' },
      { title: 'deploy & hand off', week: 'Week 4+', detail: 'flip the switch. moderators move to exception handling. we leave you with the full codebase and a maintenance runbook.' },
    ],
    whyExists: 'community managers burn $5K–$15K/mo answering the same 50 questions. spam slips through. mod coverage requires 3–5 people across timezones. nobody should have to do this manually anymore.',
    howItWorks: 'we build and open-source AI bots together. every member ships one. trained on your protocol docs. handles 80% of queries, auto-mods scams, runs onboarding flows. ~$500/month in API costs replaces a small team. payback in 3–5 days.',
    stats: [
      { label: 'Queries Automated', value: '80%' },
      { label: 'Setup Cost', value: '~$250' },
      { label: 'Payback', value: '3–5 days' },
      { label: 'Coverage', value: '24/7' },
    ],
    rituals: ['Monthly cohort kickoff', 'Wednesday office hours', 'Friday Show & Tell'],
  },
  'gtm-engine': {
    roomNumber: '02',
    oneLiner: 'ai agents that detect funding signals, enrich leads with on-chain data, and send personalized multi-channel outreach, no cold list required.',
    painPoint: 'BD in web3 still happens through Telegram DMs and event networking. no pipeline. no CRM. no follow-up. $50K+ on events with zero tracking.',
    solutionRole: 'muskan deploys signal-detection agents, builds clay enrichment flows with on-chain data, writes personalized outreach with claude, and wires sequences in Instantly and Smartlead.',
    stackTools: ['Clay', 'n8n', 'Claude', 'Instantly', 'Smartlead'],
    deliverables: [
      { title: 'Signal detection agents', desc: 'monitors funding rounds, new listings, and key hires in real time.' },
      { title: 'Clay enrichment flow', desc: 'appends on-chain activity, token holdings, and protocol role to every lead.' },
      { title: 'AI outreach copy', desc: 'Claude writes personalized first lines based on wallet data and recent announcements.' },
      { title: 'Email sequences', desc: 'multi-step campaigns sent through Instantly, tested subject lines, optimal send windows.' },
      { title: 'LinkedIn + Telegram layer', desc: 'channel-specific variants for the three places web3 deals actually happen.' },
      { title: 'CRM pipeline', desc: 'HubSpot stages mapped to signal type so you know where every lead came from.' },
      { title: 'Lead scoring model', desc: 'prioritizes contacts by on-chain behavior, not just job title.' },
      { title: 'Weekly pipeline report', desc: 'signal fired → outreach sent → reply received, all in one dashboard.' },
    ],
    process: [
      { title: 'call & ICP audit', week: 'Week 1', detail: 'we define your ideal counterparty: chain, role, TVL range, hiring signal. outputs: signal dictionary and Clay recipe.' },
      { title: 'build signal layer', week: 'Week 2–3', detail: 'we configure n8n watchers for Crunchbase, CoinGecko, and job boards. Clay tables enriched with on-chain data from Nansen and Dune.' },
      { title: 'write + wire sequences', week: 'Week 4', detail: 'Claude generates variant copy per signal type. Instantly and Smartlead sequences wired. first batch of 50 sends reviewed together.' },
      { title: 'deploy & optimize', week: 'Week 4+', detail: 'campaigns live. weekly signal review call. we iterate subject lines, timing, and copy based on reply rate data.' },
    ],
    whyExists: "BD in web3 still happens through Telegram DMs and event networking. no pipeline. no CRM. no follow-up. $50K+ on events with zero tracking. there's a better way, and it's mostly automated.",
    howItWorks: 'we share signal-detection agents that monitor funding rounds, listings, and hiring signals. Clay enriches with on-chain data. Claude writes personalized outreach. Instantly sends multi-channel sequences. HubSpot routes responses.',
    stats: [
      { label: 'Pipeline', value: 'Signal-based' },
      { label: 'Channels', value: '3+' },
      { label: 'Enrichment', value: 'On-chain' },
      { label: 'Follow-up', value: 'Automated' },
    ],
    rituals: ['Every other Tuesday', 'Live sequence reviews', 'Shared receipt thread'],
  },
  'content-system': {
    roomNumber: '03',
    oneLiner: 'a 15-agent pipeline that turns one brief into 52+ posts per month, AEO-optimized, YMYL-compliant, distributed across X, LinkedIn, and Discord.',
    painPoint: "most web3 projects publish 2–5 posts a month when they need 15–20+. google classifies crypto as YMYL. AI search doesn't cite brands that don't publish consistently.",
    solutionRole: 'muskan designs the multi-agent pipeline, research, strategy, writing, editing, publishing, so content compounds rather than clogs a backlog.',
    stackTools: ['Claude', 'Perplexity', 'HeyGen', 'Descript', 'ElevenLabs'],
    deliverables: [
      { title: 'Multi-agent pipeline', desc: '15+ agents covering research, draft, edit, SEO-review, and schedule in one automated flow.' },
      { title: 'AEO optimization layer', desc: 'formats every post for AI citation: answer-first structure, entity markup, schema.' },
      { title: 'Programmatic SEO build', desc: '100–500 long-tail pages generated from a single keyword matrix.' },
      { title: 'Brand voice doc + calibration', desc: 'Claude fine-tuned on your existing copy so nothing sounds generic.' },
      { title: 'Distribution automation', desc: 'X threads, LinkedIn carousels, and Discord digests scheduled from one source draft.' },
      { title: 'YMYL compliance check', desc: 'every post reviewed for accuracy and disclosure requirements before publish.' },
      { title: 'Citation tracking dashboard', desc: 'monitors which AI models cite your brand and on which queries.' },
      { title: 'Editorial calendar bot', desc: 'slack-native scheduler that queues drafts and pings reviewers automatically.' },
    ],
    process: [
      { title: 'call & voice audit', week: 'Week 1', detail: 'we analyze your existing content, identify ranking opportunities, and build the keyword matrix. outputs: 90-day content strategy and agent spec.' },
      { title: 'build the pipeline', week: 'Week 2–3', detail: 'we configure Claude + Perplexity agents, wire HeyGen and ElevenLabs for video and audio variants, and deploy Descript for auto-editing.' },
      { title: 'run first batch', week: 'Week 4', detail: 'we produce the first 12-post batch together, review brand voice alignment, and calibrate the agent prompts based on your feedback.' },
      { title: 'hand off + automate', week: 'Week 4+', detail: 'pipeline runs on schedule. you brief one topic per week; 10+ assets publish automatically. monthly distribution audit included.' },
    ],
    whyExists: "google classifies crypto as YMYL, enforcing strict quality. most projects produce 2–5 posts/month. no AEO optimization. invisible to AI search. SEO keyword difficulty 90+. you can't outsource your way out of this.",
    howItWorks: 'multi-agent pipeline: research, strategy, writing, editing, publishing. AEO-optimized for AI citations. programmatic SEO for 100–500 long-tail pages. distribution across X, LinkedIn, Discord. you bring a draft, you leave with twelve posts.',
    stats: [
      { label: 'Posts / Month', value: '52+' },
      { label: 'pSEO Pages', value: '100–500' },
      { label: 'Agents', value: '15+' },
      { label: 'YMYL Compliant', value: '100%' },
    ],
    rituals: ['Weekly writing pods', 'Monthly distribution audit', 'Shared prompt library'],
  },
  'growth-intelligence': {
    roomNumber: '04',
    oneLiner: 'full-stack attribution connecting ad spend to wallet transactions, on-chain and off-chain, in one unified dashboard.',
    painPoint: "web analytics can't see on-chain behavior. blockchain explorers can't attribute acquisition. 70–80% of marketing budget is a guess.",
    solutionRole: 'muskan builds the attribution layer, connecting spindl and formo for web-to-wallet tracking, dune for on-chain cohorts, and XMTP triggers for retention loops.',
    stackTools: ['Dune', 'Nansen', 'Spindl', 'Cookie3', 'Formo'],
    deliverables: [
      { title: 'Formo / Spindl attribution', desc: 'web-to-wallet identity resolution so every acquisition source is named.' },
      { title: 'Dune analytics dashboard', desc: 'custom SQL queries for token holder cohorts, retention curves, and churn signals.' },
      { title: 'Nansen wallet segmentation', desc: 'segments whales, active traders, and dormant holders for targeted campaigns.' },
      { title: 'Cookie3 KOL tracking', desc: 'measures which influencers drove actual wallet connects, not just impressions.' },
      { title: 'Wallet CRM (Absolute Labs)', desc: 'CRM layer on top of wallet data for lifecycle messaging.' },
      { title: 'XMTP / Push retention triggers', desc: 'on-chain event → direct wallet message within 60 seconds.' },
      { title: 'Campaign ROI attribution', desc: 'every paid campaign mapped to transactions, not just traffic.' },
      { title: 'Monthly attribution report', desc: "executive summary: what worked, what didn't, what to double down on." },
    ],
    process: [
      { title: 'call & data audit', week: 'Week 1', detail: 'we map your current analytics stack, identify attribution gaps, and design the tracking plan. outputs: data architecture doc and tool selection.' },
      { title: 'build attribution layer', week: 'Week 2–3', detail: 'we deploy Formo + Spindl web-to-wallet tracking, configure Cookie3 for KOL attribution, and write the first Dune dashboards.' },
      { title: 'wire retention triggers', week: 'Week 4', detail: 'XMTP and Push Protocol workflows wired to on-chain events: first swap, 30-day dormancy, governance proposal creation. all reviewed together.' },
      { title: 'run monthly read', week: 'Week 4+', detail: 'thursday analytics sessions: we review cohort data together, surface surprises, and update the dashboards. you leave with answers, not more questions.' },
    ],
    whyExists: "web analytics can't see on-chain behavior. blockchain explorers can't attribute acquisition. zero unified view. 70–80% of marketing budget is a guess. that's not okay anymore.",
    howItWorks: 'a slow book club for dune dashboards, retention curves, and the cohort math nobody else does. we share queries, segments, and triggers, together connecting web traffic to wallet activity.',
    stats: [
      { label: 'Attribution', value: 'Full-stack' },
      { label: 'Data', value: 'On + off chain' },
      { label: 'Budget Waste Cut', value: '70–80%' },
      { label: 'Reads', value: 'Thursdays 9pm' },
    ],
    rituals: ['Thursday reads', 'Shared Dune fork', 'Monthly cohort retro'],
  },
  'launch-engine': {
    roomNumber: '05',
    oneLiner: "sybil-resistant token distribution, quest-based eligibility, and post-TGE on-chain retention, so your launch doesn't crash on day three.",
    painPoint: '88% of airdrop tokens crash. 70% of rewards go to sybils. 93% of Uniswap airdrop recipients dumped within 7 days. launching without a sybil filter is burning capital.',
    solutionRole: 'muskan runs pre-TGE sanity checks, deploys sybil detection before distribution, sets up quest campaigns, automates KOL outreach, and wires post-TGE retention triggers.',
    stackTools: ['Galxe', 'Zealy', 'Layer3', 'XMTP', 'Push'],
    deliverables: [
      { title: 'Pre-TGE sybil audit', desc: 'wallet graph analysis to identify and filter bot clusters before distribution.' },
      { title: 'Task-based eligibility filter', desc: 'replaces passive snapshot airdrop with behavior-gated distribution.' },
      { title: 'Galxe quest campaign', desc: 'designed, deployed, and optimized quest with on-chain completion verification.' },
      { title: 'Zealy / Layer3 integration', desc: 'multi-platform quests for cross-community reach without duplicating rewards.' },
      { title: 'KOL vetting + automation', desc: 'cookie3-verified KOL scoring so you know the follower quality before you pay.' },
      { title: 'Compliant paid ads playbook', desc: "jurisdiction-mapped ad strategy that doesn't get you banned on day one." },
      { title: 'Post-TGE XMTP / Push campaigns', desc: "on-chain triggers that re-engage recipients who haven't interacted yet." },
      { title: 'Launch analytics dashboard', desc: 'tracks token distribution, quest completions, and retention cohorts in real time.' },
    ],
    process: [
      { title: 'call & TGE audit', week: 'Week 1', detail: 'we review your distribution plan, find the sybil risk surface, and map eligibility criteria. outputs: sybil filter spec and quest design brief.' },
      { title: 'build & deploy quests', week: 'Week 2–3', detail: 'we launch Galxe, Zealy, and Layer3 campaigns with on-chain completion hooks. sybil detection APIs wired to your snapshot pipeline.' },
      { title: 'KOL review + ads', week: 'Week 4', detail: 'cookie3 scores run on your KOL shortlist. paid ads playbook delivered with jurisdiction flags noted. first campaign reviewed together.' },
      { title: 'TGE + retention layer', week: 'Week 4+', detail: 'token distributes. XMTP and Push triggers fire for inactive recipients. post-TGE cohort report delivered at 7, 30, and 90 days.' },
    ],
    whyExists: '88% of airdrop tokens crash. 70% of rewards go to sybils. 93% of Uniswap recipients dumped within 7 days. launching is the highest-stakes moment, and most projects do it alone.',
    howItWorks: 'pre-TGE sanity checks. you bring your token plan, the room finds the holes. sybil detection before distribution. task-based eligibility. quest deployment. KOL automation. on-chain retention triggers post-TGE.',
    stats: [
      { label: 'Industry Success', value: '11%' },
      { label: 'Sybil Filter', value: 'Pre-distro' },
      { label: 'Quest Platforms', value: '4+' },
      { label: 'Retention', value: 'On-chain' },
    ],
    rituals: ['Invite-only table', 'Pre-launch dry run', 'Post-TGE retro'],
  },
}

const iconMap: Record<string, React.ComponentType<{ size?: number | string; strokeWidth?: number | string; className?: string }>> = {
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

/* Related rooms per slug (2-3 peers) */
const relatedRoomsMap: Record<string, string[]> = {
  'community-engine': ['gtm-engine', 'launch-engine'],
  'gtm-engine': ['community-engine', 'content-system'],
  'content-system': ['gtm-engine', 'growth-intelligence'],
  'growth-intelligence': ['content-system', 'launch-engine'],
  'launch-engine': ['community-engine', 'growth-intelligence'],
}

/* ─────────────────────────────────────────
   Page Component
───────────────────────────────────────── */
export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = siteConfig.services.find((s) => s.slug === slug)
  if (!service) notFound()
  const content = serviceContent[slug]
  if (!content) notFound()
  const Icon = iconMap[service.icon] ?? Users
  const roomName = initiativeMap[slug] ?? service.title.toLowerCase()

  const relatedSlugs = relatedRoomsMap[slug] ?? []
  const relatedServices = siteConfig.services.filter((s) => relatedSlugs.includes(s.slug))

  const relatedIconMap: Record<string, React.ComponentType<{ size?: number | string; strokeWidth?: number | string; className?: string }>> = {
    Users,
    Radar,
    PenTool,
    BarChart3,
    Rocket,
  }

  return (
    <main className="min-h-screen pt-24">

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}
      >
        <div className="absolute top-[12%] right-[14%] w-[320px] h-[320px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">

          {/* Back link */}
          <BlurFade delay={0} duration={0.4}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-coral transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              All Rooms
            </Link>
          </BlurFade>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left: headline */}
            <div className="col-span-12 lg:col-span-7">

              <BlurFade delay={0.05} duration={0.45}>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-[11px] tabular text-ink-muted">
                    ROOM · {content.roomNumber}
                  </span>
                  <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                  <span className="section-label">{service.shortTitle.toUpperCase()}</span>
                </div>
              </BlurFade>

              <BlurFade delay={0.1} duration={0.5}>
                <div className="mt-7 w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                  <Icon size={24} className="text-coral" />
                </div>
              </BlurFade>

              <BlurFade delay={0.16} duration={0.55}>
                <h1 className="h-display mt-7">
                  <span className="block">The</span>
                  <span className="block serif-italic text-coral">{roomName}</span>
                  <span className="block">room.</span>
                </h1>
              </BlurFade>

              <BlurFade delay={0.22} duration={0.5}>
                <p className="text-lead mt-9 max-w-xl [text-wrap:pretty]">
                  {content.oneLiner}
                </p>
              </BlurFade>
            </div>

            {/* Right: stats card */}
            <div className="col-span-12 lg:col-span-5">
              <BlurFade delay={0.28} duration={0.55}>
                <div className="rounded-[22px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 shadow-[0_14px_36px_-16px_rgba(26,26,46,0.16)]">
                  <span className="font-mono text-[10px] tabular text-ink-faint uppercase">
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
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN → SOLUTION → STACK ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <RevealOnScroll variant="slideUp">
            <div className="mb-10">
              <span className="section-label">THE PROBLEM + THE FIX</span>
              <h2 className="h-section mt-5 max-w-xl">
                where the pain lives,{' '}
                <span className="serif-italic text-coral">and what we do about it.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
            {/* Pain */}
            <RevealOnScroll variant="slideUp" delay={0.05}>
              <div className="rounded-[18px] p-6 bg-[#FFE4E1]/80 ring-1 ring-[#FFB3AD]/60 h-full flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral-deep" />
                  <span className="font-mono text-[10px] tabular text-coral-deep uppercase tracking-[0.14em]">The Pain</span>
                </div>
                <p className="text-[14px] text-ink leading-[1.65] [text-wrap:pretty]">
                  {content.painPoint}
                </p>
              </div>
            </RevealOnScroll>

            {/* Solution */}
            <RevealOnScroll variant="slideUp" delay={0.1}>
              <div className="rounded-[18px] p-6 bg-ink ring-1 ring-ink/80 h-full flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="font-mono text-[10px] tabular text-white/50 uppercase tracking-[0.14em]">The Fix</span>
                </div>
                <p className="text-[14px] text-white/85 leading-[1.65] [text-wrap:pretty]">
                  {content.solutionRole}
                </p>
              </div>
            </RevealOnScroll>

            {/* Stack */}
            <RevealOnScroll variant="slideUp" delay={0.15}>
              <div className="rounded-[18px] p-6 bg-midnight-card ring-1 ring-midnight-border/50 h-full flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral/70" />
                  <span className="font-mono text-[10px] tabular text-coral uppercase tracking-[0.14em]">The Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.stackTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-coral/15 text-coral ring-1 ring-coral/25"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-[12px] text-white/40 mt-auto serif-italic">
                  tools we actually use, not just recommend.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── EIGHT DELIVERABLES ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <RevealOnScroll variant="slideUp">
                <span className="section-label">WHAT WE SHIP TOGETHER</span>
                <h2 className="h-section mt-5">
                  eight things you walk out with.
                </h2>
              </RevealOnScroll>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
            {content.deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 bg-white/72 backdrop-blur-md rounded-[14px] p-5 ring-1 ring-rose-mist/55"
              >
                <span className="font-mono text-[10px] tabular text-ink-faint pt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Check size={15} className="text-coral mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-ink leading-snug">{item.title}</p>
                  <p className="text-[12px] text-ink-muted mt-1 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PROCESS ─── */}
      <section className="bg-midnight text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coral/8 blur-[150px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <RevealOnScroll variant="slideUp">
            <div className="mb-14 text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
                THE PROCESS
              </span>
              <h2 className="h-section mt-6 text-white">
                call → audit → build →{' '}
                <span className="serif-italic text-coral">deploy.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            {/* Staircase */}
            <div className="space-y-0">
              {content.process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6 items-start pb-10 last:pb-0"
                  style={{ paddingLeft: `${i * 1.5}rem` }}
                >
                  {/* Connector line */}
                  {i < content.process.length - 1 && (
                    <div className="absolute left-0 top-8 w-px h-full bg-white/10 hidden sm:block" style={{ left: `calc(${i * 1.5}rem + 1.125rem)` }} />
                  )}

                  {/* Step number circle */}
                  <div className="shrink-0 w-9 h-9 rounded-full bg-coral/15 ring-1 ring-coral/30 grid place-items-center">
                    <span className="font-mono text-[11px] tabular text-coral font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="h-card text-white capitalize">{step.title}</h3>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] bg-coral/20 text-coral ring-1 ring-coral/30">
                        {step.week}
                      </span>
                    </div>
                    <p className="text-[14px] text-white/65 leading-[1.65] max-w-xl [text-wrap:pretty]">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OTHER ROOMS ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <RevealOnScroll variant="slideUp">
            <div className="mb-10">
              <span className="section-label">OTHER ROOMS</span>
              <h2 className="h-section mt-5 max-w-lg">
                these rooms pair well with{' '}
                <span className="serif-italic text-coral">{roomName.toLowerCase()}.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {relatedServices.map((rel, i) => {
              const RelIcon = relatedIconMap[rel.icon] ?? Users
              const relName = initiativeMap[rel.slug] ?? rel.title
              return (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/services/${rel.slug}`}
                    className={cn(
                      'group flex flex-col gap-4 p-6 rounded-[18px] ring-1 ring-rose-mist/55',
                      'bg-white/72 backdrop-blur-md hover:ring-coral/40 hover:shadow-[0_12px_32px_-10px_rgba(255,107,107,0.18)]',
                      'transition-all duration-300',
                    )}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral/20 to-coral/5 ring-1 ring-coral/20 grid place-items-center">
                      <RelIcon size={18} className="text-coral" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tabular text-ink-faint uppercase tracking-[0.12em] mb-1">
                        {rel.shortTitle}
                      </p>
                      <h3 className="h-card text-ink group-hover:text-coral transition-colors">
                        {relName}
                      </h3>
                      <p className="text-[13px] text-ink-muted mt-2 leading-snug">
                        {rel.clientFacing}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-coral text-[12px] font-semibold mt-auto">
                      Enter room <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)' }}
      >
        <div className="container-width section-padding relative text-center">
          <BlurFade delay={0} duration={0.5}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20">
              <Sparkles size={11} />
              NEXT COHORT OPEN
            </span>
          </BlurFade>
          <BlurFade delay={0.08} duration={0.55}>
            <h2 className="h-section mt-6 max-w-3xl mx-auto">
              Join the{' '}
              <span className="serif-italic text-coral">{roomName}</span>{' '}
              room.
            </h2>
          </BlurFade>
          <BlurFade delay={0.16} duration={0.5}>
            <p className="text-lead text-ink-muted max-w-md mx-auto mt-4 [text-wrap:pretty]">
              {service.metric} · {content.rituals[0].toLowerCase()}
            </p>
          </BlurFade>
          <BlurFade delay={0.22} duration={0.5}>
            <Link
              href="/#join"
              className={cn(
                'mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full',
                'shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300',
              )}
            >
              Request Invite
              <ArrowRight size={15} />
            </Link>
          </BlurFade>
        </div>
      </section>

    </main>
  )
}
