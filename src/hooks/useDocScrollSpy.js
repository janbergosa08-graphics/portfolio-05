import { useCallback, useEffect, useRef, useState } from 'react'

export function useDocScrollSpy(sectionIds, { reducedMotion = false } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const navListRef = useRef(null)
  const activeRef = useRef(sectionIds[0] ?? '')
  const rafRef = useRef(0)

  useEffect(() => {
    if (!sectionIds.length) return undefined

    const offset = 112
    const measureActive = () => {
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.height < 4) continue
        if (rect.top <= offset) current = id
      }
      return current
    }

    const commit = () => {
      rafRef.current = 0
      const next = measureActive()
      if (!next || next === activeRef.current) return
      activeRef.current = next
      setActiveId(next)
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
  }, [sectionIds])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash || !sectionIds.includes(hash)) return undefined

    const target = document.getElementById(hash)
    if (!target) return undefined

    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
      setActiveId(hash)
    }, 0)

    return () => window.clearTimeout(timer)
  }, [reducedMotion, sectionIds])

  useEffect(() => {
    const activeLink = navListRef.current?.querySelector('.doc-nav-link.is-active')
    if (!activeLink) return undefined

    const navList = navListRef.current
    if (!navList) return undefined

    if (navList.scrollWidth <= navList.clientWidth + 2) return undefined

    const centeredLeft =
      activeLink.offsetLeft - navList.clientWidth / 2 + activeLink.clientWidth / 2

    navList.scrollTo({
      left: Math.max(0, centeredLeft),
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }, [activeId, reducedMotion])

  const scrollToSection = useCallback(
    (id) => {
      const target = document.getElementById(id)
      if (!target) return

      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
      setActiveId(id)
      window.history.replaceState(null, '', `#${id}`)
    },
    [reducedMotion],
  )

  return { activeId, navListRef, scrollToSection }
}
