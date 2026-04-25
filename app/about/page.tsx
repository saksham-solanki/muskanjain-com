import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'the host',
  description: '20. been in crypto since 17. now hosting the build club where ai × web3 builders gather.',
}

const timeline = [
  { year: '2023', text: 'started in crypto. nakamoto hub, cryptofemale community. first time hosting strangers in a room.' },
  { year: '2024', text: 'genzio media, symbiote. learning web3 marketing from the inside. first event: 11 builders, one rooftop.' },
  { year: '2024–2025', text: 'krnl labs. ran dekoded across 6 indian cities. 600+ builders showed up. the wall idea was born.' },
  { year: '2025–2026', text: 'canton foundation. marketing $9T/mo institutional blockchain. quietly proved the soft-edge thesis works at scale.' },
  { year: '2026', text: 'the build club, official. dxb live. singapore loading. the room finally has a door.' },
]

const beliefs = [
  ['builders, not talkers', 'show your work, not your linkedin'],
  ['lowercase, always', 'the voice does the same work as the code'],
  ['ai isn\'t replacing marketers', 'it\'s replacing bad marketing'],
  ['web3 deserves better', 'than dark mode templates and "launch app" CTAs'],
  ['nothing leaves the room', 'no recordings, no clout farming, no decks'],
]

const cities = ['blr', 'del', 'bom', 'hyd', 'pnq', 'goi', 'dxb', '··· sin']

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #B6CCE5 0%, #FFD0C4 38%, #FFE0DA 70%, #FFEFEB 100%)' }}>
        <div className="absolute top-[18%] right-[16%] w-[340px] h-[340px] rounded-full bg-[#FFE6D2]/75 blur-[110px] pointer-events-none" />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 01</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE HOST</span>
              </div>
              <h1 className="display-tight mt-7 text-ink" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}>
                <span className="block">hi, i&apos;m</span>
                <span className="block serif-italic text-coral mt-1">muskan.</span>
                <span className="block mt-1">i host the room.</span>
              </h1>
              <p className="mt-9 max-w-xl text-base sm:text-[17px] text-ink-secondary/85 leading-[1.55] [text-wrap:pretty]">
                20. been in crypto since 17. ran dekoded across 6 cities. now i keep
                a soft-edged corner of the internet warm so ai × web3 builders can
                show up and ship together.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/#join" className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300">
                  <Sparkles size={15} className="text-coral" />
                  join the club
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a href="https://twitter.com/Muskanjain0401" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink/85 bg-white/55 backdrop-blur-md rounded-full ring-1 ring-ink/10 hover:bg-white/80 transition-all duration-300">
                  read the threads ↗
                </a>
              </div>
            </div>

            {/* Avatar block — gradient placeholder + caption */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="relative aspect-square rounded-[28px] bg-gradient-to-br from-coral/40 via-coral/55 to-[#9BB7DA]/60 ring-1 ring-white/70 shadow-[0_24px_60px_-16px_rgba(255,107,107,0.35)] overflow-hidden grain">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-[12rem] font-black text-white/85 leading-none tracking-tighter select-none">m</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-3 px-3 py-1.5 bg-white/85 backdrop-blur-md rounded-full ring-1 ring-rose-mist/60 shadow-md">
                  <p className="text-[11px] font-semibold text-ink tabular flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                    based in dubai · everywhere on tuesdays
                  </p>
                </div>
                <p className="mt-7 serif-italic text-ink-muted/85 text-base text-center leading-snug">
                  ↳ no real photo here yet. lowercase club, by design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="bg-blush relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 02</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">THE JOURNEY</span>
              </div>
              <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                three years.{' '}
                <span className="serif-italic text-coral">five companies.</span>{' '}
                six cities. one room.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="serif-italic text-ink-muted/85 text-lg leading-snug">
                i don&apos;t do roadmap pages. this is how i actually got here.
              </p>
            </div>
          </div>

          <div className="relative max-w-3xl mx-auto pl-8 sm:pl-12">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-coral/25" />
            <ul className="space-y-10">
              {timeline.map((item, i) => (
                <li key={item.year} className="relative">
                  <div className="absolute -left-8 sm:-left-12 top-1.5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-coral ring-4 ring-blush" />
                  </div>
                  <p className="font-mono text-[11px] tabular text-coral font-bold uppercase tracking-[0.18em]">
                    {item.year} · entry no.{String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-[17px] text-ink-secondary leading-[1.55] [text-wrap:pretty] max-w-xl">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Beliefs ─── */}
      <section className="bg-soft-pink relative">
        <div className="container-width section-padding">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-ink-muted">No. 03</span>
                <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
                <span className="section-label">WHAT I BELIEVE</span>
              </div>
              <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
                house rules,{' '}
                <span className="serif-italic text-coral">basically.</span>
              </h2>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl">
            {beliefs.map(([title, body], i) => (
              <li key={title} className="relative rounded-[20px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 shadow-[0_10px_28px_-14px_rgba(26,26,46,0.14)]">
                <span className="font-mono text-[10px] tabular text-ink-faint">
                  rule no.{String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-xl font-black text-ink lowercase tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] text-ink-muted leading-[1.55]">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Cities lived/hosted ─── */}
      <section className="bg-midnight text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-coral/10 blur-[140px] pointer-events-none" />
        <div className="container-width section-padding relative text-center">
          <div className="inline-flex items-center gap-3">
            <span className="eyebrow text-white/40">No. 04</span>
            <span className="h-px flex-1 max-w-[60px] bg-white/15" />
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/10 rounded-full ring-1 ring-coral/20">
              CITIES OPENED
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-white/15" />
          </div>
          <h2 className="display-tight mt-6 text-white text-[1.7rem] sm:text-4xl lg:text-[2.75rem]">
            i&apos;ve hosted in{' '}
            <span className="serif-italic text-coral">eight rooms</span>{' '}
            across the world.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 text-sm font-mono tabular text-white/80 lowercase">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-10 serif-italic text-white/65 max-w-md mx-auto leading-snug">
            each one a tiny ecosystem. you walk in a stranger and walk out with collaborators.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden grain" style={{ background: 'linear-gradient(180deg, #FFE4E1 0%, #FFD4C2 50%, #C9D5E8 100%)' }}>
        <div className="container-width section-padding relative text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-coral bg-coral/12 rounded-full ring-1 ring-coral/20">
            <Sparkles size={11} />
            THE DOOR IS OPEN TODAY
          </span>
          <h2 className="display-tight mt-6 text-ink text-[1.7rem] sm:text-4xl lg:text-[2.75rem] max-w-3xl mx-auto">
            want to come{' '}
            <span className="serif-italic text-coral">build</span>{' '}
            with us?
          </h2>
          <Link href="/#join" className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-ink rounded-full shadow-[0_10px_30px_-8px_rgba(26,26,46,0.45)] hover:-translate-y-0.5 transition-all duration-300">
            request invite
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
