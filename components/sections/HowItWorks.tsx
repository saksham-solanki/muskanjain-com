import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

type Step = {
  number: string
  title: string
  timeline: string
  body: string
  yourPart: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'strategy call',
    timeline: 'WEEK 1',
    body: 'thirty minutes. you tell me where it hurts, the work that keeps eating your team, and by the end i know which system to build first. no slides, no decks. just the shortest path to a quiet inbox.',
    yourPart: '30-min call. tell me where it hurts.',
  },
  {
    number: '02',
    title: 'workshop',
    timeline: 'WEEK 1',
    body: 'two hours with the people doing the work. we map the actual workflow, the stack you already pay for, and the gaps duct tape is hiding. you walk out with a roadmap that fits your reality, not a generic playbook.',
    yourPart: '2-hour session with your team. i facilitate everything.',
  },
  {
    number: '03',
    title: 'build & deploy',
    timeline: 'WEEK 2-3',
    body: 'one to two weeks and the first system is live inside the tools you already use. no rip-and-replace. you review the outputs as they ship, i tune until it sounds like you, behaves like you, and does the boring part faster than you would.',
    yourPart: 'review outputs. give feedback. i iterate fast.',
  },
  {
    number: '04',
    title: 'optimize & embed',
    timeline: 'WEEK 4+',
    body: 'monthly retros while the metrics settle. i stay close until the system runs on its own, clean handoff doc, your team owns the keys, my slack stays open if anything wobbles. the goal is to get me out of the loop.',
    yourPart: 'monthly reviews. i stay close until your team owns it.',
  },
]

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-cream-pink">
      {/* Soft warm halo behind the big display */}
      <div
        aria-hidden
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[820px] h-[420px] rounded-full bg-coral/10 blur-[160px] pointer-events-none"
      />

      <div className="container-width section-padding relative">
        {/* Centered editorial eyebrow — matches the rest of the page */}
        <RevealOnScroll variant="blur">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 sm:w-16 bg-coral/40" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
              No. 04 · HOW IT WORKS
            </span>
            <span className="h-px w-10 sm:w-16 bg-coral/40" />
          </div>
        </RevealOnScroll>

        {/* Big editorial headline — single line, italic coral accents inline */}
        <RevealOnScroll variant="slideUp" delay={0.05}>
          <h2 className="text-center mt-10 lg:mt-12 font-black text-ink tracking-[-0.035em] leading-[1.08] text-[clamp(1.875rem,5vw,4.5rem)] [text-wrap:balance] max-w-5xl mx-auto">
            From call{' '}
            <span className="serif-italic font-normal text-coral">
              to live system
            </span>
            , in{' '}
            <span className="serif-italic font-normal text-coral">
              weeks
            </span>
            .
          </h2>
        </RevealOnScroll>

        {/* Deck */}
        <RevealOnScroll variant="slideUp" delay={0.1}>
          <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.45] max-w-2xl mx-auto mt-8 text-center [text-wrap:balance]">
            no six-month discovery phase. i move fast because i&apos;ve already
            solved most of these problems on my own work first.
          </p>
        </RevealOnScroll>

        {/* Process table */}
        <RevealOnScroll variant="slideUp" delay={0.15}>
          <div className="mt-14 lg:mt-20">
            {/* Caption above the table */}
            <div className="flex items-center gap-3 mb-6 max-w-5xl mx-auto">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint font-bold">
                THE PROCESS
              </span>
              <span className="h-px flex-1 bg-ink/15" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint tabular">
                FOUR STEPS · NO THEATRE
              </span>
            </div>

            <div className="overflow-x-auto max-w-5xl mx-auto rounded-[20px] bg-white/65 backdrop-blur-md ring-1 ring-rose-mist/60 shadow-[0_24px_60px_-32px_rgba(26,26,46,0.12)]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink/8">
                    <th
                      scope="col"
                      className="w-[72px] sm:w-[88px] pl-5 sm:pl-7 py-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint font-bold"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="py-5 pr-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint font-bold"
                    >
                      What Happens
                    </th>
                    <th
                      scope="col"
                      className="py-5 pr-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint font-bold"
                    >
                      Your Part
                    </th>
                    <th
                      scope="col"
                      className="py-5 pr-5 sm:pr-7 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint font-bold"
                    >
                      Timeline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {steps.map((step) => (
                    <tr
                      key={step.number}
                      className="border-t border-ink/8 hover:bg-coral/[0.04] transition-colors duration-200"
                    >
                      <td className="align-top py-7 sm:py-8 pl-5 sm:pl-7 pr-4">
                        <span className="font-mono text-2xl font-black text-coral tabular tracking-[-0.02em]">
                          {step.number}
                        </span>
                      </td>
                      <td className="align-top py-7 sm:py-8 pr-4">
                        <h3 className="text-lg sm:text-xl font-black text-ink tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[14px] text-ink-muted leading-[1.55] max-w-md [text-wrap:pretty]">
                          {step.body}
                        </p>
                      </td>
                      <td className="align-top py-7 sm:py-8 pr-4">
                        <p className="text-[14px] text-ink-secondary leading-snug max-w-xs">
                          {step.yourPart}
                        </p>
                      </td>
                      <td className="align-top py-7 sm:py-8 pr-5 sm:pr-7">
                        <span className="inline-flex px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-coral bg-coral/12 ring-1 ring-coral/25 tabular whitespace-nowrap">
                          {step.timeline}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default HowItWorks
