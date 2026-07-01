import { useState, useLayoutEffect, useRef } from 'react'

/**
 * Returns the index of the element with the greatest visible area in the viewport.
 * Fixes IntersectionObserver batch-only updates by tracking all targets in a map.
 */
export function useInViewActive(itemCount, options = {}) {
  const {
    rootMargin = '-30% 0px -30% 0px',
    threshold = [0, 0.1, 0.25, 0.5, 0.75, 1],
  } = options

  const [activeIndex, setActiveIndex] = useState(0)
  const [visibilityByIndex, setVisibilityByIndex] = useState(() =>
    Object.fromEntries(Array.from({ length: Math.max(itemCount, 0) }, (_, i) => [i, 0]))
  )
  const refs = useRef([])
  const visibility = useRef(new Map())

  const setRef = (index) => (el) => {
    refs.current[index] = el
  }

  useLayoutEffect(() => {
    if (itemCount <= 0) return undefined

    visibility.current = new Map(Array.from({ length: itemCount }, (_, i) => [i, 0]))

    const pickActive = () => {
      let bestIndex = 0
      let bestScore = 0

      visibility.current.forEach((ratio, index) => {
        const el = refs.current[index]
        if (!el || ratio <= 0) return

        const rect = el.getBoundingClientRect()
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        )
        const score = visibleHeight + ratio * 50

        if (score > bestScore) {
          bestScore = score
          bestIndex = index
        }
      })

      if (bestScore > 0) setActiveIndex(bestIndex)

      setVisibilityByIndex(
        Object.fromEntries(
          Array.from({ length: itemCount }, (_, i) => [i, visibility.current.get(i) ?? 0])
        )
      )
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.step, 10)
          if (Number.isNaN(index)) return
          visibility.current.set(index, entry.isIntersecting ? entry.intersectionRatio : 0)
        })
        pickActive()
      },
      { rootMargin, threshold }
    )

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    pickActive()

    return () => observer.disconnect()
  }, [itemCount, rootMargin])

  return { activeIndex, setRef, visibilityByIndex }
}
