import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, PenTool, Rocket } from 'lucide-react'
import { workflowSteps } from '../data/constants'

const wfIcons = [Search, PenTool, Rocket]

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0)
  const frameRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.step)
          if (entry.isIntersecting) {
            setActiveStep(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    frameRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToFrame = (idx) => {
    frameRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">Workflow</div>
        <h2 className="section-title">How I work</h2>
      </motion.div>

      <div className="workflow-split">
        <motion.div
          className="wf-nav"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {workflowSteps.map((step, i) => {
            const Icon = wfIcons[i]
            return (
              <button
                key={i}
                className={`wf-pill${activeStep === i ? ' active' : ''}`}
                data-step={i}
                onClick={() => scrollToFrame(i)}
              >
                <Icon size={16} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                {step.title}
              </button>
            )
          })}
        </motion.div>

        <div className="wf-frames">
          {workflowSteps.map((step, i) => {
            const Icon = wfIcons[i]
            return (
              <motion.div
                key={i}
                className={`wf-frame grain${activeStep === i ? ' visible' : ''}`}
                data-step={i}
                ref={(el) => (frameRefs.current[i] = el)}
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="wf-frame-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <ul className="wf-detail">
                    {step.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="wf-frame-visual">
                  <div className="wf-visual-bg"></div>
                  <Icon size={64} strokeWidth={1} className="wf-visual-icon" style={{ color: 'rgba(255,255,255,0.04)' }} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
