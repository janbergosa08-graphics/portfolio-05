'use client';

import { useEffect, useId, useState } from 'react';

type MermaidDiagramProps = {
  definition: string;
  summary: string;
};

export default function MermaidDiagram({ definition, summary }: MermaidDiagramProps) {
  const rawId = useId();
  const diagramId = `mermaid-${rawId.replace(/:/g, '')}`;
  const [markup, setMarkup] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        const isLight = document.documentElement.dataset.theme === 'light';
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          themeVariables: {
            background: 'transparent',
            primaryColor: isLight ? '#eef2e9' : '#171a17',
            primaryTextColor: isLight ? '#162018' : '#ffffff',
            primaryBorderColor: isLight ? '#718276' : '#778277',
            lineColor: isLight ? '#5b6b5e' : '#a1aaa1',
            secondaryColor: isLight ? '#f7f8f4' : '#0f0f0f',
            tertiaryColor: isLight ? '#e3eadf' : '#111511',
            fontFamily: 'var(--font-geist-sans), ui-sans-serif, sans-serif',
          },
        });
        const result = await mermaid.render(diagramId, definition);
        if (!cancelled) {
          setMarkup(result.svg);
          setFailed(false);
        }
      } catch {
        if (!cancelled) {
          setMarkup('');
          setFailed(true);
        }
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [definition, diagramId]);

  return (
    <figure className="mt-6 border border-line bg-panel/40 p-3 sm:p-4">
      <div
        className="mermaid-diagram overflow-x-auto"
        aria-label={summary}
        dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
      />
      {!markup && !failed ? <p className="mermaid-fallback text-sm text-muted">Preparing process map...</p> : null}
      {failed ? <p className="mermaid-fallback text-sm text-muted">{summary}</p> : null}
      <figcaption className="mt-3 border-t border-line pt-3 text-sm leading-relaxed text-muted">
        <span className="font-mono text-[10px] tracking-[0.16em] text-accent">PROCESS MAP</span>
        <span className="mt-1 block">{summary}</span>
      </figcaption>
    </figure>
  );
}
