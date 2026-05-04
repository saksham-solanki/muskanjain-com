import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'lost in the room',
}

export default function NotFound() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(170deg, #B6CCE5 0%, #E5C5BC 25%, #FFD0C4 50%, #FFE0DA 78%, #FFEFEB 100%)',
      }}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-coral/15 blur-[140px] -z-10 pointer-events-none" />

      <div className="container-width relative z-10 text-center max-w-2xl">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20 tabular">
          <Sparkles size={11} />
          ROOM 404
        </span>

        <h1
          className="font-black text-ink mt-6"
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
          }}
        >
          this page is{' '}
          <span className="serif-italic font-normal text-coral">
            still loading.
          </span>
        </h1>

        <p className="text-lead mt-7 max-w-md mx-auto [text-wrap:pretty]">
          The room you&apos;re looking for hasn&apos;t opened yet — or you took a
          wrong turn. Either way, the Wall is still warm.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(26,26,46,0.6)] transition-all duration-300"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back to the door
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 hover:ring-coral/30 transition-all duration-300"
          >
            Or peek at the rooms
          </Link>
        </div>

        <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
          STATUS · 404 · BUILDING
        </p>
      </div>
    </section>
  )
}
