import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { projectsData, filterCategories } from '../data/constants'

function getViews(title) {
  return parseInt(localStorage.getItem('pv_views_' + title)) || Math.floor(Math.random() * 400) + 120
}
function getLiked(title) {
  return localStorage.getItem('pv_liked_' + title) === 'true'
}
function getLikes(title) {
  return parseInt(localStorage.getItem('pv_likes_' + title)) || Math.floor(Math.random() * 20) + 5
}

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const [likedMap, setLikedMap] = useState(() => {
    const map = {}
    projectsData.forEach((p) => { map[p.title] = getLiked(p.title) })
    return map
  })
  const [likesMap, setLikesMap] = useState(() => {
    const map = {}
    projectsData.forEach((p) => { map[p.title] = getLikes(p.title) })
    return map
  })

  const filtered = projectsData.filter((p) => filter === 'all' || p.categories.includes(filter))
  const visible = showAll ? filtered : filtered.slice(0, 6)
  const hasMore = filtered.length > 6

  const handleFilter = (value) => {
    setFilter(value)
    setShowAll(false)
  }

  const toggleShowAll = () => setShowAll((v) => !v)

  const handleLike = useCallback((title, e) => {
    e.stopPropagation()
    e.preventDefault()
    const wasLiked = likedMap[title]
    const newLiked = !wasLiked
    let likes = likesMap[title]
    likes = newLiked ? likes + 1 : likes - 1
    localStorage.setItem('pv_liked_' + title, newLiked)
    localStorage.setItem('pv_likes_' + title, likes)
    setLikedMap((prev) => ({ ...prev, [title]: newLiked }))
    setLikesMap((prev) => ({ ...prev, [title]: likes }))
  }, [likedMap, likesMap])

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-kicker">Projects</div>
        <h2 className="section-title">Featured work</h2>
        <p className="section-intro">
          A curated selection of projects spanning product design, web design, branding, and illustration.
        </p>
      </motion.div>

      <motion.div
        className="filter-pills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {filterCategories.map((cat) => (
          <button
            key={cat.value}
            className={`pill${filter === cat.value ? ' active' : ''}`}
            onClick={() => handleFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {visible.map((p) => {
          const views = getViews(p.title)
          const liked = likedMap[p.title]
          const likes = likesMap[p.title]

          return (
            <motion.div
              key={p.title}
              className="project-card"
              variants={{
                hidden: { opacity: 0, scale: 1.08, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <a href={p.url} target="_blank" className="project-thumb" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="project-thumb-inner" style={{ background: p.gradient }}>
                  {p.icon && <span className="project-thumb-icon">{p.icon}</span>}
                  {p.badge && <span className="project-badge">{p.badge}</span>}
                </div>
                <div className="project-overlay">
                  <span className="project-overlay-cta">View on Behance &nearr;</span>
                </div>
              </a>
              <div className="project-info">
                <div className="project-info-left">
                  <div className="project-info-title">{p.title}</div>
                </div>
                <div className="project-info-right">
                  <span
                    className={`project-stat project-stat-heart${liked ? ' liked' : ''}`}
                    onClick={(e) => handleLike(p.title, e)}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span>{likes}</span>
                  </span>
                  <span className="project-stat">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>{views}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {(hasMore || showAll) && (
        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            className={`view-all-btn${showAll ? ' show-less' : ''}`}
            onClick={toggleShowAll}
          >
            <span>{showAll ? 'Show Less' : 'View All Projects'}</span>
            <span className="va-arrow">&rarr;</span>
          </button>
        </motion.div>
      )}
    </div>
  )
}
