'use client'

import { motion } from 'framer-motion'
import { useAnimationConfig } from './use-animation-config'

/**
 * GradientMesh — animated radial-gradient blobs for hero backgrounds.
 * Supports 3 pre-mixed color schemes. Responsive: fewer blobs on mobile.
 * Respects prefers-reduced-motion (blobs stay static).
 *
 * Source: MoveSmart-Rentals
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <GradientMesh colorScheme="navy-emerald" />
 *     <div className="relative z-10">{hero content}</div>
 *   </section>
 */

type ColorScheme = 'navy-emerald' | 'emerald-only' | 'gold-accent' | 'blue-cyan' | 'ai-purple'

const COLOR_MAP: Record<ColorScheme, string[]> = {
  'navy-emerald': [
    'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(11, 29, 58, 0.3) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(212, 168, 83, 0.08) 0%, transparent 70%)',
  ],
  'emerald-only': [
    'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(5, 150, 105, 0.15) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(52, 211, 153, 0.12) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
  ],
  'gold-accent': [
    'radial-gradient(circle, rgba(212, 168, 83, 0.15) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(229, 193, 124, 0.1) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(11, 29, 58, 0.2) 0%, transparent 70%)',
  ],
  'blue-cyan': [
    'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(30, 64, 175, 0.14) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
  ],
  'ai-purple': [
    'radial-gradient(circle, rgba(107, 78, 228, 0.18) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(85, 56, 196, 0.14) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
  ],
}

const BLOB_ANIMATIONS = [
  { x: [0, 30, -20, 50, 0],  y: [0, -50, 20, 30, 0],   scale: [1, 1.1, 0.95, 1.05, 1],   transition: { duration: 20, repeat: Infinity, ease: 'linear' as const } },
  { x: [0, -40, 30, -20, 0], y: [0, 30, -40, -20, 0],  scale: [1, 1.05, 1.1, 0.95, 1],   transition: { duration: 25, repeat: Infinity, ease: 'linear' as const } },
  { x: [0, 40, -30, 20, 0],  y: [0, 40, 20, -50, 0],   scale: [1.05, 0.95, 1.1, 1, 1.05], transition: { duration: 22, repeat: Infinity, ease: 'linear' as const } },
  { x: [0, -50, 20, -30, 0], y: [0, -30, -50, 20, 0],  scale: [0.95, 1.1, 1, 1.05, 0.95], transition: { duration: 28, repeat: Infinity, ease: 'linear' as const } },
]

const BLOB_POSITIONS = [
  { top: '10%', left: '15%' },
  { top: '60%', right: '10%' },
  { bottom: '20%', left: '40%' },
  { top: '30%', right: '30%' },
]

interface GradientMeshProps {
  colorScheme?: ColorScheme
  className?: string
  /** Override base background color. Default transparent. */
  baseColor?: string
}

export function GradientMesh({ colorScheme = 'navy-emerald', className = '', baseColor }: GradientMeshProps) {
  const { meshBlobCount, shouldAnimate } = useAnimationConfig()
  const gradients = COLOR_MAP[colorScheme]
  const blobsToRender = gradients.slice(0, meshBlobCount)

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={baseColor ? { backgroundColor: baseColor } : undefined}
      aria-hidden="true"
    >
      {blobsToRender.map((gradient, i) => (
        <motion.div
          key={i}
          className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full"
          style={{
            background: gradient,
            filter: 'blur(80px)',
            willChange: 'transform',
            contain: 'layout paint',
            ...BLOB_POSITIONS[i],
          }}
          animate={shouldAnimate ? BLOB_ANIMATIONS[i] : undefined}
        />
      ))}
    </div>
  )
}
