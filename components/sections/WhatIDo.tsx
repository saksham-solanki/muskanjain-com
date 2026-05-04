'use client'

import { motion } from 'framer-motion'
import { PenTool, Send, BarChart3 } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[20px] p-6 sm:p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/60 hover:ring-coral/40 hover:bg-white/90 transition-all overflow-hidden"
              >
                <span className="text-xs font-mono text-ink-faint">{number}</span>
                <div className="mt-3 w-11 h-11 rounded-xl bg-coral/10 ring-1 ring-coral/20 grid place-items-center">
                  <Icon size={18} className="text-coral" />
                </div>
                <h3 className="mt-5 text-xl font-black text-ink tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] text-ink-muted leading-[1.55] [text-wrap:pretty]">
                  {body}
                </p>
              </motion.article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default WhatIDo
