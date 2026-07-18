import type { ReactElement } from 'react';
import { IsoPlate } from '@/components/graphics/IsoPlate';
import { ISO } from '@/lib/isoStyle';

type ExpertiseIconId = 'product-ui' | 'design-systems' | 'prototyping' | 'handoff';

const { strokeGraphic: STROKE, accent: ACCENT, swPanel: SW } = ISO;

function ProductUiIcon() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <IsoPlate cx={40} cy={36} w={22} h={11} d={7} />
      <path d="M28 32 H48 M28 37 H42" className="method-anim-flow" />
      <circle
        cx="52"
        cy="22"
        r="4.5"
        stroke={ACCENT}
        className="method-anim-wave"
      />
      <circle
        cx="52"
        cy="22"
        r="4.5"
        stroke={ACCENT}
        className="method-anim-wave method-anim-wave--delay"
      />
      <circle
        cx="52"
        cy="22"
        r="2.5"
        fill={ISO.accentSoft}
        stroke={ACCENT}
        className="method-anim-core"
      />
    </g>
  );
}

function DesignSystemsIcon() {
  /* All plates share one origin; CSS offsets park them on a 2×2 swap cycle */
  return (
    <g>
      <g className="method-anim-cube">
        <IsoPlate cx={30} cy={28} w={8} h={4} d={3} />
      </g>
      <g className="method-anim-cube method-anim-cube--d1">
        <IsoPlate cx={30} cy={28} w={8} h={4} d={3} />
      </g>
      <g className="method-anim-cube method-anim-cube--d2">
        <IsoPlate cx={30} cy={28} w={8} h={4} d={3} />
      </g>
      <g className="method-anim-cube method-anim-cube--d3">
        <IsoPlate cx={30} cy={28} w={8} h={4} d={3} accent />
      </g>
    </g>
  );
}

function PrototypingIcon() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <IsoPlate cx={40} cy={34} w={22} h={11} d={6} />
      <path
        d="M48 30 L54 34 L48 38 Z"
        fill={ISO.accentSoft}
        stroke={ACCENT}
        className="method-anim-arrow-x"
      />
    </g>
  );
}

function HandoffIcon() {
  return (
    <g stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <IsoPlate cx={30} cy={34} w={14} h={7} d={5} />
      <IsoPlate cx={56} cy={34} w={14} h={7} d={5} />
      <g className="method-anim-arrow-x" stroke={ACCENT}>
        <path d="M40 34 H46" />
        <path d="M46 34 L43.5 31.5 M46 34 L43.5 36.5" />
      </g>
    </g>
  );
}

const icons: Record<ExpertiseIconId, () => ReactElement> = {
  'product-ui': ProductUiIcon,
  'design-systems': DesignSystemsIcon,
  prototyping: PrototypingIcon,
  handoff: HandoffIcon,
};

export default function ExpertiseIsoIcon({ id }: { id: ExpertiseIconId }) {
  const Icon = icons[id];

  return (
    <div className="method-panel aspect-[16/10] w-full overflow-hidden border border-line">
      <svg viewBox="0 0 80 68" className="h-full w-full" aria-hidden>
        <Icon />
      </svg>
    </div>
  );
}
