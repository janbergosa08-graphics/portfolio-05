import { useRef, useEffect, useState, useCallback } from 'react'
import { processSteps, sectionContent } from '../data/constants'
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
  const CARD_GAP_PX = 40
  const HANDOFF_RATIO = 0.48
  const MAX_VISIBLE_DEPTH = 2

  const getProcessCardHeight = useCallback(() => {
    const vh = window.innerHeight
    return Math.min(560, Math.max(440, vh - 280))
  }, [])

  const syncScrollZoneHeight = useCallback(() => {
    const scrollZone = scrollZoneRef.current
    if (!scrollZone || window.innerWidth <= 1100) return

    const cardHeight = cardRefs.current[0]?.offsetHeight || getProcessCardHeight()
    const indicatorHeight = scrollZone.querySelector('.ps-indicator')?.offsetHeight || 0
    const steps = processSteps.length
    const stackHeight = indicatorHeight + steps * cardHeight + (steps - 1) * CARD_GAP_PX
    const handoff = (steps - 1) * cardHeight * HANDOFF_RATIO

    scrollZone.style.height = `${Math.ceil(stackHeight + handoff)}px`
  }, [getProcessCardHeight])

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
    const { floatIndex, lineFills } = resolveProcessScrollState(
      cards,
      scrollZone
    )

    setActiveIdx(Math.round(floatIndex))
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

    syncScrollZoneHeight()

    const onScroll = () => {
      requestAnimationFrame(updateStack)
    }

    const onResize = () => {
      if (window.innerWidth > 1100) {
        syncScrollZoneHeight()
        requestAnimationFrame(updateStack)
      } else {
        scrollZone.style.height = 'auto'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    requestAnimationFrame(() => {
      syncScrollZoneHeight()
      updateStack()
    })

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
        window.removeEventListener('resize', onResize)
        io.disconnect()
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [syncScrollZoneHeight, updateStack])

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
        <div className="section-kicker">{sectionContent.process.kicker}</div>
        <h2 id="process-heading" className="section-title">{sectionContent.process.title}</h2>
        <p className="section-intro">{sectionContent.process.intro}</p>
      </div>

      <div className="ps-scroll-zone" ref={scrollZoneRef}>
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
