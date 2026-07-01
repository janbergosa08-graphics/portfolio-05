import { useEffect, useState } from 'react'

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

/**
 * Tracks which page section is active for nav highlighting.
 * Uses a visibility map across all sections (not just the current IO batch).
 */
export function useScrollSpy({ heroScrollMax = 120 } = {}) {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const visibility = new Map(SECTION_IDS.map((id) => [id, 0]))

    const pickActive = () => {
      if (window.scrollY < heroScrollMax) {
        setActiveSection('hero')
        return
      }

      let bestId = 'hero'
      let bestScore = 0

      visibility.forEach((ratio, id) => {
        const el = document.getElementById(id)
        if (!el || ratio <= 0) return

        const rect = el.getBoundingClientRect()
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        )
        const score = visibleHeight + ratio * 100

        if (score > bestScore) {
          bestScore = score
          bestId = id
        }
      })

      if (bestScore > 0) setActiveSection(bestId)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })
        pickActive()
      },
      {
        // Align active link when section crosses the upper-middle viewport band
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const onScroll = () => pickActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    pickActive()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [heroScrollMax])

  return activeSection
}
