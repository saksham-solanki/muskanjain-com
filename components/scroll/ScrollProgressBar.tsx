'use client'

/**
 * ScrollProgressBar
 *
 * A fixed 2px bar pinned to the top of the viewport. Its width tracks the
 * page scroll position (0 → 100%) via the `useScrollProgress` hook.
 *
 * - Color: `bg-coral` (Tailwind token from the design system)
 * - Subtle inner glow via inline box-shadow to avoid purge issues
 * - z-index 60, sits above the Nav (assumed z-50)
 * - No props needed; drop in once at the layout level.
 */

import { useScrollProgress } from '@/lib/gsap-scroll'

export function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 h-[2px] bg-coral z-[60] origin-left will-change-[width]"
      style={{
        width: `${progress * 100}%`,
        boxShadow: '0 0 6px 1px oklch(var(--color-coral, 0.65 0.2 25) / 0.7)',
        transition: 'width 80ms linear',
      }}
    />
  )
}
