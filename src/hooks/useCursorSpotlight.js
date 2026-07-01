import { useEffect } from 'react'

export function useCursorSpotlight(spotlightRef, disabled = false) {
  useEffect(() => {
    if (disabled) return

    const el = spotlightRef.current
    if (!el) return

    let mx = 0
    let my = 0
    let cx = 0
    let cy = 0
    let rafId = 0

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      cx += (mx - cx) * 0.06
      cy += (my - cy) * 0.06
      el.style.transform = `translate(${cx - 250}px, ${cy - 250}px)`
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [spotlightRef, disabled])
}
