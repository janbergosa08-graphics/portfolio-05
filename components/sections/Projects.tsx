'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CircleCheck, Users, type LucideIcon } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import { projects } from '@/lib/content';

const META_ICONS: Record<'audience' | 'result', LucideIcon> = {
  audience: Users,
  result: CircleCheck,
};

export default function Projects() {
  return (
    <SectionEntrance id="projects" className="border-b border-line">
      <div className="w-full">
        <div className="frame-highlight flex flex-col gap-3 border-b border-line section-pad sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <h2 className="section-heading-lg font-semibold">Selected work</h2>
              <p className="mt-2 max-w-md text-sm text-muted">
                Product UI case studies — role, who it served, and what improved.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="https://www.behance.net/janbergosa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm text-muted hover:text-accent"
            >
              View all
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </Reveal>
        </div>

        <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => {
            const className =
              'frame-highlight group relative flex h-full flex-col border-b border-line md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0';

            const body = (
              <>
                <div className="relative aspect-[5/2] overflow-hidden border-b border-line bg-panel">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-1 flex-col cell-pad">
                  <h3 className="truncate text-base font-semibold leading-snug text-ink group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-2 font-mono text-[10px] tracking-wider text-muted">
                    <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden className="icon-accent shrink-0">
                      <circle cx="3" cy="3" r="3" fill="currentColor" />
                    </svg>
                    {project.role}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {project.blurb}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.meta.map((item) => {
                      const Icon = META_ICONS[item.icon];
                      return (
                        <li key={item.text} className="flex min-w-0 items-center gap-2 text-xs text-muted">
                          <Icon
                            className="icon-accent h-3.5 w-3.5 shrink-0"
                            strokeWidth={1.35}
                            aria-hidden
                          />
                          <span className="min-w-0 truncate">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-accent">
                      View case study
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
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
