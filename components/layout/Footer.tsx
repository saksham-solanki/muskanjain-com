import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const footerColumns = [
  {
    title: 'The Club',
    links: [
      { label: 'The Wall', href: '/#wall' },
      { label: 'Rituals', href: '/#rituals' },
      { label: 'Cities', href: '/#cities' },
      { label: 'Request Invite', href: '/#join' },
    ],
  },
  {
    title: 'Rooms',
    links: [
      { label: 'Community Ops Jam', href: '/services/community-engine' },
      { label: 'Signal Labs', href: '/services/gtm-engine' },
      { label: 'Content Guild', href: '/services/content-system' },
      { label: 'On-Chain Reads', href: '/services/growth-intelligence' },
      { label: 'Launch Table', href: '/services/launch-engine' },
    ],
  },
  {
    title: 'Beyond',
    links: [
      { label: 'About Muskan', href: '/about' },
      { label: 'Build in Public', href: '/build-in-public' },
      { label: 'Journal', href: '/blog' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-midnight text-white relative overflow-hidden">
      {/* glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-coral/10 blur-[120px] pointer-events-none" />

      <div className="container-width section-padding relative">
        {/* Top, wordmark + manifesto */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <Link
              href="/"
              className="inline-flex items-baseline gap-2 text-3xl font-black text-coral tracking-tight"
            >
              Muskan Jain
              <span className="serif-italic text-white/40 text-base">
                · The Build Club
              </span>
            </Link>
            <p
              className="mt-5 text-[17px] text-white/65 max-w-md leading-[1.55] [text-wrap:pretty]"
              style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
            >
              A soft-edged corner of the internet for builders shipping at the
              edge of AI and Web3.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-white/55 hover:text-coral hover:bg-white/5 ring-1 ring-white/10 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-white/55 hover:text-coral hover:bg-white/5 ring-1 ring-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="col-span-6 md:col-span-2">
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.18em] mb-5 tabular">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-coral transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big wordmark */}
        <div className="border-t border-white/8 pt-10 mb-10">
          <p
            className="text-[14vw] sm:text-[10vw] font-black leading-[0.85] tracking-[-0.05em] text-white/[0.04] select-none"
            aria-hidden
          >
            The Build Club
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tabular">
          <p className="text-white/35">
            &copy; {new Date().getFullYear()} Muskan Jain · The Build Club ·
            Dubai → Everywhere
          </p>
          <a
            href={siteConfig.links.veloice}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-coral transition-colors"
          >
            {siteConfig.footer.attribution}
          </a>
        </div>
      </div>
    </footer>
  )
}
