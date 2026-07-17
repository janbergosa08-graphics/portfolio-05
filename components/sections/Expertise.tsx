'use client';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import ExpertiseIsoIcon from '@/components/sections/ExpertiseIsoIcon';
import { expertise, expertiseIntro } from '@/lib/content';

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

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <RevealItem
              key={item.title}
              className="frame-highlight cell-pad border-b border-line sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <ExpertiseIsoIcon id={item.icon} />
              <h3 className="text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
