/**
 * Decorative UI mockups for workflow/process card visuals.
 * Placeholder-only — themed by phase, no duplicate step copy.
 */
function PlaceholderBars({ count = 3, widths = ['100%', '88%', '62%'] }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="cv-bar"
          style={{ width: widths[i] ?? '75%' }}
        />
      ))}
    </>
  )
}

function DiscoveryMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-row cv-row--avatars">
          <span className="cv-avatar" />
          <span className="cv-avatar" />
          <span className="cv-avatar cv-avatar--muted" />
        </div>
        <PlaceholderBars count={2} widths={['92%', '68%']} />
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-search">
          <span className="cv-search-dot" />
          <span className="cv-search-line" />
        </div>
        <div className="cv-chips">
          <span className="cv-chip" />
          <span className="cv-chip" />
          <span className="cv-chip cv-chip--wide" />
        </div>
      </div>
    </div>
  )
}

function DesignMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-wire">
          <span className="cv-wire-block cv-wire-block--header" />
          <span className="cv-wire-block" />
          <span className="cv-wire-block cv-wire-block--half" />
        </div>
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-swatches">
          <span className="cv-swatch cv-swatch--coral" />
          <span className="cv-swatch cv-swatch--gold" />
          <span className="cv-swatch cv-swatch--cyan" />
          <span className="cv-swatch cv-swatch--blue" />
        </div>
        <div className="cv-wire cv-wire--compact">
          <span className="cv-wire-block" />
          <span className="cv-wire-block cv-wire-block--half" />
        </div>
      </div>
    </div>
  )
}

function LaunchMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-status">
          <span className="cv-status-dot cv-status-dot--live" />
          <span className="cv-status-line" />
        </div>
        <span className="cv-progress">
          <span className="cv-progress-fill" />
        </span>
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-metrics">
          <span className="cv-metric">
            <span className="cv-metric-val" />
            <span className="cv-metric-bar" />
          </span>
          <span className="cv-metric">
            <span className="cv-metric-val cv-metric-val--short" />
            <span className="cv-metric-bar cv-metric-bar--tall" />
          </span>
          <span className="cv-metric">
            <span className="cv-metric-val" />
            <span className="cv-metric-bar" />
          </span>
        </div>
        <span className="cv-deploy-line" />
      </div>
    </div>
  )
}

function ResearchMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-poll">
          <span className="cv-poll-option"><span className="cv-poll-fill" style={{ width: '72%' }} /></span>
          <span className="cv-poll-option"><span className="cv-poll-fill" style={{ width: '48%' }} /></span>
          <span className="cv-poll-option"><span className="cv-poll-fill" style={{ width: '31%' }} /></span>
        </div>
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-row cv-row--avatars">
          <span className="cv-avatar" />
          <span className="cv-avatar cv-avatar--muted" />
        </div>
        <PlaceholderBars count={3} />
      </div>
    </div>
  )
}

function StrategyMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-roadmap">
          <span className="cv-road-dot cv-road-dot--active" />
          <span className="cv-road-line" />
          <span className="cv-road-dot" />
          <span className="cv-road-line" />
          <span className="cv-road-dot" />
        </div>
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-kpis">
          <span className="cv-kpi" />
          <span className="cv-kpi cv-kpi--wide" />
        </div>
        <PlaceholderBars count={2} widths={['100%', '55%']} />
      </div>
    </div>
  )
}

function PrototypeMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-flow">
          <span className="cv-flow-node" />
          <span className="cv-flow-connector" />
          <span className="cv-flow-node cv-flow-node--active" />
          <span className="cv-flow-connector" />
          <span className="cv-flow-node" />
        </div>
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-tap-target" />
        <PlaceholderBars count={2} widths={['85%', '60%']} />
      </div>
    </div>
  )
}

function BuildMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-code">
          <span className="cv-code-line cv-code-line--accent" />
          <span className="cv-code-line" />
          <span className="cv-code-line cv-code-line--indent" />
          <span className="cv-code-line cv-code-line--short" />
        </div>
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-status">
          <span className="cv-status-dot cv-status-dot--live" />
          <span className="cv-status-line cv-status-line--short" />
        </div>
        <span className="cv-progress">
          <span className="cv-progress-fill cv-progress-fill--full" />
        </span>
      </div>
    </div>
  )
}

function ScaleMock() {
  return (
    <div className="cv-stack">
      <div className="cv-glass cv-glass--back glass">
        <div className="cv-metrics cv-metrics--chart">
          <span className="cv-metric"><span className="cv-metric-bar cv-metric-bar--sm" /></span>
          <span className="cv-metric"><span className="cv-metric-bar cv-metric-bar--md" /></span>
          <span className="cv-metric"><span className="cv-metric-bar cv-metric-bar--lg" /></span>
          <span className="cv-metric"><span className="cv-metric-bar cv-metric-bar--md" /></span>
          <span className="cv-metric"><span className="cv-metric-bar cv-metric-bar--xl" /></span>
        </div>
      </div>
      <div className="cv-glass cv-glass--front glass">
        <div className="cv-trend">
          <span className="cv-trend-line" />
        </div>
        <PlaceholderBars count={2} widths={['78%', '50%']} />
      </div>
    </div>
  )
}

const VARIANTS = {
  discovery: DiscoveryMock,
  design: DesignMock,
  launch: LaunchMock,
  research: ResearchMock,
  strategy: StrategyMock,
  prototype: PrototypeMock,
  build: BuildMock,
  scale: ScaleMock,
}

import MeshGradient from './MeshGradient'

export function CardMeshLayer({ stepIndex, fadeSide = 'left' }) {
  const meshSide = fadeSide === 'right' ? 'left' : 'right'
  return (
    <div
      className="card-mesh-layer"
      data-step={stepIndex}
      data-mesh-side={meshSide}
      aria-hidden="true"
    >
      <MeshGradient intensity="card" />
      <div className={`card-mesh-fade card-mesh-fade--${fadeSide}`} />
    </div>
  )
}

export default function CardVisualPlaceholder({ variant = 'design' }) {
  const Mock = VARIANTS[variant] ?? DesignMock
  return (
    <div className="cv-root" data-variant={variant}>
      <Mock />
    </div>
  )
}
