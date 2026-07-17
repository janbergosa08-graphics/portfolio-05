import type { Metadata } from 'next';
import Link from 'next/link';
import DocShell from '@/components/docs/DocShell';
import {
  caseStudySlugs,
  getCaseStudy,
  getOtherCaseStudies,
} from '@/lib/docs/caseStudiesContent.js';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: 'Case study not found — Jan Bergosa' };
  }
  return {
    title: `${study.page.title} — Jan Bergosa`,
    description: study.page.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-canvas text-ink">
        <div className="w-full border-b border-line px-4 py-16 md:px-6">
          <h1 className="text-3xl font-semibold tracking-tight">Case study not found</h1>
          <p className="mt-3 max-w-lg text-sm text-muted">
            This project case study may have moved. Browse case studies from the portfolio Projects section.
          </p>
          <Link
            href="/#projects"
            className="mt-6 inline-flex border border-line px-4 py-2 text-sm text-muted hover:text-accent"
          >
            View projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <DocShell
      page={study.page}
      sections={study.sections}
      groups={study.groups}
      contactEmail={study.contactEmail}
      moreCaseStudies={getOtherCaseStudies(slug) as Array<{
        slug: string;
        href: string;
        title: string;
        teaser?: string;
      }>}
      homeLabel="Back to portfolio"
    />
  );
}
