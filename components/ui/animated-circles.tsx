'use client'
/** AnimatedCircles — concentric SVG circles that draw/pulse on in-view. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function AnimatedCircles({ count = 3, color = 'currentColor', className }: { count?: number; color?: string; className?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <svg ref={ref} viewBox="0 0 200 200" className={cn('w-full h-full', className)} fill="none" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="100"
          r={20 + i * 25}
          stroke={color}
          strokeWidth="1"
          strokeOpacity={0.5 - i * 0.1}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  )
}
