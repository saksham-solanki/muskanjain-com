import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'privacy policy',
  description: 'Privacy policy for muskanjain.com.',
}

export default function PrivacyPage() {
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
              <span className="section-label">PRIVACY POLICY</span>
            </div>

            {/* Headline */}
            <h1
              className="display-tight mt-7 text-ink"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              <span className="block">the</span>
              <span className="block">
                <span className="serif-italic text-coral">privacy</span> bit.
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
            <Section number="01" title="information we collect">
              <p>
                when you visit muskanjain.com, we may collect information you
                voluntarily provide, such as your name and email address when you
                fill out a contact form or subscribe to our newsletter. We also
                collect standard analytics data (page views, referral source,
                browser type) through privacy-respecting analytics tools.
              </p>
            </Section>

            <Section number="02" title="how we use your information">
              <p>
                we use collected information to: respond to your inquiries, send
                requested materials (such as AI citation reports), improve our
                website, and communicate relevant updates. We do not sell your
                personal data to third parties.
              </p>
            </Section>

            <Section number="03" title="cookies">
              <p>
                muskanjain.com uses minimal, essential cookies for site
                functionality. We do not use tracking cookies for advertising. Third
                party embeds (such as Calendly) may set their own cookies per their
                respective privacy policies.
              </p>
            </Section>

            <Section number="04" title="third-party services">
              <p>
                we use the following third-party services that may process your data:
                Vercel (hosting), Calendly (scheduling), and analytics tools. Each
                service operates under their own privacy policy.
              </p>
            </Section>

            <Section number="05" title="data retention">
              <p>
                we retain personal information only as long as necessary to fulfill
                the purposes outlined in this policy. You may request deletion of
                your data at any time by contacting us.
              </p>
            </Section>

            <Section number="06" title="your rights">
              <p>
                you have the right to access, correct, or delete your personal data.
                You may also opt out of communications at any time. To exercise
                these rights, contact us at{' '}
                <a
                  href="mailto:hello@muskanjain.com"
                  className="text-coral underline underline-offset-2 hover:text-coral-hover"
                >
                  hello@muskanjain.com
                </a>
                .
              </p>
            </Section>

            <Section number="07" title="security">
              <p>
                we implement reasonable security measures to protect your personal
                information. However, no method of transmission over the internet is
                100% secure.
              </p>
            </Section>

            <Section number="08" title="changes to this policy">
              <p>
                we may update this privacy policy from time to time. Changes will be
                posted on this page with an updated date. Continued use of the site
                constitutes acceptance of any changes.
              </p>
            </Section>

            <Section number="09" title="contact">
              <p>
                for questions about this privacy policy, contact Muskan Jain at{' '}
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
