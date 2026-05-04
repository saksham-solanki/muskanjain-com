'use client'

/**
 * PinReveal
 *
 * Pins its wrapper for a configurable scroll distance while animating
 * direct children in with a staggered fade-up. Ideal for hero sections
 * or statement copy that should hold the viewport while revealing.
 *
 * Props:
 *   children      , content to reveal (direct children are staggered)
 *   className     , forwarded to the outer wrapper
 *   pinDuration   , extra scroll space held during pin:
 *                    '50%' | '100%' | '150%' of viewport height (default '100%')
 *   id            , optional id on the outer wrapper (useful for anchor links)
 *
 * Respects prefers-reduced-motion: skips GSAP, renders children visible.
 *
 * Implementation notes:
 *   - useGSAP scoped to containerRef handles cleanup automatically.
 *   - The outer wrapper must have overflow: visible so ScrollTrigger's pin
 *     spacer can insert correctly; the inner wrapper clips content.
 *   - Children are selected via `[data-pin-item]` attribute, falling back
 *     to direct DOM children of the inner wrapper.
 */

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type PinDuration = '50%' | '100%' | '150%'

interface PinRevealProps {
  children: React.ReactNode
  className?: string
  pinDuration?: PinDuration
  id?: string
}

const DURATION_MAP: Record<PinDuration, string> = {
  '50%': '+=50%',
  '100%': '+=100%',
  '150%': '+=150%',
}

export function PinReveal({
  children,
  className,
  pinDuration = '100%',
  id,
}: PinRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Respect reduced-motion preference
      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return
      }

      const container = containerRef.current
      const inner = innerRef.current
      if (!container || !inner) return

      // Collect items: prefer [data-reveal] children, fall back to all direct children
      const items: Element[] = Array.from(
        inner.querySelectorAll('[data-reveal]').length
          ? inner.querySelectorAll('[data-reveal]')
          : inner.children,
      )

      if (items.length === 0) return

      // Set initial state on items
      gsap.set(items, { opacity: 0, y: 40 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: DURATION_MAP[pinDuration],
          scrub: false,
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            // Play the timeline when entering the pin zone
            tl.play()
          },
        },
      })

      tl.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
      })

      // Start paused, ScrollTrigger's onEnter drives playback
      tl.pause()
    },
    { scope: containerRef, dependencies: [pinDuration] },
  )

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={{ overflow: 'visible' }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
