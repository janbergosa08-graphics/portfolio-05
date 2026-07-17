import { navLinks, site } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = navLinks.filter((l) => l.href !== '#hero' && l.href !== '#contact');

  return (
    <footer className="border-b border-line">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3">
          <div className="border-b border-line px-4 py-8 md:border-b-0 md:border-r md:px-6">
            <p className="font-medium text-ink">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              UI/UX designer crafting strategic digital experiences that bridge user needs and business
              goals.
            </p>
          </div>
          <div className="border-b border-line px-4 py-8 md:border-b-0 md:border-r md:px-6">
            <p className="font-mono text-[10px] tracking-wider text-muted">NAVIGATION</p>
            <ul className="mt-3 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 py-8 md:px-6">
            <p className="font-mono text-[10px] tracking-wider text-muted">RESOURCES</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-accent">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/janbergosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href={site.resume.href}
                  download={site.resume.downloadName}
                  className="text-sm text-muted hover:text-accent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-line px-4 py-4 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <span>© {year} {site.name}. All rights reserved.</span>
          <span>Built with intention</span>
        </div>
      </div>
    </footer>
  );
}
