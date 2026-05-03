'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { cn } from '@/lib/utils'

const blogPosts = [
  {
    slug: 'ai-citation-tracker-defi-protocol',
    title: 'How I Built an AI Citation Tracker for a DeFi Protocol',
    description:
      'A step-by-step breakdown of the system architecture, data pipeline, and tracking dashboard I shipped for a top-50 DeFi protocol.',
    category: 'AI Build',
    date: 'Apr 30, 2026',
    readingTime: '12 min',
  },
  {
    slug: 'ai-agent-market-crypto',
    title: "The $4.34B AI Agent Market in Crypto: What's Real",
    description:
      'Separating signal from noise in the AI agent ecosystem. Which projects have real usage, and which are vaporware.',
    category: 'AI Signal',
    date: 'Apr 28, 2026',
    readingTime: '8 min',
  },
  {
    slug: 'ai-x-web3-definitive-guide',
    title: 'AI × Web3: The Definitive Guide to the Intersection',
    description:
      'How AI and Web3 converge across infrastructure, applications, and go-to-market. The opportunities most teams are missing.',
    category: 'AI x Web3',
    date: 'Apr 27, 2026',
    readingTime: '15 min',
  },
  {
    slug: 'started-crypto-at-17',
    title: "I Started in Crypto at 17. Here's What Nobody Tells You",
    description:
      'Three years, five companies, six cities, and a complete pivot. The unfiltered version of building a career in Web3.',
    category: 'Real Talk',
    date: 'Apr 26, 2026',
    readingTime: '10 min',
  },
  {
    slug: 'web3-companies-aeo',
    title: 'Why <1% of Web3 Companies Are Doing AEO',
    description:
      'Answer Engine Optimization is the biggest growth unlock in crypto right now. Here is why almost nobody is doing it.',
    category: 'AI Signal',
    date: 'Apr 25, 2026',
    readingTime: '7 min',
  },
  {
    slug: 'seo-content-stack-50-pages',
    title: 'The Exact Stack I Use to Publish 50+ SEO Pages per Month',
    description:
      'Claude Code, Next.js, Vercel, and a programmatic pipeline that turns keyword research into live pages in under 48 hours.',
    category: 'AI Build',
    date: 'Apr 24, 2026',
    readingTime: '9 min',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = 'The Journal'
  }, [])

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <main className="pt-24">
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{
          background:
            'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)',
        }}
      >
        <div className="absolute top-[16%] right-[14%] w-[360px] h-[360px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[-6rem] left-[-8rem] w-[460px] h-[460px] rounded-full bg-coral/15 blur-[140px] pointer-events-none" />

        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="eyebrow">No. 01</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE JOURNAL</span>
              </div>
              <h1 className="h-display mt-7">
                <span className="block">Field Notes</span>
                <span className="block mt-1">
                  from{' '}
                  <span className="serif-italic text-coral">the room.</span>
                </span>
              </h1>
              <p className="text-lead mt-9 max-w-xl [text-wrap:pretty]">
                Slow writing from a fast room. AI builds, market signals, Web3
                receipts, and the occasional real-talk dispatch — written by
                members.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                ↳ No dark patterns. No thought leadership. Just notes from
                people shipping things.
              </p>
              <p className="mt-4 text-xs text-ink-faint tabular">
                {blogPosts.length} entries · refreshed weekly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Filter pills ─── */}
      <section className="bg-blush relative">
        <div className="container-width pt-12 lg:pt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">No. 02</span>
            <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
            <span className="section-label">SORT BY COLUMN</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {siteConfig.blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 tabular',
                  activeCategory === cat
                    ? 'bg-ink text-white ring-1 ring-ink shadow-[0_8px_20px_-8px_rgba(26,26,46,0.4)]'
                    : 'bg-white/72 backdrop-blur-md text-ink-secondary ring-1 ring-rose-mist/55 hover:bg-white/90 hover:ring-coral/40',
                )}
              >
                {cat === 'All' ? 'All Entries' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Entries ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding pt-10 lg:pt-12">
          {filteredPosts.length > 0 ? (
            <RevealOnScroll
              variant="slideUp"
              stagger={0.06}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-[20px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 hover:bg-white/90 hover:ring-coral/40 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.14)] hover:shadow-[0_18px_44px_-16px_rgba(255,107,107,0.22)] transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] tabular text-ink-faint">
                      No.{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-coral bg-coral/10 rounded-full ring-1 ring-coral/20 tabular">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="h-card leading-[1.2] [text-wrap:balance]">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] text-ink-muted leading-[1.55] flex-1 [text-wrap:pretty]">
                    {post.description}
                  </p>

                  <footer className="mt-6 pt-4 border-t hairline flex items-center gap-4 text-[11px] text-ink-faint tabular">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={11} />
                      {post.readingTime}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 text-ink-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-coral transition-all duration-300">
                      Read
                      <ArrowRight size={12} />
                    </span>
                  </footer>
                </motion.article>
              ))}
            </RevealOnScroll>
          ) : (
            <div className="py-20 text-center max-w-md mx-auto">
              <span className="font-mono text-[10px] tabular text-ink-faint uppercase tracking-[0.18em]">
                EMPTY COLUMN
              </span>
              <p className="mt-4 serif-italic text-ink-muted text-lg leading-snug">
                No entries in this column yet. Members are writing — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden grain"
        style={{
          background:
            'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)',
        }}
      >
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-coral/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-white/35 blur-[120px] pointer-events-none" />

        <div className="container-width section-padding relative text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20 tabular">
            <Sparkles size={11} />
            THE DOOR IS OPEN TODAY
          </span>
          <h2 className="h-section mt-6 max-w-3xl mx-auto">
            Want to{' '}
            <span className="serif-italic text-coral">write</span>{' '}
            inside the room?
          </h2>
          <p className="mt-7 serif-italic text-ink-muted/85 text-lg max-w-md mx-auto leading-snug">
            Members get the Journal first. Drafts get loving notes. Nothing
            ships before it&apos;s ready.
          </p>
          <Link
            href="/#join"
            className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Request Invite
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
