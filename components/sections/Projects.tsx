'use client';

import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="w-full">
        <div className="flex flex-col gap-3 border-b border-line section-pad sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="section-heading-lg font-semibold">Projects</h2>
          </Reveal>
          <a
            href="https://www.behance.net/janbergosa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center text-sm text-muted hover:text-accent"
          >
            View all →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => {
            const className =
              'group relative flex min-h-[220px] flex-col justify-between border-b border-line cell-pad transition-colors hover:bg-ink/[0.03] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0';

            const body = (
              <>
                <div>
                  <p className="font-mono text-[10px] tracking-wider text-muted">{project.date}</p>
                  <h3 className="mt-3 text-base font-medium leading-snug text-ink group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
                <span
                  className="mt-8 ml-auto inline-flex h-8 w-8 items-center justify-center border border-line text-muted group-hover:border-accent group-hover:text-accent"
                  aria-hidden
                >
                  →
                </span>
              </>
            );

            return (
              <Reveal key={project.id} delay={i * 0.04} className="contents">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
