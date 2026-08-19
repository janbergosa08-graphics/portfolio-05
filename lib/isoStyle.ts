/** Shared graphic tokens — matched to grid `--color-line` / `--color-line-strong` */
export const ISO = {
  /** Same as --color-line */
  stroke: 'var(--color-line)',
  /** Same as --color-line-strong */
  strokeStrong: 'var(--color-line-strong)',
  /** Panel illustration outlines — matched to the hero box treatment */
  strokeGraphic: 'var(--color-line-strong)',
  accent: 'var(--accent-mid)',
  accentSoft: 'color-mix(in srgb, var(--accent-mid) 10%, transparent)',
  fillTop: 'color-mix(in srgb, var(--color-ink) 4.5%, transparent)',
  fillLeft: 'color-mix(in srgb, var(--color-ink) 2%, transparent)',
  fillRight: 'color-mix(in srgb, var(--color-ink) 3%, transparent)',
  fillTopAccent: 'color-mix(in srgb, var(--accent-mid) 10%, transparent)',
  fillLeftAccent: 'color-mix(in srgb, var(--accent-mid) 5%, transparent)',
  fillRightAccent: 'color-mix(in srgb, var(--accent-mid) 7%, transparent)',
  /** ~1px at typical panel width (viewBox 100 → ~280–320px) */
  swPanel: 0.4,
  swGlyph: 1.25,
  swHero: 1,
} as const;
