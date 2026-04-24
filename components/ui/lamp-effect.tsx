/** LampEffect — ceiling-lamp spotlight wash. Aceternity-style. */
import { cn } from '@/lib/utils'

export function LampEffect({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn('relative flex min-h-[30rem] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0', className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <div
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          style={{ background: 'conic-gradient(from 70deg at center top, #06b6d4, transparent, transparent)' }}
        />
        <div
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white [--conic-position:from_290deg_at_center_top]"
          style={{ background: 'conic-gradient(from 290deg at center top, transparent, transparent, #06b6d4)' }}
        />
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
        <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl" />
        <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400" />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">{children}</div>
    </div>
  )
}
