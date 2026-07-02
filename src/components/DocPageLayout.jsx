import { useEffect } from 'react'
import {
  BookOpen,
  ChevronRight,
  FileText,
  Scale,
  Shield,
  Sparkles,
  Target,
  Workflow,
  Zap,
  Brain,
  Layout,
  MessageSquare,
  Rocket,
} from 'lucide-react'
import { useDocScrollSpy } from '../hooks/useDocScrollSpy'
import { useReducedMotion } from '../hooks/useReducedMotion'

const ICONS = {
  FileText,
  Scale,
  Shield,
  Sparkles,
  Target,
  Workflow,
  Zap,
  Brain,
  Layout,
  MessageSquare,
  Rocket,
  BookOpen,
}

function DocIcon({ name, className = 'doc-nav-icon' }) {
  const Icon = ICONS[name] ?? FileText
  return <Icon className={className} aria-hidden="true" size={16} strokeWidth={1.75} />
}

function DocFieldGrid({ fields }) {
  if (!fields?.length) return null
  return (
    <dl className="doc-field-grid">
      {fields.map((field) => (
        <div key={field.label} className="doc-field-row">
          <dt className="doc-field-label">{field.label}</dt>
          <dd className="doc-field-value">{field.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function DocList({ items }) {
  if (!items?.length) return null
  return (
    <ul className="doc-list">
      {items.map((item) => (
        <li key={item.label ?? item.text} className="doc-list-item">
          {item.label && <span className="doc-list-label">{item.label}</span>}
          <span className="doc-list-text">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

function DocSectionBlock({ section, index }) {
  const step = section.step ?? String(index + 1).padStart(2, '0')

  return (
    <section
      id={section.id}
      className="doc-section"
      aria-labelledby={`${section.id}-title`}
    >
      <div className="doc-section-head">
        <span className="doc-step-num" aria-hidden="true">{step}</span>
        <div className="doc-section-meta">
          {section.badge && (
            <span className="doc-badge">{section.badge}</span>
          )}
          <h2 id={`${section.id}-title`} className="doc-section-title">
            {section.heading}
          </h2>
          {section.summary && (
            <p className="doc-section-summary">{section.summary}</p>
          )}
        </div>
      </div>

      <DocFieldGrid fields={section.fields} />

      {section.body?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="doc-body">
          {paragraph}
        </p>
      ))}

      <DocList items={section.items} />

      {section.blocks?.map((block) => (
        <div key={block.title} className="doc-code-panel">
          <div className="doc-code-panel-head">
            <span className="doc-code-panel-label">{block.label ?? 'SPEC'}</span>
            <span className="doc-code-panel-title">{block.title}</span>
          </div>
          <DocFieldGrid fields={block.fields} />
          {block.body && <p className="doc-code-panel-body">{block.body}</p>}
        </div>
      ))}
    </section>
  )
}

/**
 * Tailwind-docs-inspired layout: sticky sidebar, numbered steps, technical labels.
 */
export default function DocPageLayout({
  page,
  sections,
  groups,
  contactEmail,
  homeLabel = 'Back to portfolio',
}) {
  const reducedMotion = useReducedMotion()
  const sectionIds = sections.map((s) => s.id)
  const { activeId, navListRef, scrollToSection } = useDocScrollSpy(sectionIds, {
    reducedMotion,
  })

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${page.title} — Jan Bergosa`
    return () => {
      document.title = previousTitle
    }
  }, [page.title])

  const navGroups = groups ?? [{ label: 'On this page', items: sections }]

  return (
    <div className="doc-page">
      <a href="#doc-main" className="skip-link">Skip to main content</a>

      <header className="doc-header">
        <div className="doc-header-inner">
          <div className="doc-header-left">
            <a href="/" className="doc-brand">
              <img src="/logo.svg" alt="Jan Bergosa" className="doc-logo" width="120" height="38" />
            </a>
            <nav className="doc-breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="doc-breadcrumb-link">Portfolio</a>
              <ChevronRight className="doc-breadcrumb-sep" size={14} aria-hidden="true" />
              <span className="doc-breadcrumb-current">{page.breadcrumb}</span>
            </nav>
          </div>
          <a href="/" className="btn-ghost doc-home-link">
            <span className="doc-home-link-full">{homeLabel}</span>
            <span className="doc-home-link-short">Back</span>
          </a>
        </div>
      </header>

      <main id="doc-main" className="doc-main">
        <div className="doc-intro">
          <div className="doc-intro-icon" aria-hidden="true">
            <DocIcon name={page.icon} className="doc-intro-icon-svg" />
          </div>
          <p className="section-kicker doc-kicker">{page.kicker}</p>
          <h1 className="doc-title">{page.title}</h1>
          <p className="doc-subtitle">{page.subtitle}</p>
          <div className="doc-meta-row">
            <span className="doc-meta-chip">
              <span className="doc-meta-label">VERSION</span>
              {page.version}
            </span>
            <span className="doc-meta-chip">
              <span className="doc-meta-label">UPDATED</span>
              {page.lastUpdated}
            </span>
            {page.status && (
              <span className="doc-meta-chip doc-meta-chip--live">
                <span className="doc-meta-label">STATUS</span>
                {page.status}
              </span>
            )}
          </div>
        </div>

        <div className="doc-layout">
          <aside className="doc-sidebar" aria-label="Section navigation">
            {navGroups.map((group) => (
              <div key={group.label} className="doc-nav-group">
                <p className="doc-nav-label">{group.label}</p>
                <nav>
                  <ul className="doc-nav-list" ref={group === navGroups[0] ? navListRef : undefined}>
                    {group.items.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`doc-nav-link${activeId === section.id ? ' is-active' : ''}`}
                          aria-current={activeId === section.id ? 'true' : undefined}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(section.id)
                          }}
                        >
                          <DocIcon name={section.icon} />
                          <span className="doc-nav-text">
                            <span className="doc-nav-label-full">{section.heading}</span>
                            <span className="doc-nav-label-short">{section.shortLabel}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </aside>

          <div className="doc-content">
            <div className="doc-sections">
              {sections.map((section, index) => (
                <DocSectionBlock key={section.id} section={section} index={index} />
              ))}
            </div>

            {contactEmail && (
              <p className="doc-contact">
                Questions?{' '}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            )}
          </div>
        </div>
      </main>

      <footer className="doc-footer">
        <div className="doc-footer-inner">
          <span>&copy; {new Date().getFullYear()} Jan Bergosa. All rights reserved.</span>
          <span className="doc-footer-links">
            <a href="/legal" className="doc-footer-link">Legal Notice</a>
            <a href="/docs" className="doc-footer-link">Documentation</a>
          </span>
          <a href="/" className="doc-footer-link">Portfolio</a>
        </div>
      </footer>
    </div>
  )
}

export { DocIcon, ICONS }
