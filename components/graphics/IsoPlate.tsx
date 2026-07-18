import { ISO } from '@/lib/isoStyle';

function faces(cx: number, cy: number, w: number, h: number, d: number) {
  return {
    top: `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`,
    left: `${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx - w},${cy + d}`,
    right: `${cx + w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx + w},${cy + d}`,
  };
}

type IsoPlateProps = {
  cx: number;
  cy: number;
  w: number;
  h: number;
  d: number;
  accent?: boolean;
  sw?: number;
};

/** Simple isometric block — soft fills + grid-weight rounded stroke */
export function IsoPlate({ cx, cy, w, h, d, accent = false, sw = ISO.swPanel }: IsoPlateProps) {
  const f = faces(cx, cy, w, h, d);
  const stroke = accent ? ISO.accent : ISO.strokeGraphic;

  return (
    <g
      stroke={stroke}
      strokeWidth={sw}
      strokeLinejoin="round"
      strokeLinecap="round"
      paintOrder="fill stroke"
    >
      <polygon
        points={f.left}
        fill={accent ? ISO.fillLeftAccent : ISO.fillLeft}
      />
      <polygon
        points={f.right}
        fill={accent ? ISO.fillRightAccent : ISO.fillRight}
      />
      <polygon
        points={f.top}
        fill={accent ? ISO.fillTopAccent : ISO.fillTop}
      />
    </g>
  );
}
