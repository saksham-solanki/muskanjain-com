'use client'
/** FlipCard — 3D card that flips front↔back on hover. */
import { cn } from '@/lib/utils'

export function FlipCard({
  front,
  back,
  className,
  direction = 'horizontal',
}: {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  direction?: 'horizontal' | 'vertical'
}) {
  return (
    <div className={cn('group [perspective:1000px]', className)}>
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{
          transform:
            direction === 'horizontal'
              ? 'rotateY(0deg)'
              : 'rotateX(0deg)',
        }}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">{front}</div>
        <div
          className="absolute inset-0 [backface-visibility:hidden]"
          style={{ transform: direction === 'horizontal' ? 'rotateY(180deg)' : 'rotateX(180deg)' }}
        >
          {back}
        </div>
      </div>
      <style>{`
        .group:hover > div { transform: ${direction === 'horizontal' ? 'rotateY(180deg)' : 'rotateX(180deg)'}; }
      `}</style>
    </div>
  )
}
