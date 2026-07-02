/** Legal Notice — site use, privacy, and terms */
export const legalContent = {
  page: {
    kicker: 'Legal',
    title: 'Legal Notice',
    subtitle:
      'How this site may be used, what data it handles, and the boundaries around content, privacy, and intellectual property.',
    breadcrumb: 'Legal Notice',
    icon: 'Scale',
    version: '1.2',
    lastUpdated: 'July 2026',
    status: 'Active',
  },
  contactEmail: 'janbergosa.graphics@gmail.com',
  sections: [
    {
      id: 'purpose',
      step: '01',
      shortLabel: 'Overview',
      heading: 'Site purpose',
      icon: 'Target',
      badge: 'Overview',
      summary:
        'A reusable design playbook that explains how this portfolio is structured and why each section exists.',
      fields: [
        { label: 'Format', value: 'Personal portfolio and design reference' },
        { label: 'Audience', value: 'Recruiters, hiring managers, product teams, collaborators' },
        { label: 'Intent', value: 'Show process, thinking, and selected work' },
      ],
      body: [
        'This page outlines the legal purpose, usage boundaries, and ownership context for this portfolio. It is provided for transparency and professional review.',
      ],
    },
    {
      id: 'use',
      step: '02',
      shortLabel: 'Use',
      heading: 'Permitted use',
      icon: 'FileText',
      badge: 'Scope',
      fields: [
        { label: 'Allowed', value: 'Professional evaluation, collaboration discussion, reference' },
        { label: 'Not allowed', value: 'Republishing, scraping, or commercial reuse without consent' },
      ],
      body: [
        'You may review content for hiring, partnership, or professional context. Any other use requires my prior permission.',
      ],
    },
    {
      id: 'privacy',
      step: '03',
      shortLabel: 'Privacy',
      heading: 'Privacy',
      icon: 'Shield',
      badge: 'Data',
      summary: 'Minimal collection by design — no analytics stack and no data sold to third parties.',
      fields: [
        { label: 'Collected', value: 'No personal data stored by this site' },
        { label: 'Contact', value: 'mailto: only — handled by your email provider' },
        { label: 'Cookies', value: 'No tracking cookies or ad pixels' },
        { label: 'Hosting', value: 'Standard server logs (IP, user agent) may apply' },
      ],
      items: [
        {
          label: 'External links',
          text: 'Behance, LinkedIn, and other linked profiles operate under their own privacy policies.',
        },
        {
          label: 'Your rights',
          text: 'Email me if you need clarification about any data you voluntarily share.',
        },
      ],
    },
    {
      id: 'terms',
      step: '04',
      shortLabel: 'Terms',
      heading: 'Terms of use',
      icon: 'Scale',
      badge: 'Terms',
      summary: 'Lightweight terms that define reasonable use of this site.',
      fields: [
        { label: 'License', value: 'View-only for personal or professional evaluation' },
        { label: 'Liability', value: 'Provided as-is, without warranties' },
        { label: 'Law', value: 'Philippines — subject to applicable local law' },
      ],
      items: [
        {
          label: 'Acceptable use',
          text: 'Do not disrupt, reverse-engineer, or misuse site assets or infrastructure.',
        },
        {
          label: 'Updates',
          text: 'Content may change without prior notice as the portfolio evolves.',
        },
        {
          label: 'No advice',
          text: 'Nothing here is legal, financial, or professional advice.',
        },
      ],
    },
    {
      id: 'ip',
      step: '05',
      shortLabel: 'IP',
      heading: 'Intellectual property',
      icon: 'FileText',
      badge: 'Rights',
      fields: [
        { label: 'Ownership', value: 'Work shown is mine or displayed with permitted context' },
        { label: 'Attribution', value: 'Third-party rights respected; disputes reviewed promptly' },
      ],
      body: [
        'Displayed work reflects my process and output. I do not claim ownership of others’ creative identity. If you believe something infringes your rights, contact me and I will review it.',
      ],
    },
    {
      id: 'ai',
      step: '06',
      shortLabel: 'AI',
      heading: 'AI disclosure',
      icon: 'Sparkles',
      badge: 'Workflow',
      fields: [
        { label: 'Role', value: 'AI speeds research, exploration, and iteration' },
        { label: 'Control', value: 'Strategy, curation, and final decisions stay human-led' },
        { label: 'Standard', value: 'Attribution and professional ethics still apply' },
      ],
      body: [
        'Some work reflects an AI-assisted workflow. AI reduces repetitive craft; judgment, authorship, and accountability remain mine.',
      ],
    },
    {
      id: 'disclaimer',
      step: '07',
      shortLabel: 'Notice',
      heading: 'Disclaimer',
      icon: 'Scale',
      badge: 'Final',
      body: [
        'This notice is for transparency only and is not legal advice. It may be updated as the site changes.',
        'Questions about rights or professional inquiries: use the contact details on the main portfolio.',
      ],
    },
  ],
}
