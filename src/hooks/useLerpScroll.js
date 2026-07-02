import { useCallback, useEffect, useRef } from 'react'

const DEFAULT_LERP_FACTOR = 0.1
const DEFAULT_DELTA_MULTIPLIER = 0.75
const DEFAULT_SETTLE_THRESHOLD = 1.5
const DEFAULT_MAX_DURATION = 2400

export function useLerpScroll({
  enabled = true,
  lerpFactor = DEFAULT_LERP_FACTOR,
  deltaMultiplier = DEFAULT_DELTA_MULTIPLIER,
  settleThreshold = DEFAULT_SETTLE_THRESHOLD,
  maxDuration = DEFAULT_MAX_DURATION,
} = {}) {
  const rafRef = useRef(null)

  const stop = useCallback(() => {
    if (!rafRef.current) return
    cancelAnimationFrame(rafRef.current)
    rafRef.current = null
  }, [])

  const scrollToY = useCallback((targetY, { follow } = {}) => {
    if (typeof window === 'undefined') return

    const getTargetY = typeof targetY === 'function' ? targetY : () => targetY
    const clampedInitial = Math.max(0, getTargetY())

    if (!enabled) {
      stop()
      window.scrollTo({ top: clampedInitial, left: 0, behavior: 'auto' })
      return
    }

    stop()

    const startedAt = performance.now()
    let currentY = window.scrollY

    const tick = (now) => {
      const nextTarget = Math.max(0, getTargetY())
      const delta = nextTarget - currentY
      const weightedStep = delta * lerpFactor * deltaMultiplier
      currentY += weightedStep
      window.scrollTo({ top: currentY, left: 0, behavior: 'auto' })

      const timedOut = now - startedAt > maxDuration
      if (Math.abs(delta) <= settleThreshold || timedOut) {
        window.scrollTo({ top: nextTarget, left: 0, behavior: 'auto' })
        rafRef.current = null
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [deltaMultiplier, enabled, lerpFactor, maxDuration, settleThreshold, stop])

  const scrollToElement = useCallback((element, { offset = 0, follow = false } = {}) => {
    if (!element) return

    const getTargetY = () => window.scrollY + element.getBoundingClientRect().top + offset

    if (follow) {
      scrollToY(getTargetY, { follow: true })
      return
    }

    scrollToY(getTargetY())
  }, [scrollToY])

  useEffect(() => stop, [stop])

  return { scrollToY, scrollToElement, stop }
}
