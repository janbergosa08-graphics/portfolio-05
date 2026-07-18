'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Field = { label: string; value: string };
type ListItem = { label?: string; text: string };
type Block = { label?: string; title: string; fields?: Field[]; body?: string };

export type DocSection = {
  id: string;
  step?: string;
  shortLabel?: string;
  heading: string;
  badge?: string;
  summary?: string;
  fields?: Field[];
  body?: string[];
  items?: ListItem[];
  blocks?: Block[];
};

export type DocPage = {
  kicker: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
  version?: string;
  lastUpdated?: string;
  status?: string;
  behanceUrl?: string;
  websiteUrl?: string;
  heroImage?: string;
};

type DocGroup = { label: string; items: DocSection[] };

type MoreStudy = {
  slug: string;
  href: string;
  title: string;
  teaser?: string;
};

function FieldGrid({ fields }: { fields?: Field[] }) {
  if (!fields?.length) return null;
  return (
    <dl className="mt-4 grid gap-0 border border-line">
      {fields.map((field) => (
        <div key={field.label} className="grid grid-cols-[7rem_1fr] border-b border-line last:border-b-0 sm:grid-cols-[9rem_1fr]">
          <dt className="border-r border-line px-3 py-2 font-mono text-[10px] tracking-wider text-muted">
            {field.label}
          </dt>
          <dd className="px-3 py-2 text-sm text-ink">{field.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ItemList({ items }: { items?: ListItem[] }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-4 border border-line">
      {items.map((item) => (
        <li key={item.label ?? item.text} className="grid gap-1 border-b border-line px-3 py-3 last:border-b-0 sm:grid-cols-[8rem_1fr]">
          {item.label && (
            <span className="font-mono text-[10px] tracking-wider text-accent">{item.label}</span>
          )}
          <span className="text-sm text-muted">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DocShell({
  page,
  sections,
  groups,
  contactEmail,
  homeLabel = 'Back to portfolio',
  moreCaseStudies = null,
}: {
  page: DocPage;
  sections: DocSection[];
  groups?: DocGroup[];
  contactEmail?: string;
  homeLabel?: string;
  moreCaseStudies?: Array<{
    slug: string;
    href: string;
    title: string;
    teaser?: string;
  }> | null;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');
  const navGroups = useMemo(
    () => groups ?? [{ label: 'On this page', items: sections }],
    [groups, sections],
  );

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-50 border-b border-line bg-canvas">
        <div className="flex h-14 w-full items-center justify-between px-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Jan Bergosa">
              <img src="/logo.svg" alt="" width={24} height={28} className="h-7 w-auto" />
            </Link>
            <span className="hidden text-muted sm:inline">/</span>
            <span className="truncate text-sm text-muted">{page.breadcrumb}</span>
          </div>
          <Link href="/" className="border border-line px-3 py-2 text-xs text-muted hover:text-ink">
            {homeLabel}
          </Link>
        </div>
      </header>

      <main className="w-full">
        <div className="border-b border-line px-4 py-10 md:px-6 md:py-12">
          <p className="font-mono text-[10px] tracking-[0.16em] text-accent">{page.kicker}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{page.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{page.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-0 border border-line">
            {page.version && (
              <span className="border-r border-line px-3 py-2 font-mono text-[10px] tracking-wider text-muted">
                VERSION {page.version}
              </span>
            )}
            {page.lastUpdated && (
              <span className="border-r border-line px-3 py-2 font-mono text-[10px] tracking-wider text-muted">
                UPDATED {page.lastUpdated}
              </span>
            )}
            {page.status && (
              <span className="px-3 py-2 font-mono text-[10px] tracking-wider text-accent">
                STATUS {page.status}
              </span>
            )}
          </div>
          {(page.behanceUrl || page.websiteUrl) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {page.behanceUrl && (
                <a
                  href={page.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-3 py-2 text-xs text-muted hover:text-accent"
                >
                  View on Behance →
                </a>
              )}
              {page.websiteUrl && (
                <a
                  href={page.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-3 py-2 text-xs text-muted hover:text-accent"
                >
                  Live site →
                </a>
              )}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-[16rem_1fr]">
          <aside className="border-b border-line lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:overflow-y-auto lg:border-b-0 lg:border-r">
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-line last:border-b-0">
                <p className="px-4 py-3 font-mono text-[10px] tracking-wider text-muted md:px-5">
                  {group.label}
                </p>
                <ul>
                  {group.items.map((section) => (
                    <li key={section.id} className="border-t border-line">
                      <a
                        href={`#${section.id}`}
                        className={`block px-4 py-3 text-sm md:px-5 ${
                          activeId === section.id ? 'text-ink' : 'text-muted hover:text-ink'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setActiveId(section.id);
                        }}
                      >
                        {section.shortLabel ?? section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <div className="min-w-0">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20 border-b border-line px-4 py-8 md:px-6 md:py-10"
              >
                <p className="font-mono text-[10px] tracking-wider text-accent">
                  {section.step ?? String(index + 1).padStart(2, '0')} / {section.badge ?? section.shortLabel}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">{section.heading}</h2>
                {section.summary && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{section.summary}</p>
                )}
                <FieldGrid fields={section.fields} />
                {section.body?.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                <ItemList items={section.items} />
                {section.blocks?.map((block) => (
                  <div key={block.title} className="mt-4 border border-line">
                    <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2">
                      <span className="font-mono text-[10px] tracking-wider text-accent">
                        {block.label ?? 'SPEC'}
                      </span>
                      <span className="text-sm text-ink">{block.title}</span>
                    </div>
                    <div className="p-3">
                      <FieldGrid fields={block.fields} />
                      {block.body && <p className="mt-3 text-sm text-muted">{block.body}</p>}
                    </div>
                  </div>
                ))}
              </section>
            ))}

            {moreCaseStudies && moreCaseStudies.length > 0 && (
              <div className="border-b border-line px-4 py-8 md:px-6">
                <p className="font-mono text-[10px] tracking-wider text-accent">MORE CASE STUDIES</p>
                <div className="mt-4 grid border border-line md:grid-cols-2">
                  {moreCaseStudies.map((study) => (
                    <Link
                      key={study.slug}
                      href={study.href}
                      className="border-b border-line p-4 last:border-b-0 hover:bg-white/[0.02] md:border-r md:[&:nth-child(2n)]:border-r-0"
                    >
                      <h3 className="text-sm font-medium text-ink">{study.title}</h3>
                      {study.teaser && <p className="mt-2 text-sm text-muted">{study.teaser}</p>}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {contactEmail && (
              <p className="px-4 py-6 text-sm text-muted md:px-6">
                Questions?{' '}
                <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">
                  {contactEmail}
                </a>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
