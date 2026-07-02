import { sectionContent } from '../data/constants'

const ROW_DIRECTIONS = ['rtl', 'ltr', 'rtl']

function MiniGlassCard({ className = '' }) {
  return (
    <div className={`bento-stack-card glass ${className}`.trim()} aria-hidden="true">
      <div className="bento-stack-dots">
        <span className="bento-stack-dot bento-stack-dot--coral" />
        <span className="bento-stack-dot bento-stack-dot--amber" />
        <span className="bento-stack-dot bento-stack-dot--cyan" />
        <span className="bento-stack-dot bento-stack-dot--blue" />
      </div>
      <span className="bento-stack-bar bento-stack-bar--long" />
      <span className="bento-stack-bar bento-stack-bar--short" />
    </div>
  )
}

/** Stacked glass cards — half visible, anchored to the right edge */
export function BentoStackCards() {
  return (
    <div className="bento-stack-cards" aria-hidden="true">
      <MiniGlassCard className="bento-stack-card--back" />
      <MiniGlassCard className="bento-stack-card--mid" />
      <MiniGlassCard className="bento-stack-card--front" />
    </div>
  )
}

function MarqueeRow({ tools, direction, staticMarquee }) {
  const items = staticMarquee ? tools : [...tools, ...tools]
  const rowClass = `bento-tool-row bento-tool-row--${direction}${staticMarquee ? ' bento-tool-row--static' : ''}`

  return (
    <div className={rowClass}>
      <div className="bento-tool-track">
        {items.map((tool, i) => (
          <span key={`${tool}-${i}`} className="bento-tool-chip" aria-hidden={i >= tools.length}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Three-row sliding tool label grid for the 5+ hero bento */
export function BentoToolMarquee({ reducedMotion = false }) {
  const rows = sectionContent.designToolRows

  return (
    <div
      className="bento-tool-marquee"
      aria-label="Design tools: Relume, Adobe Photoshop, Illustrator, Figma, Cursor, Claude, Canva, Framer, LottieFiles"
    >
      {rows.map((tools, i) => (
        <MarqueeRow
          key={i}
          tools={tools}
          direction={ROW_DIRECTIONS[i]}
          staticMarquee={reducedMotion}
        />
      ))}
    </div>
  )
}
