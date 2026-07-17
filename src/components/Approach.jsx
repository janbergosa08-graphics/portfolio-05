import { motion } from 'framer-motion'
import { APPROACH_ICONS } from './HeroIcons'
import { approachCards, sectionContent } from '../data/constants'
import SectionShell from './SectionShell'
import OutlineCard from './OutlineCard'

export default function Approach() {
  return (
    <div className="container">
      <SectionShell
        eyebrow={sectionContent.approach.kicker}
        title={sectionContent.approach.title}
        intro={sectionContent.approach.intro}
        id="approach-heading"
        index={3}
      />

      <motion.div
        className="approach-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {approachCards.map((card) => {
          const Icon = APPROACH_ICONS[card.icon]
          return (
            <OutlineCard
              as={motion.div}
              key={card.title}
              className="approach-card approach-card--outline"
              variants={{
                hidden: { opacity: 0, scale: 1.06, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <span className="approach-icon" aria-hidden="true">
                {Icon ? <Icon /> : null}
              </span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </OutlineCard>
          )
        })}
      </motion.div>
    </div>
  )
}
