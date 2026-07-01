import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { sectionContent } from '../data/constants'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useMobileLite } from '../hooks/useMobileLite'
import MeshGradient from './MeshGradient'

function HeroHeadlineRow({ line, reducedMotion }) {
  if (typeof line === 'string') {
    return <span className="hero-headline-row">{line}</span>
  }

  return (
    <span className="hero-headline-row">
      {line.before}
      <span
        className={`hero-prism-word${reducedMotion ? ' hero-prism-word--static' : ''}`}
      >
        {line.highlight}
      </span>
    </span>
  )
}

export default function Hero({ onScrollTo, onOpenModal }) {
  const [text, setText] = useState('')
  const fullLabel = sectionContent.hero.roleLabel
  const reducedMotion = useReducedMotion()
  const mobileLite = useMobileLite()
  const lightHero = reducedMotion || mobileLite
  const { scrollY } = useScroll()
  const orb1Y = useTransform(scrollY, [0, 800], [0, 120])
  const orb2Y = useTransform(scrollY, [0, 800], [0, -80])
  const orb3Y = useTransform(scrollY, [0, 800], [0, 60])
  const gridScale = useTransform(scrollY, [0, 800], [1, 0.85])
  const gridOpacity = useTransform(scrollY, [0, 800], [0.08, 0.02])

  useEffect(() => {
    if (lightHero) {
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
  }, [lightHero, fullLabel])

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="hero-bg">
        <MeshGradient />
        {!lightHero && (
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
        <div className="hero-text">
          <div className="hero-kicker">
            <span className="typewriter-text">{text}</span>
            {!lightHero && <span className="typewriter-cursor" aria-hidden="true">|</span>}
          </div>
          <h1 className="hero-headline">
            {sectionContent.hero.headlineLines.map((line) => (
              <HeroHeadlineRow
                key={typeof line === 'string' ? line : line.highlight}
                line={line}
                reducedMotion={lightHero}
              />
            ))}
          </h1>
          <p className="hero-desc">{sectionContent.hero.description}</p>
          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={onOpenModal}>{sectionContent.hero.ctaPrimary}</button>
            <button type="button" className="btn-ghost" onClick={() => onScrollTo('featured')}>{sectionContent.hero.ctaSecondary}</button>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={lightHero ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-grid"
            style={{
              scale: lightHero ? 1 : gridScale,
              opacity: lightHero ? 0.08 : gridOpacity,
            }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </motion.div>
          <motion.div
            className="hero-floating-card glass"
            initial={lightHero ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
        initial={lightHero ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  )
}
