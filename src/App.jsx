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

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { rootMargin: '-45% 0px -55% 0px', threshold: 0 })

    document.querySelectorAll('section[id]').forEach((s) => navObserver.observe(s))
    return () => navObserver.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
  }, [modalOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <div className="film-grain" />
      <div id="cursor-spotlight" />

      <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((v) => !v)}
        onCloseMobile={() => setMobileOpen(false)}
        onScrollTo={scrollTo}
        onOpenModal={() => setModalOpen(true)}
      />

      <Hero onScrollTo={scrollTo} onOpenModal={() => setModalOpen(true)} />

      <section id="expertise">
        <Expertise />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="featured">
        <FeaturedProjects />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="approach">
        <Approach />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <Contact
          onOpenModal={() => setModalOpen(true)}
          onScrollTo={scrollTo}
        />
      </section>

      <Footer
        onScrollTo={scrollTo}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

function ContactModal({ isOpen, onClose }) {
  const formRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const email = data.get('email')
    if (!name || !email) return
    const project = data.get('project') || 'Not specified'
    const message = data.get('message') || 'No message'
    const subject = encodeURIComponent(`New inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0AProject: ${project}%0D%0A%0D%0AMessage:%0D%0A${message}`)
    window.location.href = `mailto:janbergosa.graphics@gmail.com?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <div
      className={`modal-overlay${isOpen ? ' active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal glass">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-layout">
          <div className="modal-left">
            <div className="modal-kicker">Let&rsquo;s work together</div>
            <h3 className="modal-title">Start a Project</h3>
            <p className="modal-desc">
              Tell me about your project and I&rsquo;ll get back to you within 24 hours with a tailored proposal.
            </p>
            <div className="modal-details">
              <div className="modal-detail-item">
                <span className="modal-detail-icon">&#9993;</span>
                <div>
                  <span className="modal-detail-label">Email</span>
                  <span className="modal-detail-value">janbergosa.graphics@gmail.com</span>
                </div>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-icon">&#9742;</span>
                <div>
                  <span className="modal-detail-label">Phone</span>
                  <span className="modal-detail-value">+63 970 589 0264</span>
                </div>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-icon">&#128338;</span>
                <div>
                  <span className="modal-detail-label">Response Time</span>
                  <span className="modal-detail-value">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-right">
            <form ref={formRef} className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input className="form-input" type="text" name="name" placeholder="Your Name *" required />
              </div>
              <div className="form-group">
                <input className="form-input" type="email" name="email" placeholder="Your Email *" required />
              </div>
              <div className="form-group">
                <select className="form-input" name="project">
                  <option value="">Project Type</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Illustration">Illustration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="form-input form-textarea" name="message" placeholder="Tell me about your project..." />
              </div>
              <div className="form-group form-group--terms">
                <label className="form-checkbox">
                  <input type="checkbox" required />
                  <span>I agree to the privacy policy and terms of service.</span>
                </label>
              </div>
              <button type="submit" className="btn-primary modal-submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
