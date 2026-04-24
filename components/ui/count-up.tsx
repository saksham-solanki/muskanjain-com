'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * CountUp — spring-animated number counter that fires when in view.
 * 1800ms feel that looks great on stats ("2,000+ users", "$50M raised").
 *
 * Source: MoveSmart-Rentals
 */

interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUp({ value, suffix = '', prefix = '', className }: CountUpProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 })
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`)

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
