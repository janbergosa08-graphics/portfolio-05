import { SocialIcon } from '@/components/SocialIcons';
import { contactDetails } from '@/lib/contact';
import { socialLinks } from '@/lib/content';

const connectLinks = socialLinks.filter((link) => link.id !== 'gmail');

export default function ContactGraphic() {
  return (
    <div className="mt-8 w-full max-w-none border border-line bg-panel lg:max-w-md">
      <div className="border-b border-line px-4 py-3">
        <p className="font-mono text-[9px] tracking-[0.16em] text-muted">ENGAGEMENT</p>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="border-b border-line px-4 py-4 md:border-r">
          <p className="font-mono text-[9px] tracking-wider text-muted">AVAILABILITY</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="accent-dot h-1.5 w-1.5 shrink-0" aria-hidden />
            <p className="text-sm font-medium text-ink">{contactDetails.availability}</p>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">{contactDetails.availabilityNote}</p>
        </div>

        <div className="border-b border-line px-4 py-4">
          <p className="font-mono text-[9px] tracking-wider text-muted">RESPONSE TIME</p>
          <p className="mt-2 text-sm font-medium text-ink">{contactDetails.responseTime}</p>
          <p className="mt-2 font-mono text-[10px] tracking-wider text-muted">{contactDetails.hours}</p>
        </div>
      </div>

      <div className="px-4 py-4">
        <p className="font-mono text-[9px] tracking-wider text-muted">CONNECT</p>
        <ul className="mt-3 grid gap-px border border-line bg-line md:grid-cols-2">
          {connectLinks.map((link) => (
            <li key={link.id} className="bg-panel">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label}: ${link.username}`}
                className="group flex min-h-11 items-center gap-2.5 px-3 text-sm text-ink transition-colors hover:bg-canvas hover:text-accent"
              >
                <span className="text-muted transition-colors group-hover:text-accent">
                  <SocialIcon id={link.id} />
                </span>
                <span className="min-w-0">
                  <span className="block leading-none">{link.label}</span>
                  <span className="mt-1 block truncate font-mono text-[10px] tracking-wider text-muted">
                    @{link.username.replace(/^@/, '')}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
