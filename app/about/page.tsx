import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'about',
  description: '20. been in crypto since 17. building at the ai x web3 intersection.',
}

const timeline = [
  {
    year: '2023',
    text: 'started in crypto. nakamoto hub, cryptofemale community.',
  },
  {
    year: '2024',
    text: 'genzio media, symbiote. learning web3 marketing from the inside.',
  },
  {
    year: '2024-2025',
    text: 'krnl labs. ran dekoded event series across 6 indian cities.',
  },
  {
    year: '2025-2026',
    text: 'canton foundation. marketing $9T/mo institutional blockchain.',
  },
  {
    year: '2026',
    text: 'pivoted to ai x web3. building ai systems for web3 companies.',
  },
]

const beliefs = [
  'builders, not talkers',
  'show the work, not the credentials',
  "AI isn't replacing marketers, it's replacing bad marketing",
  "web3 deserves better than dark mode templates and 'launch app' CTAs",
]

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-width flex flex-col items-center text-center">
          {/* Photo placeholder: coral gradient circle */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-coral/30 via-coral/50 to-coral-deep/40 mb-8 ring-4 ring-coral/20" />
          <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            muskan jain
          </h1>
          <p className="mt-4 text-lg text-ink-muted max-w-lg">
            20. been in crypto since 17. building at the ai x web3 intersection.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-cream-pink">
        <div className="container-width max-w-3xl">
          <span className="section-label mb-8 inline-block">the journey</span>
          <div className="relative pl-8 border-l-2 border-coral/30 space-y-10 mt-6">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                {/* Coral dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-coral ring-4 ring-blush" />
                <p className="text-sm font-semibold text-coral tracking-wide uppercase">
                  {item.year}
                </p>
                <p className="mt-1 text-ink-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <span className="section-label mb-8 inline-block">what i believe</span>
          <ul className="mt-6 space-y-4">
            {beliefs.map((belief) => (
              <li
                key={belief}
                className="flex items-start gap-3 text-lg text-ink-secondary"
              >
                <span className="mt-2 block w-2 h-2 rounded-full bg-coral shrink-0" />
                <span>{belief}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Setup */}
      <section className="section-padding bg-cream-pink">
        <div className="container-width max-w-3xl">
          <span className="section-label mb-8 inline-block">the setup</span>
          <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
            every ai system i deploy is production-grade. not a prototype. not a
            demo. production. i work with a team of AI engineers who&apos;ve deployed
            50+ systems across 16 industries.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-width flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">
            ready to get your protocol cited by ai?
          </h2>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-white bg-coral rounded-full shadow-coral hover:bg-coral-hover transition-colors"
          >
            book a call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
