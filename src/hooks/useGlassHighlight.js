import { useEffect } from 'react'

export function useGlassHighlight() {
  useEffect(() => {
    const onMouseMove = (e) => {
      const el = e.target.closest('.glass')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--glass-mx', `${x}%`)
      el.style.setProperty('--glass-my', `${y}%`)
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])
}
