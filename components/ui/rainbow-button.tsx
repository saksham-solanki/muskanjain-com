/** RainbowButton — button with rainbow glow underneath. */
import { cn } from '@/lib/utils'

export function RainbowButton({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('group relative inline-flex h-11 animate-[rainbow-move_2s_linear_infinite] cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-[rainbow-move_2s_linear_infinite] before:bg-[linear-gradient(90deg,#ff4d4d,#f9cb28,#00f260,#0575e6,#e91ec7)] before:[filter:blur(calc(0.8*1rem))]', className)}
      style={{ backgroundImage: 'linear-gradient(#121213,#121213),linear-gradient(#121213 50%,rgba(18,18,19,0.6) 80%,rgba(18,18,19,0)),linear-gradient(90deg,#ff4d4d,#f9cb28,#00f260,#0575e6,#e91ec7)' }}
      {...rest}
    >
      {children}
      <style>{`
        @keyframes rainbow-move { 0%{background-position:0%} 100%{background-position:200%} }
      `}</style>
    </button>
  )
}
