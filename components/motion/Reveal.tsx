'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  EASE_BUSINESS,
  REVEAL_TRANSITION,
  VIEWPORT_REVEAL,
  revealContainer,
  revealItem,
} from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Above-the-fold: render visible immediately for LCP (no opacity:0 on load). */
  eager?: boolean;
};

export function Reveal({ children, className = '', delay = 0, eager = false }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced || eager) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{ ...REVEAL_TRANSITION, delay }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  eager?: boolean;
};

export function RevealGroup({ children, className = '', eager = false }: RevealGroupProps) {
  const reduced = useReducedMotion();

  if (reduced || eager) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={revealContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_REVEAL}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealItem({ children, className = '', delay = 0 }: RevealItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={revealItem}
      transition={delay > 0 ? { ...REVEAL_TRANSITION, delay, ease: EASE_BUSINESS } : undefined}
    >
      {children}
    </motion.div>
  );
}
