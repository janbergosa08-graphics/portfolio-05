"use client";

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
];

function BrandIcon({ icon, label, initials }: { icon?: any; label: string; initials?: string }) {
  if (icon && (icon.path || icon.svg)) {
    const markup = typeof icon.svg === "string"
      ? icon.svg
          .replace(/fill="[^"]+"/g, 'fill="currentColor"')
          .replace(/stroke="[^"]+"/g, 'stroke="currentColor"')
      : `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="${label}" class="h-full w-full" style="fill: currentColor"><title>${label}</title><path d="${icon.path}" fill="currentColor" /></svg>`;

    return (
      <div className="flex h-8 w-8 items-center justify-center shrink-0 text-white">
        <div
          aria-label={label}
          className="h-full w-full [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      </div>
    );
  }

  const displayText = initials || label.charAt(0);
  return (
    <div className="flex h-8 w-8 items-center justify-center shrink-0 rounded-sm bg-accent bg-opacity-15 border border-accent border-opacity-30">
      <span className="text-xs font-semibold text-accent leading-none">{displayText}</span>
    </div>
  );
}

export default function Tools() {
  return (
    <SectionEntrance id="tools" className="border-b border-line">
      <div className="w-full">
        <div className="border-b border-line">
          <div className="frame-highlight section-pad border-b border-line">
            <p className="font-mono text-[10px] tracking-[0.16em] text-accent">TOOLS I USE</p>
            <h2 className="section-heading-lg mt-3 font-semibold">Tools I Use to Build & Ship</h2>
          </div>
        </div>

        <RevealGroup className="grid grid-cols-2 gap-0 md:grid-cols-3">
          {TOOLS.map((tool) => (
            <RevealItem
              key={tool.id}
              className="frame-highlight flex h-28 w-full flex-row items-center gap-5 cell-pad border border-line"
            >
              <div className="flex shrink-0">
                <BrandIcon icon={tool.icon} label={tool.label} initials={tool.initials} />
              </div>
              <div className="flex min-w-0 items-center">
                <span className="text-sm font-medium leading-tight text-white break-words">{tool.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </SectionEntrance>
  );
}
