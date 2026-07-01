import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { heroWords } from '../data/constants'
import { useReducedMotion } from '../hooks/useReducedMotion'
import MeshGradient from './MeshGradient'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const slideVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
}

const slideTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] }

export default function Hero({ onScrollTo, onOpenModal }) {
  const [text, setText] = useState('')
  const fullLabel = 'Jr UI UX Designer'
  const [wordIndex, setWordIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const orb1Y = useTransform(scrollY, [0, 800], [0, 120])
  const orb2Y = useTransform(scrollY, [0, 800], [0, -80])
  const orb3Y = useTransform(scrollY, [0, 800], [0, 60])
  const gridScale = useTransform(scrollY, [0, 800], [1, 0.85])
  const gridOpacity = useTransform(scrollY, [0, 800], [0.08, 0.02])

  useEffect(() => {
    if (reducedMotion) {
      setText(fullLabel)
      return undefined
    }
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
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return undefined
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % heroWords.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [reducedMotion])

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="hero-bg">
        <MeshGradient />
        {!reducedMotion && (
          <>
            <motion.div
              className="hero-orb hero-orb-1"
              style={{ y: orb1Y }}
            />
            <motion.div
              className="hero-orb hero-orb-2"
              style={{ y: orb2Y }}
            />
            <motion.div
              className="hero-orb hero-orb-3"
              style={{ y: orb3Y }}
            />
          </>
        )}
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-kicker"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="typewriter-text">{text}</span>
            {!reducedMotion && <span className="typewriter-cursor" aria-hidden="true">|</span>}
          </motion.div>
          <h1>
            Designing{' '}
            <span className="flip-text" style={{ '--flip-width': '12ch' }}>
              {reducedMotion ? (
                <span className="flip-word">{heroWords[wordIndex]}</span>
              ) : (
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={slideTransition}
                  className="flip-word"
                >
                  {heroWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              )}
            </span>
            <br />
            <span className="hero-accent">that solve real problems.</span>
          </h1>
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            I design and build strategic digital experiences that bridge the gap between user needs and business goals.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn-primary" onClick={onOpenModal}>Start a Project</button>
            <button className="btn-ghost" onClick={() => onScrollTo('featured')}>View Projects</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-grid"
            style={{
              scale: reducedMotion ? 1 : gridScale,
              opacity: reducedMotion ? 0.08 : gridOpacity,
            }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </motion.div>
          <motion.div
            className="hero-floating-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
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
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  )
}
