'use client'
/** AnimatedGridPattern — grid cells randomly appear + fade. */
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.3,
  duration = 4,
  className,
}: { numSquares?: number; maxOpacity?: number; duration?: number; className?: string }) {
  const [squares, setSquares] = useState<{ x: number; y: number; delay: number }[]>([])

  useEffect(() => {
    setSquares(
      Array.from({ length: numSquares }, () => ({
        x: Math.floor(Math.random() * 40),
        y: Math.floor(Math.random() * 40),
        delay: Math.random() * duration,
      })),
    )
  }, [numSquares, duration])

  return (
    <svg className={cn('absolute inset-0 h-full w-full fill-foreground/20 stroke-foreground/20', className)} aria-hidden>
      <defs>
        <pattern id="agp" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#agp)" />
      {squares.map((s, i) => (
        <rect
          key={i}
          width="40"
          height="40"
          x={s.x * 40}
          y={s.y * 40}
          fill="currentColor"
          style={{ opacity: 0, animation: `agp-fade ${duration}s ease-in-out ${s.delay}s infinite` }}
        />
      ))}
      <style>{`
        @keyframes agp-fade { 0%,100%{opacity:0} 50%{opacity:${maxOpacity}} }
      `}</style>
    </svg>
  )
}
