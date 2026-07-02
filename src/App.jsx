import { useState, useEffect, useRef, Suspense, useCallback, lazy } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ContactModal from './components/ContactModal'

const Expertise = lazy(() => import('./components/Expertise'))
const Workflow = lazy(() => import('./components/Workflow'))
const FeaturedProjects = lazy(() => import('./components/FeaturedProjects'))
const Process = lazy(() => import('./components/Process'))
const Approach = lazy(() => import('./components/Approach'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
import { useReducedMotion } from './hooks/useReducedMotion'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useGlassHighlight } from './hooks/useGlassHighlight'
import { useCursorSpotlight } from './hooks/useCursorSpotlight'
import { useIdleReady } from './hooks/useIdleReady'

const SECTION_ORDER = [
  'hero',
  'expertise',
  'workflow',
  'featured',
  'process',
  'approach',
  'faq',
  'contact',
]

const NAV_SCROLL_OFFSET = -88

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [pinnedSection, setPinnedSection] = useState(null)
  const activeSection = useScrollSpy({ pinnedSection })
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [footerNear, setFooterNear] = useState(false)
  const footerSentinelRef = useRef(null)
  const spotlightRef = useRef(null)
  const contactAutoScrollRafRef = useRef(0)
  const reducedMotion = useReducedMotion()
  const effectsReady = useIdleReady()

  useEffect(() => {
    if (!effectsReady) return undefined
    import('./styles/glass-highlight.css')
    return undefined
  }, [effectsReady])

  useGlassHighlight(!effectsReady || reducedMotion)
  useCursorSpotlight(spotlightRef, !effectsReady || reducedMotion)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const node = footerSentinelRef.current
    if (!node || footerNear) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setFooterNear(true)
        observer.disconnect()
      },
      { rootMargin: '600px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [footerNear])

  useEffect(() => {
    document.body.style.overflow = modalOpen || mobileOpen ? 'hidden' : ''
  }, [modalOpen, mobileOpen])

  useEffect(() => () => {
    if (!contactAutoScrollRafRef.current) return
    cancelAnimationFrame(contactAutoScrollRafRef.current)
  }, [])

  useEffect(() => {
    if (!pinnedSection) return undefined

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const el = document.getElementById(pinnedSection)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.height < 4) return
        if (rect.top <= 112 && rect.bottom > 112) {
          setPinnedSection(null)
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [pinnedSection])

  const runScrollTo = useCallback((id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return true
    }

    const targetEl = document.getElementById(id)
    if (!targetEl) return false

    const y = Math.max(0, window.scrollY + targetEl.getBoundingClientRect().top + NAV_SCROLL_OFFSET)
    window.scrollTo({ top: y, left: 0, behavior: 'auto' })
    return true
  }, [])

  const runContactAutoScroll = useCallback(() => {
    const targetEl = document.getElementById('contact')
    if (!targetEl) return

    if (contactAutoScrollRafRef.current) {
      cancelAnimationFrame(contactAutoScrollRafRef.current)
      contactAutoScrollRafRef.current = 0
    }

    const startedAt = performance.now()
    const maxDurationMs = 1800
    const tolerancePx = 6

    const tick = () => {
      const target = document.getElementById('contact')
      if (!target) return

      const desiredTop = target.getBoundingClientRect().top + NAV_SCROLL_OFFSET
      if (Math.abs(desiredTop) <= tolerancePx) {
        contactAutoScrollRafRef.current = 0
        return
      }

      const absoluteY = Math.max(0, window.scrollY + desiredTop)
      window.scrollTo({ top: absoluteY, left: 0, behavior: 'auto' })

      if (performance.now() - startedAt >= maxDurationMs) {
        contactAutoScrollRafRef.current = 0
        return
      }

      contactAutoScrollRafRef.current = requestAnimationFrame(tick)
    }

    contactAutoScrollRafRef.current = requestAnimationFrame(tick)
  }, [])

  const scrollTo = useCallback((id) => {
    if (!SECTION_ORDER.includes(id)) return

    if (contactAutoScrollRafRef.current) {
      cancelAnimationFrame(contactAutoScrollRafRef.current)
      contactAutoScrollRafRef.current = 0
    }

    setPinnedSection(id)
    setMobileOpen(false)
    runScrollTo(id)

    // Contact has to reliably pass long sticky/stack sections.
    // Re-apply scroll briefly so one click reaches the target.
    if (id === 'contact') {
      runContactAutoScroll()
    }
  }, [runContactAutoScroll, runScrollTo])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash || !SECTION_ORDER.includes(hash) || hash === 'hero') return
    scrollTo(hash)
    // Run once on initial load for hash deep links.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="film-grain" aria-hidden="true" />
      <div id="cursor-spotlight" ref={spotlightRef} aria-hidden="true" />

      <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((v) => !v)}
        onCloseMobile={() => setMobileOpen(false)}
        onScrollTo={scrollTo}
        onOpenModal={() => setModalOpen(true)}
      />

      <main id="main-content">
        <Hero onScrollTo={scrollTo} onOpenModal={() => setModalOpen(true)} />

        <Suspense fallback={null}>
          <section id="expertise" aria-labelledby="expertise-heading">
            <Expertise />
          </section>

          <section id="workflow" aria-labelledby="workflow-heading">
            <Workflow />
          </section>

          <section id="featured" className="section-featured" aria-labelledby="featured-heading">
            <FeaturedProjects />
          </section>

          <section id="process" aria-labelledby="process-heading">
            <Process />
          </section>

          <section id="approach" aria-labelledby="approach-heading">
            <Approach />
          </section>

          <section id="faq" aria-labelledby="faq-heading">
            <FAQ />
          </section>

          <section id="contact" aria-labelledby="contact-heading">
            <Contact onOpenModal={() => setModalOpen(true)} />
          </section>
        </Suspense>

        <div ref={footerSentinelRef} aria-hidden="true" />
      </main>

      {footerNear && (
        <Suspense fallback={null}>
          <Footer onScrollTo={scrollTo} />
        </Suspense>
      )}

      {modalOpen && (
        <Suspense fallback={null}>
          <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </Suspense>
      )}
    </>
  )
}
