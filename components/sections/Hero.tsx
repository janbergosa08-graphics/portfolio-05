'use client';

import dynamic from 'next/dynamic';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { RotatingWord } from '@/components/motion/RotatingWord';
import { scrollSpring } from '@/lib/motion';
import { hero, site } from '@/lib/content';

const HeroIsoGraphic = dynamic(() => import('@/components/sections/HeroIsoGraphic'), {
  ssr: false,
  loading: () => <div className="h-full min-h-[28rem] bg-panel/30" aria-hidden />,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, reduced ? { stiffness: 500, damping: 50 } : scrollSpring);
  const glowY = useTransform(smoothProgress, [0, 1], reduced ? [0, 0] : [0, 56]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.85], reduced ? [1, 1] : [1, 0.25]);
  const copyY = useTransform(smoothProgress, [0, 1], reduced ? [0, 0] : [0, -14]);
  const graphicY = useTransform(smoothProgress, [0, 1], reduced ? [0, 0] : [0, 22]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.9], reduced ? [1, 1] : [1, 0.82]);

  return (
    <section ref={sectionRef} id="hero" className="relative overflow-hidden border-b border-line">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh]"
        aria-hidden
        style={{
          y: reduced ? 0 : glowY,
          opacity: reduced ? 1 : glowOpacity,
          background: 'var(--hero-glow)',
        }}
      />

      <div className="relative grid w-full lg:grid-cols-2">
        <motion.div
          className="section-pad border-b border-line lg:border-b-0 lg:border-r lg:py-20 xl:py-24"
          style={{ y: reduced ? 0 : copyY, opacity: reduced ? 1 : copyOpacity }}
        >
          <p className="mb-5 inline-flex items-center border border-line px-3 py-1.5 font-mono text-[10px] leading-none tracking-[0.16em] text-ink sm:mb-6">
            {hero.role}
          </p>
          <h1 className="hero-title max-w-[18ch] font-semibold text-ink">
            <span className="block">{hero.headlineLead}</span>
            <span className="block">
              <RotatingWord words={hero.rotatingWords} intervalMs={3000} />
            </span>
            <span className="block">{hero.headlineTail}</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:mt-6 md:text-base">
            {hero.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="ui-btn-lg inline-flex w-full justify-center border border-line bg-accent-soft text-ink hover:bg-accent hover:text-canvas sm:w-auto"
            >
              {hero.primaryCta}
            </a>
            <div className="flex items-stretch gap-3">
              <a
                href={site.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn-lg inline-flex flex-1 justify-center border border-line text-ink hover:border-accent hover:text-accent sm:flex-none"
              >
                {hero.behanceCta}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn-lg inline-flex flex-1 justify-center border border-line text-ink hover:border-accent hover:text-accent sm:flex-none"
              >
                {hero.linkedinCta}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden min-h-[28rem] overflow-hidden border-line lg:block lg:min-h-[34rem] xl:min-h-[38rem]"
          style={{ y: reduced ? 0 : graphicY }}
        >
          <HeroIsoGraphic />
        </motion.div>
      </div>
    </section>
  );
}
