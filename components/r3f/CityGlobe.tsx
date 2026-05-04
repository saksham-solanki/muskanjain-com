'use client'

/**
 * CityGlobe — interactive 3D globe rendering Muskan's DeKoded city tour.
 *
 * - Soft cream/blush sphere base with a subtle latitude/longitude wireframe.
 * - Coral pins for each city, sized by event scale (members).
 * - Animated arcs between cities, drawn sequentially in tour order.
 * - Auto-rotates; pauses on hover.
 * - Hovered pin reveals city name + status + headline metric.
 *
 * Designed to live inside a section without breaking the editorial layout.
 */

import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Line } from '@react-three/drei'
import * as THREE from 'three'

const RADIUS = 2.2

export type GlobeCity = {
  name: string
  emoji: string
  status: 'shipped' | 'live' | 'soon'
  members: number
  metrics: readonly string[]
  /** geographic latitude in degrees */
  lat: number
  /** geographic longitude in degrees */
  lng: number
}

/** Cities matching siteConfig.community.cities, with real lat/lng. */
export const DEKODED_CITIES: GlobeCity[] = [
  { name: 'Bangalore', emoji: 'BLR', status: 'shipped', members: 312, metrics: ['120+ in the room', '23 GTM teardowns'], lat: 12.9716, lng: 77.5946 },
  { name: 'Delhi', emoji: 'DEL', status: 'shipped', members: 224, metrics: ['95+ founders', '8 live teardowns'], lat: 28.6139, lng: 77.209 },
  { name: 'Mumbai', emoji: 'BOM', status: 'shipped', members: 198, metrics: ['80+ marketers', '210 leads sourced'], lat: 19.076, lng: 72.8777 },
  { name: 'Hyderabad', emoji: 'HYD', status: 'shipped', members: 156, metrics: ['65+ in the room', '1.2M reach'], lat: 17.385, lng: 78.4867 },
  { name: 'Pune', emoji: 'PNQ', status: 'shipped', members: 121, metrics: ['50+ founders', 'Most-shared deck Q1'], lat: 18.5204, lng: 73.8567 },
  { name: 'Goa', emoji: 'GOI', status: 'shipped', members: 89, metrics: ['30 builders', '$340K pipeline'], lat: 15.2993, lng: 74.124 },
  { name: 'Dubai', emoji: 'DXB', status: 'live', members: 147, metrics: ['140+ founders', 'Cohort 02 live'], lat: 25.2048, lng: 55.2708 },
  { name: 'Singapore', emoji: 'SIN', status: 'soon', members: 0, metrics: ['Waitlist open', 'Q3 2026'], lat: 1.3521, lng: 103.8198 },
]

/** Convert lat/lng degrees + radius to a 3D point on a sphere. */
function latLngToVec3(lat: number, lng: number, r: number = RADIUS): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -r * Math.sin(phi) * Math.cos(theta)
  const z = r * Math.sin(phi) * Math.sin(theta)
  const y = r * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

/** Build a great-circle arc between two surface points. */
function buildArc(a: THREE.Vector3, b: THREE.Vector3, segments = 48): THREE.Vector3[] {
  const pts: THREE.Vector3[] = []
  const angle = a.angleTo(b)
  const altitude = 0.35 + angle * 0.55
  const axis = new THREE.Vector3().crossVectors(a, b).normalize()
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const q = new THREE.Quaternion().setFromAxisAngle(axis, angle * t)
    const p = a.clone().applyQuaternion(q)
    const lift = Math.sin(Math.PI * t) * altitude
    p.setLength(RADIUS + lift)
    pts.push(p)
  }
  return pts
}

function GlobeCore({
  hovered,
  setHovered,
}: {
  hovered: number | null
  setHovered: (i: number | null) => void
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const arcsRef = useRef<THREE.Group>(null!)
  const isHovering = hovered !== null

  // Pre-compute arc point arrays
  const arcs = useMemo(() => {
    const points = DEKODED_CITIES.map((c) => latLngToVec3(c.lat, c.lng))
    return DEKODED_CITIES.slice(0, -1).map((_, i) =>
      buildArc(points[i], points[i + 1])
    )
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const speed = isHovering ? 0.04 : 0.18
    groupRef.current.rotation.y += delta * speed
    if (arcsRef.current) {
      const t = state.clock.getElapsedTime()
      arcsRef.current.children.forEach((line, i) => {
        const mat = (line as THREE.Line).material as THREE.LineBasicMaterial
        const phase = (Math.sin(t * 0.6 + i * 0.4) + 1) / 2
        mat.opacity = 0.4 + phase * 0.5
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Cream base sphere */}
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial color="#FFF0F0" roughness={0.95} metalness={0} />
      </mesh>

      {/* Soft inner glow */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.04, 32, 32]} />
        <meshBasicMaterial color="#FFD6D1" transparent opacity={0.18} side={THREE.BackSide} />
      </mesh>

      {/* Latitude / longitude wireframe overlay */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.001, 24, 16]} />
        <meshBasicMaterial color="#1A1A2E" wireframe transparent opacity={0.06} />
      </mesh>

      {/* Tour arcs */}
      <group ref={arcsRef}>
        {arcs.map((points, i) => (
          <Line
            key={i}
            points={points}
            color="#FF6B6B"
            lineWidth={1.6}
            transparent
            opacity={0.6}
          />
        ))}
      </group>

      {/* City pins */}
      {DEKODED_CITIES.map((city, i) => {
        const pos = latLngToVec3(city.lat, city.lng)
        const scale = city.status === 'soon' ? 0.6 : 0.9 + city.members / 600
        const color =
          city.status === 'live'
            ? '#FF6B6B'
            : city.status === 'soon'
              ? '#9B9BAD'
              : '#1A1A2E'
        return (
          <group key={city.emoji} position={pos}>
            {/* Pin halo */}
            <mesh
              onPointerOver={(e) => {
                e.stopPropagation()
                setHovered(i)
                document.body.style.cursor = 'pointer'
              }}
              onPointerOut={() => {
                setHovered(null)
                document.body.style.cursor = ''
              }}
            >
              <sphereGeometry args={[0.13 * scale, 16, 16]} />
              <meshBasicMaterial color={color} transparent opacity={0.25} />
            </mesh>
            {/* Pin core */}
            <mesh>
              <sphereGeometry args={[0.06 * scale, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
            {/* Live pulse */}
            {city.status === 'live' && (
              <PulsingHalo color="#FF6B6B" scale={scale} />
            )}
          </group>
        )
      })}
    </group>
  )
}

function PulsingHalo({ color, scale }: { color: string; scale: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    const s = 1 + (Math.sin(t * 2) + 1) * 0.5
    ref.current.scale.setScalar(s)
    ;(ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.5 - (s - 1) * 0.45
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.15 * scale, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  )
}

export function CityGlobe() {
  const [hovered, setHovered] = useState<number | null>(null)
  const city = hovered !== null ? DEKODED_CITIES[hovered] : null

  return (
    <div className="relative w-full aspect-square max-w-[640px] mx-auto">
      <Canvas
        camera={{ position: [0, 0.6, 6.4], fov: 38 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 4, 6]} intensity={0.8} />
          <directionalLight position={[-3, -2, -4]} intensity={0.3} color="#FFD0C4" />
          <GlobeCore hovered={hovered} setHovered={setHovered} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3.4}
            maxPolarAngle={Math.PI / 1.6}
            rotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>

      {/* Hover overlay */}
      {city && (
        <div className="pointer-events-none absolute top-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-[260px] rounded-2xl bg-white/92 backdrop-blur-md ring-1 ring-rose-mist/60 shadow-[0_18px_44px_-18px_rgba(255,107,107,0.4)] p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-coral tabular">
              DEKODED · {city.emoji}
            </span>
            <span className="h-px flex-1 bg-coral/15" />
            <span
              className={
                'text-[9px] font-bold uppercase tracking-[0.16em] tabular px-2 py-0.5 rounded-full ' +
                (city.status === 'live'
                  ? 'bg-coral text-white'
                  : city.status === 'soon'
                    ? 'bg-white/90 text-ink-muted ring-1 ring-ink/10'
                    : 'bg-ink text-white')
              }
            >
              {city.status.toUpperCase()}
            </span>
          </div>
          <p className="text-base font-black text-ink tracking-tight leading-tight">
            {city.name}
          </p>
          <ul className="mt-2 space-y-1">
            {city.metrics.map((m) => (
              <li
                key={m}
                className="text-[12px] font-medium text-ink-muted tabular flex items-baseline gap-2"
              >
                <span className="h-1 w-1 rounded-full bg-coral mt-1.5 shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Caption */}
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
        DRAG TO ROTATE · HOVER PINS FOR THE RECEIPTS
      </p>
    </div>
  )
}
