import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Contact({ onOpenModal }) {
  const [available, setAvailable] = useState(false)
  const [showBtn, setShowBtn] = useState(false)

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

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('contact')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (inView) {
        const scrollable = el.scrollHeight - window.innerHeight
        const scrolled = window.scrollY - el.offsetTop
        setShowBtn(scrolled > scrollable - 200)
      } else {
        setShowBtn(false)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

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
        <h2 className="section-title" style={{ maxWidth: 520 }}>
          Ready to bring your vision to life?
        </h2>
        <p>
          I am currently accepting new projects and collaborations. Let&rsquo;s talk about how I can help you build something great.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          <span className={`availability-dot${available ? ' active' : ''}`}></span>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            {available
              ? 'Available for work \u2014 Mon\u2013Fri 9AM\u20136PM PHT'
              : 'Not available at this hour \u2014 back Mon\u2013Fri 9AM\u20136PM PHT'}
          </span>
        </div>
        <button className="btn-primary btn-large" onClick={onOpenModal}>
          Start a Project
        </button>
        <div className="contact-links">
          <a href="mailto:janbergosa.graphics@gmail.com">Email</a>
          <a href="https://www.behance.net/janbergosa" target="_blank">Behance</a>
          <a href="https://dribbble.com/janbergosa" target="_blank">Dribbble</a>
        </div>
      </motion.div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '64px',
        opacity: showBtn ? 1 : 0,
        visibility: showBtn ? 'visible' : 'hidden',
        transition: 'opacity 0.4s, visibility 0.4s',
      }}>
        <button
          onClick={scrollToTop}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            border: '1px solid var(--glass-border)',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            color: '#fff',
            fontFamily: 'var(--font)',
            fontSize: '13px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          &uarr; Back to top
        </button>
      </div>
    </div>
  )
}
