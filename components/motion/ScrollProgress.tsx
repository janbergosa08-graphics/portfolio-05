'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { scrollSpring } from '@/lib/motion';

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, reduced ? { stiffness: 500, damping: 50 } : scrollSpring);

  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px origin-left bg-accent/80"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
