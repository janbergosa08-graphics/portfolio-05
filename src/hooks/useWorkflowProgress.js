import { useState, useLayoutEffect, useRef, useCallback } from 'react'
import {
  getCardScrollProgress,
  pickActiveIndexFromFills,
} from '../utils/scrollProgress'

function getNavBarFills(cardProgress, activeIndex) {
  return cardProgress.map((progress, index) => {
    if (index < activeIndex) return 1
    if (index > activeIndex) return 0
    return progress
  })
}

export function useWorkflowProgress(itemCount) {
  const [stepFills, setStepFills] = useState(() => Array(Math.max(itemCount, 0)).fill(0))
  const [activeIndex, setActiveIndex] = useState(0)
  const refs = useRef([])
  const rafId = useRef(0)

  const setRef = useCallback(
    (index) => (el) => {
      refs.current[index] = el
    },
    []
  )

  useLayoutEffect(() => {
    if (itemCount <= 0) return undefined

    const update = () => {
      const cardProgress = Array.from({ length: itemCount }, (_, i) =>
        getCardScrollProgress(refs.current[i])
      )
      const nextActive = pickActiveIndexFromFills(cardProgress)
      setStepFills(getNavBarFills(cardProgress, nextActive))
      setActiveIndex(nextActive)
    }

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [itemCount])

  return { setRef, stepFills, activeIndex }
}
