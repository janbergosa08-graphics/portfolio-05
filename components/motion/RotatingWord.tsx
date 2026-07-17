'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

type RotatingWordProps = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

export function RotatingWord({ words, intervalMs = 3000, className = '' }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), words[0] ?? '');
  const word = words[index] ?? words[0] ?? '';

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, reduced, words.length]);

  return (
    <span
      className={`relative inline-grid overflow-hidden align-bottom text-accent ${className}`}
      aria-live="polite"
    >
      {/* Invisible sizer keeps width/height so the absolute word is visible */}
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
        {longest}
      </span>

      {reduced ? (
        <span className="col-start-1 row-start-1 whitespace-nowrap">{word}</span>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            className="col-start-1 row-start-1 whitespace-nowrap"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-110%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      )}
    </span>
  );
}
