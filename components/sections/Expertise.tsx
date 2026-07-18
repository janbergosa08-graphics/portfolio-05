'use client';

import { Boxes, Layers, PenTool, Workflow, type LucideIcon } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import ExpertiseIsoIcon from '@/components/sections/ExpertiseIsoIcon';
import { expertise, expertiseIntro } from '@/lib/content';

const EXPERTISE_GLYPHS: Record<(typeof expertise)[number]['icon'], LucideIcon> = {
  'product-ui': PenTool,
  'design-systems': Layers,
  prototyping: Boxes,
  handoff: Workflow,
};

export default function Expertise() {
  return (
    <SectionEntrance id="expertise" className="border-b border-line">
      <div className="w-full">
        <div className="grid border-b border-line lg:grid-cols-2">
          <div className="frame-highlight section-pad border-b border-line lg:border-b-0 lg:border-r">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">EXPERTISE</p>
              <h2 className="section-heading-lg mt-3 max-w-sm font-semibold">{expertiseIntro.title}</h2>
            </Reveal>
          </div>
          <div className="frame-highlight section-pad">
            <Reveal delay={0.06}>
              <p className="max-w-md text-sm leading-relaxed text-muted">{expertiseIntro.body}</p>
            </Reveal>
          </div>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {expertise.map((item) => {
            const Glyph = EXPERTISE_GLYPHS[item.icon];
            return (
              <RevealItem
                key={item.title}
                className="frame-highlight flex h-full min-h-0 flex-col cell-pad border-b border-line sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <div className="flex min-h-11 items-center gap-2.5">
                  <Glyph className="h-[1.125rem] w-[1.125rem] shrink-0 text-ink" strokeWidth={1.35} aria-hidden />
                  <h3 className="text-base font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <div className="mt-auto pt-5">
                  <ExpertiseIsoIcon id={item.icon} />
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
