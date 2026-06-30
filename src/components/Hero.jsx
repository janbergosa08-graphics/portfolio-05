import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { heroWords } from '../data/constants'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero({ onScrollTo, onOpenModal }) {
  const [text, setText] = useState('')
  const fullLabel = 'Jr UI UX Designer'

  useEffect(() => {
    let timer, timeout
    const type = () => {
      let i = 0
      setText('')
      timeout = setTimeout(() => {
        timer = setInterval(() => {
          i++
          setText(fullLabel.slice(0, i))
          if (i >= fullLabel.length) {
            clearInterval(timer)
            timeout = setTimeout(type, 3000)
          }
        }, 50)
      }, 400)
    }
    type()
    return () => { clearTimeout(timeout); if (timer) clearInterval(timer) }
  }, [])

  return (
    <div id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" data-parallax="0.05"></div>
        <div className="hero-orb hero-orb-2" data-parallax="0.03"></div>
        <div className="hero-orb hero-orb-3" data-parallax="0.06"></div>
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-kicker"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="typewriter-text">{text}</span>
            <span className="typewriter-cursor">|</span>
          </motion.div>
          <h1>
            Designing{' '}
            <span className="rotating-text">
              {heroWords.map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </span>
            <br />
            <span className="hero-accent">that solve real problems.</span>
          </h1>
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            I design and build strategic digital experiences that bridge the gap between user needs and business goals.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn-primary" onClick={onOpenModal}>Start a Project</button>
            <button className="btn-ghost" onClick={() => onScrollTo('featured')}>View Projects</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
          <motion.div
            className="hero-floating-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hfc-dot"></div>
            <span className="hfc-bar"></span>
            <span className="hfc-bar"></span>
            <span className="hfc-bar-short"></span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </div>
  )
}
