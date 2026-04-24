import { cn } from '@/lib/utils'

/**
 * GradientText — helper for gradient-filled text. Uses utility classes
 * from keyframes.css (`.text-gradient-brand`, `.text-gradient-animated`).
 * Define actual gradient colors in your `.text-gradient-*` rules.
 *
 * Source: MoveSmart-Rentals
 *
 * Usage:
 *   <h1>Your next <GradientText variant="animated">unfair advantage</GradientText></h1>
 */

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  /** Gradient variant — match CSS class name */
  variant?: 'brand' | 'emerald' | 'navy' | 'animated'
}

const variantClasses: Record<string, string> = {
  brand:    'text-gradient-brand',
  emerald:  'text-gradient-emerald',
  navy:     'text-gradient-navy',
  animated: 'text-gradient-animated',
}

export function GradientText({ children, className, variant = 'brand' }: GradientTextProps) {
  return (
    <span className={cn(variantClasses[variant], className)}>
      {children}
    </span>
  )
}

/*
  Required CSS (add these to globals.css with your brand colors):

  .text-gradient-brand {
    background: linear-gradient(135deg, #176FEB 0%, #0A1628 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-gradient-animated {
    background: linear-gradient(270deg, #10B981, #D4A853, #34D399, #10B981);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 6s ease infinite;
  }
*/
