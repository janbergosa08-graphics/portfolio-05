/**
 * Numbered step indicator with gradient progress lines.
 * Horizontal: Process section. Vertical: Workflow section.
 */
export function getDiscreteLineFills(activeIndex, count) {
  return Array.from({ length: count }, (_, i) => {
    if (i >= count - 1) return 0
    if (i < activeIndex) return 1
    if (i === activeIndex) return 0.18
    return 0
  })
}

export default function StepProgress({
  count,
  activeIndex,
  lineFills,
  onStepClick,
  orientation = 'horizontal',
  className = '',
  ariaLabel = 'Progress',
  getStepLabel,
  tabsOnly = false,
}) {
  const isVertical = orientation === 'vertical'

  return (
    <nav
      className={`step-progress step-progress--${orientation}${tabsOnly ? ' step-progress--tabs' : ''}${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
    >
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === activeIndex
        const isDone = i < activeIndex
        const fill = lineFills?.[i] ?? (isDone ? 1 : isActive ? 0.18 : 0)
        const label = getStepLabel?.(i) ?? `Step ${i + 1}`

        if (isVertical) {
          return (
            <div key={i} className="step-progress-segment">
              <button
                type="button"
                className={`step-progress-step${isActive ? ' is-active' : ''}${isDone ? ' is-done' : ''}`}
                onClick={() => onStepClick?.(i)}
                aria-current={isActive ? 'step' : undefined}
                aria-label={label}
              >
                <span className="step-progress-num">{String(i + 1).padStart(2, '0')}</span>
              </button>
              {i < count - 1 && (
                <span
                  className="step-progress-line"
                  style={tabsOnly ? undefined : { '--line-fill': fill }}
                  aria-hidden="true"
                />
              )}
            </div>
          )
        }

        return (
          <button
            key={i}
            type="button"
            className={`step-progress-step${isActive ? ' is-active' : ''}${isDone ? ' is-done' : ''}`}
            onClick={() => onStepClick?.(i)}
            aria-current={isActive ? 'step' : undefined}
            aria-label={label}
          >
            <span className="step-progress-num">{String(i + 1).padStart(2, '0')}</span>
            <span
              className="step-progress-line"
              style={{ '--line-fill': fill }}
              aria-hidden="true"
            />
          </button>
        )
      })}
    </nav>
  )
}
