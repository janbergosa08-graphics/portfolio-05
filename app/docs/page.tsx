import type { Metadata } from 'next';
import DocShell from '@/components/docs/DocShell';
import { documentationContent } from '@/lib/docs/documentationContent.js';

export const metadata: Metadata = {
  title: 'Documentation — Jan Bergosa',
  description: documentationContent.page.subtitle,
};

export default function DocsPage() {
  return (
    <DocShell
      page={documentationContent.page}
      sections={documentationContent.sections}
      groups={documentationContent.groups}
    />
  );
}
