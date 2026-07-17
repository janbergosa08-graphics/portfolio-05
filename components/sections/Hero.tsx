'use client';

import { Reveal } from '@/components/motion/Reveal';
import { hero, site } from '@/lib/content';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-80"
        aria-hidden
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 60% 20%, #000 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 60% 20%, #000 0%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh]"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(255,77,0,0.2), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl md:grid-cols-[1.2fr_0.8fr]">
        <div className="border-r border-line px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <p className="mb-6 inline-block border border-line px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-ink">
              {hero.role}
            </p>
            <h1 className="max-w-[11ch] text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-ink">
              {hero.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block">
                <span className="text-accent">{hero.accent}</span>
              </span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-0 border border-line sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="border-b border-line bg-accent-soft px-5 py-3 text-center text-sm text-ink hover:bg-accent hover:text-canvas sm:border-b-0 sm:border-r"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#projects"
                className="px-5 py-3 text-center text-sm text-muted hover:bg-white/5 hover:text-ink"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative hidden min-h-[28rem] border-line md:block">
          <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 border-t border-line p-4 font-mono text-[10px] tracking-wider text-muted">
            PORTFOLIO / {site.name.toUpperCase()}
          </div>
        </div>
      </div>
    </section>
  );
}
