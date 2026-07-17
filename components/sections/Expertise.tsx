'use client';

import { Reveal } from '@/components/motion/Reveal';
import { expertise } from '@/lib/content';

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-line">
      <div className="w-full">
        <div className="grid border-b border-line lg:grid-cols-2">
          <div className="section-pad border-b border-line lg:border-b-0 lg:border-r">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">EXPERTISE</p>
              <h2 className="section-heading-lg mt-3 max-w-sm font-semibold">
                Product UI/UX from research to launch.
              </h2>
            </Reveal>
          </div>
          <div className="section-pad">
            <Reveal delay={0.05}>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                End-to-end UI/UX and product design for web apps, dashboards, and digital experiences —
                from research and flows to polished interfaces, design systems, and dev-ready handoff.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className="cell-pad border-b border-line sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <h3 className="text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
