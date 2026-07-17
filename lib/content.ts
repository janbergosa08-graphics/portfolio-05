export const site = {
  name: 'Jan Bergosa',
  role: 'PRODUCT UI/UX DESIGNER',
  email: 'janbergosa.graphics@gmail.com',
  tagline:
    'I design product interfaces that cut user friction and help teams ship clearer software.',
  resume: {
    href: '/resume/marjan-bergosa-ui-ux-design-resume.pdf',
    label: 'Download Resume',
    downloadName: 'Marjan-Bergosa-UI-UX-Design-Resume.pdf',
  },
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Method', href: '#method' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  role: site.role,
  headlineLead: 'I design',
  rotatingWords: ['product UI', 'workflows', 'systems'],
  headlineTail: 'teams can ship.',
  description:
    'From unclear requirements to usable interfaces — less friction, cleaner handoff, fewer revision loops.',
  primaryCta: 'Discuss a role or project',
};

export const projects = [
  {
    id: 'grafon-supply-chain',
    label: 'Case Study',
    category: 'B2B ops',
    title: 'Grafon – Supply Chain Simulator',
    blurb: 'Simplified complex simulation flows so operators can run scenarios faster with less training.',
    href: '/case-study/grafon-supply-chain',
    internal: true,
  },
  {
    id: 'tradedungeon-uiux',
    label: 'Case Study',
    category: 'Fintech UX',
    title: 'TradeDungeon – Trading Product UI',
    blurb: 'Structured trading journeys and screens for clearer decisions under time pressure.',
    href: '/case-study/tradedungeon-uiux',
    internal: true,
  },
  {
    id: 'dataflower-baas',
    label: 'Case Study',
    category: 'Developer platform',
    title: 'Dataflower – Backend-as-a-Service',
    blurb: 'Made backend setup and API workflows easier for builders adopting the platform.',
    href: '/case-study/dataflower-baas',
    internal: true,
  },
  {
    id: 'powerion-energy',
    label: 'Case Study',
    category: 'Energy ops',
    title: 'Powerion – Energy Management',
    blurb: 'Dashboard patterns for monitoring energy data and acting on operational signals.',
    href: 'https://www.behance.net/gallery/232269087/Powerion-Energy-Management-Platform',
    internal: false,
  },
];

export const resourceLinks = [
  { label: 'Legal Notice', href: '/legal' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Behance', href: 'https://www.behance.net/janbergosa', external: true },
  {
    label: 'Resume',
    href: '/resume/marjan-bergosa-ui-ux-design-resume.pdf',
    download: 'Marjan-Bergosa-UI-UX-Design-Resume.pdf',
  },
];

export const socialLinks = [
  {
    id: 'behance',
    label: 'Behance',
    username: 'janbergosa',
    href: 'https://www.behance.net/janbergosa',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    username: 'marjan-bergosa',
    href: 'https://www.linkedin.com/in/marjan-bergosa-b973a9184/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    username: 'jaybers_',
    href: 'https://www.instagram.com/jaybers_/',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    username: 'jaybers1997',
    href: 'https://www.facebook.com/jaybers1997',
  },
  {
    id: 'gmail',
    label: 'Gmail',
    username: 'janbergosa.graphics@gmail.com',
    href: 'mailto:janbergosa.graphics@gmail.com',
  },
];

export const expertiseIntro = {
  title: 'What I own on a product team.',
  body: 'End-to-end product UI/UX for web apps and dashboards — from problem framing and flows to polished interfaces, reusable systems, and engineering-ready handoff.',
};

export const expertise = [
  {
    icon: 'product-ui' as const,
    title: 'Product UI/UX',
    body: 'Research, flows, and high-fidelity UI for web products — tied to conversion, completion, and delivery goals.',
  },
  {
    icon: 'design-systems' as const,
    title: 'Design systems',
    body: 'Tokens, components, and docs that keep product and engineering aligned as the product scales.',
  },
  {
    icon: 'prototyping' as const,
    title: 'Prototyping & validation',
    body: 'Clickable prototypes that test risk early — before engineering spends weeks building the wrong path.',
  },
  {
    icon: 'handoff' as const,
    title: 'Handoff & build support',
    body: 'Specs, states, and design QA so implementation matches intent and ships with fewer revision loops.',
  },
];

export const methodIntro = {
  title: 'A delivery loop product teams can trust.',
};

export const method = [
  { phase: '01', title: 'Discover', body: 'Map users, friction points, and business constraints.' },
  { phase: '02', title: 'Define', body: 'Agree on problem, success metrics, and scope.' },
  { phase: '03', title: 'Design', body: 'Build flows, hierarchy, and UI systems.' },
  { phase: '04', title: 'Validate', body: 'Test clarity with stakeholders and users.' },
  { phase: '05', title: 'Build', body: 'Support engineering with precise handoff.' },
  { phase: '06', title: 'Ship', body: 'Launch, measure, and iterate on real usage.' },
];

export const philosophyIntro = {
  title: 'Decisions that protect delivery and outcomes.',
};

export const philosophy = [
  {
    title: 'Fix the path first',
    body: 'If the flow is broken, visuals will not save the product. Remove friction before decorating screens.',
  },
  {
    title: 'Tie UI to business goals',
    body: 'Every major interface choice should support a clear outcome — completion, conversion, speed, or fewer support tickets.',
  },
  {
    title: 'Systems beat one-offs',
    body: 'Reusable patterns reduce inconsistency and cut design and engineering rework over time.',
  },
  {
    title: 'Clarity over decoration',
    body: 'Teams ship faster when screens communicate hierarchy, states, and next actions without noise.',
  },
];

export const faqIntro = {
  title: 'Hiring and collaboration questions',
  body: 'Straight answers for product, design, and engineering teams evaluating fit.',
};

export const faqs = [
  {
    q: 'What can you contribute to a product team?',
    a: 'I turn ambiguous product goals into shipped interfaces that reduce user friction and cut delivery rework. I work across research, UX flows, UI systems, prototyping, and engineering handoff.',
    points: [
      { label: 'Product UX', sub: 'Flows and IA decisions tied to business goals' },
      { label: 'UI systems', sub: 'Reusable components that stay consistent as features grow' },
      { label: 'Prototypes', sub: 'Validate risky paths before build investment' },
      { label: 'Handoff', sub: 'Specs, states, and QA support for engineering' },
      { label: 'Delivery speed', sub: 'Faster alignment docs and fewer revision cycles' },
    ],
    note: 'Best fit for teams shipping web products, dashboards, or platform tools — not brand-only campaigns.',
  },
  {
    q: 'What business problems do you typically solve?',
    a: 'Teams usually bring me in when users stall, requirements are unclear, or design and engineering are misaligned. The goal is clearer UX and faster, cleaner shipping.',
    points: [
      { label: 'User drop-off', sub: 'Find where people fail tasks and redesign the path' },
      { label: 'Unclear scope', sub: 'Frame the problem and prioritize what to build first' },
      { label: 'Inconsistent UI', sub: 'Stabilize patterns through a shared system' },
      { label: 'Slow handoff', sub: 'Reduce back-and-forth with precise specs' },
      { label: 'Post-launch gaps', sub: 'Iterate from usage feedback and support signals' },
    ],
    note: 'I prioritize measurable product impact over visual polish alone.',
  },
  {
    q: 'What are your core strengths?',
    a: 'I combine product judgment with hands-on UI execution. That means fewer handoffs, faster alignment, and interfaces that hold up from prototype to production.',
    points: [
      { label: 'Problem framing', sub: 'Map friction before designing screens' },
      { label: 'Research synthesis', sub: 'Turn interviews and data into decisions' },
      { label: 'High-fidelity UI', sub: 'Polished UI under real technical constraints' },
      { label: 'Cross-team clarity', sub: 'Same language for PM, design, and eng' },
      { label: 'Execution speed', sub: 'More time on outcomes, less on rework' },
    ],
    note: 'See Projects and Method for how this shows up in shipped work.',
  },
  {
    q: 'How do you work with PMs and engineers?',
    a: 'I keep goals, docs, and feedback loops tight. Shared context beats throw-over-the-wall deliverables.',
    points: [
      { label: 'Shared metrics', sub: 'Align on users, scope, and success criteria' },
      { label: 'Async docs', sub: 'Specs, annotated files, and decision notes' },
      { label: 'Live prototypes', sub: 'Align before engineering commits build time' },
      { label: 'Build partnership', sub: 'Design QA and implementation support' },
      { label: 'Ship discipline', sub: 'Iterate from usage, not endless polish' },
    ],
    note: 'I reply within 24 hours. A short note about your product and the open role or problem is enough to start.',
  },
  {
    q: 'What roles and engagements are you open to?',
    a: 'I am open to product design / UI/UX roles where design ownership affects delivery quality and user outcomes.',
    points: [
      { label: 'Full-time UI/UX', sub: 'Long-term ownership of product experience' },
      { label: 'Product design', sub: 'Discovery through launch and iteration' },
      { label: 'In-house teams', sub: 'Embedded with product and engineering' },
      { label: 'Remote / hybrid', sub: 'Async-friendly collaboration' },
      { label: 'Contract-to-hire', sub: 'Open when problem and team fit are strong' },
    ],
    note: 'Primary focus: full-time or embedded product work. Selective freelance for scoped product UI/UX.',
  },
  {
    q: 'How do you use AI in your work?',
    a: 'I use AI to speed research synthesis, ideation, documentation, and iteration — so more time goes to product judgment and delivery quality. Final decisions stay human-owned.',
    points: [
      { label: 'Faster synthesis', sub: 'Cluster insights and opportunity areas sooner' },
      { label: 'More options', sub: 'Explore directions before locking a path' },
      { label: 'Clearer docs', sub: 'Specs and handoff notes in less time' },
      { label: 'Quicker loops', sub: 'Shorter cycles between intent and UI' },
    ],
    note: 'AI is an accelerator, not a replacement for accountability on UX quality.',
  },
  {
    q: 'How can you help our team right now?',
    a: 'I help teams move from unclear requirements to usable, buildable interfaces — so delivery is clearer, faster, and less dependent on rework.',
    points: [
      { label: 'Clarify the problem', sub: 'Define user stalls and business success' },
      { label: 'Design the path', sub: 'Flows and priorities before build starts' },
      { label: 'Systematize UI', sub: 'Reusable patterns the team can extend' },
      { label: 'Support handoff', sub: 'Specs, states, and edge cases for eng' },
      { label: 'Stay through launch', sub: 'QA, polish, and post-launch iteration' },
    ],
    note: 'Best fit when you need a designer who owns UX quality and collaborates tightly with product and engineering.',
  },
];

export const contactIntro = {
  kicker: 'CONTACT',
  titleLine1: 'Need product UI/UX support?',
  titleLine2: 'Let’s talk outcomes.',
  body: 'Open to full-time product design roles and selected project work. Share the product, users, timeline, and what success looks like — I reply within 24 hours with next steps.',
};
