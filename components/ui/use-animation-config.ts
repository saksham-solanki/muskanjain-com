'use client'

import { useState, useEffect } from 'react'

/**
 * useAnimationConfig — centralized accessibility-aware animation gate.
 *
 * Returns device- and preference-aware flags every animated component should
 * respect. Gives one source of truth for:
 *   - prefers-reduced-motion
 *   - mobile detection
 *   - parallax multiplier (0 on reduced, 0.5 on mobile, 1 on desktop)
 *   - mesh blob count (fewer on mobile)
 *   - canvas effects enabled?
 *   - duration multiplier (0.01 on reduced → instant)
 *
 * Every component that animates heavily (gradient meshes, parallax,
 * canvas particles, cinematic heroes) MUST check `shouldAnimate` before
 * running animation loops.
 *
 * Source: MoveSmart-Rentals
 */

interface AnimationConfig {
  prefersReducedMotion: boolean
  isMobile: boolean
  shouldAnimate: boolean
  parallaxMultiplier: number
  meshBlobCount: number
  enableCanvasEffects: boolean
  durationMultiplier: number
}

export function useAnimationConfig(): AnimationConfig {
  const [config, setConfig] = useState<AnimationConfig>({
    prefersReducedMotion: false,
    isMobile: false,
    shouldAnimate: true,
    parallaxMultiplier: 1,
    meshBlobCount: 4,
    enableCanvasEffects: true,
    durationMultiplier: 1,
  })

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    const prefersReduced = reducedMotion.matches

    setConfig({
      prefersReducedMotion: prefersReduced,
      isMobile,
      shouldAnimate: !prefersReduced,
      parallaxMultiplier: prefersReduced ? 0 : isMobile ? 0.5 : 1,
      meshBlobCount: isMobile ? 2 : 4,
      enableCanvasEffects: !isMobile && !prefersReduced,
      durationMultiplier: prefersReduced ? 0.01 : 1,
    })

    const handleChange = (e: MediaQueryListEvent) => {
      setConfig(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
        shouldAnimate: !e.matches,
        parallaxMultiplier: e.matches ? 0 : prev.isMobile ? 0.5 : 1,
        durationMultiplier: e.matches ? 0.01 : 1,
        enableCanvasEffects: !prev.isMobile && !e.matches,
      }))
    }

    reducedMotion.addEventListener('change', handleChange)
    return () => reducedMotion.removeEventListener('change', handleChange)
  }, [])

  return config
}
