import { motion } from 'framer-motion'
import { APPROACH_ICONS } from './HeroIcons'
import { approachCards, sectionContent } from '../data/constants'

export default function Approach() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">{sectionContent.approach.kicker}</div>
        <h2 id="approach-heading" className="section-title">{sectionContent.approach.title}</h2>
        <p className="section-intro">{sectionContent.approach.intro}</p>
      </motion.div>

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
            <motion.div
              key={card.title}
              className="approach-card glass"
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
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
