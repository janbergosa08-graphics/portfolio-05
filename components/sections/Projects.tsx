'use client';

import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <SectionEntrance id="projects" className="border-b border-line">
      <div className="w-full">
        <div className="frame-highlight flex flex-col gap-3 border-b border-line section-pad sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <h2 className="section-heading-lg font-semibold">Selected work</h2>
              <p className="mt-2 max-w-md text-sm text-muted">
                Product UI/UX with a clear business or ops problem behind each project.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="https://www.behance.net/janbergosa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center text-sm text-muted hover:text-accent"
            >
              View all →
            </a>
          </Reveal>
        </div>

        <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => {
            const className =
              'frame-highlight group relative flex min-h-[240px] flex-col justify-between border-b border-line cell-pad md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0';

            const body = (
              <>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center border border-line px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-ink">
                      {project.label}
                    </span>
                    <span className="font-mono text-[9px] tracking-wider text-muted">
                      {project.category}
                    </span>
                    {!project.internal ? (
                      <span className="font-mono text-[9px] tracking-wider text-accent">
                        Behance ↗
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-base font-medium leading-snug text-ink group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.blurb}</p>
                </div>
                <div className="mt-6 flex items-end justify-between gap-3">
                  <p className="max-w-[85%] border-l border-accent pl-3 text-xs leading-relaxed text-muted">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent">
                      Outcome
                    </span>
                    <br />
                    {project.outcome}
                  </p>
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-line text-muted group-hover:border-accent group-hover:text-accent"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </>
            );

            return (
              <RevealItem key={project.id}>
                {project.internal ? (
                  <Link href={project.href} className={className}>
                    {body}
                  </Link>
                ) : (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {body}
                  </a>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
