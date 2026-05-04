'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

type Testimonial = {
  quote: string
  author: string
  role: string
  brand: string
  initial: string
  avatarGradient: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      '[Add a quote from your Base collaborator about the brand films and the Fellowship series.]',
    author: '[Name]',
    role: '[Title]',
    brand: 'Base',
    initial: 'B',
    avatarGradient: 'from-[#0052FF] to-[#3D8CFF]',
  },
  {
    quote:
      '[Add a quote from a KRNL teammate about the founder docu-series and the India Tour.]',
    author: '[Name]',
    role: '[Title]',
    brand: 'KRNL',
    initial: 'K',
    avatarGradient: 'from-coral to-coral-deep',
  },
  {
    quote:
      '[Add a quote from a Proof of Hustle podcast guest about their experience on the show.]',
    author: '[Name]',
    role: '[Title]',
    brand: 'Proof of Hustle',
    initial: 'P',
    avatarGradient: 'from-[#F59E0B] to-[#DC2626]',
  },
]

const tilts: number[] = [0, -1, 1]
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <RevealOnScroll variant="blur">
          <div className="max-w-3xl">
            <p className="eyebrow">WHAT THEY SAY</p>
            <h2 className="h-section mt-4">
              Words from people I&rsquo;ve{' '}
              <span className="serif-italic text-coral">shipped with</span>.
            </h2>
            <p className="mt-5 text-ink-faint text-xs font-mono uppercase tracking-[0.18em]">
              Quotes pending. The work is real, the names are coming.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="slideUp" stagger={0.1}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => {
              const tilt = tilts[i] ?? 0
              return (
                <motion.figure
                  key={t.brand}
                  initial={{ rotate: tilt }}
                  animate={{ rotate: tilt }}
                  whileHover={{ y: -6, rotate: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="relative rounded-[22px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/50 hover:ring-coral/40"
                >
                  <span
                    className="absolute -top-5 left-5 text-8xl text-coral/30 leading-none select-none font-serif"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-8 text-[15px] text-ink-secondary leading-[1.6] [text-wrap:pretty] serif-italic">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 pt-5 border-t hairline flex items-center gap-3">
                    <div
                      className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.avatarGradient} grid place-items-center text-white text-base font-bold ring-2 ring-white shadow-md shrink-0`}
                      aria-hidden
                    >
                      {t.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-ink">{t.author}</p>
                      <p className="mt-0.5 text-[11px] text-ink-muted">
                        {t.role} ·{' '}
                        <span className="text-coral font-semibold">{t.brand}</span>
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              )
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
