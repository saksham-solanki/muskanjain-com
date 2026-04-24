'use client'
/** MorphingText — morphs between texts with blur transition. */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function MorphingText({
  texts,
  interval = 2500,
  className,
}: {
  texts: string[]
  interval?: number
  className?: string
}) {
  const [i, setI] = useState(0)
  const [morphing, setMorphing] = useState(false)
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setMorphing(true)
      setTimeout(() => {
        setI((p) => (p + 1) % texts.length)
        setMorphing(false)
      }, 400)
    }, interval)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [texts.length, interval])

  return (
    <span
      className={cn('inline-block transition-all duration-500', className)}
      style={{ filter: morphing ? 'blur(12px)' : 'blur(0px)', opacity: morphing ? 0 : 1 }}
    >
      {texts[i]}
    </span>
  )
}
