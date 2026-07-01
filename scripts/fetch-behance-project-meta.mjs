import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'

const projects = JSON.parse(readFileSync(join(__dirname, 'behance-projects.json'), 'utf8'))

async function fetchProjectMeta(project) {
  const res = await fetch(project.url, { headers: { 'User-Agent': UA } })
  const html = await res.text()
  const ogImage = html.match(/property="og:image"\s+content="([^"]+)"/)?.[1]
  const tags = [...html.matchAll(/class="[^"]*ProjectTags[^"]*"[^>]*>[\s\S]*?<\/a>/g)].length
  const tagMatches = [...html.matchAll(/"tag":"([^"]+)"/g)].map((m) => m[1])
  const uniqueTags = [...new Set(tagMatches)]
  const fields = [...html.matchAll(/creativefield[^>]*>([^<]+)</gi)].map((m) => m[1].trim())
  const viewsMatch = html.match(/(\d+)\s+views/i) || html.match(/"views":(\d+)/)
  const likesMatch = html.match(/(\d+)\s+appreciation/i) || html.match(/"appreciations":(\d+)/)
  return {
    ...project,
    ogImage,
    tags: uniqueTags.slice(0, 12),
    fields,
    views: viewsMatch ? Number(viewsMatch[1]) : project.views,
    appreciations: likesMatch ? Number(likesMatch[1]) : project.appreciations,
  }
}

const out = []
for (const p of projects) {
  process.stdout.write(`${p.name}… `)
  try {
    out.push(await fetchProjectMeta(p))
    console.log('ok')
  } catch (e) {
    console.log('fail', e.message)
    out.push(p)
  }
  await new Promise((r) => setTimeout(r, 350))
}

writeFileSync(join(__dirname, 'behance-projects-meta.json'), JSON.stringify(out, null, 2))
console.log('\nSaved behance-projects-meta.json')
