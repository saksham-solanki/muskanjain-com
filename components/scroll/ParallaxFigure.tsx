'use client'

/**
 * ParallaxFigure
 *
 * Wraps children in a div or figure that shifts vertically as the user
 * scrolls past it. Uses GSAP ScrollTrigger scrubbing, smoother than
 * CSS transforms tied to IntersectionObserver.
 *
 * Props:
 *   children    , content to parallax
 *   className   , forwarded to the wrapper element
 *   speed       , fraction of trigger height to shift (default 0.3).
 *                  Positive = moves up relative to scroll direction.
 *   as          , 'div' | 'figure' (default 'div')
 *
 * Respects prefers-reduced-motion: skips GSAP entirely, renders plain.
 */

import React, { useRef, ElementRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxFigureProps {
  children: React.ReactNode
  className?: string
  /** Fraction of the trigger element's height to shift. Default 0.3 */
  speed?: number
  /** Wrapper element tag. Default 'div' */
  as?: 'div' | 'figure'
}

export function ParallaxFigure({
  children,
  className,
  speed = 0.3,
  as: Tag = 'div',
}: ParallaxFigureProps) {
  const containerRef = useRef<ElementRef<typeof Tag>>(null)

  useGSAP(
    () => {
      // Respect reduced-motion preference
      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return
      }

      const el = containerRef.current
      if (!el) return

      const triggerHeight = (el as HTMLElement).offsetHeight
      const yShift = -(speed * triggerHeight)

      gsap.to(el, {
        y: yShift,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    },
    { scope: containerRef, dependencies: [speed] },
  )

  return (
    // @ts-expect-error, dynamic tag ref is typed as ElementRef<typeof Tag> above
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  )
}
