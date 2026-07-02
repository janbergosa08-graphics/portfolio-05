import { useEffect, useRef, useState } from 'react'

const SECTION_IDS = [
  'hero',
  'expertise',
  'workflow',
  'featured',
  'process',
  'approach',
  'faq',
  'contact',
]

/** Nav height + breathing room — section top past this line becomes active */
const SECTION_OFFSET = 112

/**
 * Tracks which page section is active for nav highlighting.
 * Geometry-based (not IntersectionObserver ratios) for accurate, low-latency updates.
 */
export function useScrollSpy({ heroScrollMax = 120, pinnedSection = null } = {}) {
  const [activeSection, setActiveSection] = useState('hero')
  const activeRef = useRef('hero')
  const rafRef = useRef(0)

  useEffect(() => {
    const measureActive = () => {
      if (window.scrollY < heroScrollMax) {
        return 'hero'
      }

      let current = 'hero'

      for (const id of SECTION_IDS) {
        if (id === 'hero') continue
        const el = document.getElementById(id)
        if (!el) continue

        const { top, height } = el.getBoundingClientRect()
        if (height < 4) continue

        if (top <= SECTION_OFFSET) {
          current = id
        }
      }

      return current
    }

    const commit = () => {
      rafRef.current = 0
      const next = measureActive()
      if (next === activeRef.current) return
      activeRef.current = next
      setActiveSection(next)
    }

    const schedule = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(commit)
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    commit()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [heroScrollMax])

  return pinnedSection ?? activeSection
}

export { SECTION_IDS }
