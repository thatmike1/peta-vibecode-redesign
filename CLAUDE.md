# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # TypeScript check + Vite production build
npm run lint      # ESLint
npm run preview   # preview production build locally
```

No test suite is configured.

## Architecture

This is a **personal portfolio website** for Petr Mikeska, built as a single-page React app.

### Data flow

All content (text, experience, skills, etc.) lives in **`src/data/content.ts`** as typed exported arrays. Sections import directly from there — no API calls, no state management. To change any displayed content, edit `content.ts`.

### Page structure

`src/pages/v1-original.tsx` is the sole page — it composes all section components in order. `App.tsx` renders it directly.

Sections are in `src/components/sections/`. Each section is a self-contained component that imports its data slice from `content.ts`. The page order matches the nav order in `src/components/navigation.tsx`.

### Styling

Tailwind CSS v4 with custom design tokens defined in `src/index.css` under `@theme inline`. Key custom colors:
- `topo` — primary green accent (oklch 0.38 0.09 165)
- `terracotta` — secondary orange accent
- `hero-bg` / `hero-text` — dark hero section palette
- `parchment-dark` — off-white section background

Fonts: `font-sans` = Space Grotesk, `font-serif` = Instrument Serif.

### Conventions (from README)

- Kebab-case filenames (`experience-section.tsx`, not `ExperienceSection.tsx`)
- `.ts` for non-JSX, `.tsx` only when returning JSX
- No `any` types (ESLint errors on `eslint-plugin-react-hooks`)
- Path alias `@/` maps to `src/`
