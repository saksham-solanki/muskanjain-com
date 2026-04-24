import { cn } from '@/lib/utils'

/**
 * GlassCard — wrapper applying glassmorphism utility classes.
 * Requires `.glass`, `.glass-light`, `.glass-dark` in globals.css
 * (from keyframes.css).
 *
 * Source: MoveSmart-Rentals + VMS
 */

type GlassVariant = 'glass' | 'glass-light' | 'glass-dark'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GlassVariant
  /** Rounded radius. Default 'rounded-2xl' */
  rounded?: string
  hoverable?: boolean
}

export function GlassCard({
  variant = 'glass',
  rounded = 'rounded-2xl',
  hoverable = false,
  className,
  children,
  ...rest
}: GlassCardProps) {
  return (
    <div
      {...rest}
      className={cn(
        variant,
        rounded,
        'p-6',
        hoverable && variant === 'glass-dark' && 'glass-dark-hover transition-colors',
        className,
      )}
    >
      {children}
    </div>
  )
}
