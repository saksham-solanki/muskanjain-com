'use client'
/** AnimatedTabs — tabs with sliding underline highlight. */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function AnimatedTabs({
  tabs,
  className,
  defaultActive = 0,
}: {
  tabs: { label: string; content: React.ReactNode }[]
  className?: string
  defaultActive?: number
}) {
  const [active, setActive] = useState(defaultActive)

  return (
    <div className={cn('w-full', className)}>
      <div className="flex border-b border-border">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn('relative px-4 py-2 text-sm font-medium transition-colors', active === i ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}
          >
            {t.label}
            {active === i && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </button>
        ))}
      </div>
      <div className="pt-6">{tabs[active]?.content}</div>
    </div>
  )
}
