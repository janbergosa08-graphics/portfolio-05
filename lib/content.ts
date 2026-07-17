export const site = {
  name: 'Jan Bergosa',
  role: 'UI UX DESIGNER',
  email: 'janbergosa.graphics@gmail.com',
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
  lines: ['While you', 'set the roadmap,', 'the only pause is the click to'],
  accent: 'approve.',
  description:
    'I combine UX strategy, visual design, AI-assisted workflows, and live implementation to turn ideas into production-ready digital products faster.',
  primaryCta: 'Get in Touch',
  secondaryCta: 'View Projects',
};

export const projects = [
  {
    id: 'dataflower-baas',
    date: 'Case Study',
    title: 'Dataflower – Backend-as-a-Service Platform',
    href: 'https://www.behance.net/gallery/232269585/Dataflower-Backend-as-a-Service-Platform',
  },
  {
    id: 'grafon-supply-chain',
    date: 'Case Study',
    title: 'Grafon – Supply Chain Simulator Web App',
    href: 'https://www.behance.net/gallery/239508565/Grafon-Supply-Chain-Simulator-Web-App',
  },
  {
    id: 'powerion-energy',
    date: 'Dashboard',
    title: 'Powerion – Energy Management Platform',
    href: 'https://www.behance.net/gallery/232269087/Powerion-Energy-Management-Platform',
  },
  {
    id: 'seafood-innovation',
    date: 'Landing',
    title: 'Seafood Innovation – Landing Page Redesign',
    href: 'https://www.behance.net/gallery/240877067/Seafood-Innovation-Landing-Page-Redesign',
  },
];

export const expertise = [
  {
    title: 'Product UI/UX',
    body: 'End-to-end interface design for web apps and dashboards — research, flows, systems, and handoff.',
  },
  {
    title: 'Design Systems',
    body: 'Scalable tokens, components, and documentation that keep product teams aligned at speed.',
  },
  {
    title: 'AI-assisted craft',
    body: 'Faster research, ideation, and documentation — with human judgment on friction and outcomes.',
  },
  {
    title: 'Implementation',
    body: 'Production-minded UI that bridges design intent and engineering reality.',
  },
];

export const method = [
  { phase: '01', title: 'Discover', body: 'Map users, friction, and business constraints.' },
  { phase: '02', title: 'Define', body: 'Lock problem framing, success metrics, and scope.' },
  { phase: '03', title: 'Design', body: 'Shape flows, hierarchy, and interface systems.' },
  { phase: '04', title: 'Validate', body: 'Pressure-test clarity with stakeholders and users.' },
  { phase: '05', title: 'Build', body: 'Support implementation with precise handoff.' },
  { phase: '06', title: 'Ship', body: 'Polish, measure, and iterate after launch.' },
];

export const philosophy = [
  { title: 'Design the flow', body: 'Start with the path users take — remove friction first.' },
  { title: 'Prove the value', body: 'Every interface decision should move a measurable outcome.' },
  { title: 'Systems over one-offs', body: 'Reusable patterns beat isolated screens.' },
  { title: 'Clarity over decoration', body: 'Minimal structure, maximum signal.' },
];

export const faqs = [
  {
    q: 'Who do you work best with?',
    a: 'Product, design, and engineering teams shipping web products, dashboards, and digital platforms that need clear UX and sharp UI execution.',
  },
  {
    q: 'How do you use AI in your process?',
    a: 'AI accelerates research synthesis, ideation, documentation, and iteration. Strategy, judgment, and accountability stay human-led.',
  },
  {
    q: 'What does engagement look like?',
    a: 'Discovery → structured UX process → interface systems → handoff. Checkpoints stay tied to user friction and launch readiness.',
  },
  {
    q: 'Do you implement as well as design?',
    a: 'Yes. I design with implementation in mind and can support live UI builds so craft survives production.',
  },
  {
    q: 'Where are you based?',
    a: 'Philippines (PHT, GMT+8). Available for remote collaboration worldwide.',
  },
];
