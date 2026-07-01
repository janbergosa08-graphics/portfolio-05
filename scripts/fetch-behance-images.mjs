/**
 * Fetches Behance project cover images (og:image) and saves to public/projects/.
 * Run: node scripts/fetch-behance-images.mjs
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outDir = join(root, 'public', 'projects')
const constantsPath = join(root, 'src', 'data', 'constants.js')

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'

function parseProjects(source) {
  const projects = []
  const blockRe = /\{\s*id:\s*'([^']+)'[\s\S]*?url:\s*'(https:\/\/www\.behance\.net\/gallery\/[^']+)'/g
  let m
  while ((m = blockRe.exec(source)) !== null) {
    projects.push({ id: m[1], url: m[2] })
  }
  return projects
}

async function fetchOgImage(pageUrl) {
  const res = await fetch(pageUrl, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${pageUrl}`)
  const html = await res.text()
  const match = html.match(/property="og:image"\s+content="([^"]+)"/)
  if (!match) throw new Error(`No og:image on ${pageUrl}`)
  let imageUrl = match[1]
  // Prefer webp at 1200px for smaller files when available
  imageUrl = imageUrl
    .replace('/project_modules/1400/', '/project_modules/max_1200_webp/')
    .replace(/\.png$/, '.webp')
  return imageUrl
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) {
    // Fallback: try original og URL without webp swap
    const fallback = url.replace('/project_modules/max_1200_webp/', '/project_modules/1400/').replace('.webp', '.png')
    const res2 = await fetch(fallback, { headers: { 'User-Agent': UA } })
    if (!res2.ok) throw new Error(`Download failed ${res.status} / ${res2.status}`)
    const buf = Buffer.from(await res2.arrayBuffer())
    writeFileSync(dest.replace('.webp', '.jpg'), buf)
    return dest.replace('.webp', '.jpg')
  }
  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(dest, buf)
  return dest
}

function updateConstants(imageMap) {
  let source = readFileSync(constantsPath, 'utf8')
  for (const [id, publicPath] of Object.entries(imageMap)) {
    const idPattern = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?)(\\n\\s*gradient:)`, 'm')
    if (source.includes(`image: '/projects/${id}`)) {
      source = source.replace(
        new RegExp(`image:\\s*'/projects/[^']+'`, 'm'),
        `image: '${publicPath}'`
      )
      continue
    }
    if (idPattern.test(source)) {
      source = source.replace(idPattern, `$1\n    image: '${publicPath}',$2`)
    }
  }
  writeFileSync(constantsPath, source)
}

async function main() {
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  const source = readFileSync(constantsPath, 'utf8')
  const projects = parseProjects(source)
  console.log(`Found ${projects.length} projects\n`)

  const imageMap = {}
  const manifest = []

  for (const { id, url } of projects) {
    process.stdout.write(`${id}… `)
    try {
      const imageUrl = await fetchOgImage(url)
      const dest = join(outDir, `${id}.webp`)
      const saved = await download(imageUrl, dest)
      const publicPath = `/projects/${id}${saved.endsWith('.jpg') ? '.jpg' : '.webp'}`
      imageMap[id] = publicPath
      manifest.push({ id, url, imageUrl, publicPath })
      console.log('ok')
    } catch (err) {
      console.log(`FAIL: ${err.message}`)
      manifest.push({ id, url, error: err.message })
    }
    await new Promise((r) => setTimeout(r, 400))
  }

  writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
  updateConstants(imageMap)
  console.log(`\nDone. ${Object.keys(imageMap).length}/${projects.length} images saved to public/projects/`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
