/** UI/UX study notes and strategy reference — reusable across projects */
import { aiCopy } from './constants.js';

export const documentationContent = {
  page: {
    kicker: 'Recruiter review',
    title: 'UI/UX Designer — Working Profile',
    subtitle:
      'A concise view of my role fit, design process, collaboration style, and accessibility standards for teams evaluating a UI/UX Designer.',
    breadcrumb: 'UI/UX Designer Profile',
    icon: 'BookOpen',
    version: '2.0',
    lastUpdated: 'August 2026',
    status: 'Open to UI/UX roles',
    diagram: {
      definition: `flowchart LR
        A[Role fit] --> B[Selected work]
        B --> C[Design process]
        C --> D[Team collaboration]
        D --> E[Start a conversation]`,
      summary: 'Recruiter review path: understand the role fit, inspect evidence, review the process, and move directly to a conversation.',
    },
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
      heading: 'What to review first',
      icon: 'Target',
      badge: 'Overview',
      summary: 'Use this page as a fast, evidence-led overview before opening the case studies or starting a conversation.',
      fields: [
        { label: 'Target role', value: 'UI/UX Designer with strong product, systems, and delivery awareness' },
        { label: 'Best fit', value: 'Web apps, dashboards, SaaS products, workflow-heavy interfaces' },
        { label: 'Review path', value: 'Role fit → selected work → process → collaboration → conversation' },
      ],
      body: [
        'I design clear interfaces for complex products. My work connects user flows, visual hierarchy, reusable components, responsive behavior, and developer-ready decisions so teams can move from ambiguity to a shippable experience.',
      ],
    },
    {
      id: 'role-fit',
      step: '02',
      shortLabel: 'Role fit',
      heading: 'Where I add value',
      icon: 'Target',
      badge: 'Recruiter snapshot',
      summary: 'I am a practical match for teams that need strong interface craft alongside enough product thinking to improve the complete user path, from the first question to the final action.',
      fields: [
        { label: 'Core craft', value: 'UI/UX design, interaction patterns, information architecture, prototyping' },
        { label: 'Systems', value: 'Reusable components, states, responsive rules, and visual consistency' },
        { label: 'Delivery', value: 'Clear handoff, engineering collaboration, implementation review, and iteration' },
      ],
      items: [
        { label: 'Strong signal', text: 'I can make a dense or unclear workflow easier to understand and act on.' },
        { label: 'Team signal', text: 'I explain decisions clearly, welcome constraints, and stay engaged beyond the first handoff.' },
        { label: 'Outcome signal', text: 'The final interface is easier to scan, more consistent to build, and more useful to the person using it.' },
      ],
    },
    {
      id: 'evidence',
      step: '03',
      shortLabel: 'Evidence',
      heading: 'What the portfolio demonstrates',
      icon: 'Layout',
      badge: 'Selected evidence',
      summary: 'The work section shows how these capabilities appear in real product contexts, including the constraints, decisions, interface systems, and outcomes behind each selected project.',
      blocks: [
        {
          label: 'CASE STUDY',
          title: 'Complex workflows',
          fields: [
            { label: 'Look for', value: 'Flow clarity, states, hierarchy, and reduced cognitive load' },
            { label: 'Evidence', value: 'Grafon, TradeDungeon, Dataflower, and Powerion' },
          ],
        },
        {
          label: 'CAPABILITY',
          title: 'Scalable UI systems',
          fields: [
            { label: 'Look for', value: 'Reusable patterns, responsive behavior, and consistent visual language' },
            { label: 'Evidence', value: 'Expertise, Tools, and Method sections' },
          ],
        },
      ],
    },
    {
      id: 'process',
      step: '04',
      shortLabel: 'Process',
      heading: 'How I move from brief to build',
      icon: 'Workflow',
      badge: 'Working process',
      summary: 'The process creates confidence without becoming rigid: it gives teams a shared way to move from an unclear brief to a tested interface, while adapting to the product, available evidence, and delivery deadline.',
      items: [
        { label: '01 · Discover', text: 'Clarify users, business goals, constraints, existing signals, and the decision the work needs to support.' },
        { label: '02 · Define', text: 'Frame the problem, map the key flow, align on scope, and identify the riskiest assumptions.' },
        { label: '03 · Design', text: 'Explore the interface, establish hierarchy, and build reusable patterns rather than isolated screens.' },
        { label: '04 · Validate', text: 'Use prototypes, critique, and feedback to test whether the path is understandable before build.' },
        { label: '05 · Deliver', text: 'Document states and responsive behavior, collaborate with engineering, and review the implementation.' },
      ],
    },
    {
      id: 'principles',
      step: '02',
      shortLabel: 'Principles',
      heading: 'Design principles',
      icon: 'Target',
      badge: 'Foundation',
      summary: 'These are the decisions I make before adding visual detail: establish clarity, connect the interface to a business outcome, and remove anything that makes the next action harder to understand.',
      fields: [
        { label: 'Rule 01', value: 'Clarity before creativity' },
        { label: 'Rule 02', value: 'Business value before decoration' },
        { label: 'Rule 03', value: 'One purpose per section' },
      ],
      items: [
        { label: 'Clarity', text: 'If it reduces clarity, simplify or remove it.' },
        { label: 'Business', text: 'Every screen should support a measurable outcome.' },
        { label: 'Motion', text: 'Animation guides attention — never decorates only.' },
        { label: 'AI', text: aiCopy.docsPrinciple },
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
      summary: 'The portfolio follows a deliberate narrative: establish the UI/UX role, show evidence of the work, explain the working method, clarify team fit, and make it easy to start a conversation.',
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
            { label: 'Hook', value: 'Speed on craft. Focus on problems.' },
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
      summary: 'The writing system keeps each page direct, scannable, and useful to the person making a hiring or product decision.',
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
      heading: 'How I use AI',
      icon: 'Brain',
      badge: 'Process',
      summary: aiCopy.docsSummary,
      fields: [
        { label: 'Use AI for', value: 'Research, ideation, documentation, implementation' },
        { label: 'Protect time for', value: 'User and business problem-solving' },
        { label: 'Tools', value: 'Cursor, Claude, Figma, scoped file-level edits' },
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
        { label: 'Runtime', value: 'Next.js 15 + React 19' },
        { label: 'Styles', value: 'Tailwind CSS 4 + design tokens' },
        { label: 'Motion', value: 'Framer Motion + prefers-reduced-motion' },
        { label: 'Content', value: 'Centralized in lib/ — not in components' },
      ],
      body: [
        'Reuse this stack pattern on future portfolio or product sites: utility classes for layout, semantic tokens for brand surfaces, component CSS for glass and scroll behavior.',
      ],
    },
  ],
}

documentationContent.groups = [
  {
    label: 'Recruiter review',
    items: documentationContent.sections.filter((s) =>
      ['overview', 'role-fit', 'evidence', 'process'].includes(s.id),
    ),
  },
  {
    label: 'Practice reference',
    items: documentationContent.sections.filter((s) =>
      ['principles', 'structure', 'copy', 'ai-workflow', 'stack'].includes(s.id),
    ),
  },
]
