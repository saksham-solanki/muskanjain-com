import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'build in public',
  description: 'everything i build, documented. no polish. just process.',
}

type Status = 'shipped' | 'wip' | 'planned'

interface BuildEntry {
  title: string
  status: Status
  tools: string[]
  date: string
}

const entries: BuildEntry[] = [
  {
    title: 'shipping the ai citation tracker',
    status: 'wip',
    tools: ['claude-code', 'next.js', 'supabase'],
    date: 'Apr 30',
  },
  {
    title: 'setting up programmatic seo for a defi protocol',
    status: 'planned',
    tools: ['next.js', 'vercel'],
    date: 'May 2',
  },
  {
    title: 'first aeo audit for a web3 client',
    status: 'planned',
    tools: ['claude', 'perplexity'],
    date: 'May 5',
  },
  {
    title: 'building muskanjain.com from scratch',
    status: 'shipped',
    tools: ['next.js', 'tailwind', 'vercel'],
    date: 'Apr 24',
  },
  {
    title: 'the content system that writes 50+ posts per month',
    status: 'wip',
    tools: ['claude-code', 'n8n'],
    date: 'May 8',
  },
]

const statusConfig: Record<Status, { label: string; bg: string; text: string }> = {
  shipped: { label: 'shipped', bg: 'bg-positive/10', text: 'text-positive' },
  wip: { label: 'wip', bg: 'bg-warning/10', text: 'text-warning' },
  planned: { label: 'planned', bg: 'bg-ink-faint/10', text: 'text-ink-faint' },
}

export default function BuildInPublicPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            build in public
          </h1>
          <p className="mt-4 text-lg text-ink-muted">
            everything i build, documented. no polish. just process.
          </p>
        </div>
      </section>

      {/* Timeline feed */}
      <section className="section-padding pt-0">
        <div className="container-width max-w-3xl">
          <div className="relative pl-8 border-l-2 border-coral/20 space-y-8">
            {entries.map((entry) => {
              const status = statusConfig[entry.status]
              return (
                <div key={entry.title} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-coral ring-4 ring-blush" />

                  <div className="bg-white rounded-[16px] shadow-soft p-5 sm:p-6">
                    {/* Top row: date + status */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-ink-faint uppercase tracking-wide">
                        {entry.date}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${status.bg} ${status.text}`}
                      >
                        {status.label}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-semibold text-ink leading-snug">
                      {entry.title}
                    </h2>

                    {/* Tool badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {entry.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 text-xs font-medium text-coral bg-coral-muted rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
