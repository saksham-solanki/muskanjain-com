import type { Metadata } from 'next'
import { ArrowRight, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'book a call',
  description:
    'book a 30-minute discovery call. no pitch. just strategy for getting your protocol cited by ai.',
}

export default function BookPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-width max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            let&apos;s talk about getting your protocol cited by ai
          </h1>
          <p className="mt-4 text-lg text-ink-muted">
            book a 30-minute discovery call. no pitch. just strategy.
          </p>

          {/* Calendly placeholder */}
          <div className="mt-10 rounded-[16px] border-2 border-dashed border-coral/30 bg-white p-12 sm:p-16">
            <p className="text-ink-muted text-sm mb-4">calendly embed goes here</p>
            <a
              href="https://calendly.com/work-samsolanki/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-coral rounded-full shadow-coral hover:bg-coral-hover transition-colors"
            >
              open calendly
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Alternative CTA */}
          <div className="mt-16 pt-10 border-t border-rose-mist">
            <p className="text-sm font-medium text-ink-muted mb-2">
              not ready for a call?
            </p>
            <h2 className="text-xl font-semibold text-ink mb-6">
              get your free AI citation report
            </h2>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
                />
                <input
                  type="email"
                  placeholder="you@protocol.xyz"
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-full border border-rose-mist bg-white text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-coral rounded-full shadow-coral hover:bg-coral-hover transition-colors whitespace-nowrap"
              >
                get report
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
