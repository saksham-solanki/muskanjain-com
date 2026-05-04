'use client'

import { motion } from 'framer-motion'
import { PenTool, Send, BarChart3 } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { BorderBeam } from '@/components/ui/border-beam'

type Service = {
  number: string
  title: string
  body: string
  Icon: typeof PenTool
}

const services: Service[] = [
  {
    number: '01.',
    title: 'content engines',
    body: 'i wire up agentic pipelines that research, draft, edit, and ship in your voice. one topic goes in, ten platform-ready pieces come out. you spend 30 minutes reviewing, the engine handles the rest of the week.',
    Icon: PenTool,
  },
  {
    number: '02.',
    title: 'outbound flows',
    body: 'targeted lists, sequences that read like a human wrote them, and follow-ups that fire on real signals instead of vibes. less spray, more land. the kind of outbound replies actually want to answer.',
    Icon: Send,
  },
  {
    number: '03.',
    title: 'the boring middle',
    body: 'lead scoring, lifecycle email, dashboards that surface what matters. mid-funnel plumbing nobody posts screenshots of, but it compounds harder than any launch tweet ever will.',
    Icon: BarChart3,
  },
]

function WhatIDo() {
  return (
    <section className="relative bg-soft-pink overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono tracking-[0.2em] text-ink-faint mb-4">
              WHAT I DO
            </p>
            <h2 className="h-section text-ink tracking-tight">
              three things,{' '}
              <span className="serif-italic text-coral">all the same problem</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-[15px] text-ink-muted leading-[1.6] lg:mt-auto [text-wrap:pretty]">
              go-to-market is a series of repeatable loops dressed up as creative
              work. i build the systems that run the loops, so the team can do the
              parts only humans should.
            </p>
          </div>
        </div>

        <RevealOnScroll variant="slideUp" stagger={0.07}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ number, title, body, Icon }) => (
              <motion.article
                key={number}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[20px] p-6 sm:p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/90 transition-all overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 z-0 bg-gradient-to-br from-coral/0 via-coral/0 to-coral/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                <BorderBeam
                  size={120}
                  duration={6}
                  colorFrom="#FF6B6B"
                  colorTo="#FFD0C4"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <span className="absolute top-0 right-0 font-mono text-xs sm:text-sm font-bold text-coral/40 tabular tracking-[0.2em]">
                    {number}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-coral/15 to-coral/5 ring-1 ring-coral/25 shadow-[0_8px_24px_-8px_rgba(255,107,107,0.3)] grid place-items-center">
                    <Icon size={18} className="text-coral" />
                  </div>

                  <div className="mt-5 flex items-baseline gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral shrink-0 mb-1" />
                    <h3 className="text-xl font-black text-ink tracking-tight">
                      {title}
                    </h3>
                  </div>

                  <p className="mt-2 text-[15px] text-ink-muted leading-[1.55] [text-wrap:pretty]">
                    {body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default WhatIDo
