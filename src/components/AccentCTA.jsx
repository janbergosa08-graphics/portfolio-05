export default function AccentCTA({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Component className={`accent-cta accent-cta--${variant}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </Component>
  )
}
