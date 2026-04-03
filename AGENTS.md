# AGENTS.md

## Purpose

This file defines working rules for agents contributing to this repository.
The project uses:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4

The main goal is to keep the codebase simple, fast, accessible, maintainable, and production-ready.

## Core Principles

- Prefer clarity over cleverness.
- Prefer server-first architecture.
- Keep components small and focused.
- Use framework defaults before introducing custom abstractions.
- Avoid premature optimization and unnecessary indirection.
- Preserve consistency across naming, layout, and data flow.
- Every UI change should consider accessibility, responsive behavior, and loading states.

## Project Architecture

- Use the `app/` directory and App Router conventions as the default architecture.
- Prefer route-local code when it is used only by one route segment.
- Move shared logic into dedicated shared folders only after reuse becomes real.
- Keep a clear separation between UI, data fetching, and domain logic.
- Do not create deep folder nesting without a strong reason.
- Prefer colocating related files near the route or component that owns them.

Recommended structure as the app grows:

- `app/` for routes, layouts, templates, loading, error, and server actions when route-scoped
- `components/` for reusable UI components
- `lib/` for pure utilities, API clients, formatters, schema helpers, and shared server logic
- `styles/` only for truly global styles if they outgrow `app/globals.css`
- `types/` for shared types only when colocated types are no longer sufficient

## Next.js Best Practices

### Rendering Model

- Default to Server Components.
- Use Client Components only when browser APIs, local interactivity, lifecycle hooks, or client state are required.
- Do not add `"use client"` at high levels unless necessary; keep client boundaries as small as possible.
- Fetch data on the server whenever possible.
- Use streaming and route segment boundaries naturally instead of pushing everything to the client.
- Use `loading.tsx` and `error.tsx` for route-level UX where appropriate.
- Use `notFound()` for missing resources instead of custom fallback markup when the route is truly not found.

### Data Fetching

- Fetch data in Server Components, layouts, and server utilities by default.
- Keep fetch logic close to where data is used unless it is shared.
- Always handle failure states intentionally.
- Be explicit about caching and revalidation behavior when it matters.
- Avoid hidden fetches inside many nested components when a parent can load once and pass data down.
- Prefer typed transformation of remote data before rendering it.

### Server Actions and Mutations

- Use Server Actions for straightforward form-driven mutations when they improve simplicity.
- Validate all mutation input on the server.
- Keep Server Actions focused; move reusable business logic into `lib/`.
- Return predictable results for success and failure states.
- Revalidate only the paths or tags that are actually affected.

### Metadata and SEO

- Define meaningful `metadata` for every user-facing route.
- Use route-level metadata instead of hardcoding document concerns inside components.
- Ensure page titles and descriptions reflect actual content.
- Use semantic headings and landmark elements.

### Images, Fonts, and Assets

- Use `next/image` for content images unless there is a strong reason not to.
- Always provide descriptive `alt` text for meaningful images.
- Prefer `next/font` over manual font loading.
- Avoid large unoptimized images and oversized client bundles.

## React Best Practices

- Build small, composable components with single responsibility.
- Keep props explicit and well typed.
- Derive UI from props and state rather than duplicating sources of truth.
- Avoid unnecessary `useEffect`; if logic can run during render or on the server, do that instead.
- Do not use `useMemo` or `useCallback` by default. Add them only when there is measured need or clear referential stability requirements.
- Prefer controlled boundaries for client state and avoid lifting state higher than necessary.
- Use forms and native HTML behavior before adding heavy client-side orchestration.
- Keep event handlers simple; move complex logic into helper functions.

## TypeScript Rules

- Use strict typing and avoid `any`.
- Prefer explicit domain types for important data structures.
- Use inference where it keeps code readable, but add annotations at public boundaries.
- Validate external data instead of trusting API responses blindly.
- Keep utility types understandable; avoid type gymnastics that reduce maintainability.
- Export types only when they are reused.
- Prefer `Readonly` data patterns for props and immutable inputs where practical.

## Tailwind CSS v4 Rules

- Use Tailwind utilities as the primary styling approach.
- Keep styling close to the component unless it is truly global.
- Prefer design tokens through CSS variables and Tailwind theme variables over hardcoded one-off values.
- Reuse utility patterns by extracting components, not by creating long unreadable class strings everywhere.
- Avoid overly large `className` blocks; split markup or extract small presentational components when needed.
- Use semantic layout primitives consistently: stack, cluster, grid, sidebar, section.
- Favor responsive design from the start.
- Preserve sufficient color contrast and visible focus states.
- Do not introduce custom CSS when Tailwind utilities already solve the problem cleanly.
- Use custom CSS only for:
  - global tokens
  - resets
  - complex visual effects not practical in utilities
  - third-party styling overrides

### Styling Conventions

- Prefer spacing scales over arbitrary pixel values.
- Prefer `max-w-*`, `mx-auto`, and consistent section paddings for page layout.
- Prefer `gap-*` over ad hoc margins for repeated layout spacing.
- Avoid magic numbers unless they are justified by a specific design requirement.
- Keep dark mode behavior intentional; do not rely on accidental defaults.
- Use the font variables already configured in `app/layout.tsx` and `app/globals.css`.
- Do not reintroduce default system font stacks in components unless specifically required.

## Accessibility Rules

- Use semantic HTML first.
- Every interactive element must be keyboard accessible.
- Never remove focus indication without replacing it with an accessible alternative.
- Provide accessible names for buttons, inputs, and landmark regions.
- Use labels for form controls.
- Use correct heading order.
- Communicate validation errors clearly.
- Do not rely on color alone to convey meaning.
- Ensure hover-only interactions also work via keyboard and touch where relevant.

## Performance Rules

- Keep Client Components minimal.
- Avoid sending unnecessary JavaScript to the browser.
- Lazy load heavy client-only UI when it improves user experience.
- Avoid waterfall data fetching patterns when parent-level loading can prevent them.
- Memoization is not a default optimization strategy; fix architecture first.
- Watch bundle size when adding dependencies.
- Prefer native platform features and framework capabilities over additional libraries.

## State Management

- Prefer local state for local concerns.
- Prefer URL state for filters, sorting, pagination, and shareable UI state.
- Prefer server state fetched on the server rather than duplicating it in client stores.
- Introduce global client state only when multiple distant client components truly need shared mutable state.
- Do not add a state library unless the built-in React and Next.js model becomes insufficient.

## Forms and Validation

- Prefer native forms with progressive enhancement.
- Validate on the server for every mutation.
- Add client-side validation only to improve UX, not as the source of truth.
- Surface pending, success, and error states clearly.
- Keep form submission flows resilient to refresh and navigation.

## Error Handling

- Handle expected failures explicitly.
- Do not swallow errors silently.
- Show user-friendly fallback messages in the UI.
- Keep internal error details out of user-facing messages.
- Use route-level error boundaries when they improve resilience.

## API and External Integrations

- Centralize external API access patterns in `lib/` when reused.
- Keep secrets on the server only.
- Never expose server-only environment variables to the client.
- Validate and normalize third-party data before rendering.
- Add timeouts, retries, or fallback behavior where external reliability is uncertain.

## Code Style

- Use descriptive names.
- Prefer early returns to reduce nesting.
- Avoid large files when a clear split improves readability.
- Keep functions focused and predictable.
- Comment sparingly; explain why, not what.
- Do not leave dead code, commented-out blocks, or debug logs in committed work.
- Keep imports ordered and remove unused code.

## Testing Expectations

- Cover critical business logic and risky UI behavior with tests when test infrastructure exists.
- Prefer testing user-visible behavior over implementation details.
- Add regression coverage for bugs that are fixed.
- If test infrastructure is missing, keep code testable and avoid tightly coupling logic to UI markup.

## Dependency Rules

- Add new dependencies only with clear justification.
- Prefer mature, well-maintained libraries with focused scope.
- Avoid dependencies for problems easily solved with platform APIs or small local utilities.
- Before adding a package, consider bundle impact, maintenance cost, and whether Next.js already solves the problem.

## Rules For Editing This Repository

- Preserve the App Router approach.
- Preserve TypeScript strictness.
- Preserve ESLint compliance.
- Respect the existing font variable setup with `Geist` and `Geist_Mono`.
- Respect Tailwind v4 patterns used in `app/globals.css`.
- When adding global design tokens, extend the existing CSS variable approach instead of scattering raw values across components.
- Keep `layout.tsx` lean and avoid moving page-specific concerns into the root layout.

## Preferred Implementation Decisions

- For page composition, prefer server-rendered route components that delegate UI to small presentational pieces.
- For repeated UI patterns, extract a reusable component only after the second or third real use.
- For utility logic, prefer pure functions in `lib/`.
- For class composition, keep it simple; if a helper is introduced, it must reduce repetition meaningfully.
- For async work, keep the boundary obvious and error handling explicit.

## What To Avoid

- Large monolithic Client Components
- unnecessary `"use client"`
- unnecessary global state
- deeply nested prop drilling when composition solves it
- styling with large custom CSS files for component-level concerns
- hardcoded colors, spacing, and typography values scattered across files
- weakly typed API responses
- hidden side effects in components
- adding libraries before using built-in Next.js and React capabilities
- abstracting too early

## Definition Of Done

A change is considered complete when:

- the code follows server-first Next.js architecture where appropriate
- client boundaries are minimal and justified
- Tailwind classes remain readable and maintainable
- accessibility basics are covered
- loading, empty, and error states are considered where relevant
- types are accurate at module boundaries
- lint passes or any failure is explicitly explained
- the implementation fits the existing structure of the repository

