import { motion } from 'framer-motion'
import { footerNavLinks, socialLinks } from '../data/constants'
import MeshGradient from './MeshGradient'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Footer({ onScrollTo, onOpenModal }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="footer-banner-wrap">
        <motion.div
          className="footer-banner"
          initial={reducedMotion ? false : { opacity: 0, y: 36, scale: 0.96 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footer-banner-mesh" aria-hidden="true">
            <MeshGradient intensity="footer" />
          </div>
          <p className="footer-banner-text" aria-hidden="true">UI UX DESIGNER</p>
        </motion.div>
      </div>
      <div className="glass-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#hero" onClick={(e) => { e.preventDefault(); onScrollTo('hero') }}>
              <img src="/logo.png" alt="Jan Bergosa" className="footer-logo" />
            </a>
            <p className="footer-tagline">
              Product designer &amp; front-end developer crafting strategic digital experiences that bridge user needs and business goals.
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
            <a
              href="#contact"
              className="link-accent"
              onClick={(e) => { e.preventDefault(); onOpenModal() }}
            >
              Start a Project
            </a>
          </div>

          <div className="footer-social">
            <strong className="text-label">Social</strong>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" className="footer-social-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Jan Bergosa. All rights reserved.</span>
          <span>Built with intention</span>
        </div>
      </div>
    </motion.footer>
  )
}
