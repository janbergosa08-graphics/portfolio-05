export const PROCESS_STICKY_TOP = 168

/** Scroll progress for a card within a viewport focus band (0 = entering, 1 = leaving). */
export function getCardScrollProgress(el, options = {}) {
  if (!el) return 0

  const vh = window.innerHeight
  const focusTop = options.focusTop ?? vh * (options.focusTopRatio ?? 0.25)
  const focusBottom = options.focusBottom ?? vh * (options.focusBottomRatio ?? 0.75)
  const range = el.getBoundingClientRect().height + (focusBottom - focusTop)

  if (range <= 0) return 0

  const progress = (focusBottom - el.getBoundingClientRect().top) / range
  return Math.min(1, Math.max(0, progress))
}

/** Active step from fill values — card mid-scroll wins, else first incomplete. */
export function pickActiveIndexFromFills(fills) {
  for (let i = 0; i < fills.length; i += 1) {
    if (fills[i] > 0.03 && fills[i] < 0.97) return i
  }

  const lastComplete = fills.reduce((acc, fill, i) => (fill >= 0.97 ? i : acc), -1)
  if (lastComplete >= 0) {
    return Math.min(lastComplete + 1, fills.length - 1)
  }

  return 0
}

/** Sticky stack: highest-index card pinned at stickyTop is active. */
export function pickStickyActiveIndex(cardEls, stickyTop = 180, tolerance = 12) {
  let active = 0
  cardEls.forEach((el, i) => {
    if (!el) return
    if (el.getBoundingClientRect().top <= stickyTop + tolerance) {
      active = i
    }
  })
  return active
}

/** True when the process scroll zone tail is in view (final card segment). */
export function isProcessScrollZoneEnding(scrollZoneEl, thresholdPx = 80) {
  if (!scrollZoneEl) return false
  return scrollZoneEl.getBoundingClientRect().bottom <= window.innerHeight + thresholdPx
}

/**
 * Process stack active index — extends sticky pick for the last card, which often
 * cannot reach stickyTop before the scroll zone ends.
 */
export function pickProcessActiveIndex(
  cardEls,
  scrollZoneEl,
  stickyTop = PROCESS_STICKY_TOP,
  tolerance = 12
) {
  const last = cardEls.length - 1
  if (last <= 0) return pickStickyActiveIndex(cardEls, stickyTop, tolerance)

  const active = pickStickyActiveIndex(cardEls, stickyTop, tolerance)
  if (active !== last - 1) return active

  const lastEl = cardEls[last]
  if (!lastEl) return active

  const lastTop = lastEl.getBoundingClientRect().top
  const handoff = getStickyHandoffProgress(lastEl, stickyTop)
  const zoneEnding = isProcessScrollZoneEnding(scrollZoneEl)

  if (zoneEnding || handoff >= 0.85 || lastTop <= stickyTop + 80) {
    return last
  }

  return active
}

/** Resolve active index, float index, and line fills for the process stack. */
export function resolveProcessScrollState(cardEls, scrollZoneEl, stickyTop = PROCESS_STICKY_TOP) {
  const last = cardEls.length - 1
  let activeIndex = pickProcessActiveIndex(cardEls, scrollZoneEl, stickyTop)
  let floatIndex = getProcessFloatIndex(cardEls, activeIndex)

  if (last > 0 && Math.round(floatIndex) >= last) {
    activeIndex = last
    floatIndex = last
  }

  return {
    activeIndex,
    floatIndex,
    lineFills: getProcessLineFills(cardEls, floatIndex),
  }
}

/** Line fill between step i and i+1 (horizontal step progress). */
export function getHorizontalLineFills(cardProgress, activeIndex) {
  return cardProgress.map((progress, i) => {
    if (i >= cardProgress.length - 1) return 0
    if (i < activeIndex) return 1
    if (i > activeIndex) return 0
    return progress
  })
}

/**
 * Sticky stack handoff: 0 while next card is below, 1 when it reaches stickyTop.
 * Used for line fill between the active card and the one replacing it.
 */
export function getStickyHandoffProgress(nextEl, stickyTop = PROCESS_STICKY_TOP) {
  if (!nextEl) return 0

  const { top, height } = nextEl.getBoundingClientRect()
  if (top <= stickyTop) return 1

  const distance = top - stickyTop
  if (distance >= height) return 0

  return 1 - distance / height
}

/** Line fill between step i and i+1 — synced to stack float index. */
export function getProcessLineFills(cardEls, floatIndex) {
  const last = cardEls.length - 1
  const rounded = Math.round(floatIndex)

  return cardEls.map((_, i) => {
    if (i >= last) return 0
    if (rounded > i || floatIndex >= i + 1) return 1
    if (floatIndex <= i) return 0
    return floatIndex - i
  })
}

/** Continuous index for stacked card depth animations. */
export function getFloatIndex(cardProgress, activeIndex) {
  const partial =
    activeIndex < cardProgress.length - 1 ? cardProgress[activeIndex] : 0
  return Math.min(cardProgress.length - 1, activeIndex + partial)
}

/** Process stack float index from sticky handoff (not card scroll progress). */
export function getProcessFloatIndex(cardEls, activeIndex) {
  if (activeIndex >= cardEls.length - 1) return activeIndex
  return activeIndex + getStickyHandoffProgress(cardEls[activeIndex + 1], PROCESS_STICKY_TOP)
}

export function getProcessCardProgress(el) {
  const vh = window.innerHeight
  return getCardScrollProgress(el, {
    focusTop: PROCESS_STICKY_TOP,
    focusBottom: vh * 0.72,
  })
}
