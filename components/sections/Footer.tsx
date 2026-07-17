import Link from 'next/link';
import { footerNavLinks, resourceLinks, site } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = footerNavLinks;

  return (
    <footer className="border-b border-line">
      <div className="w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="frame-highlight section-pad border-b border-line sm:border-r lg:border-b-0">
            <a href="#hero" className="inline-flex items-center" aria-label={site.name}>
              <img src="/logo.svg" alt="" width={28} height={32} className="h-8 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.tagline}</p>
          </div>

          <div className="frame-highlight section-pad border-b border-line sm:border-r lg:border-b-0">
            <p className="font-mono text-[10px] tracking-wider text-muted">NAVIGATION</p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex min-h-8 items-center text-sm text-muted hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="frame-highlight section-pad sm:col-span-2 lg:col-span-1 lg:border-b-0">
            <p className="font-mono text-[10px] tracking-wider text-muted">RESOURCES</p>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-8 items-center text-sm text-muted hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ) : 'download' in link && link.download ? (
                    <a
                      href={link.href}
                      download={link.download}
                      className="inline-flex min-h-8 items-center text-sm text-muted hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="inline-flex min-h-8 items-center text-sm text-muted hover:text-accent">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between shell-x">
          <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              © {year} {site.fullName}. All rights reserved.
            </span>
            <span className="inline-flex gap-3">
              <Link href="/legal" className="hover:text-accent">
                Legal
              </Link>
              <Link href="/docs" className="hover:text-accent">
                Docs
              </Link>
            </span>
          </span>
          <span>Built with intention</span>
        </div>
      </div>
    </footer>
  );
}
