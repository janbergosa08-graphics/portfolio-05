'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { RotatingWord } from '@/components/motion/RotatingWord';
import HeroIsoGraphic from '@/components/sections/HeroIsoGraphic';
import { hero } from '@/lib/content';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 72]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.75], reduced ? [1, 1] : [1, 0.35]);
  const copyY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -18]);
  const graphicY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 28]);

  return (
    <section ref={sectionRef} id="hero" className="relative overflow-hidden border-b border-line">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh]"
        aria-hidden
        style={{
          y: glowY,
          opacity: glowOpacity,
          background: 'var(--hero-glow)',
        }}
      />

      <div className="relative grid w-full lg:grid-cols-2">
        <motion.div
          className="section-pad border-b border-line lg:border-b-0 lg:border-r lg:py-20 xl:py-24"
          style={{ y: copyY }}
        >
          <Reveal>
            <p className="mb-5 inline-flex items-center border border-line px-3 py-1.5 font-mono text-[10px] leading-none tracking-[0.16em] text-ink sm:mb-6">
              {hero.role}
            </p>
            <h1 className="hero-title max-w-[14ch] font-semibold text-ink">
              <span className="block">{hero.headlineLead}</span>
              <span className="block">
                <RotatingWord words={hero.rotatingWords} intervalMs={3000} />
              </span>
              <span className="block">{hero.headlineTail}</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:mt-6 md:text-base">
              {hero.description}
            </p>
            <div className="mt-7 sm:mt-8">
              <a
                href="#contact"
                className="ui-btn-lg inline-flex w-full border border-line bg-accent-soft text-ink hover:bg-accent hover:text-canvas sm:w-auto"
              >
                {hero.primaryCta}
              </a>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          className="relative hidden min-h-[28rem] overflow-hidden border-line lg:block lg:min-h-[34rem] xl:min-h-[38rem]"
          style={{ y: graphicY }}
        >
          <HeroIsoGraphic />
        </motion.div>
      </div>
    </section>
  );
}
