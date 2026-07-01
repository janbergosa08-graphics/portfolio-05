import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

const html = readFileSync(join(tmpdir(), 'behance-profile.html'), 'utf8')
const match = html.match(/id="beconfig-store_state">([\s\S]*?)<\/script>/)
if (!match) {
  console.error('No store state found')
  process.exit(1)
}
const state = JSON.parse(match[1])
const projects = state?.profile?.projects || state?.user?.projects || []

function findProjects(obj, found = []) {
  if (!obj || typeof obj !== 'object') return found
  if (Array.isArray(obj)) {
    for (const item of obj) findProjects(item, found)
    return found
  }
  if (obj.slug && obj.id && obj.name && obj.covers) {
    found.push({
      id: obj.id,
      name: obj.name,
      slug: obj.slug,
      url: `https://www.behance.net/gallery/${obj.id}/${obj.slug}`,
      views: obj.stats?.views ?? 0,
      appreciations: obj.stats?.appreciations ?? 0,
      fields: obj.fields?.map((f) => f.name) || [],
    })
  }
  for (const v of Object.values(obj)) findProjects(v, found)
  return found
}

const all = findProjects(state)
const unique = [...new Map(all.map((p) => [p.id, p])).values()]
writeFileSync('scripts/behance-projects.json', JSON.stringify(unique, null, 2))
console.log(`Found ${unique.length} projects`)
for (const p of unique) console.log(`- ${p.name} (${p.id}) [${p.fields.join(', ')}]`)
