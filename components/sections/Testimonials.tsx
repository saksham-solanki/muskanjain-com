import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

const testimonials: { quote: string; author: string; role: string; brand: string }[] = [
  {
    quote:
      '[Add a quote from your Base collaborator about the brand films and the Fellowship series.]',
    author: '[Name]',
    role: '[Title]',
    brand: 'Base',
  },
  {
    quote:
      '[Add a quote from a KRNL teammate about the founder docu-series and the India Tour.]',
    author: '[Name]',
    role: '[Title]',
    brand: 'KRNL',
  },
  {
    quote:
      '[Add a quote from a Proof of Hustle podcast guest about their experience on the show.]',
    author: '[Name]',
    role: '[Title]',
    brand: 'Proof of Hustle',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="container-width section-padding">
        <RevealOnScroll variant="blur">
          <div className="max-w-3xl">
            <p className="eyebrow">WHAT THEY SAY</p>
            <h2 className="h-section mt-4">
              Words from people I&rsquo;ve{' '}
              <span className="serif-italic text-coral">shipped with</span>.
            </h2>
            <p className="mt-5 text-ink-faint text-xs font-mono uppercase tracking-[0.18em]">
              Quotes pending. The work is real, the names are coming.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="slideUp" stagger={0.1}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure
                key={t.brand}
                className="relative rounded-[22px] p-7 bg-white/72 backdrop-blur-md ring-1 ring-rose-mist/50 hover:ring-coral/40 transition-all"
              >
                <span
                  className="absolute -top-3 left-6 text-7xl text-coral/30 leading-none select-none font-serif"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="mt-6 text-[15px] text-ink-secondary leading-[1.6] [text-wrap:pretty] serif-italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t hairline">
                  <p className="text-sm font-bold text-ink">{t.author}</p>
                  <p className="mt-0.5 text-[11px] text-ink-muted">
                    {t.role} ·{' '}
                    <span className="text-coral font-semibold">{t.brand}</span>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
