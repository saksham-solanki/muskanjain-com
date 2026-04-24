import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Muskan Jain | AI Growth for Web3 Companies',
    template: '%s | Muskan Jain',
  },
  description:
    'i build ai systems that get web3 companies cited, ranked, and converting. AEO, programmatic SEO, site conversion, and compliant paid ads for DeFi, RWA, DAOs, and more.',
  metadataBase: new URL('https://muskanjain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Muskan Jain',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Muskanjain0401',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
