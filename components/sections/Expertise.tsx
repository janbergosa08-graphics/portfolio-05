'use client';

import { Reveal } from '@/components/motion/Reveal';
import { expertise } from '@/lib/content';

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-line">
      <div className="mx-auto max-w-6xl">
        <div className="grid border-b border-line md:grid-cols-2">
          <div className="border-b border-line px-4 py-8 md:border-b-0 md:border-r md:px-6 md:py-10">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">EXPERTISE</p>
              <h2 className="mt-3 max-w-sm text-2xl font-semibold tracking-tight md:text-3xl">
                Product UI/UX from research to launch.
              </h2>
            </Reveal>
          </div>
          <div className="px-4 py-8 md:px-6 md:py-10">
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
              className="border-b border-line p-4 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 md:p-5"
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
