'use client';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import { Zap, Layers, Eye, Cpu, type LucideIcon } from 'lucide-react';
import { philosophy, philosophyIntro } from '@/lib/content';

const PHILOSOPHY_GLYPHS: Record<(typeof philosophy)[number]['title'], LucideIcon> = {
  'Fix the path first': Zap,
  'Systems beat one-offs': Layers,
  'Clarity over decoration': Eye,
  'Design with AI, not around it': Cpu,
};

export default function Philosophy() {
  return (
    <SectionEntrance id="philosophy" className="border-b border-line">
      <div className="w-full">
        <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
          {/* LEFT: portrait container (no frame) */}
          <div className="frame-highlight bg-transparent pt-0 pb-0 pl-0 pr-0 h-full" aria-hidden>
            <div className="relative w-full h-full overflow-hidden method-panel pl-0 pr-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/asset/img_marjan_about.webp"
                alt="Portrait of Jan Bergosa"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center' }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>

          {/* RIGHT: intro + philosophy cards (separator on left) */}
          <div className="lg:border-l lg:border-line flex flex-col h-full">
            <div className="frame-highlight section-pad border-b border-line flex-shrink-0">
              <Reveal>
                <p className="font-mono text-[10px] tracking-[0.16em] text-accent">ABOUT ME</p>
                <h2 className="section-heading-lg mt-3 font-semibold">{philosophyIntro.title}</h2>
                {philosophyIntro.body && (
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{philosophyIntro.body}</p>
                )}
              </Reveal>
            </div>

            <RevealGroup className="grid gap-0 flex-1 overflow-y-auto">
              {philosophy.map((item) => {
                const Glyph = PHILOSOPHY_GLYPHS[item.title];
                return (
                  <RevealItem
                    key={item.title}
                    className="frame-highlight cell-pad border-b border-line flex h-full flex-col"
                  >
                    <div className="flex items-start gap-3">
                      <Glyph className="h-5 w-5 shrink-0 text-ink" strokeWidth={1.3} aria-hidden />
                      <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </div>
    </SectionEntrance>
  );
}
