/** UI/UX study notes and strategy reference — reusable across projects */
export const documentationContent = {
  page: {
    kicker: 'Study notes',
    title: 'Design Reference',
    subtitle:
      'Personal UI/UX notes on strategy, page structure, copy rules, and workflow. Use as a reusable playbook — not portfolio case studies.',
    breadcrumb: 'Documentation',
    icon: 'BookOpen',
    version: '1.1',
    lastUpdated: 'July 2026',
    status: 'Reference',
  },
  groups: [
    { label: 'Foundation', items: [] },
    { label: 'Execution', items: [] },
  ],
  sections: [
    {
      id: 'overview',
      step: '01',
      shortLabel: 'Overview',
      heading: 'Site purpose',
      icon: 'Target',
      badge: 'Overview',
      summary: 'A reusable design playbook that explains how this portfolio is structured and why each section exists.',
      fields: [
        { label: 'Goal', value: 'Document strategic design decisions, not just visual polish' },
        { label: 'Audience', value: 'Founders, PMs, agencies, recruiters' },
        { label: 'Intent', value: 'Provide a practical reference for planning and execution' },
      ],
      body: [
        'This page is a reference document for UI/UX strategy, structure, and workflow decisions used across projects. It supports consistency, faster delivery, and clearer product communication.',
      ],
    },
    {
      id: 'principles',
      step: '02',
      shortLabel: 'Principles',
      heading: 'Design principles',
      icon: 'Target',
      badge: 'Foundation',
      summary: 'Rules I apply before adding UI — clarity and business value over decoration.',
      fields: [
        { label: 'Rule 01', value: 'Clarity before creativity' },
        { label: 'Rule 02', value: 'Business value before decoration' },
        { label: 'Rule 03', value: 'One purpose per section' },
      ],
      items: [
        { label: 'Clarity', text: 'If it reduces clarity, simplify or remove it.' },
        { label: 'Business', text: 'Every screen should support a measurable outcome.' },
        { label: 'Motion', text: 'Animation guides attention — never decorates only.' },
        { label: 'AI', text: 'AI accelerates execution; strategy stays human-led.' },
        { label: 'Sections', text: 'One purpose per section. One question answered.' },
        { label: 'Velocity', text: 'Ship fast without sacrificing rigor.' },
      ],
    },
    {
      id: 'structure',
      step: '03',
      shortLabel: 'Structure',
      heading: 'Page structure',
      icon: 'Layout',
      badge: 'Architecture',
      summary: 'Seven-section scroll narrative: position → proof → fit → contact.',
      body: [
        'Each block follows the same pattern: label, hook, supporting idea, then CTA. This keeps scanning predictable across projects.',
      ],
      blocks: [
        {
          label: 'Block',
          title: '01 — Overview (Hero)',
          fields: [
            { label: 'Job', value: 'State what I do and how I create value' },
            { label: 'Hook', value: 'Frictionless journeys that convert' },
          ],
        },
        {
          label: 'Block',
          title: '02 — Strategy (Expertise)',
          fields: [
            { label: 'Job', value: 'Show capability and scale of practice' },
            { label: 'Hook', value: 'Scale products through strategic design' },
          ],
        },
        {
          label: 'Block',
          title: '03 — Velocity (Workflow)',
          fields: [
            { label: 'Job', value: 'Explain how I work with speed and rigor' },
            { label: 'Hook', value: 'AI-powered design for rapid delivery' },
          ],
        },
        {
          label: 'Block',
          title: '04 — Growth (Process)',
          fields: [
            { label: 'Job', value: 'Map research to shipped outcomes' },
            { label: 'Hook', value: 'Research into actionable insight' },
          ],
        },
        {
          label: 'Block',
          title: '05 — Philosophy (Approach)',
          fields: [
            { label: 'Job', value: 'Define decision framework and values' },
            { label: 'Hook', value: 'Pinpoint pain, deliver impact' },
          ],
        },
        {
          label: 'Block',
          title: '06 — FAQ',
          fields: [
            { label: 'Job', value: 'Answer fit, workflow, and contribution' },
            { label: 'Hook', value: 'Know the fit. See the value.' },
          ],
        },
        {
          label: 'Block',
          title: '07 — Contact',
          fields: [
            { label: 'Job', value: 'Lower friction to start a conversation' },
            { label: 'Hook', value: 'Send a message' },
          ],
        },
      ],
    },
    {
      id: 'copy',
      step: '04',
      shortLabel: 'Copy',
      heading: 'Copy rules',
      icon: 'Zap',
      badge: 'Content',
      fields: [
        { label: 'Tone', value: 'Direct, professional, outcome-led' },
        { label: 'Hooks', value: '4–5 words max for scan speed' },
        { label: 'Avoid', value: 'Résumé language and empty corporate filler' },
      ],
      items: [
        {
          label: 'Verbs first',
          text: 'Labels and CTAs use action verbs: pilot, scale, quantify, connect.',
        },
        {
          label: 'Outcomes',
          text: 'Tie copy to friction removed, conversion, or measurable impact.',
        },
        {
          label: 'Pattern',
          text: 'Label → Hook → Supporting idea → CTA on every section.',
        },
      ],
    },
    {
      id: 'ai-workflow',
      step: '05',
      shortLabel: 'AI',
      heading: 'AI workflow notes',
      icon: 'Brain',
      badge: 'Process',
      summary: 'How I use AI in design work without losing authorship or quality.',
      fields: [
        { label: 'Use AI for', value: 'Research drafts, exploration, iteration speed' },
        { label: 'Keep human', value: 'Strategy, curation, final UI decisions' },
        { label: 'Tools', value: 'Cursor, scoped edits, file-level context' },
      ],
      items: [
        {
          label: 'Small changes',
          text: 'One feature or file at a time — avoid full rewrites.',
        },
        {
          label: 'Context',
          text: 'Reference specific files so intent stays intact.',
        },
        {
          label: 'Verify',
          text: 'Build and visual check before calling work done.',
        },
      ],
    },
    {
      id: 'stack',
      step: '06',
      shortLabel: 'Stack',
      heading: 'Stack reference',
      icon: 'Workflow',
      badge: 'Technical',
      fields: [
        { label: 'Runtime', value: 'React 19 + Vite 5' },
        { label: 'Styles', value: 'Tailwind CSS 4 + tokens in index.css' },
        { label: 'Motion', value: 'Framer Motion + prefers-reduced-motion' },
        { label: 'Content', value: 'Centralized in src/data/ — not in components' },
      ],
      body: [
        'Reuse this stack pattern on future portfolio or product sites: utility classes for layout, semantic tokens for brand surfaces, component CSS for glass and scroll behavior.',
      ],
    },
  ],
}

documentationContent.groups = [
  {
    label: 'Foundation',
    items: documentationContent.sections.filter((s) =>
      ['overview', 'principles', 'structure'].includes(s.id),
    ),
  },
  {
    label: 'Execution',
    items: documentationContent.sections.filter((s) =>
      ['copy', 'ai-workflow', 'stack'].includes(s.id),
    ),
  },
]
