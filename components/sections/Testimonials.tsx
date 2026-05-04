'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

/**
 * Receipts wall, replaces the previous testimonial placeholders.
 * Real attributions only, taken from the Worked-With roster.
 * When real third-party quotes land, swap this component for
 * a quote-led variant (keep the same import surface).
 */
type Receipt = {
  brand: string
  scope: string
  outcome: string
  stamp: string
  initial: string
  avatarGradient: string
}

const receipts: Receipt[] = [
  {
    brand: 'Canton Foundation',
    scope: 'AI-native GTM lead',
    outcome:
      'Marketing the rails moving $9T per month in institutional blockchain flow.',
    stamp: '2024 → present',
    initial: 'C',
    avatarGradient: 'from-[#10B981] to-[#0E8F6E]',
  },
  {
    brand: 'KRNL Labs',
    scope: 'DeKoded ecosystem lead',
    outcome:
      'Six-city builder tour across India. 600+ operators convened, 21-episode docu-series shipped.',
    stamp: '2024 → 2025',
    initial: 'K',
    avatarGradient: 'from-coral to-coral-deep',
  },
  {
    brand: 'Smallest AI',
    scope: 'Voice GTM operator',
    outcome:
      'Voice agents shipping in production today. Positioning, content motion, and outbound built end-to-end.',
    stamp: '2025 → present',
    initial: 'S',
    avatarGradient: 'from-[#8B5CF6] to-[#5B3FB8]',
  },
  {
    brand: 'Symbiote',
    scope: 'Inside Web3 marketing',
    outcome:
      'Embedded GTM through the 2024 cycle. Where the AI-native playbook first earned its keep.',
    stamp: '2024',
    initial: 'Y',
    avatarGradient: 'from-[#06B6D4] to-[#0E7490]',
  },
  {
    brand: 'Genzio Media',
    scope: 'Senior strategist',
    outcome:
      'Where the agency-vs-builder gap got loud. The founding contrast that shaped the playbook on this page.',
    stamp: '2023',
    initial: 'G',
    avatarGradient: 'from-[#F59E0B] to-[#DC2626]',
  },
]

const tilts: number[] = [0, -1, 1, -1, 0]
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <RevealOnScroll variant="blur">
          <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-coral tabular">
                No. 09 · Receipts From the Field
              </span>
              <span className="h-px w-10 sm:w-16 bg-coral/40" />
            </div>
            <h2 className="h-section text-ink tracking-tight mt-7">
              Where the work{' '}
              <span className="serif-italic text-coral">actually landed.</span>
            </h2>
            <p className="serif-italic text-lg sm:text-xl text-ink-muted/85 leading-[1.45] max-w-2xl mx-auto mt-7 [text-wrap:pretty]">
              Logos are easy. Outcomes are not. Below: rooms I have shipped
              inside, what I owned, and what came out the other end.
            </p>
          </header>
        </RevealOnScroll>

        <RevealOnScroll variant="slideUp" stagger={0.1}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {receipts.map((r, i) => {
              const tilt = tilts[i] ?? 0
              return (
                <motion.figure
                  key={r.brand}
                  initial={{ rotate: tilt }}
                  animate={{ rotate: tilt }}
                  whileHover={{ y: -6, rotate: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="group relative rounded-[22px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 hover:ring-coral/40 transition-shadow hover:shadow-[0_24px_50px_-22px_rgba(255,107,107,0.35)]"
                >
                  {/* Top: avatar + brand */}
                  <header className="flex items-center gap-3">
                    <div
                      className={`h-11 w-11 rounded-full bg-gradient-to-br ${r.avatarGradient} grid place-items-center text-white text-base font-bold ring-2 ring-white shadow-md shrink-0`}
                      aria-hidden
                    >
                      {r.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-ink tracking-tight truncate">
                        {r.brand}
                      </p>
                      <p className="mt-0.5 text-[11px] text-coral font-mono uppercase tracking-[0.18em] truncate">
                        {r.scope}
                      </p>
                    </div>
                  </header>

                  {/* Outcome */}
                  <p className="mt-6 text-[15px] text-ink-secondary leading-[1.6] [text-wrap:pretty]">
                    {r.outcome}
                  </p>

                  {/* Stamp */}
                  <footer className="mt-7 pt-5 border-t hairline flex items-center justify-between gap-3">
                    <span className="font-mono text-[10.5px] tabular text-ink-faint uppercase tracking-[0.2em]">
                      {r.stamp}
                    </span>
                    <span className="font-mono text-[10px] tabular text-ink-faint">
                      Shipped
                    </span>
                  </footer>
                </motion.figure>
              )
            })}

            {/* CTA card — sixth slot, balances the 3×2 grid */}
            <Link
              href="/book"
              className="group relative rounded-[22px] p-7 bg-ink text-white ring-1 ring-ink/20 flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <span
                aria-hidden
                className="absolute -top-12 -right-10 w-[180px] h-[180px] rounded-full bg-coral/25 blur-[60px] pointer-events-none"
              />
              <div className="relative">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-coral">
                  More Receipts
                </p>
                <p className="mt-3 text-[19px] font-bold leading-[1.25] [text-wrap:balance]">
                  The full roster lives in the call. Named brands, named
                  numbers, named tradeoffs.
                </p>
              </div>
              <div className="relative mt-7 pt-5 border-t border-white/10 flex items-center justify-between text-sm font-semibold">
                <span>Book the 30-min</span>
                <ArrowUpRight
                  size={18}
                  className="text-coral transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
