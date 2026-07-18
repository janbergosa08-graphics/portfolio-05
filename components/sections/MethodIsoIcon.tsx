import type { ReactElement } from 'react';
import { IsoPlate } from '@/components/graphics/IsoPlate';
import { ISO } from '@/lib/isoStyle';

export type MethodIconId =
  | 'discover'
  | 'define'
  | 'design'
  | 'validate'
  | 'build'
  | 'ship';

const { strokeGraphic: STROKE, accent: ACCENT, swPanel: SW, swGlyph: SWG } = ISO;

function GlyphDiscover() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={SWG} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" />
      <path d="M15.5 15.5 L20 20" />
    </g>
  );
}

function GlyphDefine() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={SWG} strokeLinecap="round">
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.5" />
    </g>
  );
}

function GlyphDesign() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={SWG} strokeLinejoin="round">
      <rect x="4" y="6" width="11" height="9" rx="1" />
      <rect x="9" y="9" width="11" height="9" rx="1" />
    </g>
  );
}

function GlyphValidate() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={SWG} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M8 12 L11 15 L16.5 9" />
    </g>
  );
}

function GlyphBuild() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={SWG} strokeLinejoin="round">
      <path d="M5 9 L9 5 L13 9 L9 13 Z" />
      <path d="M11 13 L15 9 L19 13 L15 17 Z" />
    </g>
  );
}

function GlyphShip() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={SWG} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 L17 14 L12 11.5 L7 14 Z" />
      <path d="M7 19 H17" />
    </g>
  );
}

const glyphs: Record<MethodIconId, () => ReactElement> = {
  discover: GlyphDiscover,
  define: GlyphDefine,
  design: GlyphDesign,
  validate: GlyphValidate,
  build: GlyphBuild,
  ship: GlyphShip,
};

/** Uniform solid badge — matches “UI” weight across all panels */
function Chip({ x, y, label }: { x: number; y: number; label: string }) {
  const w = Math.max(12, label.length * 2.7 + 5);
  const h = 5.5;
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={1}
        fill="#111111"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth={SW}
      />
      <text
        x={x}
        y={y + 0.25}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#ffffff"
        stroke="none"
        fontSize="3.1"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontWeight={600}
        letterSpacing="0.1em"
      >
        {label}
      </text>
    </g>
  );
}

function PanelDiscover() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <IsoPlate cx={46} cy={38} w={18} h={9} d={5} />
      <path d="M38 34 L50 32 L56 40" className="method-anim-flow" />
      <circle
        cx={38}
        cy={34}
        r={2}
        fill={ISO.accentSoft}
        stroke={ACCENT}
        className="method-anim-node"
      />
      <circle cx={50} cy={32} r={1.8} className="method-anim-node method-anim-node--delay" />
      <circle cx={56} cy={40} r={1.8} className="method-anim-node method-anim-node--delay-2" />
      <Chip x={68} y={22} label="MAP" />
    </g>
  );
}

function PanelDefine() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" fill="none">
      <IsoPlate cx={48} cy={40} w={15} h={7.5} d={4.5} />
      <circle cx={48} cy={36} r={6.5} stroke={STROKE} />
      <circle
        cx={48}
        cy={36}
        r={6.5}
        stroke={ACCENT}
        className="method-anim-wave"
      />
      <circle
        cx={48}
        cy={36}
        r={6.5}
        stroke={ACCENT}
        className="method-anim-wave method-anim-wave--delay"
      />
      <circle
        cx={48}
        cy={36}
        r={1.9}
        fill={ISO.accentSoft}
        stroke={ACCENT}
        className="method-anim-core"
      />
      <Chip x={70} y={24} label="GOAL" />
    </g>
  );
}

function PanelDesign() {
  return (
    <g>
      <IsoPlate cx={40} cy={42} w={12} h={6} d={4} />
      <g className="method-anim-layer">
        <IsoPlate cx={54} cy={30} w={11} h={5.5} d={3.5} accent />
      </g>
      <Chip x={28} y={48} label="BASE" />
      <Chip x={70} y={22} label="UI" />
    </g>
  );
}

function PanelValidate() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <IsoPlate cx={46} cy={40} w={16} h={8} d={4.5} />
      <path
        d="M40 38 L45 42.5 L55 32"
        stroke={ACCENT}
        className="method-anim-check"
      />
      <Chip x={68} y={24} label="PASS" />
    </g>
  );
}

function PanelBuild() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <IsoPlate cx={32} cy={40} w={11} h={5.5} d={4} />
      <IsoPlate cx={68} cy={40} w={11} h={5.5} d={4} />
      <g className="method-anim-arrow-x" stroke={ACCENT}>
        <path d="M42 40 H52" />
        <path d="M52 40 L49.5 37.5 M52 40 L49.5 42.5" />
      </g>
      <Chip x={32} y={24} label="UI" />
      <Chip x={68} y={24} label="ENG" />
    </g>
  );
}

function PanelShip() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <IsoPlate cx={48} cy={44} w={14} h={7} d={4} />
      <path
        d="M48 20 L53 32 L48 29 L43 32 Z"
        fill={ISO.accentSoft}
        stroke={ACCENT}
        className="method-anim-arrow-y"
      />
      <Chip x={70} y={26} label="LIVE" />
    </g>
  );
}

const panels: Record<MethodIconId, () => ReactElement> = {
  discover: PanelDiscover,
  define: PanelDefine,
  design: PanelDesign,
  validate: PanelValidate,
  build: PanelBuild,
  ship: PanelShip,
};

export function MethodGlyph({ id }: { id: MethodIconId }) {
  const Glyph = glyphs[id];
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-ink" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem]">
        <Glyph />
      </svg>
    </span>
  );
}

export function MethodPanel({ id }: { id: MethodIconId }) {
  const Panel = panels[id];
  return (
    <div className="method-panel aspect-[16/10] w-full overflow-hidden border border-line">
      <svg viewBox="0 0 100 68" className="block h-full w-full" aria-hidden>
        <Panel />
      </svg>
    </div>
  );
}

export default function MethodIsoIcon({ id }: { id: MethodIconId }) {
  return <MethodGlyph id={id} />;
}
