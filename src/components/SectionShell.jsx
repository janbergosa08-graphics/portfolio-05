export default function SectionShell({
  eyebrow,
  title,
  intro,
  id,
  align = 'left',
  index,
  children,
  className = '',
}) {
  const label = index ? `${String(index).padStart(2, '0')} / ${eyebrow}` : eyebrow

  return (
    <div className={`section-shell section-shell--${align}${className ? ` ${className}` : ''}`}>
      {(label || title || intro) && (
        <div className="section-shell-head">
          {label && <div className="section-kicker section-kicker--indexed">{label}</div>}
          {title && <h2 id={id} className="section-title">{title}</h2>}
          {intro && <p className="section-intro">{intro}</p>}
        </div>
      )}
      {children}
    </div>
  )
}
