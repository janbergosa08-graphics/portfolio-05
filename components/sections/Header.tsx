'use client';

import { useEffect, useState } from 'react';
import { navLinks, site } from '@/lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = 'hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#hero" className="font-medium tracking-tight text-ink">
          {site.name}
        </a>

        <nav className="hidden items-center gap-0 border border-line lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`border-r border-line px-3 py-2 text-xs last:border-r-0 ${
                active === link.href.slice(1) ? 'bg-accent-soft text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            className="hidden border border-line px-3 py-2 text-xs text-ink hover:border-accent hover:text-accent sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="border border-line px-3 py-2 text-xs text-muted hover:text-ink"
            aria-label={site.resume.label}
          >
            Resume
          </a>
          <button
            type="button"
            className="border border-line px-3 py-2 text-xs text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-canvas lg:hidden">
          <ul className="grid grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-r border-line">
                <a
                  href={link.href}
                  className="block px-4 py-3 text-sm text-muted hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
