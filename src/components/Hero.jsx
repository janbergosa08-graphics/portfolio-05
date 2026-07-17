import { useState, useEffect } from 'react'
import { sectionContent } from '../data/constants'
import { useReducedMotion } from '../hooks/useReducedMotion'
import BlueprintGrid from './BlueprintGrid'
import AccentCTA from './AccentCTA'

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
  const staticHeroText = reducedMotion

  useEffect(() => {
    if (staticHeroText) {
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
  }, [staticHeroText, fullLabel])

  return (
    <section id="hero" className="hero-section hero-section--runlayer" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-ambient" />
        <BlueprintGrid density="hero" />
      </div>

      <div className="hero-inner hero-inner--runlayer">
        <div className="hero-text hero-text--runlayer">
          <div className="hero-kicker hero-kicker--pill">
            <span className="typewriter-text">{text}</span>
            {!staticHeroText && <span className="typewriter-cursor" aria-hidden="true">|</span>}
          </div>
          <h1 className="hero-headline">
            {sectionContent.hero.headlineLines.map((line) => (
              <HeroHeadlineRow
                key={typeof line === 'string' ? line : line.highlight}
                line={line}
                reducedMotion={staticHeroText}
              />
            ))}
          </h1>
          <p className="hero-desc">{sectionContent.hero.description}</p>
          <div className="hero-actions">
            <AccentCTA type="button" onClick={onOpenModal}>{sectionContent.hero.ctaPrimary}</AccentCTA>
            <AccentCTA type="button" variant="secondary" onClick={() => onScrollTo('featured')}>
              {sectionContent.hero.ctaSecondary}
            </AccentCTA>
          </div>
        </div>
      </div>
    </section>
  )
}
