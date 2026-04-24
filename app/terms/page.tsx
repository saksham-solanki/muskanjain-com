import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'terms of service',
  description: 'Terms of service for muskanjain.com.',
}

export default function TermsPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow prose-pink">
          <h1 className="text-3xl font-bold text-ink mb-2">terms of service</h1>
          <p className="text-sm text-ink-faint mb-8">
            last updated: april 24, 2026
          </p>

          <h2>1. acceptance of terms</h2>
          <p>
            by accessing and using muskanjain.com, you agree to be bound by
            these terms of service. If you do not agree with any part of these
            terms, please do not use this website.
          </p>

          <h2>2. services</h2>
          <p>
            Muskan Jain provides AI growth systems, marketing strategy, and
            consulting services for web3 companies. Service details, timelines,
            and deliverables are defined in individual client agreements.
          </p>

          <h2>3. intellectual property</h2>
          <p>
            all content on muskanjain.com, including text, graphics, code, and
            design, is the property of Muskan Jain unless otherwise stated. You
            may not reproduce, distribute, or create derivative works without
            prior written permission.
          </p>

          <h2>4. user content</h2>
          <p>
            by submitting information through forms on this site (such as email
            addresses or project details), you grant Muskan Jain the right to
            use this information to provide requested services and communicate
            with you.
          </p>

          <h2>5. disclaimers</h2>
          <p>
            the website and its content are provided &quot;as is&quot; without
            warranties of any kind. Results from consulting engagements vary
            based on client circumstances. Past performance metrics referenced
            on the site represent specific client outcomes and are not
            guaranteed.
          </p>

          <h2>6. limitation of liability</h2>
          <p>
            Muskan Jain shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of this website or
            services. Total liability shall not exceed the amount paid for
            services in the preceding 12 months.
          </p>

          <h2>7. external links</h2>
          <p>
            this site may contain links to third-party websites. Muskan Jain is
            not responsible for the content or practices of external sites. Use
            them at your own discretion.
          </p>

          <h2>8. modifications</h2>
          <p>
            we reserve the right to modify these terms at any time. Changes take
            effect upon posting. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>

          <h2>9. governing law</h2>
          <p>
            these terms are governed by the laws of the United Arab Emirates.
            Any disputes shall be resolved in the courts of Dubai, UAE.
          </p>

          <h2>10. contact</h2>
          <p>
            for questions about these terms, contact Muskan Jain at{' '}
            <a href="mailto:hello@muskanjain.com">hello@muskanjain.com</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
