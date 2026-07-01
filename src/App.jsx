import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useGlassHighlight } from './hooks/useGlassHighlight'
import { useCursorSpotlight } from './hooks/useCursorSpotlight'
import { useIdleReady } from './hooks/useIdleReady'

const Expertise = lazy(() => import('./components/Expertise'))
const Workflow = lazy(() => import('./components/Workflow'))
const FeaturedProjects = lazy(() => import('./components/FeaturedProjects'))
const Process = lazy(() => import('./components/Process'))
const Approach = lazy(() => import('./components/Approach'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const ContactModal = lazy(() => import('./components/ContactModal'))

function DeferredSection({ id, className, ariaLabelledby, eager = false, children }) {
  const ref = useRef(null)
  const [near, setNear] = useState(eager)

  useEffect(() => {
    if (near) return undefined
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setNear(true)
        observer.disconnect()
      },
      { rootMargin: '500px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [near])

  return (
    <section ref={ref} id={id} className={className} aria-labelledby={ariaLabelledby}>
      {near ? <Suspense fallback={null}>{children}</Suspense> : null}
    </section>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [footerNear, setFooterNear] = useState(false)
  const footerSentinelRef = useRef(null)
  const spotlightRef = useRef(null)
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

  const scrollTo = (id) => {
    const behavior = reducedMotion ? 'auto' : 'smooth'
    document.getElementById(id)?.scrollIntoView({ behavior })
    setMobileOpen(false)
  }

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

        <DeferredSection id="expertise" ariaLabelledby="expertise-heading" eager>
          <Expertise />
        </DeferredSection>

        <DeferredSection id="workflow" ariaLabelledby="workflow-heading">
          <Workflow />
        </DeferredSection>

        <DeferredSection id="featured" className="section-featured" ariaLabelledby="featured-heading">
          <FeaturedProjects />
        </DeferredSection>

        <DeferredSection id="process" ariaLabelledby="process-heading">
          <Process />
        </DeferredSection>

        <DeferredSection id="approach" ariaLabelledby="approach-heading">
          <Approach />
        </DeferredSection>

        <DeferredSection id="faq" ariaLabelledby="faq-heading">
          <FAQ />
        </DeferredSection>

        <DeferredSection id="contact" ariaLabelledby="contact-heading">
          <Contact onOpenModal={() => setModalOpen(true)} />
        </DeferredSection>

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
