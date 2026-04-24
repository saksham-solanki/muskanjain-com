/** ShimmerButton — button with a traveling shimmer highlight (Magic UI-style). */
import { cn } from '@/lib/utils'

export function ShimmerButton({
  children,
  className,
  shimmerColor = '#ffffff',
  background = 'rgba(0,0,0,1)',
  borderRadius = '100px',
  shimmerDuration = '3s',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  shimmerColor?: string
  background?: string
  borderRadius?: string
  shimmerDuration?: string
}) {
  return (
    <button
      className={cn('group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white transition-transform active:translate-y-px', className)}
      style={{ background, borderRadius } as React.CSSProperties}
      {...rest}
    >
      <span
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <span
          className="absolute inset-0 block"
          style={{
            background: `conic-gradient(from 90deg, transparent 0 340deg, ${shimmerColor} 360deg)`,
            animation: `shimmer-spin ${shimmerDuration} linear infinite`,
          }}
        />
      </span>
      <span
        className="absolute inset-[2px] rounded-[inherit]"
        style={{ background, borderRadius: `calc(${borderRadius} - 2px)` }}
      />
      <span className="relative z-10 text-sm font-semibold">{children}</span>
      <style>{`
        @keyframes shimmer-spin { to { transform: rotate(360deg); } }
      `}</style>
    </button>
  )
}
