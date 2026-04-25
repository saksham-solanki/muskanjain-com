'use client'

import { motion } from 'framer-motion'

/**
 * MountainScene — pastel illustration echoing Muskan's mood-board reference
 * (snowy peaks, soft peach sky, a tiny sign in the foreground).
 * Pure SVG + framer-motion. No external assets.
 */
export function MountainScene({
  signLabel = 'join the build club',
}: {
  signLabel?: string
}) {
  return (
    <div className="relative w-full aspect-[4/5] max-w-[560px] mx-auto select-none">
      <svg
        viewBox="0 0 480 600"
        className="w-full h-full drop-shadow-[0_36px_64px_rgba(255,107,107,0.22)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="ms-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9BB7DA" />
            <stop offset="35%" stopColor="#D4B7C8" />
            <stop offset="62%" stopColor="#FFC5B5" />
            <stop offset="100%" stopColor="#FFE4DC" />
          </linearGradient>
          <linearGradient id="ms-peak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFB7B0" />
            <stop offset="55%" stopColor="#FF8E8E" />
            <stop offset="100%" stopColor="#D85A6E" />
          </linearGradient>
          <linearGradient id="ms-peak-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E96B7E" />
            <stop offset="100%" stopColor="#B83F58" />
          </linearGradient>
          <linearGradient id="ms-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C7D8EE" />
            <stop offset="100%" stopColor="#7E96BB" />
          </linearGradient>
          <linearGradient id="ms-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D8C9D7" />
            <stop offset="100%" stopColor="#A695B4" />
          </linearGradient>
          <linearGradient id="ms-snow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5ECF6" />
          </linearGradient>
          <linearGradient id="ms-snow-shadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8EAF3" />
            <stop offset="100%" stopColor="#C5CAD8" />
          </linearGradient>
          <radialGradient id="ms-sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFE7D3" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFE7D3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ms-sign" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFE9E5" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="480" height="600" rx="28" fill="url(#ms-sky)" />

        {/* Soft sun glow */}
        <circle cx="340" cy="170" r="150" fill="url(#ms-sun)" />
        <circle cx="340" cy="170" r="44" fill="#FFF4EB" opacity="0.95" />

        {/* Far range — purple haze */}
        <path
          d="M0 320 L70 270 L130 305 L190 260 L260 300 L320 250 L390 290 L480 265 L480 360 L0 360 Z"
          fill="url(#ms-far)"
          opacity="0.55"
        />

        {/* Mid range — soft blue */}
        <path
          d="M0 360 L40 320 L100 350 L170 295 L240 335 L310 305 L380 335 L440 315 L480 320 L480 430 L0 430 Z"
          fill="url(#ms-mid)"
        />
        {/* Snow caps mid-range */}
        <path
          d="M170 295 L186 318 L210 312 L240 335 L218 328 L200 338 L188 332 Z"
          fill="url(#ms-snow)"
          opacity="0.92"
        />
        <path
          d="M310 305 L330 328 L355 322 L380 335 L350 332 L335 340 Z"
          fill="url(#ms-snow)"
          opacity="0.92"
        />

        {/* Hero peak — coral/pink double */}
        <path
          d="M150 430 L240 200 L335 430 Z"
          fill="url(#ms-peak)"
        />
        <path
          d="M240 200 L335 430 L295 430 L240 290 Z"
          fill="url(#ms-peak-side)"
          opacity="0.82"
        />
        {/* Snow on hero peak — jagged */}
        <path
          d="M240 200 L262 248 L250 256 L236 244 L222 268 L210 252 L218 234 Z"
          fill="url(#ms-snow)"
        />
        <path
          d="M210 252 L228 280 L245 270 L262 296 L280 280 L300 312 L315 354 L240 354 L160 354 L182 296 Z"
          fill="url(#ms-snow)"
          opacity="0.6"
        />
        <path
          d="M210 252 L228 280 L245 270 L262 296 L280 280 L300 312 L315 354 L298 354 L268 332 L240 354 L210 332 L188 354 L172 354 L182 296 Z"
          fill="url(#ms-snow-shadow)"
          opacity="0.4"
        />

        {/* Smaller side peak */}
        <path
          d="M380 430 L410 350 L440 430 Z"
          fill="url(#ms-peak)"
          opacity="0.85"
        />
        <path
          d="M410 350 L420 372 L412 376 L405 366 L398 384 L394 374 L402 360 Z"
          fill="url(#ms-snow)"
        />

        {/* Foreground rolling snow hills */}
        <path
          d="M0 460 C 90 425, 170 480, 260 455 C 350 425, 410 475, 480 460 L480 600 L0 600 Z"
          fill="url(#ms-snow)"
        />
        <path
          d="M0 510 C 90 488, 200 520, 290 502 C 380 484, 440 522, 480 510 L480 600 L0 600 Z"
          fill="#F2F5FB"
          opacity="0.92"
        />

        {/* Snow shadow ridges */}
        <path
          d="M40 478 Q 110 462, 180 480 Q 250 498, 330 480 Q 400 466, 460 478"
          fill="none"
          stroke="#C5CAD8"
          strokeWidth="1.2"
          opacity="0.35"
          strokeLinecap="round"
        />

        {/* Sign post */}
        <motion.g
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect x="232" y="495" width="3.5" height="44" fill="#A28080" />
          <rect
            x="200"
            y="472"
            width="74"
            height="26"
            rx="3"
            fill="url(#ms-sign)"
            stroke="#F0CFC9"
            strokeWidth="0.9"
          />
          <text
            x="237"
            y="488"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="700"
            fontFamily="ui-sans-serif, system-ui"
            fill="#FF6B6B"
            letterSpacing="0.7"
          >
            {signLabel.toUpperCase()}
          </text>
          <text
            x="237"
            y="495.2"
            textAnchor="middle"
            fontSize="3.6"
            fontWeight="500"
            fontFamily="ui-sans-serif, system-ui"
            fill="#9B7B7B"
            letterSpacing="0.3"
          >
            INVITE-ONLY
          </text>
        </motion.g>

        {/* Tiny figures */}
        <g opacity="0.85">
          {[
            { x: 130, y: 528, c: '#FF6B6B' },
            { x: 142, y: 524, c: '#1A1A2E' },
            { x: 154, y: 526, c: '#FF8E8E' },
            { x: 332, y: 538, c: '#1A1A2E' },
            { x: 344, y: 534, c: '#FF6B6B' },
          ].map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={3.4} fill={p.c} />
              <rect x={p.x - 1.6} y={p.y + 3} width={3.2} height={6.5} rx={1} fill={p.c} />
            </g>
          ))}
        </g>

        {/* Floating snow particles */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 2, delay: 0.4 }}
        >
          {Array.from({ length: 26 }).map((_, i) => {
            const x = (i * 27 + 11) % 480
            const y = (i * 19 + 30) % 430
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={1.2 + (i % 3) * 0.6}
                fill="#FFFFFF"
                animate={{ y: [y, y + 10, y], opacity: [0.4, 0.9, 0.4] }}
                transition={{
                  duration: 4 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </motion.g>

        {/* Tiny bird silhouettes */}
        <g opacity="0.55">
          <path d="M88 130 Q 92 126, 96 130 Q 100 126, 104 130" stroke="#5C7090" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M120 110 Q 124 106, 128 110 Q 132 106, 136 110" stroke="#5C7090" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}
