/** NeonButton — outline button with neon glow on hover. */
import { cn } from '@/lib/utils'

export function NeonButton({ children, className, glowColor = '#7c3aed', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { glowColor?: string }) {
  return (
    <button
      className={cn('relative inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-sm font-semibold transition-all', className)}
      style={
        {
          borderColor: glowColor,
          color: glowColor,
          '--neon': glowColor,
        } as React.CSSProperties
      }
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <style>{`
        button:hover { box-shadow: 0 0 5px var(--neon), 0 0 20px var(--neon), 0 0 40px var(--neon); color: white; background: var(--neon); }
      `}</style>
    </button>
  )
}
