export default function OutlineCard({
  as: Component = 'div',
  className = '',
  index,
  label,
  children,
  ...props
}) {
  return (
    <Component className={`outline-card${className ? ` ${className}` : ''}`} {...props}>
      {(index || label) && (
        <div className="outline-card-meta">
          {index && <span>{String(index).padStart(2, '0')}</span>}
          {label && <span>{label}</span>}
        </div>
      )}
      {children}
    </Component>
  )
}
