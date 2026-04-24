import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'privacy policy',
  description: 'Privacy policy for muskanjain.com.',
}

export default function PrivacyPage() {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow prose-pink">
          <h1 className="text-3xl font-bold text-ink mb-2">privacy policy</h1>
          <p className="text-sm text-ink-faint mb-8">
            last updated: april 24, 2026
          </p>

          <h2>1. information we collect</h2>
          <p>
            when you visit muskanjain.com, we may collect information you
            voluntarily provide, such as your name and email address when you
            fill out a contact form or subscribe to our newsletter. We also
            collect standard analytics data (page views, referral source,
            browser type) through privacy-respecting analytics tools.
          </p>

          <h2>2. how we use your information</h2>
          <p>
            we use collected information to: respond to your inquiries, send
            requested materials (such as AI citation reports), improve our
            website, and communicate relevant updates. We do not sell your
            personal data to third parties.
          </p>

          <h2>3. cookies</h2>
          <p>
            muskanjain.com uses minimal, essential cookies for site
            functionality. We do not use tracking cookies for advertising. Third
            party embeds (such as Calendly) may set their own cookies per their
            respective privacy policies.
          </p>

          <h2>4. third-party services</h2>
          <p>
            we use the following third-party services that may process your data:
            Vercel (hosting), Calendly (scheduling), and analytics tools. Each
            service operates under their own privacy policy.
          </p>

          <h2>5. data retention</h2>
          <p>
            we retain personal information only as long as necessary to fulfill
            the purposes outlined in this policy. You may request deletion of
            your data at any time by contacting us.
          </p>

          <h2>6. your rights</h2>
          <p>
            you have the right to access, correct, or delete your personal data.
            You may also opt out of communications at any time. To exercise
            these rights, contact us at{' '}
            <a href="mailto:hello@muskanjain.com">hello@muskanjain.com</a>.
          </p>

          <h2>7. security</h2>
          <p>
            we implement reasonable security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2>8. changes to this policy</h2>
          <p>
            we may update this privacy policy from time to time. Changes will be
            posted on this page with an updated date. Continued use of the site
            constitutes acceptance of any changes.
          </p>

          <h2>9. contact</h2>
          <p>
            for questions about this privacy policy, contact Muskan Jain at{' '}
            <a href="mailto:hello@muskanjain.com">hello@muskanjain.com</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
