'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-blush/80 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="container-width flex items-center justify-between h-16 sm:h-18">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-coral tracking-tight">
          Muskan Jain
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary hover:text-coral transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#join"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-ink rounded-full shadow-[0_8px_24px_-8px_rgba(26,26,46,0.5)] hover:bg-ink/85 transition-colors"
          >
            Join the Club
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-blush/95 backdrop-blur-md border-t border-rose-mist"
          >
            <div className="container-width flex flex-col gap-1 py-4">
              {siteConfig.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-base font-medium text-ink-secondary hover:text-coral hover:bg-coral-muted rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#join"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-ink rounded-full transition-colors"
              >
                Join the Club
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
