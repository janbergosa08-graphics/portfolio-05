import { motion } from 'framer-motion'
import { approachCards } from '../data/constants'

export default function Approach() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">Approach</div>
        <h2 className="section-title">Design philosophy</h2>
      </motion.div>

      <motion.div
        className="approach-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {approachCards.map((card, i) => (
          <motion.div
            key={i}
            className="approach-card glass"
            variants={{
              hidden: { opacity: 0, scale: 1.06, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <span className="approach-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
