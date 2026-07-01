import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

const html = readFileSync(join(tmpdir(), 'behance-profile.html'), 'utf8')
const match = html.match(/id="beconfig-store_state">([\s\S]*?)<\/script>/)
const state = JSON.parse(match[1])

function findServices(obj, found = []) {
  if (!obj || typeof obj !== 'object') return found
  if (Array.isArray(obj)) {
    for (const item of obj) findServices(item, found)
    return found
  }
  if (obj.title && (obj.price !== undefined || obj.startingPrice !== undefined || obj.serviceType)) {
    found.push(obj)
  }
  if (obj.name && obj.cover && /poster|logo|infographic|digital art|ui\/ux/i.test(obj.name || obj.title || '')) {
    found.push(obj)
  }
  for (const v of Object.values(obj)) findServices(v, found)
  return found
}

const services = findServices(state)
writeFileSync('scripts/behance-services.json', JSON.stringify(services, null, 2))
console.log('services found:', services.length)
for (const s of services.slice(0, 10)) {
  console.log('-', s.title || s.name, s.id || '')
}
