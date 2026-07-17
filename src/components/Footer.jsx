import { motion } from 'framer-motion'
import { footerNavLinks, socialLinks } from '../data/constants'
import { SocialIcon } from './SocialIcons'

export default function Footer({ onScrollTo }) {

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="footer-banner-wrap footer-banner-wrap--outline">
        <div className="footer-banner footer-banner--outline">
          <span className="section-kicker section-kicker--indexed">06 / Footer</span>
          <p className="footer-banner-text" aria-hidden="true">Built with intention</p>
        </div>
      </div>
      <div className="glass-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#hero" onClick={(e) => { e.preventDefault(); onScrollTo('hero') }}>
              <img src="/logo.svg" alt="Jan Bergosa" className="footer-logo" />
            </a>
            <p className="footer-tagline">
              UI/UX designer, product designer, graphic designer, and web designer crafting strategic digital experiences that bridge user needs and business goals.
            </p>
          </div>

          <div className="footer-nav">
            <strong className="text-label">Navigation</strong>
            {footerNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); onScrollTo(link.href.slice(1)) }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-meta">
            <strong className="text-label">Resources</strong>
            <div className="footer-meta-links">
              <a href="/legal" className="footer-meta-link">Legal Notice</a>
              <a href="/docs" className="footer-meta-link">Documentation</a>
            </div>
          </div>

          <div className="footer-social">
            <strong className="text-label">Social</strong>
            <ul className="footer-social-list">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="footer-social-link"
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={`${link.label}: ${link.username}`}
                  >
                    <span className="footer-social-icon" aria-hidden="true">
                      <SocialIcon id={link.id} />
                    </span>
                    <span className="footer-social-username">{link.username}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-bottom-left">
            &copy; {new Date().getFullYear()} Jan Bergosa. All rights reserved.
            <span className="footer-bottom-meta">
              <a href="/legal" className="footer-legal-link">Legal Notice</a>
              <a href="/docs" className="footer-legal-link">Documentation</a>
            </span>
          </span>
          <span>Built with intention</span>
        </div>
      </div>
    </motion.footer>
  )
}
