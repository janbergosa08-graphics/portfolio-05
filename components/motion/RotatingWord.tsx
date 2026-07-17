'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EASE_BUSINESS } from '@/lib/motion';

type RotatingWordProps = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

export function RotatingWord({ words, intervalMs = 3000, className = '' }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), words[0] ?? '');
  const word = words[index] ?? words[0] ?? '';

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, reduced, words.length]);

  const wordClass = `col-start-1 row-start-1 whitespace-nowrap ${ready ? 'text-accent' : 'text-[#7fee64]'}`;

  return (
    <span
      className={`relative inline-grid overflow-hidden align-bottom ${className}`}
      aria-live="polite"
    >
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
        {longest}
      </span>

      {!ready || reduced ? (
        <span className={wordClass}>{word}</span>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            className={wordClass}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-110%', opacity: 0 }}
            transition={{ duration: 0.52, ease: EASE_BUSINESS }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      )}
    </span>
  );
}
