/** AnimatedShinyText — subtle traveling shine. Requires shimmer keyframe. */
import { cn } from '@/lib/utils'

export function AnimatedShinyText({
  children,
  className,
  speed = '3s',
}: {
  children: React.ReactNode
  className?: string
  speed?: string
}) {
  return (
    <span
      className={cn('inline-flex bg-clip-text text-transparent', className)}
      style={{
        backgroundImage: 'linear-gradient(110deg, rgba(0,0,0,.5) 40%, rgba(255,255,255,.9) 50%, rgba(0,0,0,.5) 60%)',
        backgroundSize: '300% 100%',
        animation: `shimmer ${speed} linear infinite`,
      }}
    >
      {children}
    </span>
  )
}
