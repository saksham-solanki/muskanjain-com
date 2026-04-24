'use client'
/** Meteors — streaking meteor trails for dark-section ambiance. */
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function Meteors({ number = 20, className }: { number?: number; className?: string }) {
  const [meteors, setMeteors] = useState<{ left: string; delay: string; duration: string }[]>([])

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, () => ({
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: `${Math.random() * 1.5}s`,
        duration: `${Math.random() * 8 + 4}s`,
      })),
    )
  }, [number])

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden>
      {meteors.map((m, i) => (
        <span
          key={i}
          className="absolute top-0 w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:content-[''] before:h-px before:w-16 before:bg-gradient-to-r before:from-white/60 before:to-transparent"
          style={{
            left: m.left,
            animation: `meteor-fall ${m.duration} linear ${m.delay} infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes meteor-fall {
          0%   { transform: translate(0, -100%) rotate(215deg); opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(-600px, 600px) rotate(215deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
