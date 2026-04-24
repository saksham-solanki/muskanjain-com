'use client'

import { useRef, useEffect } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'

/**
 * useMagnetic — magnetic cursor-pull hook. Cursor gently tugs the element
 * toward it when within `radius`, snaps back when outside. Spring-smoothed.
 *
 * Disabled on touch devices by default. Use on CTAs/hero buttons for
 * premium interaction feel.
 *
 * Source: MoveSmart-Rentals
 */

interface MagneticOptions {
  /** Strength of the pull (0-1). Default 0.3 */
  strength?: number
  /** Radius in px within which the effect activates. Default 150 */
  radius?: number
  /** Spring stiffness. Default 150 */
  stiffness?: number
  /** Spring damping. Default 15 */
  damping?: number
  /** Disable on mobile/touch devices. Default true */
  disableOnMobile?: boolean
}

interface MagneticReturn {
  ref: React.RefObject<HTMLElement | null>
  x: MotionValue<number>
  y: MotionValue<number>
}

export function useMagnetic(options: MagneticOptions = {}): MagneticReturn {
  const {
    strength = 0.3,
    radius = 150,
    stiffness = 150,
    damping = 15,
    disableOnMobile = true,
  } = options

  const ref = useRef<HTMLElement | null>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness, damping, mass: 0.1 })
  const y = useSpring(rawY, { stiffness, damping, mass: 0.1 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (disableOnMobile && window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)

      if (distance < radius) {
        const pull = (1 - distance / radius) * strength
        rawX.set(distX * pull)
        rawY.set(distY * pull)
      } else {
        rawX.set(0)
        rawY.set(0)
      }
    }

    const handleMouseLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, radius, rawX, rawY, disableOnMobile])

  return { ref, x, y }
}
