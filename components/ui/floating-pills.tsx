'use client'

import { motion } from 'framer-motion'

/**
 * FloatingPills, pink 3D capsule cluster echoing the Pink Motion / pill mood-board.
 * Pure CSS gradients + framer-motion. No textures, no Three.js.
 *
 * `size` controls the pill scale; `density` controls how many pills.
 */
export function FloatingPills({
  className,
  size = 'md',
  density = 'lg',
}: {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  density?: 'sm' | 'md' | 'lg'
}) {
  const pillSize = size === 'sm' ? 0.55 : size === 'md' ? 0.85 : 1.1

  const layoutByDensity = {
    sm: [
      { rot: -22, x: -10, y: -10, depth: 1, delay: 0, dur: 6 },
      { rot: 18, x: 14, y: 8, depth: 0.85, delay: 0.2, dur: 7 },
      { rot: 42, x: 30, y: 28, depth: 0.7, delay: 0.4, dur: 6.5 },
    ],
    md: [
      { rot: -34, x: -22, y: -22, depth: 1, delay: 0, dur: 6.5 },
      { rot: -12, x: -2, y: -12, depth: 0.95, delay: 0.15, dur: 7 },
      { rot: 8, x: 18, y: 0, depth: 0.9, delay: 0.3, dur: 6.2 },
      { rot: 28, x: 32, y: 18, depth: 0.8, delay: 0.45, dur: 7.5 },
      { rot: 48, x: 38, y: 40, depth: 0.7, delay: 0.6, dur: 6.8 },
    ],
    lg: [
      { rot: -42, x: -34, y: -28, depth: 1, delay: 0, dur: 6.5 },
      { rot: -22, x: -16, y: -10, depth: 0.95, delay: 0.12, dur: 7 },
      { rot: -2, x: 0, y: -2, depth: 0.92, delay: 0.24, dur: 6.8 },
      { rot: 18, x: 16, y: 12, depth: 0.85, delay: 0.36, dur: 7.2 },
      { rot: 38, x: 30, y: 30, depth: 0.78, delay: 0.48, dur: 6.6 },
      { rot: 56, x: 38, y: 50, depth: 0.7, delay: 0.6, dur: 7.4 },
    ],
  }

  const pills = layoutByDensity[density]

  return (
    <div
      className={className}
      style={{
        perspective: '1400px',
        transformStyle: 'preserve-3d',
      }}
      aria-hidden
    >
      <div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {pills.map((p, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: pillSize * p.depth }}
            transition={{
              delay: p.delay,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotateZ: [p.rot, p.rot + 2.5, p.rot],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
              style={{
                transform: `translate(${p.x - 50}%, ${p.y - 50}%) rotateZ(${p.rot}deg)`,
              }}
            >
              <Pill depth={p.depth} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Pill({ depth = 1 }: { depth?: number }) {
  const w = 156
  const h = 52
  return (
    <div
      className="relative"
      style={{
        width: w,
        height: h,
        borderRadius: 999,
        background:
          'linear-gradient(135deg, #FFE8E5 0%, #FFB7B0 28%, #FF8E95 60%, #E96B7E 100%)',
        boxShadow: `
          0 ${28 * depth}px ${56 * depth}px -10px rgba(233,107,126,0.5),
          0 ${10 * depth}px ${20 * depth}px -8px rgba(180,60,80,0.35),
          inset 0 -3px 9px rgba(180,60,80,0.28),
          inset 0 3px 7px rgba(255,255,255,0.6)
        `,
      }}
    >
      {/* highlight streak */}
      <div
        className="absolute"
        style={{
          top: 7,
          left: 16,
          right: 16,
          height: 9,
          borderRadius: 999,
          background:
            'linear-gradient(to right, rgba(255,255,255,0.78), rgba(255,255,255,0.06))',
          filter: 'blur(2.5px)',
        }}
      />
      {/* secondary inner shine */}
      <div
        className="absolute"
        style={{
          bottom: 8,
          left: 22,
          width: 64,
          height: 5,
          borderRadius: 999,
          background:
            'linear-gradient(to right, rgba(255,200,200,0.55), rgba(255,200,200,0))',
          filter: 'blur(2px)',
        }}
      />
      {/* gold cap */}
      <div
        className="absolute right-1 top-1 bottom-1"
        style={{
          width: 40,
          borderRadius: 999,
          background:
            'radial-gradient(ellipse at 30% 30%, #FFEFC8 0%, #E0B45D 55%, #8E6D26 100%)',
          boxShadow: `
            inset 0 -3px 5px rgba(120,80,20,0.45),
            inset 0 3px 5px rgba(255,240,200,0.65),
            0 5px 9px rgba(140,90,30,0.32)
          `,
        }}
      />
      {/* gold cap shine */}
      <div
        className="absolute"
        style={{
          right: 7,
          top: 6,
          width: 14,
          height: 7,
          borderRadius: 999,
          background:
            'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0))',
          filter: 'blur(1px)',
        }}
      />
    </div>
  )
}
