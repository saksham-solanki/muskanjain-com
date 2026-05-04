'use client'

import { motion } from 'framer-motion'
import { Compass, Video, MapPin, Anchor } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

type Prop = {
  stat: string
  title: string
  body: string
  Icon: LucideIcon
}

const props: Prop[] = [
  {
    stat: '4 years',
    title: 'GTM, end-to-end',
    body: 'content, outbound, mid-funnel, the boring middle nobody wants to own. four years of running it for web3 brands taught me which levers scale past launch week and which ones quietly fall apart at real volume.',
    Icon: Compass,
  },
  {
    stat: '800k+ views',
    title: 'Built it on camera too',
    body: 'KRNL, India Tour, Proof of Hustle, real series shipped on a real schedule, not a pitch deck. when i talk about distribution it is because i have actually distributed, on my own face, with my own reps, in public.',
    Icon: Video,
  },
  {
    stat: '8 cities',
    title: 'Strategy AND the room itself',
    body: 'hosted DeKoded across India and the GCC, eight cities deep. the playbook, the invite list, the lighting, the green room, the next-day follow-up. an event is a funnel disguised as a party, i build both halves.',
    Icon: MapPin,
  },
  {
    stat: 'weeks not months',
    title: 'Stay until your team owns it',
    body: 'deploy fast, embed close, hand back the keys. i price the engagement so the incentive points toward exit, not retainer drag. the win is when your team runs the system without me on the slack.',
    Icon: Anchor,
  },
]

function WhyMe() {
  return (
    <section className="relative bg-soft-pink overflow-hidden">
      {/* Ambient halos behind the header */}
      <div
        aria-hidden
        className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[520px] h-[420px] rounded-full bg-coral/10 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-[8%] -right-32 w-[420px] h-[420px] rounded-full bg-rose-mist/50 blur-[130px] pointer-events-none"
      />

      <div className="container-width section-padding relative">
        {/* Editorial header */}
        <RevealOnScroll variant="blur">
          <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
                No. 07 · WHY ME
              </span>
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
            </div>
            <h2 className="h-section text-ink tracking-tight mt-7">
              Built by an Operator.{' '}
              <span className="serif-italic text-coral">Not just a Creator.</span>
            </h2>
            <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.5] max-w-2xl mx-auto mt-7 [text-wrap:balance]">
              The rare overlap, someone who has shipped the GTM and the reel,
              the deal and the room, the funnel and the face on camera. Both
              sides of the table, no translation tax.
            </p>
          </header>
        </RevealOnScroll>

        {/* 2x2 value-prop grid */}
        <RevealOnScroll
          variant="slideUp"
          stagger={0.07}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {props.map((prop) => {
            const Icon = prop.Icon
            return (
              <motion.article
                key={prop.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/92 rounded-[20px] p-7 sm:p-8 transition-all duration-300 shadow-[0_10px_28px_-16px_rgba(26,26,46,0.12)]"
              >
                {/* Decorative SVG mark, top-left, very subtle */}
                <Icon
                  aria-hidden
                  size={120}
                  strokeWidth={1}
                  className="absolute -top-4 -left-3 text-coral/[0.06] pointer-events-none rotate-[-12deg]"
                />

                {/* Stat row */}
                <div className="relative">
                  <p className="serif-italic text-5xl sm:text-6xl font-normal text-coral tabular tracking-[-0.02em] leading-none">
                    {prop.stat}
                  </p>
                </div>

                {/* Hairline divider */}
                <div className="hairline border-t mt-6 mb-6" />

                {/* Icon + title + body */}
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-coral/15 ring-1 ring-coral/20 grid place-items-center shrink-0">
                    <Icon size={18} strokeWidth={2.2} className="text-coral" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-2xl font-black text-ink tracking-tight leading-tight">
                      {prop.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-[15px] text-ink-muted leading-[1.55] [text-wrap:pretty]">
                  {prop.body}
                </p>

                {/* Hover halo */}
                <span
                  aria-hidden
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-coral/12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </motion.article>
            )
          })}
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default WhyMe
