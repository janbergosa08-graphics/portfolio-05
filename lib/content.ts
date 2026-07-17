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
  headlineLead: 'Designing',
  rotatingWords: ['solutions', 'experiences', 'products'],
  headlineTail: 'that solve real problems.',
  description:
    'I turn user research, interface design, and design systems into clear digital experiences — reducing friction, improving usability, and helping product teams ship with confidence.',
  primaryCta: 'Get in Touch',
};

export const projects = [
  {
    id: 'grafon-supply-chain',
    date: 'Case Study',
    title: 'Grafon – Supply Chain Simulator Web App',
    href: '/case-study/grafon-supply-chain',
    internal: true,
  },
  {
    id: 'tradedungeon-uiux',
    date: 'Case Study',
    title: 'TradeDungeon – UI/UX Design',
    href: '/case-study/tradedungeon-uiux',
    internal: true,
  },
  {
    id: 'dataflower-baas',
    date: 'Case Study',
    title: 'Dataflower – Backend-as-a-Service Platform',
    href: '/case-study/dataflower-baas',
    internal: true,
  },
  {
    id: 'powerion-energy',
    date: 'Dashboard',
    title: 'Powerion – Energy Management Platform',
    href: 'https://www.behance.net/gallery/232269087/Powerion-Energy-Management-Platform',
    internal: false,
  },
];

export const resourceLinks = [
  { label: 'Legal Notice', href: '/legal' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Behance', href: 'https://www.behance.net/janbergosa', external: true },
  { label: 'Resume', href: '/resume/marjan-bergosa-ui-ux-design-resume.pdf', download: 'Marjan-Bergosa-UI-UX-Design-Resume.pdf' },
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
    q: 'What can you contribute to a product team?',
    a: 'I bridge user needs and business goals — turning ambiguity into shipped interfaces that reduce friction and move metrics. My work spans research through launch-ready UI, with a bias for clarity, systems thinking, and outcomes teams can measure.',
    points: [
      { label: 'Product UX', sub: 'Flows, information architecture, and interface decisions tied to goals' },
      { label: 'Design systems', sub: 'Tokens, components, and patterns that stay consistent as the product grows' },
      { label: 'Rapid prototyping', sub: 'Clickable validation before engineering invests build time' },
      { label: 'Dev-ready handoff', sub: 'Clear specs, assets, and front-end implementation support' },
      { label: 'Visual craft', sub: 'Brand, graphic, and illustration support when the product needs it' },
      { label: 'Accelerated delivery', sub: 'Faster research, ideation, documentation, and iteration cycles' },
    ],
    note: 'Every engagement starts with the problem your team is solving — not a fixed service menu.',
  },
  {
    q: 'What are your core strengths?',
    a: 'I combine strategic product thinking with hands-on visual execution. That means fewer handoffs, faster alignment, and interfaces that hold up from first prototype through production.',
    points: [
      { label: 'Problem framing', sub: 'Map the friction before designing the screen' },
      { label: 'Research synthesis', sub: 'Turn interviews and data into actionable product direction' },
      { label: 'High-fidelity UI', sub: 'Polished interfaces built around real technical and business constraints' },
      { label: 'Cross-platform thinking', sub: 'Web, dashboard, and responsive patterns that stay coherent' },
      { label: 'Brand alignment', sub: 'Consistent identity across product touchpoints' },
      { label: 'Execution speed', sub: 'More time spent on user and business problems, less on rework' },
    ],
    note: 'See the Projects and Method sections for how this shows up in shipped work.',
  },
  {
    q: 'How do you work day to day?',
    a: 'I follow a structured loop that keeps product, design, and engineering aligned — with clear checkpoints so nothing ships on assumption alone.',
    points: [
      { label: 'Align', sub: 'Goals, users, constraints, and success metrics' },
      { label: 'Research', sub: 'Evidence before pixels; validate early with stakeholders and users' },
      { label: 'Design', sub: 'Wireframes to high-fidelity UI with system consistency' },
      { label: 'Prototype', sub: 'Test flows before full engineering investment' },
      { label: 'Build', sub: 'Partner on implementation and design QA' },
      { label: 'Measure', sub: 'Iterate from analytics, feedback, and conversion signals' },
    ],
    note: 'The rhythm adapts to your team’s sprint cadence — async-friendly docs and prototypes included.',
  },
  {
    q: 'How do you use AI in your work?',
    a: 'I use AI to accelerate research, ideation, documentation, and implementation, so more time goes to solving user and business problems. Strategy, judgment, prioritization, and accountability stay human-led.',
    points: [
      { label: 'Research synthesis', sub: 'Faster clustering of insights, patterns, and opportunity areas' },
      { label: 'Ideation support', sub: 'More options explored before locking a direction' },
      { label: 'Documentation speed', sub: 'Clearer specs, flows, and handoff notes in less time' },
      { label: 'Implementation aid', sub: 'Quicker iteration between design intent and working UI' },
    ],
    note: 'Tooling flexes to your team’s stack; the workflow and design judgment stay consistent.',
  },
  {
    q: 'What roles are you open to?',
    a: 'I’m exploring opportunities where design directly impacts product outcomes — embedded with teams that value rigor, velocity, and clear communication.',
    points: [
      { label: 'Full-time UI/UX', sub: 'Long-term ownership of product experience quality' },
      { label: 'Product design', sub: 'End-to-end work from discovery through launch and iteration' },
      { label: 'In-house teams', sub: 'Close collaboration with product and engineering' },
      { label: 'Remote / hybrid', sub: 'Async-friendly collaboration across time zones' },
      { label: 'Contract-to-hire', sub: 'Open when the product problem and team fit are strong' },
    ],
    note: 'Open to discussing fit and timing — reach out via Let’s Talk or the contact form.',
  },
  {
    q: 'How do you collaborate with PMs and engineers?',
    a: 'Strong products come from shared context, not thrown-over-the-wall deliverables. I keep communication tight, documentation clear, and feedback loops short.',
    points: [
      { label: 'Shared goals', sub: 'Same language on users, metrics, and scope' },
      { label: 'Async clarity', sub: 'Written specs, annotated files, and decision logs' },
      { label: 'Live prototypes', sub: 'Clickable flows for alignment before build' },
      { label: 'Implementation partnership', sub: 'Front-end support and design QA in code' },
      { label: 'Constructive critique', sub: 'Direct feedback focused on outcomes, not preference' },
      { label: 'Iteration discipline', sub: 'Ship, measure, refine — not endless polish' },
    ],
    note: 'I respond within 24 hours. A short intro about your team and the problem space is enough to start.',
  },
  {
    q: 'How can I help the team?',
    a: 'On product work, I help teams move from unclear requirements to usable interfaces — so delivery is clearer, faster, and less dependent on rework.',
    points: [
      { label: 'Clarify the problem', sub: 'Identify where users stall and what success looks like for the business' },
      { label: 'Define the path', sub: 'Map flows, priorities, and interface decisions before build starts' },
      { label: 'Design the system', sub: 'Create UI patterns and components the team can reuse' },
      { label: 'Support the handoff', sub: 'Give engineering the specs, states, and edge cases they need' },
      { label: 'Stay through launch', sub: 'Help with QA, polish, and post-launch iteration tied to real usage' },
    ],
    note: 'Best fit when the team needs a designer who can own UX quality and collaborate tightly with product and engineering.',
  },
];
