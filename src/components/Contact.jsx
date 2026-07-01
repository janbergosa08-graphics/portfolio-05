import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackToTop from './BackToTop'

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
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, scale: 1.08, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">Contact</div>
        <h2 id="contact-heading" className="section-title section-title--narrow">
          Ready to bring your vision to life?
        </h2>
        <p>
          I am currently accepting new projects and collaborations. Let&rsquo;s talk about how I can help you build something great.
        </p>
        <button type="button" className="btn-primary btn-large" onClick={onOpenModal}>
          Start a Project
        </button>
        <div className="availability-row">
          <span
            className={`availability-dot${available ? ' active' : ' inactive'}`}
            aria-hidden="true"
          />
          <span className={`availability-text${available ? '' : ' is-unavailable'}`}>
            {available
              ? 'Available for work \u2014 Mon\u2013Fri 9AM\u20136PM PHT'
              : 'Not available at this hour \u2014 back Mon\u2013Fri 9AM\u20136PM PHT'}
          </span>
        </div>
      </motion.div>

      <BackToTop />
    </div>
  )
}
