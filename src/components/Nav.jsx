import { useEffect } from 'react'
import { ArrowDownTrayIcon, XMarkIcon } from './HeroIcons'
import { navLinks, sectionContent } from '../data/constants'

export default function Nav({ scrolled, activeSection, mobileOpen, onToggleMobile, onCloseMobile, onScrollTo, onOpenModal }) {
  const mobileFooterLinks = [
    { label: 'Legal', href: '/legal' },
    { label: 'Documents', href: '/docs' },
  ]

  useEffect(() => {
    if (!mobileOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onCloseMobile()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen, onCloseMobile])

  return (
    <>
      <nav className={`nav-wrapper${scrolled ? ' scrolled' : ''}`} aria-label="Primary">
        <div className="nav-inner">
          <div className="nav-system">
            <div className="nav-panel nav-left">
              <a href="#hero" onClick={(e) => { e.preventDefault(); onScrollTo('hero') }}>
                <img src="/logo.svg" alt="Jan Bergosa" className="logo" width="120" height="38" fetchPriority="high" decoding="async" />
              </a>
            </div>

            <div className="nav-panel nav-center">
              <div className="nav-links" role="group" aria-label="Section links">
                <ul className="nav-links-list">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                        aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                        onClick={(e) => { e.preventDefault(); onScrollTo(link.href.slice(1)) }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="nav-panel nav-right">
              <div className="nav-actions">
                <a href="mailto:janbergosa.graphics@gmail.com" className="nav-cta">
                  {sectionContent.nav.cta}
                </a>
                <a
                  href={sectionContent.nav.resumeFile}
                  className="nav-download"
                  download={sectionContent.nav.resumeDownloadName}
                  aria-label={sectionContent.nav.resumeLabel}
                  title={sectionContent.nav.resumeLabel}
                >
                  <ArrowDownTrayIcon className="nav-download-icon hero-icon hero-icon--nav" aria-hidden="true" />
                  <span className="nav-download-label">{sectionContent.nav.resumeLabel}</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              className={`burger${mobileOpen ? ' open' : ''}`}
              onClick={onToggleMobile}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!mobileOpen}
      >
        <button type="button" className="mobile-close" onClick={onCloseMobile} aria-label="Close menu">
          <XMarkIcon className="hero-icon hero-icon--md" aria-hidden="true" />
        </button>
        <div className="mobile-menu-panel">
          <nav className="mobile-nav" aria-label="Mobile section links">
            <ul className="mobile-nav-grid">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`mobile-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                    aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                    onClick={(e) => { e.preventDefault(); onScrollTo(link.href.slice(1)) }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-actions">
              <a
                href={sectionContent.nav.resumeFile}
                className="mobile-download"
                download={sectionContent.nav.resumeDownloadName}
                onClick={onCloseMobile}
              >
                <ArrowDownTrayIcon className="hero-icon hero-icon--nav" aria-hidden="true" />
                {sectionContent.nav.resumeLabel}
              </a>
              <a
                href="#contact"
                className="mobile-cta"
                onClick={(e) => { e.preventDefault(); onCloseMobile(); onOpenModal() }}
              >
                {sectionContent.hero.ctaPrimary}
              </a>
            </div>
          </nav>
          <div className="mobile-footer">
            <nav className="mobile-footer-nav" aria-label="Footer links">
              <ul className="mobile-footer-nav-list">
                {mobileFooterLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="mobile-footer-link" onClick={onCloseMobile}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <span>Jan Bergosa &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </>
  )
}
