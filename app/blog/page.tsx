'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
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

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            blog
          </h1>
          <p className="mt-4 text-lg text-ink-muted">
            ai builds, market signals, web3 insights, and real talk
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="pb-8">
        <div className="container-width max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {siteConfig.blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-1.5 text-sm font-medium rounded-full transition-colors',
                  activeCategory === cat
                    ? 'bg-coral text-white'
                    : 'bg-coral-muted text-coral hover:bg-coral/20'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog cards */}
      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-[16px] shadow-soft p-6 flex flex-col hover:shadow-medium transition-shadow"
              >
                {/* Category badge */}
                <span className="self-start px-3 py-1 text-xs font-medium text-coral bg-coral-muted rounded-full mb-4">
                  {post.category}
                </span>

                <h2 className="text-lg font-semibold text-ink leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
                  {post.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-ink-faint">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readingTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-ink-muted py-16">
              no posts in this category yet. check back soon.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
