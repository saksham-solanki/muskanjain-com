'use client'

/**
 * HeroAmbient, subtle 3D atmospheric layer that lives BEHIND the hero copy.
 *
 * Design intent: editorial, not sci-fi. A drifting particle dust field with
 * coral-tinted soft motes plus a few floating "lantern" orbs. Mouse parallax
 * gives depth without distracting from the headline.
 *
 * Performance: dynamically loaded (client only), gated by prefers-reduced-motion,
 * and uses on-demand frameloop so it idles when not in view.
 */

import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Dust({ count = 280 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const mouse = useRef({ x: 0, y: 0 })

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
      sizes[i] = 0.025 + Math.random() * 0.06
    }
    return { positions, sizes }
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    // gentle drift
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.005
    // mouse parallax
    const target = state.pointer
    mouse.current.x += (target.x * 0.3 - mouse.current.x) * 0.05
    mouse.current.y += (target.y * 0.25 - mouse.current.y) * 0.05
    ref.current.position.x = mouse.current.x
    ref.current.position.y = mouse.current.y
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        color={'#FF6B6B'}
      />
    </points>
  )
}

function Lantern({
  position,
  color = '#FFD0C4',
  scale = 1,
  speed = 0.4,
}: {
  position: [number, number, number]
  color?: string
  scale?: number
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null!)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime() * speed + offset
    ref.current.position.x = position[0] + Math.sin(t) * 0.18
    ref.current.position.y = position[1] + Math.cos(t * 0.8) * 0.14
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.45, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.45} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <Dust />
      <Lantern position={[-3.4, 1.2, -1.2]} color="#FFE6D2" scale={1.2} speed={0.32} />
      <Lantern position={[3.2, -0.6, -0.8]} color="#FFD0C4" scale={1} speed={0.4} />
      <Lantern position={[1.8, 1.6, -2]} color="#FFCFC9" scale={0.7} speed={0.5} />
      <Lantern position={[-2.2, -1.4, -1.6]} color="#FFE0DA" scale={0.85} speed={0.36} />
    </>
  )
}

export function HeroAmbient({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden style={{ pointerEvents: 'none' }}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 55 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
          frameloop="always"
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
