'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import { faqs } from '@/lib/content';

const graphicCards = [
  { id: '01', label: 'Product UX' },
  { id: '02', label: 'Systems' },
  { id: '03', label: 'Research' },
  { id: '04', label: 'Handoff' },
] as const;

function FaqCardGraphic() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % graphicCards.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <div className="relative mt-8 w-full max-w-sm" aria-hidden>
      <div className="absolute -inset-x-2 -inset-y-3 border border-line/70" />
      <div className="relative overflow-hidden border border-line bg-panel">
        <div className="flex items-center justify-between border-b border-line px-3 py-2">
          <span className="font-mono text-[9px] tracking-[0.16em] text-muted">FAQ · FOCUS STACK</span>
          <span className="font-mono text-[9px] tracking-[0.14em] text-muted">
            {graphicCards[active].id}
          </span>
        </div>

        <div className="relative h-44 px-3 py-4">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative mx-auto h-full w-[88%]">
            {graphicCards.map((card, index) => {
              const offset = (index - active + graphicCards.length) % graphicCards.length;
              const isFront = offset === 0;
              const depth = Math.min(offset, 3);

              return (
                <motion.div
                  key={card.id}
                  className="absolute inset-x-0 top-4 border border-line bg-panel px-3 py-3"
                  animate={
                    reduced
                      ? { y: depth * 10, scale: 1 - depth * 0.04, opacity: 1, zIndex: graphicCards.length - depth }
                      : {
                          y: depth * 10,
                          scale: 1 - depth * 0.04,
                          opacity: 1,
                          zIndex: graphicCards.length - depth,
                        }
                  }
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] tracking-[0.16em] text-muted">ID · {card.id}</span>
                    <span className={`font-mono text-[9px] tracking-[0.14em] ${isFront ? 'text-ink' : 'text-muted/60'}`}>
                      {isFront ? 'FOCUS' : 'READY'}
                    </span>
                  </div>
                  <p className={`mt-3 text-sm tracking-tight ${isFront ? 'text-ink' : 'text-muted/70'}`}>
                    {card.label}
                  </p>
                  <div className="mt-3 h-px w-full bg-line" />
                  <div className="mt-3 flex gap-1.5">
                    <span className="h-1 w-8 bg-ink/20" />
                    <span className={`h-1 w-5 ${isFront ? 'bg-ink/40' : 'bg-ink/15'}`} />
                    <span className="h-1 w-6 bg-ink/10" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-line px-3 py-2">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={graphicCards[active].id}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[9px] tracking-[0.14em] text-muted"
            >
              CARD {graphicCards[active].id} · {graphicCards[active].label.toUpperCase()}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (open === null) return;
    const node = itemRefs.current[open];
    if (!node || !listRef.current) return;

    const frame = listRef.current;
    const top = node.offsetTop - frame.offsetTop;
    const bottom = top + node.offsetHeight;
    const viewTop = frame.scrollTop;
    const viewBottom = viewTop + frame.clientHeight;

    if (top < viewTop) {
      frame.scrollTo({ top, behavior: 'smooth' });
    } else if (bottom > viewBottom) {
      frame.scrollTo({ top: Math.max(0, bottom - frame.clientHeight), behavior: 'smooth' });
    }
  }, [open]);

  return (
    <section id="faq" className="border-b border-line">
      <div className="grid w-full lg:grid-cols-2 lg:items-start">
        <div className="section-pad border-b border-line lg:border-b-0 lg:border-r">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">FAQ</p>
            <h2 className="section-heading-lg mt-3 max-w-md text-left font-semibold">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-md text-left text-sm leading-relaxed text-muted">
              Expand a question for detail. Scroll inside the list to keep other topics reachable.
            </p>
            <FaqCardGraphic />
          </Reveal>
        </div>

        <div
          ref={listRef}
          className="faq-scroll max-h-[min(28rem,70vh)] overflow-y-auto overscroll-contain lg:max-h-[min(36rem,75vh)]"
          role="region"
          aria-label="FAQ list"
        >
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="border-b border-line last:border-b-0"
              >
                <button
                  type="button"
                  className="flex min-h-14 w-full items-start justify-between gap-3 px-[var(--section-x)] py-4 text-left sm:gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-ink md:text-base">
                    {item.q}
                  </span>
                  <span
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line font-mono text-xs text-muted"
                    aria-hidden
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className="border-t border-line px-[var(--section-x)] pb-5 pt-4"
                  >
                    <p className="text-sm leading-relaxed text-muted">{item.a}</p>

                    {item.points?.length ? (
                      <ul className="mt-4 border border-line">
                        {item.points.map((point) => (
                          <li
                            key={point.label}
                            className="grid gap-1 border-b border-line px-3 py-3 last:border-b-0 md:grid-cols-[9rem_1fr] md:gap-4"
                          >
                            <span className="font-mono text-[10px] tracking-wider text-accent">
                              {point.label}
                            </span>
                            <span className="text-sm text-muted">{point.sub}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {item.note ? (
                      <p className="mt-4 border-l border-accent pl-3 text-xs leading-relaxed text-muted">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
