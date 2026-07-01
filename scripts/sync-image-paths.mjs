import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(readFileSync(join(root, 'public/projects/manifest.json'), 'utf8'))
const constantsPath = join(root, 'src/data/constants.js')
let src = readFileSync(constantsPath, 'utf8')

for (const { id, publicPath } of manifest) {
  const re = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')[^']+(')`)
  if (!re.test(src)) {
    console.warn('missing id in constants:', id)
    continue
  }
  src = src.replace(re, `$1${publicPath}$2`)
}

writeFileSync(constantsPath, src)
console.log(`Synced ${manifest.length} image paths from manifest.json`)
