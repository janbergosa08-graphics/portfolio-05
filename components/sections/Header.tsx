'use client';

import { useEffect, useState } from 'react';
import { useContactModal } from '@/components/contact/ContactProvider';
import { navLinks, site } from '@/lib/content';

const navControlClass =
  'inline-flex h-9 items-center justify-center border border-line px-3.5 text-xs leading-none';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const { openContactModal } = useContactModal();

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

  const handleOpenContact = () => {
    setOpen(false);
    openContactModal();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <div className="flex h-14 w-full items-center justify-between gap-2 sm:gap-3 shell-x">
        <a href="#hero" className="inline-flex shrink-0 items-center" aria-label={site.name}>
          <img src="/logo.svg" alt="" width={28} height={32} className="h-8 w-auto" />
        </a>

        <nav className="hidden h-9 items-stretch border border-line lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`inline-flex h-full items-center justify-center border-r border-line px-3.5 text-xs leading-none last:border-r-0 ${
                active === link.href.slice(1)
                  ? 'nav-link--active text-ink'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex h-9 shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={openContactModal}
            className={`${navControlClass} hidden text-ink hover:border-accent hover:text-ink sm:inline-flex`}
          >
            Let&apos;s talk
          </button>
          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className={`${navControlClass} text-muted hover:text-ink`}
            aria-label={site.resume.label}
          >
            Resume
          </a>
          <button
            type="button"
            className={`${navControlClass} text-ink lg:hidden`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
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
                  className={`flex h-11 items-center px-4 text-sm ${
                    active === link.href.slice(1)
                      ? 'nav-link--active text-ink'
                      : 'text-muted hover:text-ink'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-b border-r border-line">
              <button
                type="button"
                className="flex h-11 w-full items-center px-4 text-left text-sm text-muted hover:text-ink"
                onClick={handleOpenContact}
              >
                Let&apos;s talk
              </button>
            </li>
            <li className="border-b border-r border-line">
              <a
                href="/legal"
                className="flex h-11 items-center px-4 text-sm text-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                Legal
              </a>
            </li>
            <li className="border-b border-line">
              <a
                href="/docs"
                className="flex h-11 items-center px-4 text-sm text-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                Documents
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
