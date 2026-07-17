import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { sectionContent } from '../data/constants'
import BackToTop from './BackToTop'
import AccentCTA from './AccentCTA'

export default function Contact({ onOpenModal }) {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    function update() {
      const now = new Date()
      const pht = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Manila' }))
      const day = pht.getDay()
      const hour = pht.getHours()
      setAvailable(day >= 1 && day <= 5 && hour >= 9 && hour < 18)
    }
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="contact-full">
      <div className="container contact-container contact-container--outline">
        <motion.div
          className="contact-panel outline-card"
          initial={{ opacity: 0, scale: 1.02, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-kicker section-kicker--indexed">05 / {sectionContent.contact.kicker}</div>
          <h2 id="contact-heading" className="section-title section-title--narrow">
            Build <span className="contact-accent-word">solutions</span>. Forge impact.
          </h2>
          <p className="section-intro">
            {sectionContent.contact.intro}
          </p>
          <AccentCTA type="button" className="btn-large" onClick={onOpenModal}>
            {sectionContent.contact.cta}
          </AccentCTA>
          <div className="availability-row">
            <span
              className={`availability-dot${available ? ' active' : ' inactive'}`}
              aria-hidden="true"
            />
            <span className={`availability-text${available ? '' : ' is-unavailable'}`}>
              {available ? 'Available now — ' : 'Offline now — '}
              <span className="availability-schedule">Mon–Fri 9AM–6PM PHT (GMT+8)</span>
            </span>
          </div>
        </motion.div>
      </div>

      <BackToTop />
    </div>
  )
}
