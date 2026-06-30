import { navLinks } from '../data/constants'

export default function Nav({ scrolled, activeSection, mobileOpen, onToggleMobile, onCloseMobile, onScrollTo, onOpenModal }) {
  return (
    <>
      <nav className={`nav-wrapper${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-system">
            <div className="nav-panel nav-left">
              <a href="#hero" onClick={(e) => { e.preventDefault(); onScrollTo('hero') }}>
                <img src="/logo.png" alt="Jan Bergosa" className="logo" />
              </a>
            </div>

            <div className="nav-panel nav-center">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                      onClick={(e) => { e.preventDefault(); onScrollTo(link.href.slice(1)) }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-panel nav-right">
              <a href="mailto:janbergosa.graphics@gmail.com" className="nav-cta">
                Let&rsquo;s talk
              </a>
            </div>

            <button
              className={`burger${mobileOpen ? ' open' : ''}`}
              onClick={onToggleMobile}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={onCloseMobile}>&times; Close</button>
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={(e) => { e.preventDefault(); onScrollTo(link.href.slice(1)) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-cta"
            onClick={(e) => { e.preventDefault(); onCloseMobile(); onOpenModal() }}
          >
            Start a Project
          </a>
        </div>
        <div className="mobile-footer">
          <span>Jan Bergosa &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  )
}
