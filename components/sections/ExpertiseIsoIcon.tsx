import type { ReactElement } from 'react';

type ExpertiseIconId = 'product-ui' | 'design-systems' | 'prototyping' | 'handoff';

const STROKE = 'rgba(255,255,255,0.24)';
const FILL_TOP = 'rgba(18,18,18,0.98)';
const FILL_LEFT = 'rgba(11,11,11,0.98)';
const FILL_RIGHT = 'rgba(14,14,14,0.98)';
const ACCENT_CLASS = 'exp-iso-accent';

function faces(cx: number, cy: number, w: number, h: number, d: number) {
  return {
    top: `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`,
    left: `${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx - w},${cy + d}`,
    right: `${cx + w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx + w},${cy + d}`,
  };
}

function IsoPlate({
  cx,
  cy,
  w,
  h,
  d,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  d: number;
}) {
  const f = faces(cx, cy, w, h, d);
  return (
    <g>
      <polygon points={f.left} fill={FILL_LEFT} stroke={STROKE} strokeWidth={0.75} />
      <polygon points={f.right} fill={FILL_RIGHT} stroke={STROKE} strokeWidth={0.75} />
      <polygon points={f.top} fill={FILL_TOP} stroke={STROKE} strokeWidth={0.75} />
    </g>
  );
}

function ProductUiIcon() {
  return (
    <g>
      <IsoPlate cx={40} cy={34} w={22} h={11} d={8} />
      <IsoPlate cx={58} cy={22} w={14} h={7} d={5} />
      <rect x="28" y="30" width="22" height="2" fill="rgba(255,255,255,0.12)" />
      <rect x="28" y="35" width="16" height="2" fill="rgba(255,255,255,0.08)" />
      <rect x="28" y="40" width="19" height="2" fill="rgba(255,255,255,0.08)" />
      <circle cx="48" cy="18" r="2" className={ACCENT_CLASS} fill="var(--accent-mid)" />
      <path d="M48 20 L48 26" className={ACCENT_CLASS} stroke="var(--accent-mid)" strokeWidth={0.75} />
    </g>
  );
}

function DesignSystemsIcon() {
  const tiles = [
    [24, 22],
    [40, 22],
    [56, 22],
    [24, 36],
    [40, 36],
    [56, 36],
  ];
  return (
    <g>
      {tiles.map(([x, y], i) => (
        <IsoPlate key={i} cx={x} cy={y} w={7} h={3.5} d={3} />
      ))}
      <line
        x1="18"
        y1="48"
        x2="62"
        y2="48"
        className={ACCENT_CLASS}
        stroke="var(--accent-mid)"
        strokeWidth={0.75}
        strokeDasharray="2 3"
      />
      <rect x="20" y="50" width="8" height="2" className={ACCENT_CLASS} fill="var(--accent-mid)" />
      <rect x="32" y="50" width="8" height="2" fill="rgba(255,255,255,0.15)" />
      <rect x="44" y="50" width="8" height="2" fill="rgba(255,255,255,0.15)" />
    </g>
  );
}

function PrototypingIcon() {
  return (
    <g>
      <IsoPlate cx={40} cy={30} w={24} h={12} d={7} />
      <rect
        x="26"
        y="24"
        width="28"
        height="14"
        fill="none"
        className={ACCENT_CLASS}
        stroke="var(--accent-mid)"
        strokeWidth={0.75}
        strokeDasharray="3 3"
      />
      <polygon points="52,38 58,34 58,42" className={ACCENT_CLASS} fill="var(--accent-mid)" />
      <circle cx="34" cy="28" r="2.5" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={0.75} />
      <path d="M30 34 L38 34 M30 37 L42 37" stroke="rgba(255,255,255,0.2)" strokeWidth={0.75} />
    </g>
  );
}

function HandoffIcon({ markerId }: { markerId: string }) {
  return (
    <g>
      <IsoPlate cx={34} cy={32} w={16} h={8} d={6} />
      <IsoPlate cx={52} cy={32} w={16} h={8} d={6} />
      <path
        d="M46 32 L50 32"
        className={ACCENT_CLASS}
        stroke="var(--accent-mid)"
        strokeWidth={0.75}
        markerEnd={`url(#${markerId})`}
      />
      <text x="28" y="28" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">
        {'{ }'}
      </text>
      <rect x="48" y="26" width="10" height="1.5" fill="rgba(255,255,255,0.15)" />
      <rect x="48" y="29" width="7" height="1.5" fill="rgba(255,255,255,0.1)" />
    </g>
  );
}

const icons: Record<ExpertiseIconId, (props: { markerId: string }) => ReactElement> = {
  'product-ui': () => <ProductUiIcon />,
  'design-systems': () => <DesignSystemsIcon />,
  prototyping: () => <PrototypingIcon />,
  handoff: HandoffIcon,
};

export default function ExpertiseIsoIcon({ id }: { id: ExpertiseIconId }) {
  const Icon = icons[id];
  const markerId = `exp-arrow-${id}`;

  return (
    <div className="frame-nested relative mb-5 aspect-square w-full overflow-hidden border">
      <svg viewBox="0 0 80 80" className="relative h-full w-full p-3" aria-hidden>
        <defs>
          <marker id={markerId} viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" className={ACCENT_CLASS} fill="var(--accent-mid)" />
          </marker>
        </defs>
        <g transform="translate(0, 6)">
          <Icon markerId={markerId} />
        </g>
      </svg>
    </div>
  );
}
