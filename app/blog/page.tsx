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
    title: 'how i built an ai citation tracker for a defi protocol',
    description:
      'a step-by-step breakdown of the system architecture, data pipeline, and tracking dashboard i shipped for a top-50 defi protocol.',
    category: 'AI Build',
    date: 'Apr 30, 2026',
    readingTime: '12 min',
  },
  {
    slug: 'ai-agent-market-crypto',
    title: "the $4.34B ai agent market in crypto: what's real",
    description:
      'separating signal from noise in the ai agent ecosystem. which projects have real usage, and which are vaporware.',
    category: 'AI Signal',
    date: 'Apr 28, 2026',
    readingTime: '8 min',
  },
  {
    slug: 'ai-x-web3-definitive-guide',
    title: 'ai x web3: the definitive guide to the intersection',
    description:
      'how ai and web3 converge across infrastructure, applications, and go-to-market. the opportunities most teams are missing.',
    category: 'AI x Web3',
    date: 'Apr 27, 2026',
    readingTime: '15 min',
  },
  {
    slug: 'started-crypto-at-17',
    title: "i started in crypto at 17. here's what nobody tells you",
    description:
      'three years, five companies, six cities, and a complete pivot. the unfiltered version of building a career in web3.',
    category: 'Real Talk',
    date: 'Apr 26, 2026',
    readingTime: '10 min',
  },
  {
    slug: 'web3-companies-aeo',
    title: 'why <1% of web3 companies are doing aeo',
    description:
      'answer engine optimization is the biggest growth unlock in crypto right now. here is why almost nobody is doing it.',
    category: 'AI Signal',
    date: 'Apr 25, 2026',
    readingTime: '7 min',
  },
  {
    slug: 'seo-content-stack-50-pages',
    title: 'the exact stack i use to publish 50+ seo pages per month',
    description:
      'claude code, next.js, vercel, and a programmatic pipeline that turns keyword research into live pages in under 48 hours.',
    category: 'AI Build',
    date: 'Apr 24, 2026',
    readingTime: '9 min',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = 'the journal'
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
                <span className="eyebrow text-ink-muted">No. 01</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE JOURNAL</span>
              </div>
              <h1
                className="display-tight mt-7 text-ink"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                <span className="block">field notes</span>
                <span className="block mt-1">
                  from{' '}
                  <span className="serif-italic text-coral">the room.</span>
                </span>
              </h1>
              <p className="mt-9 max-w-xl text-base sm:text-[17px] text-ink-secondary/85 leading-[1.55] [text-wrap:pretty]">
                slow writing from a fast room. ai builds, market signals, web3
                receipts, and the occasional real-talk dispatch — written by
                members, kept lowercase on purpose.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                ↳ no dark patterns. no thought leadership. just notes from
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
            <span className="eyebrow text-ink-muted">No. 02</span>
            <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
            <span className="section-label">SORT BY COLUMN</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {siteConfig.blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 lowercase tabular',
                  activeCategory === cat
                    ? 'bg-ink text-white ring-1 ring-ink shadow-[0_8px_20px_-8px_rgba(26,26,46,0.4)]'
                    : 'bg-white/72 backdrop-blur-md text-ink-secondary ring-1 ring-rose-mist/55 hover:bg-white/90 hover:ring-coral/40',
                )}
              >
                {cat === 'All' ? 'all entries' : cat.toLowerCase()}
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
                      no.{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-coral bg-coral/10 rounded-full ring-1 ring-coral/20 tabular">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-ink lowercase tracking-tight leading-[1.15] [text-wrap:balance]">
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
                      read
                      <ArrowRight size={12} />
                    </span>
                  </footer>
                </motion.article>
              ))}
            </RevealOnScroll>
          ) : (
            <div className="py-20 text-center max-w-md mx-auto">
              <span className="font-mono text-[10px] tabular text-ink-faint uppercase tracking-[0.18em]">
                empty column
              </span>
              <p className="mt-4 serif-italic text-ink-muted text-lg leading-snug">
                no entries in this column yet. members are writing — check back
                soon.
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
          <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem] max-w-3xl mx-auto">
            want to{' '}
            <span className="serif-italic text-coral">write</span>{' '}
            inside the room?
          </h2>
          <p className="mt-7 serif-italic text-ink-muted/85 text-lg max-w-md mx-auto leading-snug">
            members get the journal first. drafts get loving notes. nothing
            ships before it&apos;s ready.
          </p>
          <Link
            href="/#join"
            className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            request invite
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
