import type { Transition, Variants } from 'framer-motion';

/** Confident, restrained easing for product / business UI */
export const EASE_BUSINESS = [0.22, 0.61, 0.36, 1] as const;

export const VIEWPORT_REVEAL = {
  once: true,
  margin: '-72px 0px -48px 0px',
  amount: 0.18,
} as const;

export const REVEAL_TRANSITION: Transition = {
  duration: 0.62,
  ease: EASE_BUSINESS,
};

export const STAGGER_CHILDREN = 0.055;
export const STAGGER_DELAY_CHILDREN = 0.06;

export const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_CHILDREN,
      delayChildren: STAGGER_DELAY_CHILDREN,
    },
  },
};

export const revealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: REVEAL_TRANSITION,
  },
};

export const scrollSpring = {
  stiffness: 88,
  damping: 26,
  mass: 0.35,
  restDelta: 0.0008,
};
