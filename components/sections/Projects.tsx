'use client';

import { Reveal } from '@/components/motion/Reveal';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4 border-b border-line px-4 py-5 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
          </Reveal>
          <a
            href="https://www.behance.net/janbergosa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent"
          >
            View all →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.04} className="contents">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-[220px] flex-col justify-between border-b border-line p-4 transition-colors hover:bg-white/[0.02] md:border-r md:p-5 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
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
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
