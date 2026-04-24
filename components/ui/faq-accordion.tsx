'use client'
/** FAQAccordion — animated expand/collapse FAQ list. */
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Q { question: string; answer: React.ReactNode }

export function FAQAccordion({ items, className, defaultOpen = -1 }: { items: Q[]; className?: string; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={cn('divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden', className)}>
      {items.map((q, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-medium">{q.question}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-xl">+</motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-sm text-muted-foreground">{q.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
