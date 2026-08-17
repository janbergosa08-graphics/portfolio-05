/** Case study pages — problem → process → outcome (Behance-sourced) */
import { caseStudyShowcase } from './constants.js';

const DISCLAIMER =
  'Created while part of Odysse.io. Interfaces and visuals were designed from scratch; this page highlights my UI/UX contributions for demonstration purposes.';

function buildGroups(sections) {
  return [
    {
      label: 'Context',
      items: sections.filter((s) =>
        ['overview', 'audience', 'problem'].includes(s.id),
      ),
    },
    {
      label: 'Process',
      items: sections.filter((s) =>
        ['role', 'approach', 'design'].includes(s.id),
      ),
    },
    {
      label: 'Results',
      items: sections.filter((s) =>
        ['outcomes', 'reflection'].includes(s.id),
      ),
    },
  ]
}

export const caseStudiesBySlug = {
  'grafon-supply-chain': {
    slug: 'grafon-supply-chain',
    page: {
      kicker: 'Case study',
      title: 'Grafon — Supply Chain Simulator Web App',
      subtitle:
        'A web platform that turns complex supply-chain and logistics flows into visual, interactive simulations — so business users can map processes and spot bottlenecks without reading dense documentation.',
      breadcrumb: 'Grafon',
      icon: 'Workflow',
      version: '1.0',
      lastUpdated: 'November 2025',
      status: 'Shipped',
      behanceUrl:
        'https://www.behance.net/gallery/239508565/Grafon-Supply-Chain-Simulator-Web-App',
    },
    contactEmail: 'janbergosa.graphics@gmail.com',
    cardTeaser:
      'Supply-chain simulation UI that makes complex logistics flows visual and actionable.',
    nextTeaser: 'Secure in-game trading flows for gamers who need trust before they transact.',
    sections: [
      {
        id: 'overview',
        shortLabel: 'Overview',
        heading: 'Project overview',
        icon: 'Target',
        badge: 'Overview',
        summary:
          'Grafon converts multi-step supply-chain and logistics processes into an interactive simulator so teams can explore cause and effect without reading dense documentation.',
        fields: [
          { label: 'Product', value: 'Grafon — supply-chain & process simulator (web app)' },
          { label: 'Platform', value: 'Responsive web (desktop, tablet, mobile)' },
          { label: 'Role', value: 'Lead UI/UX — interface, visual system, & component patterns' },
          { label: 'Problem', value: 'Multi-step processes were difficult to read, share, and stress-test in static views' },
          { label: 'Approach', value: 'Product analysis → flow-first wireframes → iterative UI & responsive refinements' },
          { label: 'Outcome', value: 'Clearer process orientation, faster situational awareness, and reusable UI patterns' },
        ],
        body: [
          'This case focuses on design decisions that made complex operational flows readable and actionable — not on visual polish alone.',
          DISCLAIMER,
        ],
      },
      {
        id: 'audience',
        shortLabel: 'Audience',
        heading: 'Target audience',
        icon: 'MessageSquare',
        badge: 'Users',
        items: [
          {
            label: 'Operations',
            text: 'Business users managing supply chains, logistics, or day-to-day operational workflows.',
          },
          {
            label: 'Analysis',
            text: 'Analysts and managers who need visual tools to track processes and identify bottlenecks.',
          },
          {
            label: 'Teams',
            text: 'Companies seeking an easy-to-use, interactive platform for flow visualization and simulation.',
          },
        ],
      },
      {
        id: 'problem',
        shortLabel: 'Problem',
        heading: 'The challenge',
        icon: 'Brain',
        badge: 'Challenge',
        summary:
          'Users could not quickly understand multi-step processes or the effect of changing parameters — this limited collaboration and confidence when exploring scenarios.',
        fields: [
          { label: 'Confusion', value: 'Process state and cause/effect were separated from controls and outcomes' },
          { label: 'Adoption', value: 'Non-technical users avoided simulators that resembled dashboards' },
          { label: 'Need', value: 'A low-friction way to map, edit, and evaluate process changes' },
        ],
        body: [
          'Design had to make state visible, keep controls near visual context, and present outcomes in concise summaries so teams could iterate confidently.',
        ],
      },
      {
        id: 'role',
        shortLabel: 'Role',
        heading: 'Role & responsibilities',
        icon: 'Layout',
        badge: 'Ownership',
        items: [
          { label: 'UI/UX', text: 'Led full interface design from concept through responsive layouts.' },
          { label: 'Visual', text: 'Designed assets, illustrations, backgrounds, and logo for cohesive brand identity.' },
          { label: 'Content', text: 'Structured website copy around strategic messaging and user engagement.' },
          { label: 'System', text: 'Built reusable components and scalable patterns for future product expansion.' },
          { label: 'Handoff', text: 'Prepared organized, developer-ready files with documentation.' },
        ],
      },
      {
        id: 'approach',
        shortLabel: 'Approach',
        heading: 'Design approach',
        icon: 'Sparkles',
        badge: 'Strategy',
        items: [
          { label: 'Product analysis', text: 'Reviewed user tasks, existing flows, and comparable simulation tools.' },
          { label: 'Flow-first', text: 'Prioritized wireframes that placed controls adjacent to the visual canvas.' },
          { label: 'Iterate', text: 'Validated hierarchy and language with stakeholders and design reviews.' },
          { label: 'System', text: 'Built modular components to reduce future variation and speed implementation.' },
        ],
      },
      {
        id: 'design',
        shortLabel: 'Design',
        heading: 'Key design decisions',
        icon: 'Rocket',
        badge: 'Execution',
        fields: [
          { label: 'Decision 01', value: 'Keep simulation controls adjacent to the visual canvas' },
          { label: 'Reason', value: 'Users need immediate cause/effect feedback when editing process parameters' },
          { label: 'Result', value: 'Faster orientation and more confident scenario testing' },
          { label: 'Decision 02', value: 'Replace raw status tables with scannable summaries' },
          { label: 'Reason 02', value: 'Dense tables hid the signal for non-technical users' },
        ],
        body: [
          'These decisions focused the UI on action and comprehension: fewer eyes-on-tables, more eyes-on-flow.',
        ],
      },
      {
        id: 'outcomes',
        shortLabel: 'Outcomes',
        heading: 'Outcomes',
        icon: 'Zap',
        badge: 'Impact',
        items: [
          { label: 'Orientation', text: 'Users can understand where they are in a process without cross-referencing docs.' },
          { label: 'Comprehension', text: 'Cause/effect are visible during editing, reducing trial-and-error.' },
          { label: 'Maintainability', text: 'Reusable components reduced variation and sped up new screens.' },
        ],
      },
      {
        id: 'reflection',
        shortLabel: 'Reflection',
        heading: 'Reflection',
        icon: 'BookOpen',
        badge: 'Learnings',
        body: [
          'What worked: Treating the simulator as a narrative kept users oriented and reduced cognitive load.',
          "What I'd improve: Validate onboarding and first-time scenario testing with representative users earlier to catch hesitation points.",
          'Next: Add lightweight walkthroughs for first-time exploration and instrument key interactions for quantitative feedback.',
        ],
      },
    ],
  },

  'tradedungeon-uiux': {
    slug: 'tradedungeon-uiux',
    page: {
      kicker: 'Case study',
      title: 'TradeDungeon — UI/UX Design',
      subtitle:
        'A trading platform interface built to communicate trust, guide registration and listing flows, and make in-game item exchange feel secure and straightforward.',
      breadcrumb: 'TradeDungeon',
      icon: 'Target',
      version: '1.0',
      lastUpdated: 'August 2025',
      status: 'Shipped',
      behanceUrl:
        'https://www.behance.net/gallery/232273475/Tradedungeon-UIUX-Design',
      websiteUrl: 'https://tradedungeon.com/',
    },
    contactEmail: 'janbergosa.graphics@gmail.com',
    cardTeaser:
      'Secure in-game trading flows for gamers who need trust before they transact.',
    nextTeaser: 'Developer-first BaaS dashboards that make backend setup legible in under two minutes.',
    sections: [
      {
        id: 'overview',
        shortLabel: 'Overview',
        heading: 'Project overview',
        icon: 'Target',
        badge: 'Overview',
        summary:
          'TradeDungeon streamlines in-game item trading with a secure, intuitive environment for transactions between players.',
        fields: [
          { label: 'Product', value: 'TradeDungeon — in-game item trading platform (marketing + product UI)' },
          { label: 'Platform', value: 'Responsive web & marketing surfaces' },
          { label: 'Role', value: 'UI/UX & visual design — flows, onboarding, status language' },
          { label: 'Problem', value: 'Users hesitated because trade states and security signals were unclear' },
          { label: 'Approach', value: 'Audit trade journeys → reduce friction in registration/listing → surface trust before commitment' },
          { label: 'Outcome', value: 'Clearer trade states, stronger trust signals, and modular components for future features' },
        ],
        body: [
          'This case now highlights how each design decision supports safer, clearer user behavior from onboarding through completed trade actions.',
          DISCLAIMER,
        ],
      },
      {
        id: 'audience',
        shortLabel: 'Audience',
        heading: 'Target audience',
        icon: 'MessageSquare',
        badge: 'Users',
        items: [
          {
            label: 'Traders',
            text: 'Gamers and digital collectors seeking a reliable platform to trade in-game items.',
          },
          {
            label: 'Communities',
            text: 'Players across game communities who want transparent, safe exchange tools.',
          },
          {
            label: 'New users',
            text: 'Users who need a structured trading experience with clear value props and support paths.',
          },
        ],
      },
      {
        id: 'problem',
        shortLabel: 'Problem',
        heading: 'The challenge',
        icon: 'Brain',
        badge: 'Challenge',
        summary:
          'The primary issue was lack of visible trust and unclear transaction states — users avoided listing or committing to trades without confidence.',
        fields: [
          { label: 'Trust gap', value: 'Security and process clarity were not visible near transaction actions' },
          { label: 'Fragmented flows', value: 'Registration, listing, and trade flows felt disconnected' },
          { label: 'Scanning', value: 'Users needed concise status language to scan trade progress' },
        ],
        body: [
          'Design needed to surface trust before commitment, unify status language across screens, and make next steps explicit at each stage.',
        ],
      },
      {
        id: 'role',
        shortLabel: 'Role',
        heading: 'Role & responsibilities',
        icon: 'Layout',
        badge: 'Ownership',
        items: [
          { label: 'Structure', text: 'Designed full website architecture across desktop, tablet, and mobile.' },
          { label: 'Visual', text: 'Created assets and reusable UI components for theme scalability.' },
          { label: 'UX', text: 'Applied navigation, content flow, and readability fundamentals.' },
          { label: 'Responsive', text: 'Ensured layouts stayed consistent and usable at every breakpoint.' },
          { label: 'Handoff', text: 'Prepared designs with clear layout systems for development.' },
        ],
      },
      {
        id: 'approach',
        shortLabel: 'Approach',
        heading: 'Design approach',
        icon: 'Sparkles',
        badge: 'Strategy',
        items: [
          { label: 'Trust-first', text: 'Surface security cues and process steps close to primary actions.' },
          { label: 'Progressive disclosure', text: 'Break onboarding and listing into focused, scannable steps.' },
          { label: 'Consistent language', text: 'Standardize status labels across account and trade screens.' },
          { label: 'Modular UI', text: 'Create reusable trade-status and listing components for easy extension.' },
        ],
      },
      {
        id: 'design',
        shortLabel: 'Design',
        heading: 'Key design decisions',
        icon: 'Rocket',
        badge: 'Execution',
        fields: [
          { label: 'Decision 01', value: 'Surface trust before commitment' },
          { label: 'Reason', value: 'Users need confidence near the action to list or accept trades' },
          { label: 'Decision 02', value: 'Unify status language across trade lifecycle' },
          { label: 'Reason 02', value: 'Consistent labels reduce user confusion when following an exchange' },
        ],
        body: [
          'These choices emphasized visible security cues, step-based onboarding, and clear transactional language to reduce perceived risk.',
        ],
      },
      {
        id: 'outcomes',
        shortLabel: 'Outcomes',
        heading: 'Outcomes',
        icon: 'Zap',
        badge: 'Impact',
        items: [
          { label: 'Trust', text: 'Trust signals are visible at decision points, reducing hesitation.' },
          { label: 'Scanability', text: 'Users can scan trade states quickly using consistent status cards.' },
          { label: 'Reusability', text: 'Trade components can be reused across marketplace variants.' },
        ],
      },
      {
        id: 'reflection',
        shortLabel: 'Reflection',
        heading: 'Reflection',
        icon: 'BookOpen',
        badge: 'Learnings',
        body: [
          'What worked: Surfacing trust cues and standardizing status language reduced user hesitation.',
          "What I'd improve: Run targeted usability tests on listing and acceptance flows to reveal micro-friction points.",
          'Next: Instrument trade funnel events and iterate on messaging for lower-funnel conversion.',
        ],
      },
    ],
  },

  'dataflower-baas': {
    slug: 'dataflower-baas',
    page: {
      kicker: 'Case study',
      title: 'Dataflower — Backend-as-a-Service Platform',
      subtitle:
        'UI/UX for a BaaS product that helps developers build and scale data-driven apps without backend overhead — from onboarding to operational dashboards.',
      breadcrumb: 'Dataflower',
      icon: 'Rocket',
      version: '1.0',
      lastUpdated: 'August 2025',
      status: 'Shipped',
      behanceUrl:
        'https://www.behance.net/gallery/232269585/Dataflower-Backend-as-a-Service-Platform',
      websiteUrl: 'https://dataflower.io/',
    },
    contactEmail: 'janbergosa.graphics@gmail.com',
    cardTeaser:
      'Developer-first BaaS dashboards that make backend setup legible in under two minutes.',
    nextTeaser: 'Energy ops dashboards that make usage and impact signals actionable at a glance.',
    sections: [
      {
        id: 'overview',
        shortLabel: 'Overview',
        heading: 'Project overview',
        icon: 'Target',
        badge: 'Overview',
        summary:
          'Dataflower is a Backend-as-a-Service platform that offers APIs, secure storage, and operational dashboards designed for developer teams.',
        fields: [
          { label: 'Product', value: 'Dataflower — BaaS & admin dashboard' },
          { label: 'Platform', value: 'Web dashboard & marketing site' },
          { label: 'Role', value: 'UI/UX — dashboard IA, onboarding flows, and component library' },
          { label: 'Problem', value: 'First-time users faced high cognitive load and unclear next steps' },
          { label: 'Approach', value: 'Benchmark → simplify onboarding → reduce visual noise in dense screens' },
          { label: 'Outcome', value: 'More discoverable core actions and clearer setup guidance' },
        ],
        body: [
          'The narrative focuses on reducing activation friction by structuring high-density information and surfacing the most important next steps for developers.',
          DISCLAIMER,
        ],
      },
      {
        id: 'audience',
        shortLabel: 'Audience',
        heading: 'Target audience',
        icon: 'MessageSquare',
        badge: 'Users',
        items: [
          {
            label: 'Developers',
            text: 'Product teams building web and mobile apps who need backend services without custom infrastructure.',
          },
          {
            label: 'Startups',
            text: 'Teams seeking rapid backend setup without extensive DevOps overhead.',
          },
          {
            label: 'Technical leads',
            text: 'Users who need scalable API integration and clear system status at a glance.',
          },
        ],
      },
      {
        id: 'problem',
        shortLabel: 'Problem',
        heading: 'The challenge',
        icon: 'Brain',
        badge: 'Challenge',
        summary:
          'The main gap was onboarding friction: developers could not quickly find core actions or understand system status during initial setup.',
        fields: [
          { label: 'Business', value: 'Reduce support burden and shorten trial-to-activation' },
          { label: 'User pain', value: 'High cognitive load on first login and unclear next steps' },
          { label: 'Constraint', value: 'Complex configuration requirements required structured, not removed, workflows' },
        ],
        body: [
          'Design focused on status-first information architecture and progressive disclosure to guide developers from discovery to activation.',
        ],
      },
      {
        id: 'role',
        shortLabel: 'Role',
        heading: 'Role & responsibilities',
        icon: 'Layout',
        badge: 'Ownership',
        items: [
          { label: 'UI/UX', text: 'Led full design from concept through responsive dashboard and marketing surfaces.' },
          { label: 'Visual', text: 'Designed illustrations, backgrounds, and logo for cohesive product identity.' },
          { label: 'Content', text: 'Structured product copy around developer needs and onboarding clarity.' },
          { label: 'System', text: 'Built reusable components and scalable design tokens.' },
          { label: 'Handoff', text: 'Developer-ready files with documentation for implementation.' },
        ],
      },
      {
        id: 'approach',
        shortLabel: 'Approach',
        heading: 'Design approach',
        icon: 'Sparkles',
        badge: 'Strategy',
        items: [
          { label: 'Developer-first', text: 'Content organized around docs access, API onboarding, and integration guides.' },
          { label: 'Technical clarity', text: 'Structured layouts and visual signals to demystify backend processes.' },
          { label: 'Responsive', text: 'Consistent usability from marketing pages through logged-in dashboards.' },
          { label: 'Modular', text: 'Component patterns ready for new services and resource types.' },
        ],
      },
      {
        id: 'design',
        shortLabel: 'Design',
        heading: 'Key design decisions',
        icon: 'Rocket',
        badge: 'Execution',
        fields: [
          { label: 'Decision 01', value: 'Status-first dashboard landing' },
          { label: 'Reason', value: 'Developers scan health and alerts before deep configuration' },
          { label: 'Decision 02', value: 'Progressive disclosure for setup tasks' },
          { label: 'Reason 02', value: 'Reduce initial cognitive load while preserving necessary controls' },
        ],
        body: [
          'The design borrows proven patterns from leading dashboards but emphasizes clear next actions and discoverability for activation flows.',
        ],
      },
      {
        id: 'outcomes',
        shortLabel: 'Outcomes',
        heading: 'Outcomes',
        icon: 'Zap',
        badge: 'Impact',
        items: [
          { label: 'Discoverability', text: 'Core actions are easier to find from the dashboard landing.' },
          { label: 'Activation', text: 'Onboarding paths clarify next steps for new users.' },
          { label: 'Scalability', text: 'Reusable patterns speed new feature pages and reduce design debt.' },
        ],
      },
      {
        id: 'reflection',
        shortLabel: 'Reflection',
        heading: 'Reflection',
        icon: 'BookOpen',
        badge: 'Learnings',
        body: [
          'What worked: Status-first IA and progressive disclosure reduced initial overwhelm.',
          "What I'd improve: Run early activation tests with new users to measure time-to-first-success and iterate on bottlenecks.",
          'Next: Add contextual help and checklist-driven onboarding to reduce support questions.',
        ],
      },
    ],
  },

  'powerion-energy': {
    slug: 'powerion-energy',
    page: {
      kicker: 'Case study',
      title: 'Powerion — Energy Management Platform',
      subtitle:
        'Corporate and product UI for an energy platform that helps users visualize usage and environmental impact in real time — and turn those signals into clearer next actions.',
      breadcrumb: 'Powerion',
      icon: 'Zap',
      version: '1.0',
      lastUpdated: 'August 2025',
      status: 'Shipped',
      behanceUrl:
        'https://www.behance.net/gallery/232269087/Powerion-Energy-Management-Platform',
      websiteUrl: 'https://powerion.eu/',
    },
    contactEmail: 'janbergosa.graphics@gmail.com',
    cardTeaser:
      'Energy ops dashboards that make usage and impact signals actionable at a glance.',
    nextTeaser: 'Supply-chain simulation UI that makes complex logistics flows visual and actionable.',
    sections: [
      {
        id: 'overview',
        shortLabel: 'Overview',
        heading: 'Project overview',
        icon: 'Target',
        badge: 'Overview',
        summary:
          'Powerion provides energy monitoring and impact dashboards that surface actionable signals and bridge sustainability messaging with operational decisions.',
        fields: [
          { label: 'Product', value: 'Powerion — energy management platform' },
          { label: 'Platform', value: 'Web dashboard & marketing site' },
          { label: 'Role', value: 'UI/UX — dashboard hierarchy, alerts, and visual language' },
          { label: 'Problem', value: 'Live energy signals were buried under charts and jargon' },
          { label: 'Approach', value: 'Signal-first hierarchy → credible metrics → actionable drill-downs' },
          { label: 'Outcome', value: 'Faster detection of anomalies and clearer next steps for operators' },
        ],
        body: [
          'This case explains how visual hierarchy and alerting reduced noise and made energy signals actionable without inventing new performance claims.',
          DISCLAIMER,
        ],
      },
      {
        id: 'audience',
        shortLabel: 'Audience',
        heading: 'Target audience',
        icon: 'MessageSquare',
        badge: 'Users',
        items: [
          {
            label: 'Operators',
            text: 'Energy-aware consumers and businesses monitoring usage and carbon footprint.',
          },
          {
            label: 'Optimizers',
            text: 'Users seeking tools for energy optimization and sustainability tracking.',
          },
          {
            label: 'Stakeholders',
            text: 'Decision-makers who need intuitive dashboards and real-time data visualization.',
          },
        ],
      },
      {
        id: 'problem',
        shortLabel: 'Problem',
        heading: 'The challenge',
        icon: 'Brain',
        badge: 'Challenge',
        summary:
          'Operators needed a clear “what needs action” layer — otherwise charts competed for attention and decision-making slowed.',
        fields: [
          { label: 'Signal', value: 'Live metrics lacked a clear action layer' },
          { label: 'Credibility', value: 'Sustainability messaging required concrete metrics, not just slogans' },
          { label: 'Continuity', value: 'Landing, onboarding, and monitoring screens needed a shared visual language' },
        ],
        body: [
          'Design emphasized immediate signals and concise next actions so operators could move from awareness to intervention quickly.',
        ],
      },
      {
        id: 'role',
        shortLabel: 'Role',
        heading: 'Role & responsibilities',
        icon: 'Layout',
        badge: 'Ownership',
        items: [
          { label: 'Structure', text: 'Designed the full website structure across desktop, tablet, and mobile.' },
          { label: 'Visual', text: 'Created visual assets and reusable UI components for theme scalability.' },
          { label: 'UX', text: 'Applied navigation, content flow, and readability fundamentals to monitoring journeys.' },
          { label: 'Responsive', text: 'Kept layouts consistent and usable across breakpoints.' },
          { label: 'Handoff', text: 'Prepared designs with clear layout systems for development.' },
        ],
      },
      {
        id: 'approach',
        shortLabel: 'Approach',
        heading: 'Design approach',
        icon: 'Sparkles',
        badge: 'Strategy',
        items: [
          { label: 'Signal-first', text: 'Surfaced usage status and alerts before deep configuration or history.' },
          { label: 'Credibility', text: 'Paired sustainability messaging with concrete metrics and operational language.' },
          { label: 'Responsive', text: 'Preserved chart and card readability on tablet and mobile.' },
          { label: 'Modular', text: 'Built reusable dashboard and marketing patterns for future energy modules.' },
        ],
      },
      {
        id: 'design',
        shortLabel: 'Design',
        heading: 'Key design decisions',
        icon: 'Rocket',
        badge: 'Execution',
        fields: [
          { label: 'Tools', value: 'Figma (layout, components, UX), Illustrator & Photoshop (assets)' },
          { label: 'Patterns', value: 'Status cards, usage charts, alert strips, impact summaries, CTA-led marketing sections' },
          { label: 'System', value: 'Grid-based layouts, reusable components, responsive breakpoints' },
        ],
        body: [
          'Overview screens prioritize health and anomalies so operators can act without hunting through dense tables. Marketing surfaces mirror the same visual system so the product feels consistent from first visit to logged-in monitoring.',
        ],
      },
      {
        id: 'outcomes',
        shortLabel: 'Outcomes',
        heading: 'Product outcomes',
        icon: 'Zap',
        badge: 'Impact',
        items: [
          { label: 'Consistency', text: 'Visual and interaction consistency across marketing and product breakpoints.' },
          { label: 'Clarity', text: 'Clearer hierarchy between live status, trends, and follow-up actions.' },
          { label: 'Efficiency', text: 'Modular components reduced effort to extend dashboard and landing variants.' },
          { label: 'System', text: 'Delivered an integrated design system spanning visuals, UX, and responsive web.' },
        ],
      },
      {
        id: 'reflection',
        shortLabel: 'Reflection',
        heading: 'What I’d do again',
        icon: 'BookOpen',
        badge: 'Learnings',
        body: [
          'For energy products, “actionable signal” beats “more charts.” Leading with what needs attention — then offering drill-down — kept both operators and sustainability stakeholders oriented without diluting either need.',
        ],
      },
    ],
  },
}

Object.values(caseStudiesBySlug).forEach((study) => {
  study.groups = buildGroups(study.sections)
})

export function getCaseStudy(slug) {
  return caseStudiesBySlug[slug] ?? null
}

export function getCaseStudyPath(slug) {
  return `/case-study/${slug}`
}

function toCaseStudyCard(slug) {
  const study = caseStudiesBySlug[slug]
  if (!study) return null
  return {
    slug,
    href: getCaseStudyPath(slug),
    title: study.page.title.split(' — ')[0],
    fullTitle: study.page.title,
    image: study.page.heroImage,
    teaser: study.cardTeaser,
  }
}

/** Other case studies on the showcase (excludes current page). */
export function getOtherCaseStudies(currentSlug) {
  return caseStudySlugs
    .filter((id) => id !== currentSlug)
    .map(toCaseStudyCard)
    .filter(Boolean)
}

export const caseStudySlugs = caseStudyShowcase.map((item) => item.id)
