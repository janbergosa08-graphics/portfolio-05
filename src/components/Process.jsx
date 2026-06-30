import { useRef, useEffect, useState, useCallback } from 'react'
import { processSteps } from '../data/constants'

export default function Process() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const scrollZoneRef = useRef(null)
  const stackRef = useRef(null)
  const [indicatorHidden, setIndicatorHidden] = useState(false)

  const STACK_OFFSET = 18
  const SCALE_STEP = 0.045
  const SCROLL_PER_CARD = 0.72

  const updateStack = useCallback(() => {
    const scrollZone = scrollZoneRef.current
    if (!scrollZone) return
    const zoneRect = scrollZone.getBoundingClientRect()
    const scrollable = scrollZone.offsetHeight - window.innerHeight
    if (scrollable <= 0) return

    const p = Math.max(0, Math.min(1, -zoneRect.top / scrollable))
    setProgress(p)
    const floatIdx = p * (processSteps.length - 1)
    const idx = Math.min(processSteps.length - 1, Math.round(floatIdx))
    setActiveIdx(idx)

    const cards = scrollZone.querySelectorAll('.ps-card')

    cards.forEach((card, i) => {
      card.classList.remove('hidden')
      const depth = Math.max(0, floatIdx - i)
      card.style.setProperty('--ps-scale', String(Math.max(0.82, 1 - depth * SCALE_STEP)))
      card.style.setProperty('--ps-y', `${-depth * STACK_OFFSET}px`)
      card.style.zIndex = String(i + 1)
      card.classList.toggle('active', i === Math.round(floatIdx))
      card.classList.toggle('passed', i < Math.round(floatIdx))
    })
  }, [])

  useEffect(() => {
    const scrollZone = scrollZoneRef.current
    if (!scrollZone) return

    const isDesktop = window.innerWidth > 1100
    if (!isDesktop) return

    const totalVh = (processSteps.length - 1) * SCROLL_PER_CARD + 1
    scrollZone.style.height = `${totalVh * 100}vh`

    const onScroll = () => {
      requestAnimationFrame(updateStack)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateStack()

    // Observe approach section for indicator hide
    const approachEl = document.getElementById('approach')
    const indicator = document.querySelector('.ps-indicator')
    if (approachEl && indicator) {
      const io = new IntersectionObserver(
        ([entry]) => {
          setIndicatorHidden(entry.isIntersecting)
        },
        { threshold: 0 }
      )
      io.observe(approachEl)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [updateStack])

  useEffect(() => {
    const onResize = () => {
      const scrollZone = scrollZoneRef.current
      if (!scrollZone) return
      const isDesktop = window.innerWidth > 1100
      if (isDesktop) {
        const totalVh = (processSteps.length - 1) * SCROLL_PER_CARD + 1
        scrollZone.style.height = `${totalVh * 100}vh`
        updateStack()
      } else {
        scrollZone.style.height = 'auto'
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [updateStack])

  const scrollToStep = (idx) => {
    const scrollZone = scrollZoneRef.current
    if (!scrollZone) return
    const isDesktop = window.innerWidth > 1100
    if (!isDesktop) {
      const cards = scrollZone.querySelectorAll('.ps-card')
      cards[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    const zoneTop = scrollZone.offsetTop
    const zoneHeight = scrollZone.offsetHeight
    const scrollable = zoneHeight - window.innerHeight
    const target = zoneTop + (idx / (processSteps.length - 1)) * scrollable
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <>
      <div className="container">
        <div className="section-kicker">Process</div>
        <h2 className="section-title">From idea to impact</h2>
        <p className="section-intro">
          A structured approach that turns ambiguity into clarity, and concepts into products that perform.
        </p>
      </div>

      <div
        className={`ps-indicator${indicatorHidden ? ' ps-indicator--hidden' : ''}`}
      >
        <div className="ps-indicator-inner">
          <div className="ps-pagination">
            {processSteps.map((step, i) => {
              const isActive = i === activeIdx && i < processSteps.length - 1
              const isDone = i < activeIdx || (i === processSteps.length - 1 && i === activeIdx)
              const lineFill = i === activeIdx && i < processSteps.length - 1 ? progress * (processSteps.length - 1) - Math.floor(progress * (processSteps.length - 1)) : isDone ? 1 : 0
              return (
                <button
                  key={i}
                  className={`ps-step${isActive ? ' active' : ''}${isDone ? ' done' : ''}`}
                  data-idx={i}
                  onClick={() => scrollToStep(i)}
                >
                  <span className="ps-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ps-step-line" style={{ '--ps-line-fill': lineFill }} />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="ps-scroll-zone" ref={scrollZoneRef}>
        <div className="ps-stack" ref={stackRef}>
          {processSteps.map((step, i) => (
            <div key={i} className="ps-card">
              <div className="ps-card-inner">
                <div className="ps-visual-col">
                  <div className="ps-visual">
                    <span className="ps-icon">{step.icon}</span>
                  </div>
                </div>
                <div className="ps-body-col">
                  <div className="ps-phase">{step.phase}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <span className="ps-number">{String(i + 1).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
