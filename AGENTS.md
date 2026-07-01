# AGENTS — Portfolio-05

## Project Context
UI/UX designer portfolio website. Single-page, dark theme, scroll-driven storytelling. Built with React + Vite + Tailwind CSS.

## Tech Stack
- React 19 (JSX components)
- Vite 5 (dev server + build)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion (section animations, scroll transforms)
- Lucide React (icons in Workflow)
- Plus Jakarta Sans (Google Fonts)

## Commands
- `npm run dev` — start dev server on port 3000
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Structure
- `index.html` — HTML shell, font link, favicon
- `src/main.jsx` — React entry point
- `src/App.jsx` — root layout, global state, section wiring
- `src/index.css` — design tokens, glass system, component styles (+ Tailwind)
- `src/styles/glass-highlight.css` — glass mouse-follow border (kept separate for Tailwind compat)
- `src/components/` — section components (`Hero`, `Nav`, `ContactModal`, etc.)
- `src/data/constants.js` — static content (nav, projects, FAQ, process steps)
- `src/hooks/` — shared hooks (`useReducedMotion`, `useGlassHighlight`, `useCursorSpotlight`)
- `public/` — static assets (logo, favicon) served at `/`
- `Docs/` — design documentation
- `Prompts/` — AI generation prompts

## Conventions
- Component-based React; no router (single page)
- Content lives in `constants.js`, not hardcoded in components
- Framer Motion for reveals; `prefers-reduced-motion` respected via hooks
- Intersection Observer in `App.jsx` for active nav section
- Contact form uses `mailto:` — no backend
- Glass hover highlight and cursor spotlight via React hooks in `App.jsx`

## Design Principles
See `CLAUDE.md` for the design constitution (clarity, business value, purposeful motion).
