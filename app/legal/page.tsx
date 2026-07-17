import type { Metadata } from 'next';
import DocShell from '@/components/docs/DocShell';
import { legalContent } from '@/lib/docs/legalContent.js';

export const metadata: Metadata = {
  title: 'Legal Notice — Jan Bergosa',
  description: legalContent.page.subtitle,
};

export default function LegalPage() {
  return (
    <DocShell
      page={legalContent.page}
      sections={legalContent.sections}
      contactEmail={legalContent.contactEmail}
    />
  );
}
