/** AnimatedLines — SVG lines that draw themselves on in-view (decorative divider). */
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function AnimatedLines({
  lines = 3,
  color = 'currentColor',
  className,
}: { lines?: number; color?: string; className?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <svg ref={ref} viewBox="0 0 400 120" className={cn('w-full h-24', className)} aria-hidden>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.line
          key={i}
          x1="0"
          y1={20 + i * 20}
          x2="400"
          y2={20 + i * 20}
          stroke={color}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.4 - i * 0.1 } : undefined}
          transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  )
}
