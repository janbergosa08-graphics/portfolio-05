import App from './App'
import Legal from './pages/Legal'
import Documentation from './pages/Documentation'
import CaseStudy from './pages/CaseStudy'

function getStandaloneRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/legal') return 'legal'
  if (path === '/docs') return 'docs'
  if (/^\/case-study\/[^/]+$/.test(path)) return 'case-study'
  return null
}

export default function Root() {
  const route = getStandaloneRoute()
  if (route === 'legal') return <Legal />
  if (route === 'docs') return <Documentation />
  if (route === 'case-study') return <CaseStudy />
  return <App />
}
