import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { workflowSteps, sectionContent } from '../data/constants'
import { useWorkflowProgress } from '../hooks/useWorkflowProgress'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CardVisualPlaceholder, { CardMeshLayer } from './CardVisualPlaceholder'
import DocBody from './DocBody'

function WorkflowNav({ steps, activeIndex, stepFills, onStepClick }) {
  return (
    <nav className="wf-nav" aria-label="Workflow steps">
      {steps.map((step, i) => {
        const isActive = i === activeIndex
        const isDone = (stepFills[i] ?? 0) >= 0.97 && !isActive
        const fill = stepFills[i] ?? 0

        return (
          <button
            key={step.title}
            type="button"
            className={`wf-nav-item${isActive ? ' is-active' : ''}${isDone ? ' is-done' : ''}`}
            onClick={() => onStepClick(i)}
            aria-current={isActive ? 'step' : undefined}
            aria-label={`${step.short}: ${step.title}`}
          >
            <div className="wf-nav-heading">
              <span className="wf-nav-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="wf-nav-title">{step.short}</span>
            </div>
            <div className="wf-nav-bar" aria-hidden="true">
              <span className="wf-nav-bar-track">
                <span
                  className="wf-nav-bar-fill"
                  style={{ '--bar-fill': fill }}
                />
              </span>
            </div>
          </button>
        )
      })}
    </nav>
  )
}

function WorkflowFrame({ step, index, isActive, frameRef, reducedMotion }) {
  return (
    <motion.article
      className={`wf-frame${isActive ? ' is-active' : ''}`}
      data-step={index}
      ref={frameRef}
      aria-labelledby={`wf-card-title-${index}`}
      initial={reducedMotion ? false : { opacity: 0, y: 48, x: 64 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-8% 0px -10% 0px' }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      }}
    >
      <CardMeshLayer stepIndex={index} fadeSide="left" />

      <div className="wf-frame-content">
        <h3 id={`wf-card-title-${index}`}>{step.title}</h3>
        <DocBody paragraphs={step.body} />
      </div>

      <div className="wf-frame-visual" aria-hidden="true">
        <CardVisualPlaceholder variant={step.placeholder} />
      </div>
    </motion.article>
  )
}

export default function Workflow() {
  const reducedMotion = useReducedMotion()
  const { activeIndex: activeStep, setRef, stepFills } = useWorkflowProgress(
    workflowSteps.length
  )

  const scrollToFrame = useCallback((idx) => {
    document.querySelector(`.wf-frame[data-step="${idx}"]`)?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'center',
    })
  }, [reducedMotion])

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">{sectionContent.workflow.kicker}</div>
        <h2 id="workflow-heading" className="section-title">{sectionContent.workflow.title}</h2>
        <p className="section-intro">{sectionContent.workflow.intro}</p>
      </motion.div>

      <div className="workflow-split">
        <WorkflowNav
          steps={workflowSteps}
          activeIndex={activeStep}
          stepFills={stepFills}
          onStepClick={scrollToFrame}
        />

        <div className="wf-cards" aria-label="Workflow detail cards">
          {workflowSteps.map((step, i) => (
            <WorkflowFrame
              key={step.title}
              step={step}
              index={i}
              isActive={activeStep === i}
              frameRef={setRef(i)}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
