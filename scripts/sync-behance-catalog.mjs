import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

function loadState(file) {
  const html = readFileSync(file, 'utf8')
  const match = html.match(/id="beconfig-store_state">([\s\S]*?)<\/script>/)
  return match ? JSON.parse(match[1]) : null
}

function findProjects(obj, found = []) {
  if (!obj || typeof obj !== 'object') return found
  if (Array.isArray(obj)) {
    for (const item of obj) findProjects(item, found)
    return found
  }
  if (obj.slug && obj.id && obj.name && (obj.covers || obj.cover)) {
    found.push({
      id: obj.id,
      name: obj.name,
      slug: obj.slug,
      url: `https://www.behance.net/gallery/${obj.id}/${obj.slug}`,
      views: obj.stats?.views ?? 0,
      appreciations: obj.stats?.appreciations ?? 0,
      fields: obj.fields?.map((f) => f.name || f) || [],
    })
  }
  for (const v of Object.values(obj)) findProjects(v, found)
  return found
}

function findServices(obj, found = []) {
  if (!obj || typeof obj !== 'object') return found
  if (Array.isArray(obj)) {
    for (const item of obj) findServices(item, found)
    return found
  }
  if (obj.title && obj.id && String(obj.id).length <= 6 && obj.url?.includes?.('/services/')) {
    found.push({
      id: obj.id,
      title: obj.title,
      url: obj.url.startsWith('http') ? obj.url : `https://www.behance.net${obj.url}`,
      description: obj.description || '',
    })
  }
  if (obj.name && obj.id && obj.price !== undefined) {
    found.push({
      id: obj.id,
      title: obj.name,
      url: `https://www.behance.net/janbergosa/services/${obj.id}/${obj.slug || ''}`.replace(/\/$/, ''),
    })
  }
  for (const v of Object.values(obj)) findServices(v, found)
  return found
}

const files = [
  join(tmpdir(), 'behance-profile.html'),
  join(tmpdir(), 'behance-p2.html'),
]

const allProjects = []
const allServices = []

for (const file of files) {
  try {
    const state = loadState(file)
    if (!state) continue
    allProjects.push(...findProjects(state))
    allServices.push(...findServices(state))
  } catch {
    /* page may not exist */
  }
}

const projects = [...new Map(allProjects.map((p) => [p.id, p])).values()]
const services = [...new Map(allServices.map((s) => [s.id, s])).values()]

writeFileSync('scripts/behance-projects.json', JSON.stringify(projects, null, 2))
writeFileSync('scripts/behance-services.json', JSON.stringify(services, null, 2))

console.log(`Projects: ${projects.length}`)
projects.forEach((p) => console.log(`  [gallery] ${p.name}`))
console.log(`Services: ${services.length}`)
services.forEach((s) => console.log(`  [service] ${s.title}`))
