'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PenTool,
  Send,
  BarChart3,
  Video,
  Mic,
  Users,
  ArrowRight,
} from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { cn } from '@/lib/utils'

type TagTone = 'green' | 'blue' | 'amber' | 'coral' | 'purple' | 'pink'

const TAG_STYLE: Record<TagTone, string> = {
  green: 'bg-positive/15 text-positive ring-positive/25',
  blue: 'bg-info/15 text-info ring-info/25',
  amber: 'bg-warning/15 text-warning ring-warning/25',
  coral: 'bg-coral/15 text-coral ring-coral/25',
  purple: 'bg-[#8B5CF6]/15 text-[#8B5CF6] ring-[#8B5CF6]/25',
  pink: 'bg-[#EC4899]/15 text-[#EC4899] ring-[#EC4899]/25',
}

type Workflow = {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  Icon: typeof PenTool
  tag: { label: string; tone: TagTone }
  stages: string[]
  ships: string[]
}

const workflows: Workflow[] = [
  {
    id: 'content',
    number: '01',
    title: 'Content Engines',
    subtitle: 'Topic in. Twelve assets out.',
    description:
      'one source recording, twelve native assets across long-form, X, LinkedIn. you approve, the engine ships the rest.',
    Icon: PenTool,
    tag: { label: 'CONTENT', tone: 'green' },
    stages: [
      'Research & evidence',
      'Outline & angle',
      'Draft + self-edit',
      'Adapt per platform',
    ],
    ships: ['Blog essay', 'X thread', 'LinkedIn post'],
  },
  {
    id: 'outbound',
    number: '02',
    title: 'Outbound Flows',
    subtitle: 'Real signals. Personalized at scale.',
    description:
      'targeted lists, sequences that read like a human wrote them, follow-ups that fire on real signals instead of vibes.',
    Icon: Send,
    tag: { label: 'GROWTH', tone: 'blue' },
    stages: [
      'Source & enrich',
      'Score & segment',
      'Sequence + send',
      'Follow-up on signals',
    ],
    ships: ['Cold email', 'LinkedIn DM', 'Multichannel touch'],
  },
  {
    id: 'midfunnel',
    number: '03',
    title: 'Mid-Funnel Plumbing',
    subtitle: 'The boring middle. Compounds the most.',
    description:
      'lead scoring, lifecycle email, dashboards that surface what matters. the work nobody posts screenshots of, but it compounds harder than any launch tweet ever will.',
    Icon: BarChart3,
    tag: { label: 'REVENUE', tone: 'amber' },
    stages: [
      'Score every lead',
      'Trigger lifecycle',
      'Surface in dashboards',
      'Loop back to source',
    ],
    ships: ['Lifecycle journeys', 'Lead scoring', 'KPI dashboards'],
  },
  {
    id: 'brand-films',
    number: '04',
    title: 'Brand Films',
    subtitle: 'Short, sharp, on-brand.',
    description:
      'short-form video for brand campaigns. from script to publish. tuned for the platform, not for an awards reel.',
    Icon: Video,
    tag: { label: 'BRAND', tone: 'coral' },
    stages: ['Brief + script', 'Capture', 'Edit + grade', 'Distribute'],
    ships: ['Brand spot', 'Founder reel', 'Product review'],
  },
  {
    id: 'docu-series',
    number: '05',
    title: 'Founder Docu-Series',
    subtitle: 'Long-form. Day-by-day. Unscripted.',
    description:
      'multi-week serialized founder docu-series. the behind-the-scenes that builds belief over time. one camera, one founder, real reps.',
    Icon: Mic,
    tag: { label: 'MEDIA', tone: 'purple' },
    stages: [
      'Story arc + cadence',
      'Capture sessions',
      'Edit + scale to clips',
      'Publish weekly',
    ],
    ships: ['Weekly episodes', 'Vertical clips', 'Highlight thread'],
  },
  {
    id: 'events',
    number: '06',
    title: 'Event Operations',
    subtitle: 'Eight cities. End-to-end.',
    description:
      'IRL events with attribution. strategy, content, the room itself, follow-up that converts. no badges. no panels. just receipts.',
    Icon: Users,
    tag: { label: 'EVENTS', tone: 'pink' },
    stages: [
      'Source + invite',
      'Curate the room',
      'Run the night',
      'Convert post-event',
    ],
    ships: ['Cohort dinner', 'Builder retreat', 'Founder dinner'],
  },
]

function WorkflowsSection() {
  const [active, setActive] = useState(0)
  const w = workflows[active]
  const ActiveIcon = w.Icon

  return (
    <section className="relative bg-soft-pink overflow-hidden">
      {/* coral ambient halo */}
      <div
        aria-hidden
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-coral/8 blur-[140px] pointer-events-none"
      />

      <div className="container-width section-padding relative">
        {/* centered editorial header */}
        <RevealOnScroll variant="blur">
          <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
                No. 03 · WHAT I DO
              </span>
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
            </div>
            <h2 className="h-section text-ink tracking-tight mt-7">
              Six Workflows.{' '}
              <span className="serif-italic text-coral">All in production</span>
              .
            </h2>
            <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.45] max-w-2xl mx-auto mt-7 [text-wrap:balance]">
              Pipeline in. Results out. Six times over.
            </p>
            <p className="mt-5 text-[11px] text-ink-faint tabular font-mono uppercase tracking-[0.22em]">
              six systems · twenty-four stages · always shipping
            </p>
          </header>
        </RevealOnScroll>

        {/* List + detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left: workflow list (no tool/stack exposure) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {workflows.map((wf, i) => {
              const isActive = i === active
              const ItemIcon = wf.Icon
              return (
                <button
                  key={wf.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    'flex-1 w-full text-left rounded-2xl px-4 sm:px-5 py-5 ring-1 transition-all flex items-center gap-4 group',
                    isActive
                      ? 'bg-coral text-white ring-coral shadow-[0_18px_44px_-18px_rgba(255,107,107,0.55)]'
                      : 'bg-white/72 backdrop-blur-md ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/92',
                  )}
                  aria-pressed={isActive}
                >
                  <div
                    className={cn(
                      'shrink-0 w-11 h-11 rounded-xl grid place-items-center ring-1',
                      isActive
                        ? 'bg-white/15 ring-white/25 text-white'
                        : 'bg-coral/10 ring-coral/20 text-coral',
                    )}
                  >
                    <ItemIcon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        'text-base sm:text-[17px] font-bold tracking-tight leading-tight',
                        isActive ? 'text-white' : 'text-ink',
                      )}
                    >
                      {wf.title}
                    </p>
                    <p
                      className={cn(
                        'text-[12px] sm:text-[13px] mt-0.5 truncate',
                        isActive ? 'text-white/80' : 'text-ink-faint',
                      )}
                    >
                      {wf.subtitle}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'font-mono text-[10px] tabular shrink-0',
                      isActive ? 'text-white/55' : 'text-ink-faint',
                    )}
                  >
                    {wf.number}
                  </span>
                  <ArrowRight
                    size={14}
                    className={cn(
                      'shrink-0 transition-transform',
                      isActive
                        ? 'text-white translate-x-1'
                        : 'text-ink-faint group-hover:translate-x-0.5',
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Right: detail panel — pipeline + results only */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[24px] bg-white/85 backdrop-blur-md ring-1 ring-rose-mist/60 p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_-32px_rgba(26,26,46,0.18)] flex flex-col h-full"
              >
                {/* Top: icon + tag + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-coral/15 to-coral/5 ring-1 ring-coral/25 grid place-items-center">
                    <ActiveIcon size={20} className="text-coral" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className={cn(
                        'inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em] tabular ring-1',
                        TAG_STYLE[w.tag.tone],
                      )}
                    >
                      {w.tag.label}
                    </span>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-black text-ink tracking-tight">
                      {w.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] text-ink-muted leading-[1.6] [text-wrap:pretty] mb-7">
                  {w.description}
                </p>

                {/* Pipeline */}
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink-faint">
                      PIPELINE
                    </span>
                    <span className="h-px flex-1 bg-coral/15" />
                    <span className="font-mono text-[10px] text-ink-faint tabular">
                      {w.stages.length} STAGES
                    </span>
                  </div>
                  <ol className="flex flex-col gap-2">
                    {w.stages.map((label, idx) => (
                      <li
                        key={label}
                        className="rounded-xl bg-white/70 ring-1 ring-rose-mist/45 px-4 py-4 sm:py-4 flex items-center gap-4"
                      >
                        <span className="shrink-0 font-mono text-[15px] font-black text-coral tabular tracking-[-0.02em] w-6">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="flex-1 text-[15px] sm:text-base font-bold text-ink leading-tight">
                          {label}
                        </p>
                        {idx < w.stages.length - 1 && (
                          <ArrowRight
                            size={14}
                            className="text-coral/30 shrink-0"
                            aria-hidden
                          />
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Results */}
                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink-faint">
                      RESULTS
                    </span>
                    <span className="h-px flex-1 bg-coral/15" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {w.ships.map((ship) => (
                      <span
                        key={ship}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-ink text-white text-[12px] font-bold uppercase tracking-[0.06em]"
                      >
                        {ship}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowsSection
