'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * VerticalCutReveal — splits a phrase into words and reveals each by
 * sliding from below a clipped line. Great for hero headlines:
 *   <h1><VerticalCutReveal>Build trust at scale</VerticalCutReveal></h1>
 *
 * Spring-animated, word-by-word stagger. Respects `once: true`.
 *
 * Source: MoveSmart-Rentals
 */

interface VerticalCutRevealProps {
  children: string
  staggerDuration?: number
  staggerFrom?: 'first' | 'center'
  className?: string
  wordClassName?: string
}

export function VerticalCutReveal({
  children,
  staggerDuration = 0.12,
  staggerFrom = 'first',
  className,
  wordClassName,
}: VerticalCutRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const words = children.split(' ')
  const total = words.length

  function getDelay(index: number): number {
    if (staggerFrom === 'first') return index * staggerDuration
    const center = Math.floor(total / 2)
    return Math.abs(center - index) * staggerDuration
  }

  return (
    <span ref={ref} className={cn('inline flex-wrap', className)}>
      {words.map((word, i) => (
        <span key={i} className={cn('inline-flex overflow-hidden', wordClassName)}>
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : { y: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 190,
              damping: 22,
              delay: getDelay(i),
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
