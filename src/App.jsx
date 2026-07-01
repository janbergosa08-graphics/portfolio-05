import { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Workflow from './components/Workflow'
import FeaturedProjects from './components/FeaturedProjects'
import Process from './components/Process'
import Approach from './components/Approach'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useGlassHighlight } from './hooks/useGlassHighlight'
import { useCursorSpotlight } from './hooks/useCursorSpotlight'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const spotlightRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useGlassHighlight()
  useCursorSpotlight(spotlightRef, reducedMotion)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      </main>

      <Footer
        onScrollTo={scrollTo}
        onOpenModal={() => setModalOpen(true)}
      />

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
