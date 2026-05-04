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
    body: 'thirty minutes. you tell me where it hurts — the work that keeps eating your team — and by the end i know which system to build first. no slides, no decks. just the shortest path to a quiet inbox.',
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
    body: 'monthly retros while the metrics settle. i stay close until the system runs on its own — clean handoff doc, your team owns the keys, my slack stays open if anything wobbles. the goal is to get me out of the loop.',
  },
]

function HowItWorks() {
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
                inside your stack — and i&apos;m already planning my exit.
              </span>
            </p>
          </div>
        </div>

        <RevealOnScroll variant="slideUp" stagger={0.07}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map(({ number, title, timeline, body }) => (
              <div
                key={number}
                className="relative rounded-2xl p-6 bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:ring-coral/40 transition-all overflow-hidden"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral tabular">
                    {number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30 tabular">
                    {timeline}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black text-white tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] text-white/70 leading-[1.55] [text-wrap:pretty]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default HowItWorks
