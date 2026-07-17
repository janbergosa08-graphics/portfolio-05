export default function BlueprintGrid({ className = '', density = 'section', marks = false }) {
  return (
    <div
      className={`blueprint-grid blueprint-grid--${density}${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      {marks && (
        <>
          <span className="blueprint-corner blueprint-corner--tl" />
          <span className="blueprint-corner blueprint-corner--tr" />
          <span className="blueprint-corner blueprint-corner--bl" />
          <span className="blueprint-corner blueprint-corner--br" />
        </>
      )}
    </div>
  )
}
