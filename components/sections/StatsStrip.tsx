import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { CountUp } from "@/components/ui/count-up";

type Stat = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  accent?: boolean;
};

const STATS: Stat[] = [
  { value: 800, suffix: "k+", label: "VIDEO VIEWS", accent: true },
  { value: 55, suffix: "+", label: "VIDEOS SHIPPED" },
  { value: 8, suffix: "", label: "EVENTS HOSTED" },
  { value: 6, suffix: "+", label: "BRANDS WORKED WITH" },
];

function StatsStrip() {
  return (
    <section className="relative bg-blush border-y hairline overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] rounded-full bg-coral/8 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative container-width py-14 sm:py-20">
        <RevealOnScroll variant="slideUp" stagger={0.08}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="relative group">
                <div
                  className="absolute -inset-4 rounded-full bg-coral/0 group-hover:bg-coral/10 blur-2xl transition-all duration-500 pointer-events-none"
                  aria-hidden="true"
                />
                <p
                  className={`relative text-5xl sm:text-6xl lg:text-7xl font-black tabular tracking-[-0.045em] leading-none ${
                    stat.accent ? "text-coral" : "text-ink"
                  }`}
                >
                  {stat.prefix}
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="relative mt-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint">
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
