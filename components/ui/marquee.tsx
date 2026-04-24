'use client'

import { cn } from '@/lib/utils'

/**
 * Marquee — infinite-scrolling logo strip. Pauses on hover.
 * Requires the `.animate-marquee-scroll` keyframe (from keyframes.css)
 * or the `.animate-marquee` class.
 *
 * Usage:
 *   <Marquee items={partners} />
 *   Double the items internally for seamless loop.
 *
 * Source: MoveSmart-Rentals / all 5 sites
 */

interface MarqueeItem {
  name: string
  /** Optional min-width in px for spacing. Default 100 */
  width?: number
  /** Optional logo node — if omitted, renders a text placeholder */
  logo?: React.ReactNode
}

interface MarqueeProps {
  items: MarqueeItem[]
  heading?: string
  className?: string
  /** Scroll duration in seconds. Default 30 */
  duration?: number
  /** Reverse direction. Default false */
  reverse?: boolean
  /** Background color behind fade edges. Default 'white' */
  fadeColor?: string
}

export function Marquee({
  items,
  heading,
  className,
  duration = 30,
  reverse = false,
  fadeColor = 'white',
}: MarqueeProps) {
  return (
    <section className={cn('overflow-hidden py-10', className)}>
      {heading && (
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {heading}
        </p>
      )}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
          style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
          style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
        />

        <div
          className="flex gap-8"
          style={{
            animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${duration}s linear infinite`,
            willChange: 'transform',
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white/80 px-4 py-2"
              style={{ minWidth: item.width ?? 100 }}
            >
              {item.logo ?? (
                <span className="whitespace-nowrap text-xs font-semibold text-slate-400 transition-colors hover:text-slate-600">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
