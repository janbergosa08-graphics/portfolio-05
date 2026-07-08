/** Case study pages — problem → process → outcome (Behance-sourced) */
import { caseStudyShowcase } from './constants'

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
      heroImage: '/projects/grafon-supply-chain.webp',
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
          'Grafon helps teams visualize multi-step supply chains, logistics, and operational workflows through an interactive simulator.',
        fields: [
          { label: 'Product', value: 'Grafon — supply chain & process simulator (web app)' },
          { label: 'Platform', value: 'Responsive web — desktop, tablet, mobile' },
          { label: 'Problem', value: 'Complex operational flows were hard to read in static docs and dense dashboards' },
          { label: 'Process', value: 'Mapped core user tasks, prototyped flow-first layouts, and validated hierarchy for first-time users' },
          { label: 'Decision', value: 'Placed simulation controls beside the visual flow and replaced raw status tables with scannable summaries' },
          { label: 'Result', value: 'Users can orient faster, understand cause/effect earlier, and navigate process states with less friction' },
        ],
        body: [
          'The case study reframes Grafon as a clear product narrative: the challenge, the UI decisions made, and the product-level outcomes those decisions unlocked.',
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
          'Complex flows are hard to communicate in spreadsheets and static docs — users needed a simulator that feels approachable, not enterprise-heavy.',
        fields: [
          { label: 'Pain', value: 'Multi-step processes were difficult to read, share, and stress-test' },
          { label: 'Risk', value: 'Dense data views could intimidate non-technical business users' },
          { label: 'Need', value: 'Clear hierarchy between mapping, simulation, and results' },
        ],
        body: [
          'Every screen had to answer: where am I in the flow, what can I change here, and what does the outcome look like?',
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
          { label: 'Brand', text: 'Custom visuals and identity that reflect Grafon’s simulator personality.' },
          { label: 'Content UX', text: 'Flows and copy aligned to user tasks, engagement, and readability.' },
          { label: 'Responsive', text: 'Consistent usability and visual quality across breakpoints.' },
          { label: 'Hierarchy', text: 'Typography, spacing, and contrast to guide attention through dense flows.' },
          { label: 'Modular', text: 'Reusable UI patterns to support customization and future features.' },
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
          { label: 'Patterns', value: 'Simulation canvas, control panels, status summaries, step navigation' },
          { label: 'System', value: 'Grid-based layouts, component library, responsive breakpoints' },
        ],
        body: [
          'Simulation controls stay adjacent to the visual flow so cause and effect remain visible. Status and outcomes use scannable summaries instead of raw tables wherever possible.',
        ],
      },
      {
        id: 'outcomes',
        shortLabel: 'Outcomes',
        heading: 'Measurable outcomes',
        icon: 'Zap',
        badge: 'Impact',
        items: [
          { label: 'Consistency', text: 'Visual and interaction consistency maintained across all screen sizes.' },
          { label: 'Clarity', text: 'Improved content clarity through responsive layout and hierarchy adjustments.' },
          { label: 'Efficiency', text: 'Reduced customization effort via modular, reusable components.' },
          { label: 'System', text: 'Delivered integrated design system spanning visuals, UX, and responsive web.' },
        ],
      },
      {
        id: 'reflection',
        shortLabel: 'Reflection',
        heading: 'What I’d do again',
        icon: 'BookOpen',
        badge: 'Learnings',
        body: [
          'Treating the simulator as a narrative — not a dashboard — kept business users oriented. Pairing visual flow with lightweight controls reduced cognitive load more than adding explanatory copy alone.',
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
      heroImage: '/projects/tradedungeon-uiux.webp',
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
          { label: 'Site', value: 'https://tradedungeon.com/' },
          { label: 'Problem', value: 'Players hesitated to trade because the flow did not clearly communicate trust and transaction states' },
          { label: 'Process', value: 'Audited trade journeys, simplified registration-to-listing steps, and aligned copy with user intent at each stage' },
          { label: 'Decision', value: 'Prioritized trust signals, step-based onboarding, and consistent status language across account and trade screens' },
          { label: 'Result', value: 'The experience becomes easier to trust and scan, especially for first-time users evaluating whether to transact' },
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
          'Peer-to-peer game trading often feels risky — the UI had to earn trust before asking users to list or exchange items.',
        fields: [
          { label: 'Trust', value: 'Users hesitate without visible security signals and clear process steps' },
          { label: 'Complexity', value: 'Multiple flows (browse, list, trade, account) had to feel connected' },
          { label: 'Tone', value: 'Gaming audience expects energy without sacrificing readability' },
        ],
        body: [
          'The interface needed to balance excitement with clarity — every CTA had to explain what happens next and why it is safe.',
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
          { label: 'Trust-first', text: 'Security and process transparency surfaced early in the journey.' },
          { label: 'Flow clarity', text: 'Registration, listing, and trade paths use progressive disclosure.' },
          { label: 'Responsive', text: 'Readable typography and spacing preserved on small screens.' },
          { label: 'Modular', text: 'Scalable components for future features and game-community expansions.' },
        ],
      },
      {
        id: 'design',
        shortLabel: 'Design',
        heading: 'Key design decisions',
        icon: 'Rocket',
        badge: 'Execution',
        fields: [
          { label: 'Tools', value: 'Figma, Adobe Illustrator, Adobe Photoshop' },
          { label: 'Patterns', value: 'Hero value props, feature grids, step-based onboarding, trade status cards' },
          { label: 'Visual', value: 'High-contrast CTAs with gaming-adjacent atmosphere without hurting WCAG targets' },
        ],
        body: [
          'Feature sections lead with outcomes (safe trades, fast listing) before mechanics. Account and trade states use consistent status language so users always know where a transaction stands.',
        ],
      },
      {
        id: 'outcomes',
        shortLabel: 'Outcomes',
        heading: 'Measurable outcomes',
        icon: 'Zap',
        badge: 'Impact',
        items: [
          { label: 'Consistency', text: 'Visual and usability parity across desktop, tablet, and mobile.' },
          { label: 'Clarity', text: 'Improved content scannability through responsive hierarchy.' },
          { label: 'Efficiency', text: 'Modular components reduced effort for future page variants.' },
          { label: 'Handoff', text: 'Complete system integrating visuals, UX, and responsive specifications.' },
        ],
      },
      {
        id: 'reflection',
        shortLabel: 'Reflection',
        heading: 'What I’d do again',
        icon: 'BookOpen',
        badge: 'Learnings',
        body: [
          'Leading with trust signals (process transparency, support access) converted better than leading with feature breadth. For gaming products, energy in marketing surfaces and calm in transaction flows is the right split.',
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
      heroImage: '/projects/dataflower-baas.webp',
    },
    contactEmail: 'janbergosa.graphics@gmail.com',
    cardTeaser:
      'Developer-first BaaS dashboards that make backend setup legible in under two minutes.',
    nextTeaser: 'Supply-chain simulation UI that makes complex logistics flows visual and actionable.',
    sections: [
      {
        id: 'overview',
        shortLabel: 'Overview',
        heading: 'Project overview',
        icon: 'Target',
        badge: 'Overview',
        summary:
          'Dataflower is a Backend-as-a-Service platform with plug-and-play APIs, secure storage, authentication, and scalable services for data-intensive applications.',
        fields: [
          { label: 'Product', value: 'Dataflower BaaS — developer platform & admin dashboard' },
          { label: 'Site', value: 'https://dataflower.io/' },
          { label: 'Problem', value: 'The platform was powerful but cognitively heavy for first-login users and evaluators' },
          { label: 'Process', value: 'Benchmarked leading BaaS dashboards, mapped critical setup paths, and reduced visual noise in high-density screens' },
          { label: 'Decision', value: 'Used status-first IA, progressive disclosure for setup tasks, and reusable dashboard patterns for consistency' },
          { label: 'Result', value: 'Core actions are easier to discover, backend complexity feels more manageable, and onboarding intent is clearer' },
        ],
        body: [
          'The updated narrative emphasizes a technical UX arc: where users got stuck, what structure changed, and how the revised interface improved product comprehension.',
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
          'A powerful backend tool that looked intimidating on first login — high cognitive load and unclear next steps.',
        fields: [
          { label: 'Business', value: 'Increase trial-to-activation and reduce support burden' },
          { label: 'User pain', value: 'Developers could not find core actions or read system status quickly' },
          { label: 'Constraint', value: 'Dense tables and multi-step API setup could not be removed — only structured' },
        ],
        body: [
          'Stakeholders needed an interface that felt enterprise-ready without feeling enterprise-heavy. Every screen answers: what can I do here, and what should I do next?',
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
          { label: 'Tools', value: 'Figma, Adobe Illustrator, Adobe Photoshop' },
          { label: 'IA', value: 'Status-first dashboard landing, then drill-down into configuration' },
          { label: 'Patterns', value: 'Service health cards, API key flows, data tables with row actions' },
        ],
        body: [
          'Compared against Firebase Console, Supabase, and Vercel dashboard patterns. Users scan status first, then configure — so overview screens prioritize health and alerts before deep settings.',
        ],
      },
      {
        id: 'outcomes',
        shortLabel: 'Outcomes',
        heading: 'Measurable outcomes',
        icon: 'Zap',
        badge: 'Impact',
        items: [
          { label: 'Consistency', text: 'Unified visual language across marketing and product surfaces.' },
          { label: 'Clarity', text: 'Reduced perceived complexity through hierarchy and progressive disclosure.' },
          { label: 'Efficiency', text: 'Reusable dashboard components accelerated new screen design.' },
          { label: 'System', text: 'Complete design system integrating visuals, UX, and responsive specs.' },
        ],
      },
      {
        id: 'reflection',
        shortLabel: 'Reflection',
        heading: 'What I’d do again',
        icon: 'BookOpen',
        badge: 'Learnings',
        body: [
          'For technical products, “what should I do next” is a design deliverable — not copywriting alone. Empty states and onboarding checklists did more for activation than adding feature marketing on the dashboard.',
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
