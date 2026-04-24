'use client'
/** Card3D — 3D perspective tilt on mouse hover + layered depth children. */
import { createContext, useContext, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const MouseEnterContext = createContext<[boolean, (v: boolean) => void] | undefined>(undefined)

export function CardContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouseEnter, setMouseEnter] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 20
    const y = ((e.clientY - top) / height - 0.5) * 20
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }
  function handleLeave() {
    if (!containerRef.current) return
    containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
    setMouseEnter(false)
  }

  return (
    <MouseEnterContext.Provider value={[mouseEnter, setMouseEnter]}>
      <div className={cn('flex items-center justify-center', className)} style={{ perspective: '1000px' }}>
        <div
          ref={containerRef}
          onMouseEnter={() => setMouseEnter(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          className="flex items-center justify-center relative transition-all duration-200 ease-linear"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]', className)}>{children}</div>
}

export function CardItem({
  children,
  className,
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  translateZ?: number | string
  translateX?: number | string
  translateY?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement>(null)
  const ctx = useContext(MouseEnterContext)
  const mouseEnter = ctx?.[0]

  // eslint-disable-next-line react-hooks/exhaustive-deps
  if (typeof window !== 'undefined' && ref.current) {
    ref.current.style.transform = mouseEnter
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : `translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0) rotateZ(0)`
  }

  return (
    <Tag ref={ref} className={cn('w-fit transition duration-200 ease-linear', className)}>
      {children}
    </Tag>
  )
}
