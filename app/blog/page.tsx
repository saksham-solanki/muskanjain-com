'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { BlurFade } from '@/components/ui/blur-fade'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { cn } from '@/lib/utils'

/* ═══════════════════════════════════════════════════════
   POST DATA
   ═══════════════════════════════════════════════════════ */
const featuredPost = {
  slug: 'reddit-ai-answers-web3-gtm',
  title: 'Why Reddit Now Owns 68% of AI-Generated Answers (And What That Means For Web3 GTM)',
  description:
    'AI citation patterns have shifted dramatically in 12 months. Reddit threads and community-driven content now dominate LLM training sets — and most Web3 marketing stacks are completely unprepared for it. Here is the breakdown, the data, and the playbook.',
  category: 'AI x Web3',
  date: 'May 4, 2026',
  readingTime: '14 min read',
}

const secondaryPosts = [
  {
    slug: 'aeo-for-web3-protocols',
    title: 'AEO for Web3: How to Make Your Protocol the Answer, Not Just a Result',
    description:
      'Answer Engine Optimization is not SEO. Here is what changes when your audience is asking AI, not Google.',
    category: 'AI Signal',
    date: 'May 2, 2026',
    readingTime: '8 min',
  },
  {
    slug: 'sybil-resistant-launches',
    title: 'The Sybil-Resistant Launch Playbook: Stop Bots Before Token Day One',
    description:
      'How to model bot leakage before your TGE, and the tools that actually work (Nansen, Dune, Galxe behavioral gates).',
    category: 'AI x Web3',
    date: 'Apr 30, 2026',
    readingTime: '11 min',
  },
  {
    slug: 'ai-ghostwriting-founder-voice',
    title: 'AI Ghostwriting Your Founder Voice: Where It Works and Where It Breaks',
    description:
      'A practical audit of multi-agent content pipelines after 6 months of running them at scale. What reads as human. What does not.',
    category: 'AI Build',
    date: 'Apr 27, 2026',
    readingTime: '9 min',
  },
  {
    slug: 'on-chain-attribution-playbook',
    title: 'The On-Chain Attribution Playbook: From Ad Impression to First Transaction',
    description:
      'Connecting web analytics to wallet activity is the unsolved problem in Web3 GTM. This is how we are solving it.',
    category: 'AI Build',
    date: 'Apr 24, 2026',
    readingTime: '12 min',
  },
  {
    slug: 'why-web3-marketing-fails',
    title: 'Why Most Web3 Marketing Fails (And It Is Not the Team)',
    description:
      'The structural problems — attribution gaps, incentive misalignment, bot noise — that make standard GTM playbooks useless in Web3.',
    category: 'Real Talk',
    date: 'Apr 21, 2026',
    readingTime: '7 min',
  },
  {
    slug: 'ai-web3-stack-worth-running',
    title: 'The AI×Web3 Stack Worth Running in 2026',
    description:
      'After shipping for 12+ protocols: the tools, agent configurations, and integrations that actually move numbers.',
    category: 'AI Build',
    date: 'Apr 18, 2026',
    readingTime: '10 min',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? secondaryPosts
      : secondaryPosts.filter((p) => p.category === activeCategory)

  return (
    <main className="pt-24">

      {/* ─── Editorial Hero ─── */}
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
          <BlurFade delay={0.05}>
            <div className="flex items-center gap-3">
              <span className="eyebrow">No. 01</span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="section-label">THE JOURNAL</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h1 className="h-display mt-7">
              <span className="block">the journal.</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="mt-7 max-w-xl text-lead [text-wrap:pretty]">
              longer pieces. essays. teardowns. the receipts behind the work.
            </p>
          </BlurFade>

          <BlurFade delay={0.26}>
            <p className="mt-6 serif-italic text-ink-muted/80 text-lg max-w-lg leading-snug">
              ↳ no dark patterns. no thought leadership. just notes from people shipping things.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ─── Category Filter ─── */}
      <section className="bg-blush">
        <div className="container-width pt-12 lg:pt-16">
          <BlurFade delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow">No. 02</span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="section-label">FILTER BY COLUMN</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {siteConfig.blogCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 tabular',
                    activeCategory === cat
                      ? 'bg-ink text-white ring-1 ring-ink shadow-[0_8px_20px_-8px_rgba(26,26,46,0.4)]'
                      : 'bg-white/72 backdrop-blur-md text-ink-muted ring-1 ring-rose-mist/55 hover:bg-white/90 hover:ring-coral/40',
                  )}
                >
                  {cat === 'All' ? 'All Entries' : cat}
                </button>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── Featured Post Hero ─── */}
      <section className="bg-blush">
        <div className="container-width pt-10 lg:pt-12 pb-0">
          <BlurFade delay={0.05}>
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[24px] overflow-hidden p-8 sm:p-12 bg-ink text-white ring-1 ring-ink/80 shadow-[0_20px_60px_-20px_rgba(26,26,46,0.5)] hover:shadow-[0_28px_70px_-20px_rgba(255,107,107,0.3)] transition-all cursor-pointer"
              >
                {/* Subtle gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/5 blur-[120px] pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-coral/20 text-coral text-[10px] font-bold uppercase tracking-[0.16em] ring-1 ring-coral/30 tabular">
                      {featuredPost.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 tabular">
                      FEATURED
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] max-w-3xl [text-wrap:balance]">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 text-[15px] text-white/65 leading-[1.65] max-w-2xl [text-wrap:pretty]">
                    {featuredPost.description}
                  </p>

                  <div className="mt-8 flex items-center gap-6">
                    <div className="flex items-center gap-4 text-[11px] text-white/40 tabular">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={11} />
                        {featuredPost.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={11} />
                        {featuredPost.readingTime}
                      </span>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-coral opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* ─── Secondary Posts Grid ─── */}
      <section className="bg-blush">
        <div className="container-width section-padding pt-8 lg:pt-10">
          {filteredPosts.length > 0 ? (
            <RevealOnScroll
              variant="slideUp"
              stagger={0.07}
              className="grid sm:grid-cols-2 gap-5"
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

                  <h2 className="h-card leading-[1.2] [text-wrap:balance]">{post.title}</h2>
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
                no entries in this column yet. check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Newsletter Subscribe ─── */}
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
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20 tabular">
              <Sparkles size={11} />
              THE JOURNAL — SUBSCRIBE
            </span>

            <h2 className="h-section mt-6 max-w-3xl mx-auto">
              subscribe to{' '}
              <span className="serif-italic text-coral">the journal.</span>
            </h2>

            <p className="mt-6 max-w-md mx-auto serif-italic text-ink-muted/85 text-lg leading-snug [text-wrap:pretty]">
              longer pieces, teardowns, and receipts — straight to your inbox. no noise.
            </p>

            <div className="mt-10 max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  )
}