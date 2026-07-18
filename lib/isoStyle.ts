/** Shared graphic tokens — matched to grid `--color-line` / `--color-line-strong` */
export const ISO = {
  /** Same as --color-line */
  stroke: 'rgba(255, 255, 255, 0.12)',
  /** Same as --color-line-strong */
  strokeStrong: 'rgba(255, 255, 255, 0.2)',
  /** Panel illustration outlines — readable white */
  strokeGraphic: 'rgba(255, 255, 255, 0.72)',
  accent: 'var(--accent-mid)',
  accentSoft: 'rgba(127, 238, 100, 0.14)',
  fillTop: 'rgba(255, 255, 255, 0.045)',
  fillLeft: 'rgba(255, 255, 255, 0.02)',
  fillRight: 'rgba(255, 255, 255, 0.03)',
  fillTopAccent: 'rgba(127, 238, 100, 0.1)',
  fillLeftAccent: 'rgba(127, 238, 100, 0.05)',
  fillRightAccent: 'rgba(127, 238, 100, 0.07)',
  /** ~1px at typical panel width (viewBox 100 → ~280–320px) */
  swPanel: 0.4,
  swGlyph: 1.25,
  swHero: 1,
} as const;
