/**
 * Pure CSS animated mesh gradient — brand colors only, no image assets.
 */
export default function MeshGradient({ className = '', intensity = 'default' }) {
  const intensityClass =
    intensity === 'subtle'
      ? ' mesh-gradient--subtle'
      : intensity === 'card'
        ? ' mesh-gradient--card'
        : intensity === 'bento'
          ? ' mesh-gradient--bento'
          : intensity === 'footer'
            ? ' mesh-gradient--footer'
            : ''

  return (
    <div
      className={`mesh-gradient${className ? ` ${className}` : ''}${intensityClass}`}
      aria-hidden="true"
    >
      <div className="mesh-gradient__canvas">
        <span className="mesh-blob mesh-blob--coral" />
        <span className="mesh-blob mesh-blob--gold" />
        <span className="mesh-blob mesh-blob--cyan" />
        <span className="mesh-blob mesh-blob--blue" />
        <span className="mesh-blob mesh-blob--blend" />
      </div>
      <div className="mesh-gradient__vignette" />
    </div>
  )
}
