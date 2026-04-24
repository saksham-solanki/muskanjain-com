'use client'
/** BlurFade — simple blur+fade+rise reveal wrapper. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  inViewMargin = '-60px',
  yOffset = 10,
  blur = 8,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  inViewMargin?: string
  yOffset?: number
  blur?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: inViewMargin as any })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur}px)` }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
