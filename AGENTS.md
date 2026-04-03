# AGENTS.md

## Purpose

This repository is a frontend-only Next.js app focused on landing pages and marketing websites.
The stack is:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Motion

The goal is to ship fast, polished, responsive, and SEO-friendly pages with clean UI code.

## Core Principles

- Treat this project as UI-first, not backend-driven.
- Prefer simple, readable solutions over abstractions.
- Build pages as reusable sections and small components.
- Keep the codebase easy to extend for future landing pages.
- Prioritize visual quality, responsiveness, accessibility, and SEO.

## Project Scope

- This app does not include backend or server business logic.
- Do not introduce API layers, server actions, databases, or unnecessary data abstractions unless explicitly requested.
- Keep implementation focused on page composition, content presentation, interactions, and performance.

## Architecture

- Use the `app/` directory and App Router conventions.
- Keep routes simple and focused on page assembly.
- Split UI into small presentational components instead of building large monolithic pages.
- Prefer route-local components when a section belongs to only one page.
- Move shared UI into `components/` only when reuse is real.
- Keep utilities in `lib/` small, pure, and frontend-focused.
- Avoid deep folder nesting.
- Store downloaded static assets in `public/` and reference them locally in the app.

Recommended structure:

- `app/` for routes, layouts, metadata, and route-local sections
- `components/` for shared UI blocks and primitives
- `lib/` for small helpers such as formatting, constants, and UI utilities
- `public/` for images, icons, illustrations, and other downloaded static assets

## UI Composition Rules

- Break every landing page into clear sections such as hero, social proof, features, testimonials, FAQ, CTA, and footer.
- Each meaningful section should be its own component when that improves readability.
- Keep components small and single-purpose.
- Prefer composition over large prop-heavy components.
- If a component becomes hard to scan, split it.
- Repeated UI patterns should become reusable components.
- Keep text content easy to edit and easy to find.

## Next.js Rules

- Use App Router patterns consistently.
- Default to static, simple pages unless interactivity is actually needed.
- Use Client Components only for real browser-side interaction.
- Keep `"use client"` boundaries as small as possible.
- Keep `layout.tsx` lean and avoid putting page-specific UI there.
- Define meaningful `metadata` for every public page.

## SEO Rules

- Every page must have a clear title and meta description.
- Use semantic HTML structure with proper headings.
- Keep one clear `h1` per page.
- Maintain logical heading order with `h2` and `h3` for sections.
- Use descriptive link text and button text.
- Add meaningful alt text for important images.
- Prefer clean, content-first markup instead of div-heavy structures when semantic elements fit.
- Build pages so important marketing content is present in the initial HTML.

## Asset Rules

- Download external assets into `public/` instead of leaving temporary remote URLs in the codebase.
- Never leave Figma CDN links or temporary image-hosting URLs in production code.
- If assets come from Figma or another design handoff, download them into `public/` first and relink the UI to local files.
- When implementing from Figma via MCP, do not rely only on the top-level selected frame or section.
- For Figma/MCP implementations, inspect the relevant child nodes block by block so colors, spacing, radius, shadows, typography, and layout are taken from each specific node.
- If MCP returns a sparse response for a parent frame or section, continue drilling into the nested nodes until the styles for each meaningful block are precise enough to reproduce the design faithfully.
- Use clear folders inside `public/` when needed, such as `public/images/`, `public/icons/`, or `public/brand/`.
- Reference local asset paths in components whenever possible.
- Keep asset naming clear and consistent.

## Styling Rules

- Use Tailwind utilities as the default styling approach.
- Keep styling close to the component.
- Prefer design tokens and CSS variables for colors, spacing, radius, shadows, and typography when values repeat.
- Avoid scattered hardcoded values across many files.
- Use consistent spacing and layout rhythm across sections.
- Prefer `max-w-*`, `mx-auto`, `px-*`, `py-*`, `gap-*`, grid, and flex for layout.
- Avoid long unreadable class strings; split markup or extract components when needed.
- Do not add custom CSS when Tailwind utilities already solve the problem cleanly.
- Use custom CSS only for global tokens, resets, or truly complex effects.

## Landing Page Design Rules

- Design should feel intentional, polished, and conversion-focused.
- Preserve strong visual hierarchy between headline, supporting copy, CTAs, and secondary content.
- Make CTA blocks prominent and easy to understand.
- Use spacing generously; do not let sections feel cramped.
- Keep line lengths readable and layouts balanced.
- Ensure mobile layouts feel designed, not just shrunken desktop versions.
- Avoid accidental dark mode or inconsistent color usage unless the page is intentionally designed that way.
- Reuse existing font variables and global tokens instead of inventing local font stacks.

## Motion Rules

- Use `motion` where it meaningfully improves UX and perceived quality.
- Prefer subtle reveal, hover, enter, and scroll-based animations for landing page sections and key UI elements.
- Motion should support hierarchy, focus, and feedback, not distract from content.
- Keep animations smooth, fast, and intentional.
- Avoid excessive motion, large chained animations, and decorative effects that hurt readability or performance.
- Respect accessibility and reduce-motion preferences when adding animation-heavy UI.
- Do not turn the whole page into a Client Component just to animate everything; keep motion boundaries small.

## Responsiveness Rules

- Build mobile-first or at least mobile-considerate from the start.
- Check desktop, tablet, and mobile layouts for every major UI change.
- Preserve content order and hierarchy across breakpoints.
- Avoid fragile absolute positioning unless it is clearly necessary.
- Make sure buttons, links, and form controls remain easy to tap on small screens.

## Accessibility Rules

- Use semantic HTML first.
- Keep all interactive elements keyboard accessible.
- Preserve visible focus states.
- Do not rely on color alone to communicate meaning.
- Use accessible labels for inputs and buttons.
- Ensure sufficient contrast for text and controls.

## Performance Rules

- Keep JavaScript light.
- Avoid unnecessary client-side state and effects.
- Prefer static content and simple interactions for landing pages.
- Optimize images and avoid oversized assets.
- Use motion selectively so animations do not harm loading, responsiveness, or scroll performance.
- Do not add dependencies for small UI problems that can be solved locally.

## TypeScript and React Rules

- Use strict typing and avoid `any`.
- Keep props explicit and readable.
- Build small React components with a single responsibility.
- Avoid unnecessary `useEffect`.
- Do not use `useMemo` or `useCallback` by default.
- Derive UI from props and local state instead of duplicating state.

## Code Style

- Use clear, descriptive names.
- Prefer early returns over deep nesting.
- Remove dead code, commented-out code, and debug logs.
- Keep imports clean and remove unused code.
- Comment sparingly and only when it explains why.

## What To Avoid

- Large page files with all UI in one component
- unnecessary `"use client"`
- backend-oriented abstractions
- server actions and mutation flows unless explicitly needed
- deeply nested folder structures
- hardcoded styles repeated across the codebase
- heavy dependencies for simple visual tasks
- weak SEO structure

## Definition Of Done

A change is complete when:

- the page is visually polished and responsive
- the UI is split into clear, maintainable components
- the code follows App Router structure cleanly
- metadata and heading structure support SEO
- accessibility basics are covered
- Tailwind usage remains readable
- TypeScript stays strict and clean
