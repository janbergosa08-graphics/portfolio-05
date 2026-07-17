'use client';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import { method, methodIntro } from '@/lib/content';

export default function Method() {
  return (
    <SectionEntrance id="method" className="border-b border-line">
      <div className="w-full">
        <div className="frame-highlight section-pad border-b border-line">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">METHOD</p>
            <h2 className="section-heading-lg mt-3 font-semibold">{methodIntro.title}</h2>
          </Reveal>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3">
          {method.map((step) => (
            <RevealItem
              key={step.phase}
              className="frame-highlight cell-pad border-b border-line sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <p className="font-mono text-[10px] tracking-wider text-accent">{step.phase}</p>
              <h3 className="mt-2 text-base font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
