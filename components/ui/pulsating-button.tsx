/** PulsatingButton — CTA with expanding pulse aura (attention grabber). */
import { cn } from '@/lib/utils'

export function PulsatingButton({ children, className, pulseColor = 'rgba(59, 130, 246, 0.5)', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { pulseColor?: string }) {
  return (
    <button
      className={cn('relative inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg', className)}
      {...rest}
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{ background: pulseColor, animation: 'pulse-grow 2s ease-out infinite' }}
      />
      <span className="relative">{children}</span>
      <style>{`
        @keyframes pulse-grow { 0%{transform:scale(1); opacity:.6} 100%{transform:scale(1.4); opacity:0} }
      `}</style>
    </button>
  )
}
