'use client';

import { useReducedMotion } from 'framer-motion';
import { useState } from 'react';

type NodeId =
  | 'designing'
  | 'solutions'
  | 'experiences'
  | 'products'
  | 'research'
  | 'ui'
  | 'systems'
  | 'problems';

type NodeDef = {
  id: NodeId;
  label: string;
  level: 'primary' | 'accent' | 'secondary' | 'outcome';
  hint: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  size: 'sm' | 'md' | 'lg';
};

/** Box center + label anchors (shared with connectors) */
const nodes: NodeDef[] = [
  {
    id: 'research',
    label: 'RESEARCH',
    level: 'secondary',
    hint: 'From the description — user insight',
    x: 22,
    y: 36,
    labelX: 22,
    labelY: 26,
    size: 'sm',
  },
  {
    id: 'ui',
    label: 'INTERFACE',
    level: 'secondary',
    hint: 'From the description — UI craft',
    x: 18,
    y: 50,
    labelX: 18,
    labelY: 40,
    size: 'sm',
  },
  {
    id: 'systems',
    label: 'SYSTEMS',
    level: 'secondary',
    hint: 'From the description — design systems',
    x: 24,
    y: 64,
    labelX: 24,
    labelY: 54,
    size: 'sm',
  },
  {
    id: 'designing',
    label: 'DESIGNING',
    level: 'primary',
    hint: 'Hero headline — the craft at the center',
    x: 50,
    y: 44,
    labelX: 50,
    labelY: 32,
    size: 'lg',
  },
  {
    id: 'solutions',
    label: 'SOLUTIONS',
    level: 'accent',
    hint: 'Rotating word — product outcomes',
    x: 76,
    y: 30,
    labelX: 76,
    labelY: 20,
    size: 'md',
  },
  {
    id: 'experiences',
    label: 'EXPERIENCES',
    level: 'accent',
    hint: 'Rotating word — user journeys',
    x: 80,
    y: 48,
    labelX: 80,
    labelY: 38,
    size: 'md',
  },
  {
    id: 'products',
    label: 'PRODUCTS',
    level: 'accent',
    hint: 'Rotating word — shipped interfaces',
    x: 74,
    y: 64,
    labelX: 74,
    labelY: 74,
    size: 'md',
  },
  {
    id: 'problems',
    label: 'REAL PROBLEMS',
    level: 'outcome',
    hint: 'Headline close — measurable impact',
    x: 50,
    y: 70,
    labelX: 50,
    labelY: 82,
    size: 'md',
  },
];

const edges: [NodeId, NodeId][] = [
  ['research', 'designing'],
  ['ui', 'designing'],
  ['systems', 'designing'],
  ['designing', 'solutions'],
  ['designing', 'experiences'],
  ['designing', 'products'],
  ['designing', 'problems'],
];

/** Approximate visual radius of each box size in % of stage (for line end trim) */
const RADIUS: Record<'sm' | 'md' | 'lg', number> = {
  sm: 6,
  md: 7.5,
  lg: 10,
};

const LINE = 'rgba(255,255,255,0.2)';
const LINE_HOVER = '#a78bfa';
const BORDER = 'rgba(255,255,255,0.2)';
const BORDER_HOVER = '#a78bfa';

const FILL_TOP = 'rgba(15,15,15,0.98)';
const FILL_LEFT = 'rgba(10,10,10,0.98)';
const FILL_RIGHT = 'rgba(12,12,12,0.98)';

const FILL_TOP_ACTIVE = 'rgba(129, 140, 248, 0.28)';
const FILL_LEFT_ACTIVE = 'rgba(103, 232, 249, 0.14)';
const FILL_RIGHT_ACTIVE = 'rgba(232, 121, 249, 0.14)';

type BoxSpec = { w: number; h: number; d: number; viewW: number; viewH: number };

const BOX: Record<'sm' | 'md' | 'lg', BoxSpec> = {
  sm: { w: 30, h: 15, d: 11, viewW: 88, viewH: 58 },
  md: { w: 38, h: 19, d: 13, viewW: 108, viewH: 68 },
  lg: { w: 54, h: 27, d: 17, viewW: 148, viewH: 88 },
};

function boxFaces(spec: BoxSpec) {
  const { w, h, d, viewW } = spec;
  const cx = viewW / 2;
  const cy = h + 6;

  return {
    cx,
    cy,
    top: `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`,
    left: `${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx - w},${cy + d}`,
    right: `${cx + w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx + w},${cy + d}`,
  };
}

function levelKicker(level: NodeDef['level']) {
  if (level === 'primary') return '01 / HEADLINE';
  if (level === 'accent') return '02 / ROTATING FOCUS';
  if (level === 'outcome') return '04 / OUTCOME';
  return '03 / PROCESS';
}

function IsoBox({
  id,
  active,
  onEnter,
  onLeave,
  x,
  y,
  size,
}: {
  id: NodeId;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  x: number;
  y: number;
  size: 'sm' | 'md' | 'lg';
}) {
  const spec = BOX[size];
  const faces = boxFaces(spec);
  const stroke = active ? BORDER_HOVER : BORDER;
  const uid = `iso-${id}`;

  return (
    <button
      type="button"
      aria-label={id}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`iso-box absolute -translate-x-1/2 -translate-y-1/2 ${active ? 'iso-box--glow z-[6]' : 'z-[2]'}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <svg
        width={spec.viewW}
        height={spec.viewH + spec.d}
        viewBox={`0 0 ${spec.viewW} ${spec.viewH + spec.d}`}
        className="block overflow-visible"
        aria-hidden
      >
        <defs>
          <filter id={`${uid}-glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation={active ? 3.5 : 0} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter={active ? `url(#${uid}-glow)` : undefined}>
          {/* Back-to-front: left wall, right wall, top cap — shared edges align */}
          <polygon
            points={faces.left}
            fill={active ? FILL_LEFT_ACTIVE : FILL_LEFT}
            stroke={stroke}
            strokeWidth={1}
            strokeLinejoin="round"
            className="transition-[fill,stroke] duration-200"
          />
          <polygon
            points={faces.right}
            fill={active ? FILL_RIGHT_ACTIVE : FILL_RIGHT}
            stroke={stroke}
            strokeWidth={1}
            strokeLinejoin="round"
            className="transition-[fill,stroke] duration-200"
          />
          <polygon
            points={faces.top}
            fill={active ? FILL_TOP_ACTIVE : FILL_TOP}
            stroke={stroke}
            strokeWidth={1}
            strokeLinejoin="round"
            className="transition-[fill,stroke] duration-200"
          />
          {active ? (
            <line
              x1={faces.cx - spec.w * 0.35}
              y1={faces.cy - spec.h * 0.15}
              x2={faces.cx + spec.w * 0.35}
              y2={faces.cy - spec.h * 0.15}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth={1}
              strokeDasharray="3 4"
            />
          ) : null}
        </g>
      </svg>
    </button>
  );
}

export default function HeroIsoGraphic() {
  const [hovered, setHovered] = useState<NodeId | null>(null);
  const reduced = useReducedMotion();
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<NodeId, NodeDef>;
  const activeMeta = hovered ? byId[hovered] : null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Stage leaves room for the bottom helper bar */}
      <div className="absolute inset-x-4 inset-y-4 bottom-[3.75rem]" style={{ perspective: '1100px' }}>
        <div className="relative h-full w-full">
          {/* Floor grid — masked wrapper fades floor to transparent at the bottom;
              boxes, connectors, and labels are outside so they stay untouched */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              perspective: '1100px',
              maskImage: 'linear-gradient(to bottom, #fff 0%, #fff 55%, transparent 96%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #fff 0%, #fff 55%, transparent 96%)',
            }}
            aria-hidden
          >
            <div
              className="absolute left-1/2 top-[28%] h-[110%] w-[130%] -translate-x-1/2 border border-white/10"
              style={{
                transform: 'rotateX(58deg) rotateZ(-45deg) scale(1.45)',
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          {/* Connectors trimmed to box edges so they intersect cleanly */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
            <defs>
              <marker
                id="iso-arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.35)" />
              </marker>
              <marker
                id="iso-arrow-active"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#a78bfa" />
              </marker>
            </defs>
            {edges.map(([from, to]) => {
              const a = byId[from];
              const b = byId[to];
              const lit = hovered === from || hovered === to;
              const dx = b.x - a.x;
              const dy = b.y - a.y;
              const len = Math.hypot(dx, dy) || 1;
              const ux = dx / len;
              const uy = dy / len;
              const startPad = RADIUS[a.size];
              const endPad = RADIUS[b.size];
              const x1 = a.x + ux * startPad;
              const y1 = a.y + uy * startPad;
              const x2 = b.x - ux * endPad;
              const y2 = b.y - uy * endPad;

              return (
                <line
                  key={`${from}-${to}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={lit ? LINE_HOVER : LINE}
                  strokeWidth={lit ? 1.4 : 1}
                  strokeDasharray={lit ? undefined : '4 5'}
                  strokeLinecap="butt"
                  markerEnd={lit ? 'url(#iso-arrow-active)' : 'url(#iso-arrow)'}
                  className="transition-[stroke] duration-200"
                />
              );
            })}
          </svg>

          {nodes.map((node) => (
            <IsoBox
              key={node.id}
              id={node.id}
              x={node.x}
              y={node.y}
              size={node.size}
              active={hovered === node.id}
              onEnter={() => setHovered(node.id)}
              onLeave={() => setHovered(null)}
            />
          ))}

          {nodes.map((node, i) => {
            const isActive = hovered === node.id;
            return (
              <span
                key={`label-${node.id}`}
                className={`iso-label pointer-events-none absolute inline-flex -translate-x-1/2 -translate-y-1/2 border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.14em] whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'iso-label--active z-20 border-accent bg-panel text-ink'
                    : 'z-10 border-line bg-canvas/95 text-muted'
                } ${reduced ? '' : 'iso-float'}`}
                style={{
                  left: `${node.labelX}%`,
                  top: `${node.labelY}%`,
                  animationDelay: reduced ? undefined : `${i * 0.35}s`,
                }}
              >
                {node.label}
              </span>
            );
          })}
        </div>
      </div>

      {/* Text helper — replaces former DESIGN SYSTEM / name bar */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex min-h-14 items-center border-t border-line bg-canvas px-4 py-3 md:px-6">
        {activeMeta ? (
          <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-[9px] tracking-[0.16em] text-accent">
              {levelKicker(activeMeta.level)}
            </span>
            <span className="text-sm font-medium text-ink">{activeMeta.label}</span>
            <span className="text-xs text-muted">{activeMeta.hint}</span>
          </div>
        ) : (
          <p className="font-mono text-[10px] tracking-[0.14em] text-muted">
            HOVER A NODE · MAPS TO THE HEADLINE ON THE LEFT
          </p>
        )}
      </div>
    </div>
  );
}
