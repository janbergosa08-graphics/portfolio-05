import { useEffect, useRef } from 'react'
import { ClockIcon, EnvelopeIcon, PhoneIcon, XMarkIcon } from './HeroIcons'
import { heroIconSm } from '../utils/iconStyle'

export default function ContactModal({ isOpen, onClose }) {
  const modalRef = useRef(null)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    closeBtnRef.current?.focus()

    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const email = data.get('email')
    if (!name || !email) return
    const project = data.get('project') || 'Not specified'
    const message = data.get('message') || 'No message'
    const subject = encodeURIComponent(`New inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}%0D%0AEmail: ${email}%0D%0AProject: ${project}%0D%0A%0D%0AMessage:%0D%0A${message}`
    )
    window.location.href = `mailto:janbergosa.graphics@gmail.com?subject=${subject}&body=${body}`
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="modal glass"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          ref={closeBtnRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <XMarkIcon className="modal-close-icon hero-icon hero-icon--md" aria-hidden="true" />
          <span className="modal-close-label">Close</span>
        </button>
        <div className="modal-layout">
          <div className="modal-left">
            <div className="modal-kicker">Let&rsquo;s work together</div>
            <h3 id="modal-title" className="modal-title">Start a Project</h3>
            <p className="modal-desc">
              Tell me about your project and I&rsquo;ll get back to you within 24 hours with a tailored proposal.
            </p>
            <div className="modal-details">
              <div className="modal-detail-item">
                <span className="modal-detail-icon" aria-hidden="true">
                  <EnvelopeIcon {...heroIconSm} />
                </span>
                <div>
                  <span className="modal-detail-label">Email</span>
                  <a href="mailto:janbergosa.graphics@gmail.com" className="modal-detail-value">
                    janbergosa.graphics@gmail.com
                  </a>
                </div>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-icon" aria-hidden="true">
                  <PhoneIcon {...heroIconSm} />
                </span>
                <div>
                  <span className="modal-detail-label">Phone</span>
                  <a href="tel:+639705890264" className="modal-detail-value">
                    +63 970 589 0264
                  </a>
                </div>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-icon" aria-hidden="true">
                  <ClockIcon {...heroIconSm} />
                </span>
                <div>
                  <span className="modal-detail-label">Response Time</span>
                  <span className="modal-detail-value">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-right">
            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Your Email <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-project">Project Type</label>
                <select id="contact-project" className="form-input" name="project" defaultValue="">
                  <option value="">Select a project type</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Illustration">Illustration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-input form-textarea"
                  name="message"
                  rows={4}
                />
              </div>
              <div className="form-group form-group--terms">
                <label className="form-checkbox">
                  <input type="checkbox" name="terms" required />
                  <span>I agree to the privacy policy and terms of service.</span>
                </label>
              </div>
              <button type="submit" className="btn-primary modal-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
