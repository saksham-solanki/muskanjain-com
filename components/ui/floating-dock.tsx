'use client'
/** FloatingDock — macOS-style dock with magnification on hover (desktop). */
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface Item { title: string; icon: React.ReactNode; href: string }

export function FloatingDock({ items, className }: { items: Item[]; className?: string }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn('mx-auto flex h-16 items-end gap-4 rounded-2xl bg-card/70 backdrop-blur-md border border-border px-4 pb-3', className)}
    >
      {items.map((item, i) => <DockItem key={i} mouseX={mouseX} item={item} />)}
    </motion.div>
  )
}

function DockItem({ mouseX, item }: { mouseX: ReturnType<typeof useMotionValue<number>>; item: Item }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 72, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <a href={item.href} ref={ref} className="group relative">
      <motion.div
        style={{ width, height: width }}
        className="aspect-square rounded-full bg-muted flex items-center justify-center"
      >
        {item.icon}
      </motion.div>
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-background border border-border px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
        {item.title}
      </span>
    </a>
  )
}
