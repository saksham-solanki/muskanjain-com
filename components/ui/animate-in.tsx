'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * AnimateIn — IntersectionObserver-based reveal (alt to RevealOnScroll).
 * Use this when you don't want framer-motion's runtime cost, or when you
 * need very fine-grained threshold control.
 *
 * Also exports StaggerChildren + AnimatedCounter for completeness.
 *
 * Source: VMS
 */

type Animation =
  | 'fade-in-up'
  | 'fade-in-down'
  | 'fade-in'
  | 'scale-in'
  | 'slide-in-left'
  | 'slide-in-right'

interface AnimateInProps {
  children: React.ReactNode
  animation?: Animation
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

export function AnimateIn({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) observer.unobserve(ref.current)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(animation),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function getInitialTransform(animation: Animation): string {
  switch (animation) {
    case 'fade-in-up':    return 'translateY(24px)'
    case 'fade-in-down':  return 'translateY(-12px)'
    case 'fade-in':       return 'none'
    case 'scale-in':      return 'scale(0.95)'
    case 'slide-in-left': return 'translateX(-24px)'
    case 'slide-in-right':return 'translateX(24px)'
  }
}

// ─── Staggered children ───────────────────────────────
export function StaggerChildren({
  children,
  staggerDelay = 80,
  className = '',
}: {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(20px)',
                transition: `opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}

// ─── Animated counter (rAF-based, no framer dep) ──────
export function AnimatedCounter({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
