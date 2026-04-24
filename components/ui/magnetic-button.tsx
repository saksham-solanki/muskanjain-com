'use client'

import { motion } from 'framer-motion'
import { useMagnetic } from './use-magnetic'
import { cn } from '@/lib/utils'

/**
 * MagneticButton — button/link with magnetic cursor pull + spotlight hover.
 * Drop-in for any primary CTA to get that "premium" feel.
 *
 * Source: MoveSmart-Rentals
 */

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  /** Magnetic pull strength. Default 0.3 */
  strength?: number
  /** Whether to apply the .spotlight-card class. Default true */
  spotlight?: boolean
  onClick?: () => void
  href?: string
  as?: 'button' | 'a' | 'div'
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  spotlight = true,
  onClick,
  href,
  as = 'button',
}: MagneticButtonProps) {
  const { ref, x, y } = useMagnetic({ strength })

  const Component = as === 'a' ? motion.a : as === 'div' ? motion.div : motion.button

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={cn('relative inline-flex', spotlight && 'spotlight-card', className)}
      style={{ x, y }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={onClick}
      href={href}
    >
      {children}
    </Component>
  )
}
