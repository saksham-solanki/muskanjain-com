/**
 * lib/gsap-scroll.ts
 * GSAP ScrollTrigger primitives, SSR-safe helpers and hooks.
 */

import { useEffect, useState } from 'react'

// ─── Plugin registration ───────────────────────────────────────────────────

let _registered = false

/**
 * Idempotent: registers the ScrollTrigger plugin with GSAP exactly once.
 * Safe to call on every render, short-circuits after the first call.
 * No-ops on the server (guards typeof window).
 */
export function registerGsap(): void {
  if (typeof window === 'undefined') return
  if (_registered) return

  // Dynamic import pattern avoids SSR module errors with Next.js.
  // Callers that need synchronous registration (useGSAP) should call this
  // before their first animation effect.
  import('gsap').then(({ gsap }) => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)
      _registered = true
    })
  })
}

// ─── useScrollProgress hook ────────────────────────────────────────────────

/**
 * Returns a number in [0, 1] representing how far the user has scrolled
 * through the document. 0 = top, 1 = bottom.
 *
 * Pure browser, no GSAP dependency. SSR-safe: returns 0 until mounted.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = (): void => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) {
        setProgress(0)
        return
      }
      setProgress(Math.min(1, Math.max(0, scrollTop / docHeight)))
    }

    // Capture initial position (page may load mid-scroll on refresh)
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
