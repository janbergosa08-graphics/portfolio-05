'use client';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import { philosophy, philosophyIntro } from '@/lib/content';

export default function Philosophy() {
  return (
    <SectionEntrance id="philosophy" className="border-b border-line">
      <div className="w-full">
        <div className="frame-highlight section-pad border-b border-line">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">PHILOSOPHY</p>
            <h2 className="section-heading-lg mt-3 font-semibold">{philosophyIntro.title}</h2>
          </Reveal>
        </div>
        <RevealGroup className="grid md:grid-cols-2">
          {philosophy.map((item) => (
            <RevealItem
              key={item.title}
              className="frame-highlight cell-pad border-b border-line md:border-r md:[&:nth-child(2n)]:border-r-0"
            >
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
