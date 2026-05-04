'use client'

import { Marquee } from '@/components/ui/marquee'

interface Brand {
  name: string
  hex: string
}

const brands: Brand[] = [
  { name: 'Base', hex: '#0052FF' },
  { name: 'Bhindi AI', hex: '#8B5CF6' },
  { name: 'Avici', hex: '#F59E0B' },
  { name: 'Canton', hex: '#10B981' },
  { name: 'Aztec', hex: '#DC2626' },
  { name: 'Cypher', hex: '#06B6D4' },
  { name: 'KRNL', hex: '#FF6B6B' },
  { name: 'CoinEx', hex: '#1F77B4' },
]

const BrandPill = ({ brand }: { brand: Brand }) => (
  <div
    key={brand.name}
    className="mx-5 sm:mx-7 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm ring-1 ring-rose-mist/50"
  >
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: brand.hex }}
    />
    <span className="text-base font-bold text-ink tracking-tight whitespace-nowrap">
      {brand.name}
    </span>
  </div>
)

const items = brands.map((brand) => ({
  name: brand.name,
  width: 160,
  logo: <BrandPill brand={brand} />,
}))

export default function BrandMarquee() {
  return (
    <section className="relative bg-blush border-b hairline overflow-hidden py-10 sm:py-12">
      <div className="container-width">
        <p className="text-center text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-ink-faint mb-6">
          TRUSTED BY · FEATURED ON
        </p>
        <Marquee items={items} duration={40} fadeColor="#FFF1F2" className="!py-0" />
      </div>
    </section>
  )
}
