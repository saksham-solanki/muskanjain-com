/** AuroraBackground — animated aurora gradient layer. Requires gradient-shift keyframe. */
import { cn } from '@/lib/utils'

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none -z-10', className)} aria-hidden>
      <div
        className="absolute -inset-[10%] opacity-60 blur-3xl"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #00d4ff 0deg, #7c3aed 120deg, #ec4899 240deg, #00d4ff 360deg)',
          animation: 'spin-slow 22s linear infinite',
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-background"
      />
    </div>
  )
}
