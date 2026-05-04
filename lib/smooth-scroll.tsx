'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Lenis smooth-scroll wrapper. Mount once at the root layout.
 * Honors `prefers-reduced-motion` and falls back to native scrolling.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      lerp: 0.12,
    })
    lenisRef.current = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Anchor link smooth-scroll
    const onAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const a = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#') return
      const el = document.querySelector(href) as HTMLElement | null
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -72, duration: 1.4 })
    }
    document.addEventListener('click', onAnchor)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onAnchor)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
