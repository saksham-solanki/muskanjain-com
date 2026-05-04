import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

type Stat = {
  value: string;
  label: string;
  accent?: boolean;
};

const STATS: Stat[] = [
  { value: "800k+", label: "VIDEO VIEWS", accent: true },
  { value: "55+", label: "VIDEOS SHIPPED" },
  { value: "8", label: "EVENTS HOSTED" },
  { value: "6+", label: "BRANDS WORKED WITH" },
];

function StatsStrip() {
  return (
    <section className="relative bg-blush border-y hairline py-14 sm:py-20">
      <div className="container-width">
        <RevealOnScroll variant="slideUp" stagger={0.08}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  className={`text-5xl sm:text-6xl lg:text-7xl font-black tabular tracking-[-0.045em] leading-none ${
                    stat.accent ? "text-coral" : "text-ink"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default StatsStrip;
