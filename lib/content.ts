export const site = {
  name: 'Jan Bergosa',
  fullName: 'Marjan "Jan" Bergosa',
  role: 'PRODUCT UI/UX DESIGNER',
  email: 'janbergosa.graphics@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marjan-bergosa-b973a9184/',
  behance: 'https://www.behance.net/janbergosa',
  tagline:
    'I design clear, practical interfaces for products people actually need to use.',
  resume: {
    href: '/resume/marjan-bergosa-ui-ux-design-resume.pdf',
    label: 'Download Resume',
    downloadName: 'Marjan-Bergosa-UI-UX-Design-Resume.pdf',
  },
};

export const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Method', href: '#method' },
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
  rotatingWords: ['products', 'workflows', 'systems'],
  headlineTail: 'people can actually use.',
  description:
    'I turn messy requirements into clear, usable products — from the first flow to the final interface and everything in between.',
  primaryCta: "Let\u2019s work together",
  behanceCta: 'Behance',
  linkedinCta: 'LinkedIn',
};

export const projects = [
  {
    id: 'grafon-supply-chain',
    title: 'Grafon',
    role: 'UI/UX · End-to-end',
    image: '/projects/grafon.jpg',
    imageAlt: 'Grafon supply chain simulator UI',
    blurb:
      'Designed a supply-chain simulator that helps operations teams map logistics, explore scenarios, and make complex workflows easier to understand.',
    meta: [
      { icon: 'audience' as const, text: 'Ops teams · B2B logistics' },
      { icon: 'result' as const, text: 'Faster scenarios, clearer flows' },
    ],
    href: '/case-study/grafon-supply-chain',
    internal: true,
  },
  {
    id: 'tradedungeon-uiux',
    title: 'TradeDungeon',
    role: 'UI/UX · End-to-end',
    image: '/projects/tradedungeon.jpg',
    imageAlt: 'TradeDungeon trading product UI',
    blurb:
      'Redesigned trading flows around clarity and trust, helping players understand what they\u2019re getting into before committing to a trade.',
    meta: [
      { icon: 'audience' as const, text: 'Gamers · peer-to-peer trade' },
      { icon: 'result' as const, text: 'Clearer trust before checkout' },
    ],
    href: '/case-study/tradedungeon-uiux',
    internal: true,
  },
  {
    id: 'dataflower-baas',
    title: 'Dataflower',
    role: 'UI/UX · End-to-end',
    image: '/projects/dataflower.png',
    imageAlt: 'Dataflower backend-as-a-service platform UI',
    blurb:
      'Designed dashboards and onboarding that make API setup easier to understand — helping developers get from setup to their first successful call with less guesswork.',
    meta: [
      { icon: 'audience' as const, text: 'Developers · BaaS platform' },
      { icon: 'result' as const, text: 'Faster first API success' },
    ],
    href: '/case-study/dataflower-baas',
    internal: true,
  },
  {
    id: 'powerion-energy',
    title: 'Powerion',
    role: 'UI/UX · End-to-end',
    image: '/projects/powerion.png',
    imageAlt: 'Powerion energy management platform UI',
    blurb:
      'Designed an energy monitoring experience that brings usage and impact into one clear view, so operators can spot what matters and act faster.',
    meta: [
      { icon: 'audience' as const, text: 'Operators · energy ops' },
      { icon: 'result' as const, text: 'Signal → action in one view' },
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
  title: 'What I bring to the table.',
  body:
    'I design digital products from the messy first idea to the polished final interface. That means figuring out the problem, shaping the experience, building the UI, creating reusable patterns, and working closely with developers to get it right.',
};

export const expertise = [
  {
    icon: 'product-ui' as const,
    title: 'Product UI/UX',
    body: 'I turn requirements and user needs into flows and interfaces that are clear, practical, and easy to use.',
  },
  {
    icon: 'design-systems' as const,
    title: 'Design systems',
    body: 'I build reusable components and patterns that keep products consistent without slowing the team down.',
  },
  {
    icon: 'prototyping' as const,
    title: 'Prototyping & validation',
    body: 'I prototype ideas early, test the important parts, and use what I learn before the team commits to a direction.',
  },
  {
    icon: 'handoff' as const,
    title: 'Handoff & build support',
    body: 'I stay involved beyond the design file — clarifying details, checking implementation, and helping the final product match the original intent.',
  },
];

export const methodIntro = {
  title: 'How I take an idea from messy to shipped.',
  body:
    "There\u2019s no magic five-step formula. Every project is different, but I usually move through these stages — learning, shaping, testing, and refining as we go.",
};

export const method = [
  {
    phase: '01',
    icon: 'discover' as const,
    title: 'Discover',
    body: "Understand the users, the product, and what we're trying to solve.",
  },
  {
    phase: '02',
    icon: 'define' as const,
    title: 'Define',
    body: "Turn what we learned into a clear problem and direction.",
  },
  {
    phase: '03',
    icon: 'design' as const,
    title: 'Design',
    body: 'Explore the flows, interactions, and interface.',
  },
  {
    phase: '04',
    icon: 'validate' as const,
    title: 'Validate',
    body: "Test the important parts, challenge assumptions, and refine.",
  },
  {
    phase: '05',
    icon: 'build' as const,
    title: 'Build',
    body: 'Work closely with developers and make sure the design works in the real product.',
  },
  {
    phase: '06',
    icon: 'ship' as const,
    title: 'Ship',
    body: 'Launch, learn from real usage, and improve where needed.',
  },
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
    a: 'I can take a messy problem and turn it into a clearer product experience — from research and UX flows to high-fidelity UI, prototypes, systems, and handoff.',
  },
  {
    q: 'What kind of problems do you solve?',
    a: "Usually the ones where users get stuck, products feel harder than they should, or teams aren't quite aligned on what they're building.",
  },
  {
    q: 'What are your strongest areas?',
    a: 'Product thinking, UX flows, high-fidelity UI, design systems, prototyping, and turning complex requirements into something the team can actually work with.',
  },
  {
    q: 'How do you work with PMs and engineers?',
    a: 'Early and often. I like getting aligned before the design gets too far, sharing work as it develops, and staying available when the design moves into code.',
  },
  {
    q: 'What roles are you looking for?',
    a: "Full-time UI/UX and product design roles, particularly with teams building web products. I'm also open to selective project work when there's a good fit.",
  },
  {
    q: 'How do you use AI in your design process?',
    a: 'As a tool, not a decision-maker. I use it to speed up research synthesis, exploration, documentation, and iteration — but the design decisions still come from the problem, the users, and the context.',
  },
  {
    q: 'How can you help my team?',
    a: 'I can help make the problem clearer, simplify the experience, build the interface, create reusable patterns, and work with engineering to get the final product shipped.',
  },
];

export const contactIntro = {
  kicker: 'CONTACT',
  titleLine1: 'Have a product problem to solve?',
  titleLine2: "Let\u2019s talk.",
  body: 'I\u2019m open to full-time product UI/UX roles and a small number of projects where I can make a real contribution. Tell me what you\u2019re building, who it\u2019s for, and where you\u2019re stuck. I\u2019ll get back to you within 24 hours.',
};
