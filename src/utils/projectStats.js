const STATS_KEY = 'portfolio_project_stats'
const LIKED_KEY = 'portfolio_project_liked'
const SESSION_VIEWS_KEY = 'portfolio_project_viewed_session'

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function readSessionViews() {
  try {
    const raw = sessionStorage.getItem(SESSION_VIEWS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeSessionViews(value) {
  sessionStorage.setItem(SESSION_VIEWS_KEY, JSON.stringify(value))
}

function getSeed(project) {
  return {
    views: Number(project.behanceViews) || 0,
    likes: Number(project.behanceLikes) || 0,
  }
}

function getEntry(stats, projectId) {
  return stats[projectId] || { extraViews: 0, extraLikes: 0 }
}

export function getAllProjectStats(projects) {
  const stats = readJson(STATS_KEY, {})
  const liked = readJson(LIKED_KEY, {})
  const result = {}

  projects.forEach((project) => {
    const seed = getSeed(project)
    const entry = getEntry(stats, project.id)
    result[project.id] = {
      views: seed.views + (Number(entry.extraViews) || 0),
      likes: seed.likes + (Number(entry.extraLikes) || 0),
      liked: Boolean(liked[project.id]),
    }
  })

  return result
}

export function recordProjectView(projectId, behanceViews = 0) {
  const sessionViews = readSessionViews()
  if (sessionViews[projectId]) return null

  const stats = readJson(STATS_KEY, {})
  const entry = getEntry(stats, projectId)
  const extraViews = (Number(entry.extraViews) || 0) + 1

  stats[projectId] = { ...entry, extraViews }
  writeJson(STATS_KEY, stats)
  writeSessionViews({ ...sessionViews, [projectId]: true })

  return behanceViews + extraViews
}

export function toggleProjectLike(projectId, behanceLikes = 0) {
  const stats = readJson(STATS_KEY, {})
  const liked = readJson(LIKED_KEY, {})
  const entry = getEntry(stats, projectId)

  const wasLiked = Boolean(liked[projectId])
  const nextLiked = !wasLiked
  const extraLikes = Math.max(0, (Number(entry.extraLikes) || 0) + (nextLiked ? 1 : -1))

  stats[projectId] = { ...entry, extraLikes }
  liked[projectId] = nextLiked

  writeJson(STATS_KEY, stats)
  writeJson(LIKED_KEY, liked)

  return { liked: nextLiked, likes: behanceLikes + extraLikes }
}
