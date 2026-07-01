import { useState, useCallback, useEffect, useRef } from 'react'
import { getAllProjectStats, recordProjectView, toggleProjectLike } from '../utils/projectStats'

export function useProjectStats(projects) {
  const [statsMap, setStatsMap] = useState(() => getAllProjectStats(projects))

  const findProject = useCallback(
    (projectId) => projects.find((p) => p.id === projectId),
    [projects]
  )

  const trackView = useCallback((projectId) => {
    const project = findProject(projectId)
    const views = recordProjectView(projectId, project?.behanceViews ?? 0)
    if (views === null) return

    setStatsMap((prev) => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        views,
      },
    }))
  }, [findProject])

  const toggleLike = useCallback((projectId) => {
    const project = findProject(projectId)
    const { liked, likes } = toggleProjectLike(projectId, project?.behanceLikes ?? 0)
    setStatsMap((prev) => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        liked,
        likes,
      },
    }))
    return liked
  }, [findProject])

  return { statsMap, trackView, toggleLike }
}

export function useProjectViewTracker(projectId, onView) {
  const ref = useRef(null)
  const tracked = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node || tracked.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || tracked.current) return
        tracked.current = true
        onView(projectId)
        observer.disconnect()
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [projectId, onView])

  return ref
}
