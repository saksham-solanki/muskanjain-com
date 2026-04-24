'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, Children } from 'react'
import { REVEAL_VARIANTS } from '@/lib/motion'

/**
 * RevealOnScroll — the universal scroll-triggered reveal wrapper.
 *
 * Two modes:
 *   1. Variant mode (variant={...}) — wraps children in motion.div with the
 *      given variant. Each child staggers by `stagger` seconds.
 *   2. Legacy stagger mode (no variant) — treats children as motion.div
 *      with their own variants (e.g., revealItem).
 *
 * ALWAYS uses { once: true, margin: '-60px' }.
 *
 * Source: distilled from MoveSmart-Rentals.
 */

type Variant = keyof typeof REVEAL_VARIANTS
type StaggerFrom = 'first' | 'center'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  variant?: Variant
  /** Stagger delay between children in seconds. Default 0.08 */
  stagger?: number
  /** Direction stagger originates from. Default "first" */
  staggerFrom?: StaggerFrom
  /** Manual delay offset in seconds */
  delay?: number
  /** Animation duration in seconds. Default 0.5 */
  duration?: number
}

export function RevealOnScroll({
  children,
  className,
  variant,
  stagger = 0.08,
  staggerFrom = 'first',
  delay = 0,
  duration = 0.5,
}: RevealOnScrollProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // ── Variant mode ─────────────────────────────────────
  if (variant) {
    const childCount = Children.count(children)
    const { hidden, visible } = REVEAL_VARIANTS[variant]

    const getDelay = (i: number): number => {
      if (staggerFrom === 'center') {
        const mid = (childCount - 1) / 2
        return delay + Math.abs(i - mid) * stagger
      }
      return delay + i * stagger
    }

    // Multi-child: stagger each in its own motion.div
    if (childCount > 1) {
      return (
        <div ref={ref} className={className}>
          {Children.map(children, (child, i) => (
            <motion.div
              key={(child as React.ReactElement)?.key ?? i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden,
                visible: {
                  ...visible,
                  transition: { duration, delay: getDelay(i), ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      )
    }

    // Single child
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden,
          visible: {
            ...visible,
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  // ── Legacy stagger-container mode ────────────────────
  const staggerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: 0.15 } },
  }

  return (
    <motion.div
      ref={ref}
      variants={staggerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
