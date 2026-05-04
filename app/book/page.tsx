import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { FloatingPills } from '@/components/ui/floating-pills'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Request Invite',
  description:
    "Tell us what you're building. A member picks it up within a day.",
}

const avatars = [
  { letter: 'm', from: 'from-coral to-coral-deep' },
  { letter: 'a', from: 'from-[#F0A500] to-[#A87000]' },
  { letter: 'p', from: 'from-[#5B8DEF] to-[#3D5FB5]' },
  { letter: 'k', from: 'from-coral to-[#A8C9E8]' },
  { letter: 'r', from: 'from-[#2D9D78] to-[#1A6850]' },
  { letter: 'n', from: 'from-coral-deep to-[#1A1A2E]' },
]

export default function BookPage() {
  return (
    <main className="pt-24">
      <section
        className="relative overflow-hidden grain"
        style={{
          background:
            'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 45%, #C9D5E8 100%)',
        }}
      >
        {/* atmosphere */}
        <div className="absolute top-1/4 -left-24 w-[440px] h-[440px] rounded-full bg-coral/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-[460px] h-[460px] rounded-full bg-white/40 blur-[120px] pointer-events-none" />

        <div className="container-width section-padding relative">
          <div className="relative max-w-3xl mx-auto rounded-[28px] p-10 sm:p-14 bg-white/55 backdrop-blur-2xl ring-1 ring-white/85 shadow-[0_30px_80px_-20px_rgba(255,107,107,0.35)]">
            {/* corner pills */}
            <FloatingPills
              className="absolute -top-14 -right-10 w-[200px] h-[200px] pointer-events-none hidden sm:block"
              size="sm"
              density="sm"
            />

            {/* avatar collage */}
            <div className="relative flex justify-center -space-x-2.5 mb-8">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-10 w-10 rounded-full bg-gradient-to-br grid place-items-center text-white text-xs font-bold ring-2 ring-white shadow-md',
                    a.from,
                  )}
                >
                  {a.letter}
                </div>
              ))}
              <div className="h-10 w-10 rounded-full bg-white/85 grid place-items-center text-[10px] font-bold text-ink ring-2 ring-white shadow-md tabular">
                +1.2k
              </div>
            </div>

            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20 tabular">
                <Sparkles size={11} />
                THE DOOR IS OPEN TODAY
              </span>

              <h1 className="h-section mt-7">
                Tell us what <br className="hidden sm:block" />
                <span className="serif-italic text-coral">you&apos;re building.</span>
              </h1>

              <p className="text-lead mt-7 max-w-xl mx-auto [text-wrap:pretty]">
                Drop your handle, one line on the build, and an email. A member
                picks it up within a day. No pitch decks, no calendar tetris.
              </p>

              <form className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="@yourhandle"
                  className="w-full px-5 py-3.5 rounded-full bg-white/90 ring-1 ring-rose-mist/60 focus:ring-coral focus:outline-none text-sm text-ink placeholder:text-ink-faint transition-all"
                />
                <input
                  type="text"
                  placeholder="What you're building (one line)"
                  className="w-full px-5 py-3.5 rounded-full bg-white/90 ring-1 ring-rose-mist/60 focus:ring-coral focus:outline-none text-sm text-ink placeholder:text-ink-faint transition-all"
                />
                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  <div className="relative flex-1">
                    <Mail
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
                    />
                    <input
                      type="email"
                      placeholder="you@somewhere.xyz"
                      className="w-full pl-11 pr-5 py-3.5 rounded-full bg-white/90 ring-1 ring-rose-mist/60 focus:ring-coral focus:outline-none text-sm text-ink placeholder:text-ink-faint transition-all"
                    />
                  </div>
                  <button
                    type="button"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-ink rounded-full hover:bg-ink/85 transition-colors whitespace-nowrap"
                  >
                    Request Invite
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>

              <p className="mt-5 text-xs text-ink-muted tabular">
                No spam · No Calendly · Just an invite, or a soft no.
              </p>
            </div>
          </div>

          {/* below-card divider */}
          <div className="mt-14 max-w-3xl mx-auto flex items-center gap-4">
            <span className="h-px flex-1 bg-ink/10" />
            <Link
              href="/blog"
              className="serif-italic text-base text-ink-muted hover:text-coral transition-colors"
            >
              Not ready? Read the journal →
            </Link>
            <span className="h-px flex-1 bg-ink/10" />
          </div>
        </div>
      </section>
    </main>
  )
}
