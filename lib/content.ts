export const site = {
  name: 'Jan Bergosa',
  fullName: 'Marjan "Jan" Bergosa',
  role: 'UI/UX DESIGNER',
  email: 'janbergosa.graphics@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marjan-bergosa-b973a9184/',
  behance: 'https://www.behance.net/janbergosa',
  tagline:
    'UI/UX designer focused on clear interfaces, scalable systems, and shippable experiences.',
  resume: {
    href: '/resume/marjan-bergosa-ui-ux-design-resume.pdf',
    label: 'Download Resume',
    downloadName: 'Marjan-Bergosa-UI-UX-Design-Resume.pdf',
  },
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Method', href: '#method' },
  { label: 'About', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
];

export const footerNavLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Method', href: '#method' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  role: site.role,
  headlineLead: 'I design',
  rotatingWords: ['products', 'systems', 'experiences'],
  headlineTail: 'teams can ship.',
  description:
    'From ambiguous requirements to usable interfaces — I turn complex product problems into clear flows, scalable UI systems, and developer-ready designs.',
  primaryCta: 'View selected work',
  resumeCta: 'View resume',
  linkedinCta: 'LinkedIn',
};

export const projects = [
  {
    id: 'grafon-supply-chain',
    title: 'Grafon',
    role: 'Product/UI Designer',
    image: '/projects/grafon.jpg',
    imageAlt: 'Grafon supply chain simulator UI',
    blurb: 'An interactive simulator that visualizes multi-step supply-chain processes so teams can explore scenarios without heavy documentation.',
    meta: [
      { icon: 'audience' as const, text: 'Flow visualization · Simulation' },
      { icon: 'result' as const, text: 'Clearer process orientation' },
    ],
    href: '/case-study/grafon-supply-chain',
    internal: true,
  },
  {
    id: 'tradedungeon-uiux',
    title: 'TradeDungeon',
    role: 'Product/UI Designer',
    image: '/projects/tradedungeon.jpg',
    imageAlt: 'TradeDungeon trading product UI',
    blurb: 'Redesigned listing and trade flows to surface security cues and make transaction states easy to scan before committing.',
    meta: [
      { icon: 'audience' as const, text: 'Trust · Onboarding · Transaction states' },
      { icon: 'result' as const, text: 'Clearer trade confidence and reusable status components' },
    ],
    href: '/case-study/tradedungeon-uiux',
    internal: true,
  },
  {
    id: 'dataflower-baas',
    title: 'Dataflower',
    role: 'Product/UI Designer',
    image: '/projects/dataflower.png',
    imageAlt: 'Dataflower backend-as-a-service platform UI',
    blurb: 'Dashboard and onboarding work that clarifies API setup and surfaces the next actions developers need to get to first success.',
    meta: [
      { icon: 'audience' as const, text: 'Developer onboarding · API setup' },
      { icon: 'result' as const, text: 'Improved first-call clarity' },
    ],
    href: '/case-study/dataflower-baas',
    internal: true,
  },
  {
    id: 'powerion-energy',
    title: 'Powerion',
    role: 'Product/UI Designer',
    image: '/projects/powerion.png',
    imageAlt: 'Powerion energy management platform UI',
    blurb: 'Energy dashboards that surface usage and impact signals with clear next actions so operators can intervene quickly.',
    meta: [
      { icon: 'audience' as const, text: 'Energy ops · Data visualization' },
      { icon: 'result' as const, text: 'Signal → action clarity' },
    ],
    href: '/case-study/powerion-energy',
    internal: true,
  },
];

export const resourceLinks = [
  {
    label: 'Resume',
    href: '/resume/marjan-bergosa-ui-ux-design-resume.pdf',
    download: 'Marjan-Bergosa-UI-UX-Design-Resume.pdf',
  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marjan-bergosa-b973a9184/', external: true },
  { label: 'Behance', href: 'https://www.behance.net/janbergosa', external: true },
  { label: 'Legal Notice', href: '/legal' },
  { label: 'Documentation', href: '/docs' },
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
  title: 'What I own on a product team',
  body:
    'I work across the product lifecycle — from defining flows and interfaces to validating, documenting, and supporting the build.',
};

export const expertise = [
  {
    icon: 'product-ui' as const,
    title: 'Product UI/UX',
    body: 'Flows, information architecture, interaction design, and product interfaces.',
  },
  {
    icon: 'design-systems' as const,
    title: 'Design Systems',
    body: 'Reusable components, patterns, and UI foundations that scale across products.',
  },
  {
    icon: 'prototyping' as const,
    title: 'Prototyping & Validation',
    body: 'Interactive prototypes used to explore flows, test assumptions, and align teams.',
  },
  {
    icon: 'handoff' as const,
    title: 'Handoff & Build Support',
    body: 'Implementation-ready states, responsive behavior, specifications, and developer collaboration.',
  },
];

export const method = [
  {
    phase: '01',
    icon: 'discover' as const,
    title: 'Discover',
    body: 'Understand users, requirements, and constraints.',
  },
  {
    phase: '02',
    icon: 'define' as const,
    title: 'Define',
    body: 'Align on the problem, scope, and success criteria.',
  },
  {
    phase: '03',
    icon: 'design' as const,
    title: 'Design',
    body: 'Create flows, interfaces, and scalable UI patterns.',
  },
  {
    phase: '04',
    icon: 'validate' as const,
    title: 'Validate',
    body: 'Test assumptions and refine the experience.',
  },
  {
    phase: '05',
    icon: 'build' as const,
    title: 'Build',
    body: 'Collaborate with engineering through implementation.',
  },
  {
    phase: '06',
    icon: 'ship' as const,
    title: 'Ship',
    body: 'Support launch and learn from the real product.',
  },
];

export const methodIntro = {
  title: 'A delivery loop product teams can trust.',
  body: 'A practical loop from problem definition to shipped product.',
};

export const philosophyIntro = {
  title: 'Designing between product, people, and code.',
  body:
    "I turn complex product requirements into clear, shippable interfaces. I blend product thinking, visual systems, and engineering-aware workflows to move ideas into production.",
};

export const philosophy = [
  {
    title: 'Fix the path first',
    body: "Remove friction before visuals. Fix flows so the product works first.",
  },
  {
    title: 'Systems beat one-offs',
    body: 'Prefer reusable patterns over one-off fixes to reduce rework and inconsistency.',
  },
  {
    title: 'Clarity over decoration',
    body: 'Make hierarchy and next actions obvious — not decorative noise.',
  },
  {
    title: 'Design with AI, not around it',
    body: 'Use AI to speed exploration and iteration while keeping design judgment human-led.',
  },
];

export const faqIntro = {
  title: 'Hiring & collaboration',
  body: 'Straight answers for product, design, and engineering teams evaluating fit.',
};
export const faqs = [
  {
    q: 'What should a team expect from you as a UI/UX designer?',
    a: 'You can expect a UI/UX designer who turns ambiguous requirements into clear decisions, usable flows, and implementation-ready interface work.',
    points: [
      { label: 'Scope', sub: 'User flows, information architecture, interaction design, visual systems, and responsive states.' },
      { label: 'Output', sub: 'A focused prototype or interface direction, reusable components, and clear handoff context.' },
      { label: 'Mindset', sub: 'I prioritize the path users need to complete over decorative polish that does not improve the product.' },
    ],
    note: 'The goal is less rework: clearer decisions for product teams and fewer unanswered questions for engineering.',
  },
  {
    q: 'What type of products do you design?',
    a: 'My strongest fit is complex web software where people need to understand information, make decisions, and complete repeatable workflows with confidence.',
    points: [
      { label: 'Best fit', sub: 'SaaS products, operations tools, dashboards, marketplaces, and developer-facing platforms.' },
      { label: 'Typical problems', sub: 'Dense information, unclear next steps, fragmented flows, inconsistent UI, and difficult onboarding.' },
      { label: 'Success signal', sub: 'Users can find the right information, understand the state, and take the next action without guesswork.' },
    ],
    note: 'I can also support marketing or portfolio surfaces when the work needs product-level clarity rather than decoration alone.',
  },
  {
    q: 'How do you work with engineers?',
    a: 'I treat engineering collaboration as part of the design process, not a final handoff event. I share the reasoning behind decisions and stay available as the work becomes real.',
    points: [
      { label: 'Handoff', sub: 'Documented states, responsive behavior, component intent, edge cases, and interaction details.' },
      { label: 'During build', sub: 'Fast clarification, tradeoff discussions, implementation review, and alignment on what matters most.' },
      { label: 'Shared goal', sub: 'A practical solution that preserves the user outcome while respecting technical constraints and delivery time.' },
    ],
    note: 'The best handoff is a shared understanding of the problem, not a larger pile of files.',
  },
  {
    q: 'What role are you looking for?',
    a: 'I am looking for a UI/UX Designer role where I can contribute from problem framing through interface design, validation, and delivery.',
    points: [
      { label: 'Role fit', sub: 'UI/UX Designer roles close to product and engineering decisions, with room for both interface craft and user experience thinking.' },
      { label: 'Contribution', sub: 'UX structure, interface craft, design systems, prototyping, documentation, and developer collaboration.' },
      { label: 'Team fit', sub: 'Teams that value clarity, thoughtful constraints, direct communication, and measurable product progress.' },
    ],
    note: 'I am open to conversations about full-time UI/UX roles and select interface-focused projects.',
  },
];

export const contactIntro = {
  kicker: 'CONTACT',
  titleLine1: 'Hiring for product UI/UX?',
  titleLine2: "Let\u2019s talk outcomes.",
  body: "I'm open to product UI/UX opportunities where I can contribute across UX, interface design, systems, prototyping, and developer collaboration.",
};
