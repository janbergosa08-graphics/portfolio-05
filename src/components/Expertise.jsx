import { motion } from 'framer-motion'

const tileVariants = {
  hidden: { opacity: 0, scale: 1.06, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const tiles = [
  { className: 'bento-hero', content: (
    <>
      <div className="bento-hero-number">6+</div>
      <span className="bento-hero-label">Years of experience</span>
      <p className="bento-hero-desc">Delivering end-to-end product design and front-end development for startups and agencies worldwide.</p>
      <div className="bento-hero-glow"></div>
    </>
  )},
  { className: 'bento-exp', content: (
    <>
      <span className="bento-stat">120+</span>
      <span className="bento-stat-label">Projects delivered</span>
      <div className="bento-timeline">
        <div className="bento-timeline-item"><span className="tl-dot"></span> UI/UX Design</div>
        <div className="bento-timeline-item"><span className="tl-dot"></span> Web &amp; Product Design</div>
        <div className="bento-timeline-item"><span className="tl-dot"></span> Branding &amp; Illustration</div>
      </div>
    </>
  )},
  { className: 'bento-ai', content: (
    <>
      <span className="bento-glyph">&#9889;</span>
      <div className="bento-title">AI-Augmented Workflow</div>
      <div className="bento-desc">Leveraging AI tools to accelerate research, prototyping, and design iteration without compromising quality.</div>
    </>
  )},
  { className: 'bento-visual', content: (
    <div className="bento-visual-scene">
      <div className="float-card float-card-1"><span className="hfc-bar"></span><span className="hfc-bar-short"></span><span className="hfc-bar"></span></div>
      <div className="float-card float-card-2"><span className="hfc-bar"></span><span className="hfc-bar"></span><span className="hfc-bar-short"></span></div>
      <div className="float-card float-card-3"><span className="hfc-bar"></span><span className="hfc-bar-short"></span></div>
    </div>
  )},
  { className: 'bento-full', content: (
    <>
      <span className="bento-glyph">&#9733;</span>
      <div className="bento-title">End-to-End Delivery</div>
      <div className="bento-desc">From concept to code &mdash; I handle research, design, prototyping, and front-end development for a seamless workflow.</div>
      <div className="pill-strip">
        <span>Design Systems</span><span>Prototyping</span><span>Front-End</span><span>Figma</span><span>React</span>
      </div>
    </>
  )},
]

export default function Expertise() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">Expertise</div>
        <h2 className="section-title">Blending design &amp; engineering</h2>
      </motion.div>

      <div className="bento-grid">
        {tiles.map((tile, i) => (
          <motion.div
            key={i}
            className={`bento-tile glass ${tile.className}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={tileVariants}
          >
            {tile.content}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
