'use client';

import { Reveal } from '@/components/motion/Reveal';
import { philosophy } from '@/lib/content';

export default function Philosophy() {
  return (
    <section id="philosophy" className="border-b border-line">
      <div className="w-full">
        <div className="section-pad border-b border-line">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">PHILOSOPHY</p>
            <h2 className="section-heading-lg mt-3 font-semibold">
              Design the flow. Prove the value.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2">
          {philosophy.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className="cell-pad border-b border-line md:border-r md:[&:nth-child(2n)]:border-r-0"
            >
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
