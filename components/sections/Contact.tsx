'use client';

import { Reveal } from '@/components/motion/Reveal';
import { site } from '@/lib/content';

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-line px-4 py-12 md:border-b-0 md:border-r md:px-6 md:py-16">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">CONTACT</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Build solutions.
                <br />
                Forge impact.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col justify-between px-4 py-12 md:px-6 md:py-16">
            <Reveal delay={0.05}>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Accepting new projects and collaborations. Tell me where users stall — we&apos;ll align
                on goals and ship something that converts.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex border border-accent bg-accent-soft px-5 py-3 text-sm text-ink hover:bg-accent hover:text-canvas"
              >
                Send a Message
              </a>
              <p className="mt-6 font-mono text-[10px] tracking-wider text-muted">
                MON–FRI · 9AM–6PM PHT
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
