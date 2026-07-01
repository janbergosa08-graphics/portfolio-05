import { useState, useEffect } from 'react'

export function useIdleReady(timeout = 1500) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(() => setReady(true), { timeout })
      return () => window.cancelIdleCallback(id)
    }

    const timer = window.setTimeout(() => setReady(true), 200)
    return () => window.clearTimeout(timer)
  }, [timeout])

  return ready
}
