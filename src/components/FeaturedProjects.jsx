import { useState, useCallback, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  projectsData,
  filterCategories,
  allShowcase,
  sectionContent,
} from '../data/constants'
import { useProjectStats, useProjectViewTracker } from '../hooks/useProjectStats'
import { useMobileLite } from '../hooks/useMobileLite'
import { useLerpScroll } from '../hooks/useLerpScroll'
import MeshGradient from './MeshGradient'

const PREVIEW_COUNT = 6
const TITLE_MAX = 40

function shortTitle(title) {
  if (title.length <= TITLE_MAX) return title
  return `${title.slice(0, TITLE_MAX - 1).trimEnd()}…`
}

function labelForProject(project) {
  const showcase = allShowcase.find((s) => s.id === project.id)
  if (showcase) return showcase.label
  const tab = filterCategories.find(
    (c) => c.value !== 'all' && project.categories.includes(c.value),
  )
  return tab?.label ?? ''
}

function getVisibleProjects(filter, expanded) {
  if (filter === 'all') {
    if (!expanded) {
      return allShowcase
        .map(({ id, label }) => {
          const project = projectsData.find((p) => p.id === id)
          return project ? { project, displayLabel: label } : null
        })
        .filter(Boolean)
    }
    return projectsData.map((project) => ({
      project,
      displayLabel: labelForProject(project),
    }))
  }

  const tab = filterCategories.find((c) => c.value === filter)
  return projectsData
    .filter((p) => p.categories.includes(filter))
    .map((project) => ({ project, displayLabel: tab?.label ?? '' }))
}

function ProjectCard({ project, stats, onView, onLike, index, displayLabel, instantReveal }) {
  const cardRef = useProjectViewTracker(project.id, onView)
  const { views, likes, liked } = stats

  const handleLike = (e) => {
    e.stopPropagation()
    e.preventDefault()
    onLike(project.id, e)
  }

  return (
    <motion.article
      ref={cardRef}
      className="project-card project-card--cosmo"
      initial={instantReveal ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: instantReveal ? 0 : 0.4,
        delay: instantReveal ? 0 : (index % PREVIEW_COUNT) * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="project-thumb">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-thumb-link"
          aria-label={`${project.title} on Behance`}
        >
          <div className="project-thumb-media">
            {project.image ? (
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                width={1200}
                height={675}
              />
            ) : (
              <div className="project-thumb-fallback" style={{ background: project.gradient }} aria-hidden="true" />
            )}
          </div>
        </a>
        {displayLabel && (
          <span className="project-thumb-label">{displayLabel}</span>
        )}
        <div className="project-thumb-scrim" aria-hidden="true" />
        <div className="project-thumb-meta">
          <h3 className="project-info-title" title={project.title}>
            {shortTitle(project.title)}
          </h3>
          <button
            type="button"
            className={`project-stat project-stat-heart${liked ? ' liked' : ''}`}
            aria-label={liked ? `Unlike ${project.title}` : `Like ${project.title}`}
            aria-pressed={liked}
            onClick={handleLike}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>{likes}</span>
          </button>
          <span className="project-stat project-stat-views">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span aria-hidden="true">{views}</span>
            <span className="sr-only">{views} views</span>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const panelRef = useRef(null)
  const mobileLite = useMobileLite()
  const { scrollToElement } = useLerpScroll({
    enabled: mobileLite,
    lerpFactor: 0.1,
    deltaMultiplier: 0.75,
  })
  const { statsMap, trackView, toggleLike } = useProjectStats(projectsData)

  const visibleItems = useMemo(
    () => getVisibleProjects(filter, showAll),
    [filter, showAll],
  )

  const hasMoreOnAll = projectsData.length > allShowcase.length

  const handleFilter = (value) => {
    setFilter(value)
    setShowAll(false)
    if (mobileLite) {
      requestAnimationFrame(() => {
        if (!panelRef.current) return
        scrollToElement(panelRef.current)
      })
    }
  }

  const toggleShowAll = () => setShowAll((v) => !v)

  const handleLike = useCallback((projectId, e) => {
    toggleLike(projectId)
    const btn = e.currentTarget
    btn.classList.add('pop')
    btn.addEventListener('animationend', () => btn.classList.remove('pop'), { once: true })
  }, [toggleLike])

  const cardStats = (p) => statsMap[p.id] || { views: p.behanceViews ?? 0, likes: p.behanceLikes ?? 0, liked: false }

  return (
    <>
      <MeshGradient className="projects-mesh" intensity="subtle" />
      <div className="container projects-section">
        <motion.div
          className="section-header section-header--left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-kicker">{sectionContent.featured.kicker}</div>
          <h2 id="featured-heading" className="section-title">{sectionContent.featured.title}</h2>
          <p className="section-intro">
            {sectionContent.featured.intro}
          </p>
        </motion.div>

        <motion.div
          className="filter-pills filter-pills--left"
          role="tablist"
          aria-label="Filter projects by category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              role="tab"
              id={`projects-tab-${cat.value}`}
              className={`pill${filter === cat.value ? ' active' : ''}`}
              aria-selected={filter === cat.value}
              aria-controls="projects-panel"
              onClick={() => handleFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div
          ref={panelRef}
          id="projects-panel"
          className="projects-bento-wrap"
          role="tabpanel"
          aria-labelledby={`projects-tab-${filter}`}
        >
          <div className="projects-bento">
            {visibleItems.map(({ project, displayLabel }, i) => (
              <ProjectCard
                key={`${filter}-${project.id}`}
                instantReveal={mobileLite}
                project={project}
                index={i}
                displayLabel={displayLabel}
                stats={cardStats(project)}
                onView={trackView}
                onLike={handleLike}
              />
            ))}
          </div>
        </div>

        {filter === 'all' && hasMoreOnAll && (
          <div className="projects-footer projects-footer--center">
            <button
              type="button"
              className={`view-all-btn${showAll ? ' show-less' : ''}`}
              onClick={toggleShowAll}
              aria-expanded={showAll}
            >
              {showAll ? 'Show less' : 'View all projects'}
              <span className="va-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
