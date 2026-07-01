import { useRef, useEffect, useState, useCallback } from 'react'
import { processSteps } from '../data/constants'
import StepProgress from './StepProgress'
import CardVisualPlaceholder, { CardMeshLayer } from './CardVisualPlaceholder'
import DocBody from './DocBody'
import {
  resolveProcessScrollState,
  PROCESS_STICKY_TOP,
} from '../utils/scrollProgress'

export default function Process() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [lineFills, setLineFills] = useState(() => Array(processSteps.length).fill(0))
  const scrollZoneRef = useRef(null)
  const cardRefs = useRef([])
  const [indicatorHidden, setIndicatorHidden] = useState(false)

  const STACK_OFFSET = 18
  const SCALE_STEP = 0.045
  const SCROLL_PER_CARD = 0.72
  const MAX_VISIBLE_DEPTH = 2

  const setCardRef = useCallback(
    (index) => (el) => {
      cardRefs.current[index] = el
    },
    []
  )

  const updateStack = useCallback(() => {
    const scrollZone = scrollZoneRef.current
    if (!scrollZone || window.innerWidth <= 1100) return

    const cards = cardRefs.current
    const { activeIndex, floatIndex, lineFills } = resolveProcessScrollState(
      cards,
      scrollZone
    )

    setActiveIdx(activeIndex)
    setLineFills(lineFills)

    cards.forEach((card, i) => {
      if (!card) return
      card.classList.remove('hidden')
      const depth = Math.max(0, floatIndex - i)
      const clampedDepth = Math.min(depth, MAX_VISIBLE_DEPTH)
      card.style.setProperty(
        '--ps-scale',
        String(Math.max(0.82, 1 - clampedDepth * SCALE_STEP))
      )
      card.style.setProperty('--ps-y', `${-clampedDepth * STACK_OFFSET}px`)
      card.style.zIndex = String(i + 1)
      card.classList.toggle('active', i === Math.round(floatIndex))
      card.classList.toggle('passed', i < Math.round(floatIndex))
      card.classList.toggle('deep', depth > MAX_VISIBLE_DEPTH)
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
    window.addEventListener('resize', onScroll, { passive: true })
    updateStack()

    const approachEl = document.getElementById('approach')
    if (approachEl) {
      const io = new IntersectionObserver(
        ([entry]) => {
          setIndicatorHidden(entry.isIntersecting)
        },
        { threshold: 0 }
      )
      io.observe(approachEl)
      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
        io.disconnect()
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
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
      cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const card = cardRefs.current[idx]
    if (!card) return

    const top = card.getBoundingClientRect().top
    const targetScroll = window.scrollY + top - PROCESS_STICKY_TOP
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    <>
      <div className="container">
        <div className="section-kicker">Process</div>
        <h2 id="process-heading" className="section-title">From idea to impact</h2>
        <p className="section-intro">
          A structured approach that turns ambiguity into clarity, and concepts into products that perform.
        </p>
      </div>

      <div
        className={`ps-indicator${indicatorHidden ? ' ps-indicator--hidden' : ''}`}
      >
        <div className="ps-indicator-inner">
          <StepProgress
            count={processSteps.length}
            activeIndex={activeIdx}
            lineFills={lineFills}
            onStepClick={scrollToStep}
            orientation="horizontal"
            ariaLabel="Process steps"
            getStepLabel={(i) => `${processSteps[i].phase}: ${processSteps[i].title}`}
          />
        </div>
      </div>

      <div className="ps-scroll-zone" ref={scrollZoneRef}>
        <div className="ps-stack">
          {processSteps.map((step, i) => (
            <div key={i} className="ps-card" data-step={i} ref={setCardRef(i)}>
              <div className="ps-card-inner">
                <CardMeshLayer stepIndex={i} fadeSide="right" />
                <div className="ps-visual-col" aria-hidden="true">
                  <CardVisualPlaceholder variant={step.placeholder} />
                </div>
                <div className="ps-body-col">
                  <div className="ps-phase">{step.phase}</div>
                  <h3>{step.title}</h3>
                  <DocBody paragraphs={step.body} />
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
