import { Check, X } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { cn } from '@/lib/utils'

type Verdict = 'win' | 'yes' | 'no'

type Row = {
  capability: string
  cells: [Verdict, Verdict, Verdict, Verdict, Verdict] // [muskan, saas, hire, agency, freelancer]
}

const COLUMNS = [
  { key: 'muskan', label: 'Working with me', winner: true },
  { key: 'saas', label: 'SaaS tool', winner: false },
  { key: 'hire', label: 'Junior hire', winner: false },
  { key: 'agency', label: 'Traditional agency', winner: false },
  { key: 'freelancer', label: 'Freelancer', winner: false },
] as const

const ROWS: Row[] = [
  {
    capability: 'GTM operator experience',
    cells: ['win', 'no', 'no', 'yes', 'no'],
  },
  {
    capability: 'AI systems built into your workflow',
    cells: ['win', 'yes', 'no', 'no', 'no'],
  },
  {
    capability: 'Strategy + execution + distribution',
    cells: ['win', 'no', 'no', 'yes', 'no'],
  },
  {
    capability: 'Time to value (weeks, not months)',
    cells: ['win', 'yes', 'no', 'no', 'yes'],
  },
  {
    capability: 'Stays embedded until it works',
    cells: ['win', 'no', 'yes', 'no', 'no'],
  },
  {
    capability: 'Outcome-based pricing',
    cells: ['win', 'no', 'no', 'no', 'yes'],
  },
]

function Cell({ verdict }: { verdict: Verdict }) {
  if (verdict === 'win') {
    return (
      <span
        aria-label="Yes"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral/15 ring-1 ring-coral/30"
      >
        <Check size={15} strokeWidth={2.6} className="text-coral" />
      </span>
    )
  }
  if (verdict === 'yes') {
    return (
      <span aria-label="Yes" className="inline-flex h-7 w-7 items-center justify-center">
        <Check size={15} strokeWidth={2.4} className="text-positive" />
      </span>
    )
  }
  return (
    <span aria-label="No" className="inline-flex h-7 w-7 items-center justify-center">
      <X size={15} strokeWidth={2.2} className="text-ink-faint" />
    </span>
  )
}

function ComparisonTable() {
  return (
    <section className="relative bg-cream-pink overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 right-[-10%] w-[440px] h-[440px] rounded-full bg-coral/8 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-[-12%] -left-24 w-[420px] h-[420px] rounded-full bg-rose-mist/45 blur-[150px] pointer-events-none"
      />

      <div className="container-width section-padding relative">
        <RevealOnScroll variant="blur">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="h-px w-10 sm:w-16 bg-ink/15" />
            <span className="eyebrow">No. 08 &middot; Stacking Up</span>
            <span className="h-px w-10 sm:w-16 bg-ink/15" />
          </div>

          <h2 className="h-section text-center max-w-3xl mx-auto">
            Stack me against the alternatives,{' '}
            <span className="serif-italic text-coral">then pick.</span>
          </h2>

          <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.5] max-w-2xl mx-auto mt-6 text-center [text-wrap:balance]">
            most options solve a slice of the problem, i&apos;m the rare
            shape that covers the whole loop without leaving you to
            stitch it together.
          </p>
        </RevealOnScroll>

        <div className="mt-14 lg:mt-16 max-w-5xl mx-auto">
          <div className="overflow-x-auto rounded-[22px] ring-1 ring-rose-mist/60 bg-white/55 backdrop-blur-sm shadow-[0_10px_28px_-14px_rgba(26,26,46,0.10)]">
            <table className="w-full border-separate border-spacing-0 min-w-[720px]">
              <caption className="sr-only">
                A comparison of working with Muskan against SaaS tools,
                junior hires, traditional agencies, and freelancers across
                six capabilities.
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted px-5 sm:px-6 py-5 border-b border-rose-mist/60"
                  >
                    Capability
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className={cn(
                        'text-center font-mono text-[10px] uppercase tracking-[0.22em] px-3 sm:px-4 py-5 border-b border-rose-mist/60',
                        col.winner
                          ? 'text-coral font-semibold bg-coral/8'
                          : 'text-ink-muted'
                      )}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, rIdx) => {
                  const isLast = rIdx === ROWS.length - 1
                  const zebra = rIdx % 2 === 1
                  return (
                    <tr key={row.capability}>
                      <th
                        scope="row"
                        className={cn(
                          'text-left text-ink font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-4 sm:py-5 align-middle',
                          !isLast && 'border-b border-rose-mist/45',
                          zebra && 'bg-rose-mist/15'
                        )}
                      >
                        {row.capability}
                      </th>
                      {row.cells.map((verdict, cIdx) => {
                        const isMuskan = cIdx === 0
                        return (
                          <td
                            key={cIdx}
                            className={cn(
                              'text-center px-3 sm:px-4 py-4 sm:py-5 align-middle',
                              !isLast && 'border-b border-rose-mist/45',
                              isMuskan
                                ? 'bg-coral/8 ring-1 ring-coral/20'
                                : zebra
                                  ? 'bg-rose-mist/15'
                                  : ''
                            )}
                          >
                            <Cell verdict={verdict} />
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
            Honest comparison &middot; Scroll horizontally on small screens
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
