import { useState } from 'react'
import { motion } from 'framer-motion'
import { faqItems, sectionContent } from '../data/constants'
import SectionShell from './SectionShell'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <>
      <div className="container">
        <SectionShell
          eyebrow={sectionContent.faq.kicker}
          title={sectionContent.faq.title}
          intro={sectionContent.faq.intro}
          id="faq-heading"
          index={4}
        />
      </div>

      <div className="faq-stack">
        <motion.div
          className="faq-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        >
        {faqItems.map((item, i) => (
          <motion.div
            key={i}
            className={`faq-item faq-item--outline outline-card${openIndex === i ? ' open' : ''}`}
            variants={{
              hidden: { opacity: 0, scale: 1.06, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span>{item.question}</span>
              <span className="faq-icon">+</span>
            </button>
            <div
              className="faq-answer"
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              hidden={openIndex !== i}
            >
              <div className="faq-content">
                {item.description && <p>{item.description}</p>}

                {item.items && (
                  <div className="faq-items-frame">
                    <ul className="faq-list">
                      {item.items.map((li, j) => (
                        <li key={j}>
                          <span className="faq-step-num">{String(j + 1).padStart(2, '0')}</span>
                          <span className="faq-step-sep">—</span>
                          <span className="faq-step-label">{li.label}</span>
                          <span className="faq-step-dash">—</span>
                          <span className="faq-step-sub">{li.sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.chips && (
                  <div className="faq-chips">
                    {item.chips.map((chip, j) => (
                      <span key={j} className="faq-tag">{chip}</span>
                    ))}
                  </div>
                )}

                {item.note && (
                  <p className="faq-note faq-note--italic">{item.note}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </>
  )
}
