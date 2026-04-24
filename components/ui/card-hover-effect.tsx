'use client'
/** CardHoverEffect — grid of cards with hovered-one highlight behind (Aceternity). */
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface HoverCard { title: string; description: string; link?: string }

export function CardHoverEffect({ items, className }: { items: HoverCard[]; className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link ?? '#'}
          className="relative group block p-2 h-full"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                layoutId="hover-card-bg"
                className="absolute inset-0 h-full w-full bg-primary/10 block rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 rounded-2xl h-full w-full p-6 overflow-hidden bg-card border border-border">
            <h4 className="font-heading text-lg font-bold">{item.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
