'use client';

import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { faqs } from '@/lib/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-line px-4 py-10 md:border-b-0 md:border-r md:px-6 md:py-14">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Frequently asked questions
            </h2>
          </Reveal>
        </div>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.03}>
                <div className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left md:px-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-sm font-medium text-ink md:text-base">{item.q}</span>
                    <span className="border border-line px-2 py-1 font-mono text-xs text-muted" aria-hidden>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="border-t border-line px-4 pb-5 pt-3 text-sm leading-relaxed text-muted md:px-6">
                      {item.a}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
