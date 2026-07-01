function renderPart(part, index) {
  if (typeof part === 'string') return part

  const text = part.chip ?? part.hl ?? part.code
  if (!text) return null

  return (
    <strong
      key={index}
      className={`card-doc-em${part.code ? ' card-doc-em--mono' : ''}`}
    >
      {text}
    </strong>
  )
}

/** Technical doc-style body copy with inline emphasis tokens. */
export default function DocBody({ paragraphs, className = '' }) {
  if (!paragraphs?.length) return null

  return (
    <div className={`card-doc-body${className ? ` ${className}` : ''}`}>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="card-doc-p">
          {Array.isArray(paragraph)
            ? paragraph.map((part, j) => renderPart(part, j))
            : paragraph}
        </p>
      ))}
    </div>
  )
}
