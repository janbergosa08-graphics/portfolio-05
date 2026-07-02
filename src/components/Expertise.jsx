import { motion } from 'framer-motion'
import { sectionContent, socialLinks } from '../data/constants'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { BentoStackCards, BentoToolMarquee } from './BentoDesignTools'
import MeshGradient from './MeshGradient'

const linkedinProfile = socialLinks.find((link) => link.id === 'linkedin')
const glowClass = (staticGlow) =>
  `text-metallic-glow text-metallic-glow--stat${staticGlow ? ' text-metallic-glow--static' : ''}`

const tileVariants = {
  hidden: { opacity: 0, scale: 1.06, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Expertise() {
  const reducedMotion = useReducedMotion()
  const metallicGlow = glowClass(reducedMotion)

  const tiles = [
  { className: 'bento-hero', content: (
    <>
      <div className="bento-hero-mesh" aria-hidden="true">
        <MeshGradient intensity="bento" />
      </div>
      <div className="bento-hero-content">
        <div className={`bento-hero-number ${metallicGlow}`}>5+</div>
        <span className="bento-hero-label">Years in the design field</span>
        <p className="bento-hero-desc">Delivering end-to-end UI/UX, product, graphic, and web design for startups and agencies worldwide.</p>
      </div>
      <BentoToolMarquee reducedMotion={reducedMotion} />
    </>
  )},
  { className: 'bento-exp', content: (
    <>
      <span className="bento-stat">20+</span>
      <span className="bento-stat-label">Projects delivered</span>
      <div className="bento-timeline">
        <div className="bento-timeline-item"><span className="tl-dot"></span> UI/UX Design</div>
        <div className="bento-timeline-item"><span className="tl-dot"></span> Web &amp; Product Design</div>
        <div className="bento-timeline-item"><span className="tl-dot"></span> Branding &amp; Illustration</div>
      </div>
      <BentoStackCards />
    </>
  )},
  { className: 'bento-ai', content: (
    <>
      <div className="bento-title">AI-Augmented Workflow</div>
      <div className="bento-desc">Leveraging AI tools to accelerate research, prototyping, and design iteration without compromising quality.</div>
    </>
  )},
  { className: 'bento-full', content: (
    <>
      <div className="bento-title">End-to-End Delivery</div>
      <div className="bento-desc">From concept to code &mdash; I handle research, design, prototyping, and front-end development for a seamless workflow.</div>
      <div className="skill-tags" aria-label="Skills">
        <span>Design Systems</span><span>Prototyping</span><span>Front-End</span><span>Figma</span><span>React</span>
      </div>
    </>
  )},
  { className: 'bento-linkedin', content: (
    <a
      className="bento-linkedin-card"
      href={linkedinProfile?.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Want to know more? Visit ${linkedinProfile?.label ?? 'LinkedIn'} profile`}
    >
      <div className="bento-linkedin-media">
        <img
          src="/me/marjan-profile.webp"
          alt=""
          width={480}
          height={560}
          loading="lazy"
          decoding="async"
        />
        <div className="bento-linkedin-scrim" aria-hidden="true" />
      </div>
      <div className="bento-linkedin-body">
        <p className="bento-linkedin-kicker">Want to know more?</p>
        <p className="bento-linkedin-copy">
          See how I work, what I&apos;ve shipped, and the teams I&apos;ve partnered with.
        </p>
        <span className="bento-linkedin-cta">
          Visit my {linkedinProfile?.label ?? 'LinkedIn'}
          <span className="bento-linkedin-arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  )},
]

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">{sectionContent.expertise.kicker}</div>
        <h2 id="expertise-heading" className="section-title">{sectionContent.expertise.title}</h2>
        <p className="section-intro">{sectionContent.expertise.intro}</p>
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
