import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mediaQuery.matches)

    const handler = (event) => setReduced(event.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return reduced
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollHeight > 0 ? window.scrollY / scrollHeight : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

export function useElementScroll(elementRef, offset = ['start start', 'end end']) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const update = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      const start = offset[0] === 'start start' ? 0 : 1
      const end = offset[1] === 'end end' ? 1 : 0

      const beforeTop = -rect.top
      const afterBottom = rect.bottom - windowHeight
      const totalScroll = rect.height + windowHeight

      if (beforeTop >= totalScroll) setProgress(1)
      else if (afterBottom >= totalScroll) setProgress(0)
      else setProgress(Math.max(0, Math.min(1, beforeTop / totalScroll)))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [elementRef, offset])

  return progress
}