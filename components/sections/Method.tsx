'use client';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import { MethodGlyph, MethodPanel } from '@/components/sections/MethodIsoIcon';
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
              className="frame-highlight flex h-full flex-col cell-pad border-b border-line sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              {/* Hierarchy: phase → title+icon → body → visual (aligned bottom) */}
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">{step.phase}</p>
              <div className="mt-3 flex items-center gap-2.5">
                <MethodGlyph id={step.icon} />
                <h3 className="text-base font-semibold leading-none text-ink md:text-lg">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 min-h-[2.75rem] text-sm leading-relaxed text-muted">{step.body}</p>
              <div className="mt-auto pt-5">
                <MethodPanel id={step.icon} />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
