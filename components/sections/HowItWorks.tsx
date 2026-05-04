'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

type Step = {
  number: string
  title: string
  timeline: string
  body: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'strategy call',
    timeline: 'WEEK 1',
    body: 'thirty minutes. you tell me where it hurts, the work that keeps eating your team, and by the end i know which system to build first. no slides, no decks. just the shortest path to a quiet inbox.',
  },
  {
    number: '02',
    title: 'workshop',
    timeline: 'WEEK 1',
    body: 'two hours with the people doing the work. we map the actual workflow, the stack you already pay for, and the gaps duct tape is hiding. you walk out with a roadmap that fits your reality, not a generic playbook.',
  },
  {
    number: '03',
    title: 'build & deploy',
    timeline: 'WEEK 2-3',
    body: 'one to two weeks and the first system is live inside the tools you already use. no rip-and-replace. you review the outputs as they ship, i tune until it sounds like you, behaves like you, and does the boring part faster than you would.',
  },
  {
    number: '04',
    title: 'optimize & embed',
    timeline: 'WEEK 4+',
    body: 'monthly retros while the metrics settle. i stay close until the system runs on its own, clean handoff doc, your team owns the keys, my slack stays open if anything wobbles. the goal is to get me out of the loop.',
  },
]

type TimelineRowProps = {
  step: Step
  isLast: boolean
  containerRef: React.RefObject<HTMLDivElement | null>
}

function TimelineRow({ step, isLast, containerRef }: TimelineRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start 85%', 'end 30%'],
    container: containerRef,
  })
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.45, 1, 1, 0.7])
  const numeralScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.94, 1.04, 1])

  return (
    <div
      ref={rowRef}
      className={`relative grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-6 sm:gap-10 py-12 sm:py-16 ${
        isLast ? '' : 'border-b border-white/10'
      }`}
    >
      <div className="relative flex items-start justify-start">
        <motion.span
          style={{ opacity: numeralOpacity, scale: numeralScale }}
          className="font-mono text-5xl sm:text-7xl font-black text-coral tabular tracking-[-0.04em] leading-none origin-left"
        >
          {step.number}
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pt-1"
      >
        <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.22em] text-coral/90 bg-coral/10 ring-1 ring-coral/20 rounded-full px-3 py-1 tabular">
          {step.timeline}
        </span>
        <h3 className="mt-5 text-2xl sm:text-3xl font-black text-white tracking-tight">
          {step.title}
        </h3>
        <p className="mt-4 text-base text-white/65 leading-[1.7] max-w-xl [text-wrap:pretty]">
          {step.body}
        </p>
      </motion.div>
    </div>
  )
}

function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ['0%', '100%'])

  return (
    <section className="relative bg-midnight text-white overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[620px] h-[620px] rounded-full bg-coral/10 blur-[140px] pointer-events-none" />

      <div className="container-width section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono tracking-[0.2em] text-white/40 mb-4">
              HOW IT WORKS
            </p>
            <h2 className="display-tight text-white text-3xl sm:text-4xl tracking-tight">
              from first call to live system,{' '}
              <span className="serif-italic text-coral">in weeks not quarters</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-[15px] text-white/60 leading-[1.6] [text-wrap:pretty]">
              <span className="serif-italic">
                four steps, no theatre. by week four something real is shipping
                inside your stack, and i&apos;m already planning my exit.
              </span>
            </p>
          </div>
        </div>

        <RevealOnScroll variant="fade">
          <div ref={timelineRef} className="relative">
            <div
              aria-hidden
              className="absolute top-0 bottom-0 w-px bg-white/10 left-[40px] sm:left-[60px] -translate-x-1/2"
            />
            <motion.div
              aria-hidden
              style={{ height: lineHeight }}
              className="absolute top-0 w-px bg-coral left-[40px] sm:left-[60px] -translate-x-1/2 origin-top shadow-[0_0_12px_rgba(255,107,93,0.6)]"
            />

            {steps.map((step, idx) => (
              <TimelineRow
                key={step.number}
                step={step}
                isLast={idx === steps.length - 1}
                containerRef={timelineRef}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default HowItWorks
