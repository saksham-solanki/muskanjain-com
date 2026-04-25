import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'terms of service',
  description: 'Terms of service for muskanjain.com.',
}

export default function TermsPage() {
  return (
    <main className="relative">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden grain pt-32 pb-20 sm:pt-36 sm:pb-24"
        style={{
          background:
            'linear-gradient(180deg, #FFEFEB 0%, #FFE4E1 100%)',
        }}
      >
        <div className="absolute -top-20 -right-24 w-[420px] h-[420px] rounded-full bg-white/40 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-coral/10 blur-[120px] pointer-events-none" />

        <div className="container-width relative">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow row */}
            <div className="flex items-center gap-3">
              <span className="eyebrow text-ink-muted">No. 01 / LEGAL</span>
              <span className="h-px flex-1 max-w-[80px] bg-ink/15" />
              <span className="section-label">TERMS OF SERVICE</span>
            </div>

            {/* Headline */}
            <h1
              className="display-tight mt-7 text-ink"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              <span className="block">the</span>
              <span className="block">
                <span className="serif-italic text-coral">fine print</span>.
              </span>
            </h1>

            {/* Date line */}
            <p className="tabular mt-7 text-xs text-ink-faint uppercase tracking-[0.16em]">
              last updated · 2026-04-24
            </p>
          </div>
        </div>

        {/* bottom soft fade into blush */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-blush -z-[5]" />
      </section>

      {/* ── Body ── */}
      <section className="relative bg-blush pb-28 -mt-10">
        <div className="container-width relative">
          <article className="max-w-3xl mx-auto rounded-[24px] p-8 sm:p-12 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/55 shadow-[0_18px_60px_-24px_rgba(26,26,46,0.14)]">
            <Section number="01" title="acceptance of terms">
              <p>
                by accessing and using muskanjain.com, you agree to be bound by
                these terms of service. If you do not agree with any part of these
                terms, please do not use this website.
              </p>
            </Section>

            <Section number="02" title="services">
              <p>
                Muskan Jain provides AI growth systems, marketing strategy, and
                consulting services for web3 companies. Service details, timelines,
                and deliverables are defined in individual client agreements.
              </p>
            </Section>

            <Section number="03" title="intellectual property">
              <p>
                all content on muskanjain.com, including text, graphics, code, and
                design, is the property of Muskan Jain unless otherwise stated. You
                may not reproduce, distribute, or create derivative works without
                prior written permission.
              </p>
            </Section>

            <Section number="04" title="user content">
              <p>
                by submitting information through forms on this site (such as email
                addresses or project details), you grant Muskan Jain the right to
                use this information to provide requested services and communicate
                with you.
              </p>
            </Section>

            <Section number="05" title="disclaimers">
              <p>
                the website and its content are provided &quot;as is&quot; without
                warranties of any kind. Results from consulting engagements vary
                based on client circumstances. Past performance metrics referenced
                on the site represent specific client outcomes and are not
                guaranteed.
              </p>
            </Section>

            <Section number="06" title="limitation of liability">
              <p>
                Muskan Jain shall not be liable for any indirect, incidental, or
                consequential damages arising from your use of this website or
                services. Total liability shall not exceed the amount paid for
                services in the preceding 12 months.
              </p>
            </Section>

            <Section number="07" title="external links">
              <p>
                this site may contain links to third-party websites. Muskan Jain is
                not responsible for the content or practices of external sites. Use
                them at your own discretion.
              </p>
            </Section>

            <Section number="08" title="modifications">
              <p>
                we reserve the right to modify these terms at any time. Changes take
                effect upon posting. Continued use of the site after changes
                constitutes acceptance of the updated terms.
              </p>
            </Section>

            <Section number="09" title="governing law">
              <p>
                these terms are governed by the laws of the United Arab Emirates.
                Any disputes shall be resolved in the courts of Dubai, UAE.
              </p>
            </Section>

            <Section number="10" title="contact">
              <p>
                for questions about these terms, contact Muskan Jain at{' '}
                <a
                  href="mailto:hello@muskanjain.com"
                  className="text-coral underline underline-offset-2 hover:text-coral-hover"
                >
                  hello@muskanjain.com
                </a>
                .
              </p>
            </Section>

            {/* Footer line */}
            <div className="mt-14 pt-6 border-t hairline">
              <p className="serif-italic text-ink-muted/85 text-sm">
                questions?{' '}
                <a
                  href="mailto:hello@muskanjain.com"
                  className="text-coral underline underline-offset-2 hover:text-coral-hover not-italic font-sans"
                >
                  hello@muskanjain.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="first:mt-0 [&:first-child>h2]:mt-0">
      <h2 className="text-xl sm:text-2xl font-black text-ink lowercase tracking-tight mt-12 mb-3 flex items-baseline gap-3">
        <span className="font-mono text-[11px] font-bold text-ink-faint tabular tracking-[0.14em] shrink-0">
          no.{number}
        </span>
        <span>{title}</span>
      </h2>
      <div className="text-[15px] leading-[1.65] text-ink-secondary [text-wrap:pretty] max-w-2xl space-y-4">
        {children}
      </div>
    </div>
  )
}
