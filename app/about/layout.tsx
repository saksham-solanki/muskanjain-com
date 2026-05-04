import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — The Host',
  description:
    'Muskan Jain — 20 years old, AI×Web3 GTM operator, host of The Build Club. From Bangalore rooftops to Dubai cohorts, eight cities and 600+ builders shipped.',
  openGraph: {
    title: 'About Muskan Jain — The Build Club',
    description:
      'GTM operator turned AI systems builder. 20K Twitter, 8 DeKoded cities, 305K-view docu series. Now in Dubai, building with @Smallest_AI.',
    type: 'profile',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
