'use client';

import { Reveal } from '@/components/motion/Reveal';
import { philosophy } from '@/lib/content';

export default function Philosophy() {
  return (
    <section id="philosophy" className="border-b border-line">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-line px-4 py-6 md:px-6">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">PHILOSOPHY</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Design the flow. Prove the value.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2">
          {philosophy.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className="border-b border-line p-4 md:border-r md:p-6 md:[&:nth-child(2n)]:border-r-0"
            >
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
