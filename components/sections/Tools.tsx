"use client";

import relumeLogo from "@/asset/relume.svg";
import lottieFilesLogo from "@/asset/LottieFiles.svg";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionEntrance } from "@/components/motion/SectionEntrance";
import {
  siFigma,
  siAdobephotoshop,
  siAdobeillustrator,
  siVisualstudiocode,
  siGithub,
  siTailwindcss,
  siWebflow,
  siSupabase,
  siVercel,
  siOpenai,
} from "simple-icons/icons";
import claudeIcon from "thesvg/claude";
import cursorIcon from "thesvg/cursor";
import figmaIcon from "thesvg/figma";

const relumeIcon = {
  src: typeof relumeLogo === "string" ? relumeLogo : relumeLogo.src,
};

const lottieFilesIcon = {
  src: typeof lottieFilesLogo === "string" ? lottieFilesLogo : lottieFilesLogo.src,
};

const TOOLS = [
  { id: "figma", label: "Figma", icon: siFigma },
  { id: "figjam", label: "Figma Jam", icon: figmaIcon },
  { id: "photoshop", label: "Adobe Photoshop", icon: siAdobephotoshop },
  { id: "illustrator", label: "Adobe Illustrator", icon: siAdobeillustrator },
  { id: "vscode", label: "VS Code", icon: siVisualstudiocode },
  { id: "github", label: "GitHub", icon: siGithub },
  { id: "tailwind", label: "Tailwind CSS", icon: siTailwindcss },
  { id: "webflow", label: "Webflow", icon: siWebflow },
  { id: "supabase", label: "Supabase", icon: siSupabase },
  { id: "vercel", label: "Vercel", icon: siVercel },
  { id: "claude", label: "Claude", icon: claudeIcon },
  { id: "codex", label: "OpenAI Codex", icon: siOpenai },
  { id: "cursor", label: "Cursor", icon: cursorIcon },
  { id: "copilot", label: "GitHub Copilot", icon: siGithub, initials: "GP" },
  { id: "relume", label: "Relume", icon: relumeIcon },
  { id: "lottiefiles", label: "LottieFiles", icon: lottieFilesIcon },
];

function BrandIcon({ icon, label, initials }: { icon?: any; label: string; initials?: string }) {
  if (icon && (icon.path || icon.svg || icon.src)) {
    if (icon.src) {
      return (
        <div
          className="theme-tool-icon flex h-8 w-8 items-center justify-center shrink-0"
        >
          <img
            src={icon.src}
            alt={label}
            className="theme-tool-image h-full w-full object-contain"
          />
        </div>
      );
    }

    const markup = typeof icon.svg === "string"
      ? icon.svg
          .replace(/fill="[^"]*"/g, 'fill="var(--color-ink)"')
          .replace(/stroke="[^"]*"/g, 'stroke="var(--color-ink)"')
          .replace(/stroke-width="[^"]*"/g, 'stroke-width="1.2"')
          .replace(/color="[^"]*"/g, 'color="var(--color-ink)"')
          .replace(/style="[^"]*"/g, 'style="fill: var(--color-ink); stroke: var(--color-ink); color: var(--color-ink);"')
          : `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="${label}" style="fill: var(--color-ink); stroke: var(--color-ink); color: var(--color-ink);"><title>${label}</title><path d="${icon.path}" fill="var(--color-ink)" stroke="var(--color-ink)" /></svg>`;

    const isFigmaJam = label === 'Figma Jam';

    return (
      <div
        className="theme-tool-icon flex h-8 w-8 items-center justify-center shrink-0"
        style={{
          color: 'var(--color-ink)',
          '--svg-color': 'var(--color-ink)'
        } as React.CSSProperties & { '--svg-color': string }}
      >
        <div
          aria-label={label}
          className="h-full w-full"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-ink)',
            transform: isFigmaJam ? 'scale(0.82)' : 'none',
            transformOrigin: 'center',
          }}
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      </div>
    );
  }

  const displayText = initials || label.charAt(0);
  return (
    <div className="flex h-8 w-8 items-center justify-center shrink-0 rounded-sm bg-accent-soft border border-line-strong">
      <span className="text-xs font-bold text-ink leading-none">{displayText}</span>
    </div>
  );
}

export default function Tools() {
  return (
    <SectionEntrance id="tools" className="border-b border-line">
      <div className="w-full">
        <div className="frame-highlight section-pad border-b border-line">
          <p className="font-mono text-[10px] tracking-[0.16em] text-accent">TOOLS I USE</p>
          <h2 className="section-heading-lg mt-3 font-semibold">Tools I Use to Build & Ship</h2>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <RevealItem
              key={tool.id}
              className="frame-highlight flex h-20 w-full flex-row items-center justify-center gap-2 border-b border-r border-line cell-pad sm:h-24 sm:gap-3 md:[&:nth-child(2n)]:border-r-0 lg:h-28 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <div className="flex shrink-0">
                <BrandIcon icon={tool.icon} label={tool.label} initials={tool.initials} />
              </div>
              <div className="flex min-w-0 items-center">
                <span className="tools-brand-label text-xs sm:text-sm font-medium leading-tight break-words">{tool.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
