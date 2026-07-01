import { useEffect, useState } from 'react'

/** True on viewports ≤768px — trim heavy motion/effects for mobile performance. */
export function useMobileLite() {
  const [mobileLite, setMobileLite] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const update = () => setMobileLite(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return mobileLite
}
