import App from './App'
import Legal from './pages/Legal'
import Documentation from './pages/Documentation'

function getStandaloneRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/legal') return 'legal'
  if (path === '/docs') return 'docs'
  return null
}

export default function Root() {
  const route = getStandaloneRoute()
  if (route === 'legal') return <Legal />
  if (route === 'docs') return <Documentation />
  return <App />
}
