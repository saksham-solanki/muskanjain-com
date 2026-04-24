/**
 * Shared motion constants + variants.
 * Place at `src/lib/motion.ts` in your project.
 * Import these instead of hardcoding easing/durations inline.
 */

import type { Variants } from 'framer-motion'

// ─── Easing constants ─────────────────────────────────
/** Smooth deceleration — default for fade-ups, section reveals */
export const ease = [0.22, 1, 0.36, 1] as const

/** Tighter deceleration — cinematic/GSAP heroes, snappy UI */
export const easeSnap = [0.16, 1, 0.3, 1] as const

/** Dropdown / popover cubic-bezier */
export const easeDropdown = [0.25, 0.46, 0.45, 0.94] as const

// ─── Primary reveal variant ───────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

// ─── Section stagger container ────────────────────────
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

// ─── Hero stagger (tighter) ───────────────────────────
export const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

// ─── Dropdown / popover ───────────────────────────────
export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: {
      duration: 0.2,
      ease: easeDropdown,
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0, y: 4, scale: 0.98,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

// ─── Dropdown item ────────────────────────────────────
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

// ─── RevealOnScroll variants (used by reveal-on-scroll.tsx) ──
export const REVEAL_VARIANTS = {
  blur: {
    hidden: { y: -20, opacity: 0, filter: 'blur(10px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  },
  slideUp: {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  scaleIn: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  clipReveal: {
    hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
  },
  splitReveal: {
    hidden: { clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', opacity: 0 },
    visible: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1 },
  },
  rotateIn: {
    hidden: { rotateX: -80, opacity: 0, transformPerspective: 1000 },
    visible: { rotateX: 0, opacity: 1, transformPerspective: 1000 },
  },
  slideFromLeft: {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
} as const

// ─── Legacy revealItem (for motion.div children inside RevealOnScroll) ──
export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}
