'use client';

import { Reveal } from '@/components/motion/Reveal';
import { method } from '@/lib/content';

export default function Method() {
  return (
    <section id="method" className="border-b border-line">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-line px-4 py-6 md:px-6">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">METHOD</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Six phases from research to product-ready UI.
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {method.map((step, i) => (
            <Reveal
              key={step.phase}
              delay={i * 0.03}
              className="border-b border-line p-4 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 md:p-5"
            >
              <p className="font-mono text-[10px] tracking-wider text-accent">{step.phase}</p>
              <h3 className="mt-2 text-base font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
